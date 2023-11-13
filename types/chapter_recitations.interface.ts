export interface ITimestamp {
  verse_key: string;
  timestamp_from: number;
  timestamp_to: number;
  duration: number;
  segments: number[][];
}

export interface IAudioFile {
  id: number;
  chapter_id: number;
  file_size: number;
  format: string;
  audio_url: string;
  timestamps: ITimestamp[];
}

export interface IGetRecitationsResponse {
  audio_file: IAudioFile;
}
