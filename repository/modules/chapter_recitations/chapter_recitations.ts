import QuranApiFactory from "../../quranApiFactory";
import { type IGetRecitationsResponse } from "@/types/chapter_recitations.interface";

class ChapterRacitationsModule extends QuranApiFactory {
  private PATH = "/chapter_recitations";

  async getByChapterNumber(
    chapter_number: number
  ): Promise<IGetRecitationsResponse> {
    const RECITER_ID = 7; // Syeikh Mishari

    return this.get<IGetRecitationsResponse>(
      `${this.PATH}/${RECITER_ID}/${chapter_number}`,
      {
        segments: true,
      }
    );
  }
}

export default ChapterRacitationsModule;
