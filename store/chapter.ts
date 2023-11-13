import { defineStore } from "pinia";
import type { IChapter } from "@/types/chapters.interface";
import type { IAudioFile } from "@/types/chapter_recitations.interface";

export const useChapterStore = defineStore("chapter", () => {
  const activeChapter = ref<IChapter | null>(null);
  const activeChapterRecitations = ref<IAudioFile | null>(null);
  const activeAudioCurrentTime = ref<number | null>(0);
  const activeAudio = ref<HTMLAudioElement | null>(null);

  const isPaused = ref(false);
  const IsStoped = ref(false);

  const isPlayed = computed(() => !isPaused.value && activeAudio.value);

  const activeTimestamp = computed(() => {
    return activeChapterRecitations.value?.timestamps.find(
      (timestamp) =>
        isPlayed &&
        typeof activeAudioCurrentTime.value === "number" &&
        timestamp.timestamp_from <= activeAudioCurrentTime.value &&
        timestamp.timestamp_to > activeAudioCurrentTime.value
    );
  });

  function setActiveChapter(chapter: IChapter) {
    activeChapter.value = chapter;
  }

  function setActiveChapterRecitations(chapterRecitations: IAudioFile) {
    activeChapterRecitations.value = chapterRecitations;
  }

  function initiateAudio() {
    if (activeChapterRecitations.value) {
      activeAudio.value = new Audio(activeChapterRecitations.value.audio_url);
      initiateAudioEventListener();
    }
  }

  function initiateAudioEventListener() {
    if (activeAudio.value) {
      activeAudio.value.addEventListener("ended", stopAudio);
      activeAudio.value.addEventListener("timeupdate", timeUpdateHandler);
    }
  }

  function removeAudioEventListener() {
    if (activeAudio.value) {
      activeAudio.value.removeEventListener("ended", stopAudio);
      activeAudio.value.removeEventListener("timeupdate", timeUpdateHandler);
    }
  }

  function playAudio() {
    if (activeAudio.value) {
      activeAudio.value.play();
      IsStoped.value = false;
      isPaused.value = false;
    }
  }

  function pauseAudio() {
    if (activeAudio.value) {
      activeAudio.value.pause();
      isPaused.value = true;
    }
  }

  function stopAudio() {
    if (activeAudio.value) {
      activeAudio.value.pause();
      removeAudioEventListener();

      isPaused.value = false;
      IsStoped.value = true;
      activeAudioCurrentTime.value = null;
    }
  }

  function setAudioCurrentTime(timestamp: number) {
    if (activeAudio.value) {
      activeAudio.value.currentTime = timestamp / 1000;
      activeAudioCurrentTime.value = timestamp;
    }
  }

  function resetState() {
    activeChapter.value = null;
    activeChapterRecitations.value = null;
    activeAudio.value = null;
    activeAudioCurrentTime.value = null;
    isPaused.value = false;
    IsStoped.value = false;
  }

  function getVerseTimestamp(verseKey: string) {
    return activeChapterRecitations.value?.timestamps.find(
      (timestamp) => timestamp.verse_key === verseKey
    );
  }

  const timeUpdateHandler = () => {
    if (activeAudio.value) {
      const currentTimeMs = activeAudio.value.currentTime * 1000;
      activeAudioCurrentTime.value = currentTimeMs;
    }
  };

  return {
    activeChapter,
    activeAudio,
    activeTimestamp,
    activeChapterRecitations,
    activeAudioCurrentTime,
    setActiveChapter,
    setActiveChapterRecitations,
    setAudioCurrentTime,
    getVerseTimestamp,
    isPaused,
    isPlayed,
    IsStoped,
    initiateAudio,
    initiateAudioEventListener,
    playAudio,
    stopAudio,
    pauseAudio,
    resetState,
  };
});
