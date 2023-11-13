export interface IChapter {
  id: number;
  revelation_place: string;
  revelation_order?: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex?: string;
  name_arabic: string;
  verses_count: number;
  pages?: [number, number];
  translated_name: {
    language_name: string;
    name: string;
  };
}

export interface IGetOneResponse {
  chapter: IChapter;
}

export interface IGetAllResponse {
  chapters: IChapter[];
}
