import { afterEach, describe, expect, it, vi } from "vitest";
import { defineComponent, nextTick } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import { createMemoryHistory, createRouter, RouterView } from "vue-router";
import ImageGallery from "../views/ImageGalery.vue";
import BlogPosts from "../views/BlogPostsView.vue";
import SideBar from "../components/SideBar.vue";
import { useActiveSection } from "../composables/useActiveSection";
import images from "../data/ImagesData.json";

let wrapper;
afterEach(() => {
  wrapper?.unmount();
  wrapper = undefined;
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
});

async function mountRoute(component, path, initial) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path, component }],
  });
  await router.push(initial);
  await router.isReady();
  wrapper = mount(RouterView, { global: { plugins: [router] } });
  return router;
}

describe("route content", () => {
  it("updates gallery images when the same view receives another project", async () => {
    const router = await mountRoute(
      ImageGallery,
      "/galery/:id",
      "/galery/disco",
    );
    expect(wrapper.findAll("img").map((img) => img.attributes("src"))).toEqual(
      images.disco,
    );
    await router.push("/galery/quotes");
    await flushPromises();
    expect(wrapper.findAll("img").map((img) => img.attributes("src"))).toEqual(
      images.quotes,
    );
    await router.push("/galery/toString");
    await flushPromises();
    expect(wrapper.findAll("img")).toHaveLength(0);
    expect(wrapper.text()).toContain("No project images found.");
  });

  it("updates blog content and handles unknown post names", async () => {
    const router = await mountRoute(
      BlogPosts,
      "/blog-post/:name",
      "/blog-post/auto",
    );
    expect(wrapper.text()).toContain("Coming Soon...");
    await router.push("/blog-post/portfolio");
    await flushPromises();
    expect(wrapper.findComponent({ name: "PortfolioBlogPost" }).exists()).toBe(
      true,
    );
    expect(wrapper.text()).not.toContain("Coming Soon...");
    await router.push("/blog-post/toString");
    await flushPromises();
    expect(wrapper.text()).toContain("Blog post not found.");
  });
});

it("toggles the sidebar through reactive accessible state", async () => {
  wrapper = mount(SideBar);
  const button = wrapper.get("button");
  expect(button.attributes("aria-expanded")).toBe("false");
  expect(wrapper.get("aside").classes()).toContain("hidden");
  await button.trigger("click");
  expect(button.attributes("aria-expanded")).toBe("true");
  expect(wrapper.get("aside").classes()).not.toContain("hidden");
  await wrapper.get("aside").trigger("keydown", { key: "Escape" });
  expect(button.attributes("aria-expanded")).toBe("false");
});

it("observes only navigation sections and disconnects on unmount", async () => {
  let callback;
  const observe = vi.fn();
  const disconnect = vi.fn();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(handler) {
        callback = handler;
      }
      observe = observe;
      disconnect = disconnect;
    },
  );
  document.body.innerHTML =
    '<section id="home"></section><section id="project"></section><section id="unrelated"></section>';
  wrapper = mount(
    defineComponent({
      setup() {
        return { active: useActiveSection(["home", "project"]) };
      },
      template: "<p>{{ active }}</p>",
    }),
  );
  expect(observe).toHaveBeenCalledTimes(2);
  callback([
    {
      target: document.getElementById("project"),
      isIntersecting: true,
      intersectionRatio: 0.5,
    },
  ]);
  await nextTick();
  expect(wrapper.text()).toBe("project");
  wrapper.unmount();
  wrapper = undefined;
  expect(disconnect).toHaveBeenCalledOnce();
});
