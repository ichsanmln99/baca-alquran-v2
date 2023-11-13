export interface IVerse {
  id: number;
  verse_number: number;
  verse_key: string;
  hizb_number: number;
  rub_el_hizb_number: number;
  ruku_number: number;
  manzil_number: number;
  sajdah_number: null;
  page_number: number;
  juz_number: number;
  words: IVerseWords[];
  translations: IVerseTranslations[];
  text_imlaei?: string;
}

export interface IVerseWords {
  id: number;
  position: number;
  audio_url: string | null;
  char_type_name: string;
  code_v1: string;
  page_number: number;
  line_number: number;
  text: string;
  translation: {
    text: string;
    language_name: string;
  };
  transliteration: {
    text: string;
    language_name: string;
  };
  text_imlaei?: string;
}

export interface IVerseAudio {
  url: string;
  segments: string[][];
}

export interface IVerseTranslations {
  id: number;
  resource_id: number;
  text: string;
}

export interface IVersesPagination {
  per_page: number;
  current_page: number;
  next_page: number | null;
  total_pages: number;
  total_records: number;
}

export interface IGetByChapterParams {
  language?: string;
  page?: number;
  per_page?: number;
}

export interface IGetByChapterResponse {
  verses: IVerse[];
  pagination: IVersesPagination;
}
