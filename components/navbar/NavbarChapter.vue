<template>
  <div
    class="navbar bg-base-100 p-4 border-b border-base-200 sticky top-0 z-10 navbar-scroll shadow-xl shadow-base-200/30 gap-4"
  >
    <div class="flex-none">
      <NuxtLink
        to="/"
        aria-label="Kembali ke halaman utama"
        class="btn btn-circle btn-ghost border border-base-content/10"
      >
        <Icon size="24" name="iconamoon:arrow-left-2-bold" />
      </NuxtLink>
    </div>
    <div class="flex-1">
      <div v-if="chapterStore.activeChapter">
        <h1 class="font-semibold">
          Surat {{ chapterStore.activeChapter.name_simple }}
        </h1>
        <p class="text-sm text-base-content/40 capitalize">
          {{ `${chapterStore.activeChapter.translated_name.name}` }} •
          {{ chapterStore.activeChapter.verses_count }} Ayat •
          {{ chapterStore.activeChapter.revelation_place }}
        </p>
      </div>
    </div>
    <div class="flex-none">
      <ConfigDrawerButton />
    </div>
  </div>
</template>

<script setup>
import { useChapterStore } from "~/store/chapter";

const chapterStore = useChapterStore();
</script>
