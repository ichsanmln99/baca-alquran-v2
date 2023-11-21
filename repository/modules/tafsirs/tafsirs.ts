import KemenagApiFactory from "../../kemenagApiFactory";

import type { IGetByVerseIdResponse } from "@/types/tafsirs.interface";

class TafsirsModule extends KemenagApiFactory {
  getByVerseId(id: number): Promise<IGetByVerseIdResponse> {
    return this.get<IGetByVerseIdResponse>(`/quran-tafsir/${id}`, {});
  }
}

export default TafsirsModule;
