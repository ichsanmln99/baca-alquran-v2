import QuranApiFactory from "../../quranApiFactory";

import type {
  IGetOneResponse,
  IGetAllResponse,
} from "@/types/chapters.interface";

class ChaptersModule extends QuranApiFactory {
  private PATH = "/chapters";

  async getAll(params?: { language: string }): Promise<IGetAllResponse> {
    return this.get<IGetAllResponse>(`${this.PATH}/`, {
      language: params?.language || this.language,
    });
  }

  async getOne(
    id: number,
    params?: { language: string }
  ): Promise<IGetOneResponse> {
    return this.get<IGetOneResponse>(`${this.PATH}/${id}`, {
      language: params?.language || this.language,
    });
  }
}

export default ChaptersModule;
