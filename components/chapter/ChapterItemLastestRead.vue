<template>
  <div v-if="latestSurahRead" class="border-b border-base-200 pb-3">
    <div class="text-sm mb-2 text-base-content/40">Terakhir dibaca</div>
    <ChapterItem
      :id="latestSurahRead.id"
      :name="latestSurahRead.name_simple"
      :arabic="latestSurahRead.name_arabic"
      :translate="latestSurahRead.translated_name.name"
      :versesCount="latestSurahRead.verses_count"
    />
  </div>
</template>

<script setup lang="ts">
import { type IChapter } from "@/types/chapters.interface";
const latestSurahRead = ref<IChapter>();

onMounted(() => {
  if (typeof localStorage["latest-surah-read"] !== "undefined") {
    latestSurahRead.value = JSON.parse(localStorage["latest-surah-read"]);
  }
});
</script>
