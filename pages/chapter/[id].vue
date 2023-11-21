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
  </div>
</template>

<script setup lang="ts">
import type { IVerse } from "@/types/verses.interface";
import InfiniteLoading from "v3-infinite-loading";
import { useChapterStore } from "~/store/chapter";
import { onKeyStroke } from "@vueuse/core";

const { $api } = useNuxtApp();
const route = useRoute();
const id = parseInt(route.params.id as string);
const verses = ref<IVerse[]>([]);
const versesLoad = ref(false);
const lastPage = ref(1);
const chapterStore = useChapterStore();
const { findChapter } = useChapters();

const chapter = computed(() => findChapter(id));

useSeoMeta({
  title: `Surah ${chapter.value?.name_simple} - Baca Al-Quran Bahasa Indonesia`,
  description:
    "Baca dan dengarkan audio Al-Quran 30 Juz dengan Terjemahan Bahasa Indonesia secara Online. Gratis tanpa iklan.",
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
  if (chapterStore.isPlayed) {
    chapterStore.pauseAudio();
  } else if (chapterStore.isPaused) {
    chapterStore.playAudio();
  }
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
</script>
