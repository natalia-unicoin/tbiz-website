export interface VideoCard {
  url: string;
  name: string;
  country: string;
  language: string;
  position: string;
  order: number,
  previewGif: string;
  previewImage?: string;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
}
