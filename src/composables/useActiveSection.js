import { onMounted, onUnmounted, ref } from "vue";
export function useActiveSection(sectionIds) {
  const activeSection = ref(sectionIds[0]);
  let observer;
  onMounted(() => {
    if (!("IntersectionObserver" in window)) return;
    const visible = new Map();
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        const current = [...visible].sort((a, b) => b[1] - a[1])[0];
        if (current) activeSection.value = current[0];
      },
      { rootMargin: "-10% 0px -30% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
  });
  onUnmounted(() => observer?.disconnect());
  return activeSection;
}
