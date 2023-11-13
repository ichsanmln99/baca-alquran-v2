<template>
  <div
    ref="verseRef"
    class="md:p-4 p-2 flex flex-col gap-4 rounded-2xl scroll-mt-24 hover:bg-base-200/25"
    :class="{ 'bg-base-200/50 hover:hover:bg-base-200/50': isVerseActive }"
  >
    <div class="flex justify-between">
      <div
        class="bg-base-300 mask mask-circle w-8 h-8 text-sm flex items-center justify-center"
      >
        <span>{{ number }}</span>
      </div>
      <VerseAudioButton :verseKey="verseKey" />
    </div>

    <div class="text-right">
      <div class="font-arabic text-4xl my-6 leading-loose" dir="rtl">
        <div
          class="inline-block px-1"
          :class="{
            'text-primary-focus': activeWordPosition === word.position,
          }"
          :key="index"
          v-for="(word, index) in arabicWords"
        >
          {{ word.text_imlaei }}
        </div>
      </div>
    </div>

    <p class="text-sm opacity-80" v-html="translate"></p>
  </div>
</template>

<script setup lang="ts">
import { useChapterStore } from "~/store/chapter";
import type { IVerseWords } from "@/types/verses.interface";
import { useIdle } from "@vueuse/core";

const props = defineProps<{
  verseKey: string;
  number: number;
  translate: string;
  arabicWords: IVerseWords[];
}>();

const IDLE_TIME = 3 * 1000;
const { idle } = useIdle(IDLE_TIME); // 5 min
const chapterStore = useChapterStore();
const verseRef = ref();

watch(
  () => chapterStore.activeTimestamp?.verse_key,
  () => {
    nextTick(() => {
      if (idle.value && isVerseActive.value) {
        verseRef.value.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
);

const isVerseActive = computed(
  () => chapterStore.activeTimestamp?.verse_key === props.verseKey
);

const activeWordPosition = computed(() => {
  if (chapterStore.activeTimestamp?.verse_key === props.verseKey) {
    const activeSegment = chapterStore.activeTimestamp.segments.find(
      (segment) => {
        if (chapterStore.activeAudioCurrentTime)
          return (
            segment[1] <= chapterStore.activeAudioCurrentTime &&
            segment[2] >= chapterStore.activeAudioCurrentTime
          );
      }
    );

    return activeSegment?.length ? activeSegment[0] : 0;
  }

  return null;
});
</script>
