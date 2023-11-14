// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
            "Baca dan dengarkan audio Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia secara Online. Gratis tanpa iklan.",
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
            "Baca dan dengarkan audio Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia secara Online. Gratis tanpa iklan.",
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
            "Baca dan dengarkan audio Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia secara Online. Gratis tanpa iklan.",
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
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  modules: [
    "@vueuse/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
  ],
});
