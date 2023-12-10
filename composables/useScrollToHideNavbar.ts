export const useScrollToHideNavbar = ({
  scrollOffset = 80,
}: {
  scrollOffset?: number;
} = {}) => {
  const isNavbarHidden = ref(false);
  const lastScrollPosition = ref(0);
  const { y } = useWindowScroll();

  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });

  function onScroll() {
    if (y.value < 0) {
      return;
    }

    if (Math.abs(y.value - lastScrollPosition.value) < scrollOffset) {
      return;
    }

    isNavbarHidden.value = y.value > lastScrollPosition.value;
    lastScrollPosition.value = y.value;
  }

  return {
    isNavbarHidden,
  };
};
