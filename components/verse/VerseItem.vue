<template>
  <div
    ref="verseRef"
    class="md:p-4 p-2 flex flex-col gap-4 rounded-2xl scroll-mt-24 hover:bg-base-200/25 group"
    :class="{
      'bg-base-200/50 hover:bg-base-200/50 dark:bg-base-200 dark:hover:bg-base-200':
        isVerseActive,
    }"
  >
    <div class="flex justify-between">
      <div class="flex gap-2">
        <div
          class="bg-base-300 mask mask-circle w-8 h-8 text-sm flex items-center justify-center"
        >
          <span>{{ number }}</span>
        </div>
        <button @click="openTafsirModal()" class="btn btn-circle btn-sm">
          <Icon size="16" name="mi:book"></Icon>
        </button>
      </div>
      <VerseAudioButton :verseKey="verseKey" />
    </div>

    <div class="text-right">
      <div class="font-arabic text-4xl my-6 leading-loose" dir="rtl">
        <div
          class="inline-block px-1"
          :class="{
            'text-primary': activeWordPosition === word.position,
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
import { useModalStore } from "~/store/modal";

const props = defineProps<{
  id: number;
  verseKey: string;
  number: number;
  translate: string;
  arabic?: string;
  arabicWords: IVerseWords[];
}>();

const IDLE_TIME = 3 * 1000;
const { idle } = useIdle(IDLE_TIME); // 5 min
const chapterStore = useChapterStore();
const modalStore = useModalStore();
const verseRef = ref();
const route = useRoute();
const router = useRouter();

watch(
  () => chapterStore.activeTimestamp?.verse_key,
  () => {
    nextTick(() => {
      scrollToVerseRef();
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

function openTafsirModal() {
  modalStore.registerModal("VerseTafsirModal");

  modalStore.setModalData("VerseTafsirModal", {
    id: props.id,
    number: props.number,
    arabic: props.arabic,
    translate: props.translate,
  });

  router.push({
    path: `/chapter/${route.params.chapterId}/tafsir/${props.id}`,
  });
}

function scrollToVerseRef() {
  if (idle.value && isVerseActive.value) {
    verseRef.value.scrollIntoView({
      behavior: "smooth",
    });
  }
}
</script>
