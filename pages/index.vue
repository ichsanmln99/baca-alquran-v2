<template>
  <div class="flex flex-col min-h-screen">
    <NavbarHome v-model:search="search" />
    <ChapterItemLastestRead class="m-4 mb-0" v-if="!search" />
    <div class="p-4 grid md:grid-cols-2 grid-cols-1 gap-3">
      <template v-for="chapter in chapterList" :key="chapter.id">
        <ChapterItem
          :id="chapter.id"
          :name="chapter.name_simple"
          :arabic="chapter.name_arabic"
          :translate="chapter.translated_name.name"
          :versesCount="chapter.verses_count"
        />
      </template>
    </div>
    <template v-if="!chapterList.length && search">
      <div
        class="flex flex-col justify-center text-center p-10 text-base-content/40"
      >
        <div class="p-5">
          <Icon size="48" name="iconamoon:search"></Icon>
        </div>
        <div>Surat Tidak ditemukan</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const { data: chapters } = useChapters();

useSeoMeta({
  title: `Baca Al-Quran dengan Audio, Terjemahan, dan Tafsir Indonesia`,
  description: `Baca Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia, Tanda Waqaf, Audio Bacaan, dan Tafsir perayat, Lengkap! 📖✨ Baca Al-Quran beserta artinya lebih mudah di baca-alquran.com`,
  keywords: `al-quran, quran web, quran online, website quran, baca quran, quran digital, quran indonesia, quran terjemahan, quran tafsir, quran audio, quran mp3, quran indo`,
  ogTitle: `Baca Al-Quran dengan Audio, Terjemahan, dan Tafsir Indonesia`,
  ogDescription: `Baca Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia, Tanda Waqaf, Audio Bacaan, dan Tafsir perayat, Lengkap! 📖✨ Baca Al-Quran beserta artinya lebih mudah di baca-alquran.com`,
  ogUrl: `baca-alquran.com`,
  twitterTitle: `Baca Al-Quran dengan Audio, Terjemahan, dan Tafsir Indonesia`,
  twitterDescription: `Baca Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia, Tanda Waqaf, Audio Bacaan, dan Tafsir perayat, Lengkap! 📖✨ Baca Al-Quran beserta artinya lebih mudah di baca-alquran.com`,
});

const search = ref("");

const chapterList = computed(() => {
  const splitSearchText = search.value.toLocaleLowerCase().split(" ");

  return chapters.value.filter((chapter) =>
    splitSearchText.every((text) =>
      chapter.name_simple.toLocaleLowerCase().includes(text)
    )
  );
});
</script>
