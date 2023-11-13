import { defineNuxtPlugin } from "nuxt/app";
import { type FetchOptions, $fetch } from "ofetch";
import ChaptersModule from "~/repository/modules/chapters/chapters";
import VersesModule from "~/repository/modules/verses/verses";
import ChapterRecitationsModule from "~/repository/modules/chapter_recitations/chapter_recitations";

interface IApiInstance {
  chapters: ChaptersModule;
  verses: VersesModule;
  chapterRecitations: ChapterRecitationsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL,
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    chapters: new ChaptersModule(apiFetcher),
    verses: new VersesModule(apiFetcher),
    chapterRecitations: new ChapterRecitationsModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
