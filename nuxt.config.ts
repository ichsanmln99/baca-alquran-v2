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
      title: "baca-alquran.com — Baca Al-Quran Bahasa Indonesia",
      meta: [
        { name: "charset", content: "UTF-8" },
        {
          name: "description",
          content:
            "Baca dan dengarkan Al-Quran online di baca-alquran.com, aplikasi Al-Quran simpel untuk mendapatkan makna setiap ayat. Dengan terjemahan Bahasa Indonesia, nikmati kenyamanan membaca Al-Quran dari perangkat mobile atau desktop. Dapatkan pengalaman baca dan dengarkan audio Al-Quran 30 Juz secara online, tanpa iklan. Al-Quran Digital Online 30 Juz, dengan tulisan Arab, terjemahan Bahasa Indonesia, serta tafsir ayat, menjadi panduan spiritual Anda",
        },
        {
          name: "keywords",
          content:
            "Baca Al-Quran Online, Terjemahan Al-Quran Bahasa Indonesia, Al-Quran 30 Juz, Bacaan Al-Quran Terbaik, Kajian Al-Quran Online, Panduan Belajar Al-Quran, Baca Al-Quran Gratis, Tafsir Al-Quran Online, Bimbingan Al-Quran Digital, Pengajaran Al-Quran Online, Quran Recitation Online, Islamic Learning Platform, Quranic Interpretation, Quranic Guidance, Free Quran Reading, Quranic Studies, Al-Quran Lessons, Learn Quranic Arabic, Quranic Wisdom, Quranic Insights.",
        },
        { name: "theme-color", content: "#FBF7F5" },
        {
          name: "title",
          content: "baca-alquran.com — Baca Al-Quran Bahasa Indonesia",
        },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
        },
        {
          property: "og:description",
          content:
            "Baca dan dengarkan Al-Quran online di baca-alquran.com, aplikasi Al-Quran simpel untuk mendapatkan makna setiap ayat. Dengan terjemahan Bahasa Indonesia, nikmati kenyamanan membaca Al-Quran dari perangkat mobile atau desktop. Dapatkan pengalaman baca dan dengarkan audio Al-Quran 30 Juz secara online, tanpa iklan. Al-Quran Digital Online 30 Juz, dengan tulisan Arab, terjemahan Bahasa Indonesia, serta tafsir ayat, menjadi panduan spiritual Anda",
        },
        { property: "og:image", content: "/social-banner.jpg" },
        {
          property: "og:title",
          content: "baca-alquran.com — Baca Al-Quran Bahasa Indonesia",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "baca-alquran.com" },
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:description",
          content:
            "Baca dan dengarkan Al-Quran online di baca-alquran.com, aplikasi Al-Quran simpel untuk mendapatkan makna setiap ayat. Dengan terjemahan Bahasa Indonesia, nikmati kenyamanan membaca Al-Quran dari perangkat mobile atau desktop. Dapatkan pengalaman baca dan dengarkan audio Al-Quran 30 Juz secara online, tanpa iklan. Al-Quran Digital Online 30 Juz, dengan tulisan Arab, terjemahan Bahasa Indonesia, serta tafsir ayat, menjadi panduan spiritual Anda",
        },
        { property: "twitter:image", content: "/social-banner.jpg" },
        {
          property: "twitter:title",
          content: "baca-alquran.com — Baca Al-Quran Bahasa Indonesia",
        },
        { property: "twitter:url", content: "baca-alquran.com" },
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
    includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    manifest: {
      name: "baca-alquran.com",
      short_name: "Baca Al-Quran",
      description: "Baca Al-Quran Berbahasa Indonesia",
      theme_color: "#FBF7F5",
      display: "standalone",
      icons: [
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icons/icon-384x384.png",
          sizes: "384x384",
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
