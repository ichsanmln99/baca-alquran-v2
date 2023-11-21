export interface ISurah {
  arabic: string;
  id: number;
  latin: string;
  location: string;
  num_ayah: number;
  page: number;
  translation: string;
  transliteration: string;
}

export interface ITafsir {
  conclusion: string | null;
  intro_surah: string;
  munasabah_prev_surah: string | null;
  munasabah_prev_theme: string | null;
  outro_surah: string | null;
  sabab_nuzul: string | null;
  tahlili: string;
  theme_group: string | null;
  wajiz: string;
  kosakata?: string;
}

export interface IQuranData {
  arabic: string;
  ayah: number;
  footnotes: null;
  id: number;
  juz: number;
  latin: string;
  manzil: number;
  no_footnote: null;
  page: number;
  quarter_hizb: null;
  surah: ISurah;
  surah_id: number;
  tafsir: ITafsir;
  translation: string;
}

export interface IGetByVerseIdResponse {
  data: IQuranData;
}
