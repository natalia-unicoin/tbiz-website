// import { AllContentData, Gallery, Header, Image, Link, List, Video } from 'types';

interface BaseNews {
  slug: string;
  message: string;
  author: string;
  category: string;
  img_url: string;
  date: string;
  title: string;
  tags: string[];
  featured: boolean;
  featured_img_url?: string;
  limitedAccess?: boolean;
}

export interface Image {
  id: number;
  url: string;
  alt: string;
}

export interface Gallery {
  id: number;
  images: Image[];
}

export interface Header {
  id: number;
  tag: string;
  text: string;
}

export interface Link {
  id: number;
  url: string;
  text: string;
}

export interface Video {
  id: number;
  url: string;
}

export interface List {
  id: number;
  content: string[];
}

export type ContentElement = Image | Gallery | Header | Link | Video | List;

export interface ParsedContent {
  text?: string | string[];
  gallery?: Gallery;
  image?: Image;
  list?: List;
  header?: Header;
  link?: Link;
  video?: Video;
}

export interface AllContentData {
  images?: Image[];
  galleries?: Gallery[];
  headers?: Header[];
  links?: Link[];
  videos?: Video[];
  lists?: List[];
}

export interface News extends AllContentData {
  slug: string;
  title: string;
  author: string;
  message: string;
  img_url: string;
  url: string;
  date: string;
  content: string;
  featured_img_url?: string;
  prevNewsSlug?: string | null;
  nextNewsSlug?: string | null;
}

export interface Article extends BaseNews {
  content: string;
  url?: string;
}

export interface NewsData {
  current_page: number;
  data: News[];
  total_pages: number;
  per_page: number;
  total: number;

}
