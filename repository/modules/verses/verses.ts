import QuranApiFactory from "../../quranApiFactory";
import type {
  IGetByChapterParams,
  IGetByChapterResponse,
} from "@/types/verses.interface";

class VersesModule extends QuranApiFactory {
  private PATH = "/verses";

  getByChapterNumber(
    number: number,
    params?: IGetByChapterParams
  ): Promise<IGetByChapterResponse> {
    const TRANSLATIONS = "33";
    const FIELDS = "text_imlaei";

    return this.get<IGetByChapterResponse>(
      `${this.PATH}/by_chapter/${number}`,
      {
        language: params?.language || this.language,
        fields: FIELDS,
        words: true,
        word_fields: FIELDS,
        translations: TRANSLATIONS,
        ...params,
      }
    );
  }
}

export default VersesModule;
