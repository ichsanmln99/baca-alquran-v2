import chapterJson from "@/assets/data/chapters.json";
import type { IChapter } from "~/types/chapters.interface";

export const useChapters = () => {
  const data = ref<IChapter[]>(chapterJson);

  function findChapter(chapterId: number) {
    return data.value.find((chapter) => chapter.id === chapterId);
  }

  function getChapterNavigation(currentId: number) {
    const currentChapter = findChapter(currentId);
    const previousChapter = findChapter(currentId - 1);
    const nextChapter = findChapter(currentId + 1);

    return {
      current: currentChapter,
      previous: previousChapter,
      next: nextChapter,
    };
  }

  return {
    data,
    findChapter,
    getChapterNavigation,
  };
};
