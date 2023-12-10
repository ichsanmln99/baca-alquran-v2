<template>
  <div>
    <NavbarChapter />

    <div class="flex flex-col gap-4 md:p-4 p-2">
      <ChapterNavigation v-if="chapter" :id="chapter.id"></ChapterNavigation>
      <div
        v-if="chapter?.bismillah_pre"
        class="font-arabic text-center text-2xl p-4"
      >
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>

      <div v-if="!versesLoad">
        <VerseItemSkeleton />
      </div>
      <template v-for="(verse, index) in verses" :key="index">
        <VerseItem
          :id="verse.id"
          :verseKey="verse.verse_key"
          :number="verse.verse_number"
          :arabicWords="verse.words"
          :arabic="verse.text_imlaei"
          :translate="verse.translations[0].text"
        ></VerseItem>
      </template>

      <InfiniteLoading @infinite="loadVerses" :distance="50">
        <template #complete>
          <ChapterNavigation
            v-if="chapter"
            :id="chapter.id"
          ></ChapterNavigation>
        </template>

        <template #spinner>
          <VerseItemSkeleton />
        </template>

        <template #error>
          <span></span>
        </template>
      </InfiniteLoading>
    </div>

    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
import type { IVerse } from "@/types/verses.interface";
import InfiniteLoading from "v3-infinite-loading";
import { useChapterStore } from "~/store/chapter";
import { onKeyStroke } from "@vueuse/core";

const { $api } = useNuxtApp();
const route = useRoute();
const id = parseInt(route.params.chapterId as string);
const verses = ref<IVerse[]>([]);
const versesLoad = ref(false);
const lastPage = ref(1);
const chapterStore = useChapterStore();

const { findChapter } = useChapters();

const chapter = computed(() => findChapter(id));
const config = useRuntimeConfig();

useSeoMeta({
  title: `Surah ${chapter.value?.name_simple} - Surah ke ${chapter.value?.id}`,
  description: `Baca Surah ${chapter.value?.name_simple} (${chapter.value?.translated_name.name}) surah ke-${chapter.value?.id} lengkap dengan, audio, terjemahan dan tafsirnya. Baca Al-Quran beserta artinya lebih mudah di baca-alquran.com`,
  keywords: `surah ${chapter.value?.name_simple}, surah ke ${chapter.value?.id}, surah ${chapter.value?.name_simple} lengkap, surah ${chapter.value?.name_simple} terjemahan, surah ${chapter.value?.name_simple} tafsir, surah ${chapter.value?.name_simple} audio, surah ${chapter.value?.name_simple} arab, surah ${chapter.value?.name_simple} latin, surah ${chapter.value?.name_simple} dan terjemahan, surah ${chapter.value?.name_simple} dan tafsir, surah ${chapter.value?.name_simple} dan audio, surah ${chapter.value?.name_simple} dan arab, surah ${chapter.value?.name_simple} dan latin`,
  ogTitle: `Surah ${chapter.value?.name_simple} - Surah ke ${chapter.value?.id}`,
  ogDescription: `Baca Surah ${chapter.value?.name_simple} (${chapter.value?.translated_name.name}) surah ke-${chapter.value?.id} lengkap dengan, audio, terjemahan dan tafsirnya. Baca Al-Quran beserta artinya lebih mudah di baca-alquran.com`,
  ogUrl: `${config.public.PUBLIC_SITE_URL}/chapter/${id}`,
  twitterTitle: `Surah ${chapter.value?.name_simple} - Surah ke ${chapter.value?.id}`,
  twitterDescription: `Baca Surah ${chapter.value?.name_simple} (${chapter.value?.translated_name.name}) surah ke-${chapter.value?.id} lengkap dengan, audio, terjemahan dan tafsirnya. Baca Al-Quran beserta artinya lebih mudah di baca-alquran.com`,
});

useHead({
  link: [
    {
      rel: "canonical",
      href: `${config.public.PUBLIC_SITE_URL}/chapter/${id}`,
    },
  ],
});

onMounted(() => {
  if (chapter.value) chapterStore.setActiveChapter(chapter.value);

  storeLatestSurahRead();
});

onBeforeUnmount(() => {
  chapterStore.stopAudio();
  chapterStore.resetState();
});

onKeyStroke(" ", (e) => {
  e.preventDefault();

  togglePause();
});

function fetchVerses(page: number = 1) {
  return $api.verses.getByChapterNumber(id, {
    page: page,
  });
}

async function loadVerses($state: {
  loaded: () => void;
  complete: () => void;
  error: () => void;
}) {
  if (chapter.value && chapter.value.verses_count > verses.value.length) {
    const verseData = await fetchVerses(lastPage.value);
    verses.value = [...verses.value, ...verseData.verses];

    lastPage.value++;
    versesLoad.value = true;
    $state.loaded();
  } else {
    $state.complete();
  }
}

function storeLatestSurahRead() {
  localStorage.setItem("latest-surah-read", JSON.stringify(chapter.value));
}

function togglePause() {
  if (chapterStore.isPlayed) {
    chapterStore.pauseAudio();
  } else if (chapterStore.isPaused) {
    chapterStore.playAudio();
  }
}
</script>
