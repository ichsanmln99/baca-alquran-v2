import { defineNuxtPlugin } from "nuxt/app";
import { type FetchOptions, $fetch } from "ofetch";
import ChaptersModule from "~/repository/modules/chapters/chapters";
import VersesModule from "~/repository/modules/verses/verses";
import TafsirsModule from "~/repository/modules/tafsirs/tafsirs";
import ChapterRecitationsModule from "~/repository/modules/chapter_recitations/chapter_recitations";

interface IApiInstance {
  chapters: ChaptersModule;
  verses: VersesModule;
  chapterRecitations: ChapterRecitationsModule;
  tafsirs: TafsirsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const quranApiFetcher = $fetch.create({
    baseURL: nuxtApp.$config.public.QURAN_COM_API_BASE_URL,
  });
  const kemenagApiFetcher = $fetch.create({
    baseURL: nuxtApp.$config.public.KEMENAG_API_BASE_URL,
  });

  const modules: IApiInstance = {
    chapters: new ChaptersModule(quranApiFetcher),
    verses: new VersesModule(quranApiFetcher),
    chapterRecitations: new ChapterRecitationsModule(quranApiFetcher),
    tafsirs: new TafsirsModule(kemenagApiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
