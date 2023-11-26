import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.preventLoadScrollTop) {
      return false;
    } else {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {
          top: 0,
        };
      }
    }
  },
};
