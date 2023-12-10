// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  sitemap: {
    urls: () => {
      const urls: string[] = ["/"];

      for (let index = 0; index < 114; index++) {
        urls.push(`/chapter/${index + 1}`);
      }

      return urls;
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Baca Al-Quran dengan Audio, Terjemahan, dan Tafsir Indonesia",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        // Global
        { name: "charset", content: "utf-8" },
        { name: "theme-color", content: "#efeae6" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        // Facebook
        { property: "og:image", content: "/social-banner.jpg" },
        { property: "og:type", content: "website" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "/social-banner.jpg" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-152x152.png",
          sizes: "152x152",
        },
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      QURAN_COM_API_BASE_URL: process.env.QURAN_COM_API_BASE_URL,
      KEMENAG_API_BASE_URL: process.env.KEMENAG_API_BASE_URL,
      PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  modules: [
    "@vueuse/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    manifest: {
      start_url: "/",
      name: "baca-alquran.com",
      short_name: "Baca Al-Quran",
      description: "Baca Al-Quran Berbahasa Indonesia",
      theme_color: "#efeae6",
      display: "standalone",
      icons: [
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
      ],
    },
  },
});
