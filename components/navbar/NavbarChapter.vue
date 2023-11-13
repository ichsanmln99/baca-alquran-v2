<template>
  <div
    class="navbar bg-base-100 p-4 border-b sticky top-0 z-10 navbar-scroll shadow-xl shadow-base-200/30"
  >
    <div class="gap-4">
      <div class="flex-none">
        <NuxtLink
          to="/"
          class="btn btn-circle btn-ghost border border-base-300"
        >
          <Icon size="24" name="iconamoon:arrow-left-2-bold" />
        </NuxtLink>
      </div>
      <div class="flex-1">
        <template v-if="chapterStore.activeChapter">
          <h1 class="font-semibold">
            Surat {{ chapterStore.activeChapter.name_simple }}
          </h1>
          <p class="text-sm opacity-40 capitalize">
            {{ `${chapterStore.activeChapter.translated_name.name}` }} •
            {{ chapterStore.activeChapter.verses_count }} Ayat •
            {{ chapterStore.activeChapter.revelation_place }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChapterStore } from "~/store/chapter";

const chapterStore = useChapterStore();
</script>
