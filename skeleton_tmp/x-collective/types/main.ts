import { ImageProps } from 'next/image';

import { LinkTarget } from '@tbiz/tb-types';

export type EnumToProp<E, T> = Partial<{ [key in keyof E]: T }>;

export interface ImageSVG {
  alt: string;
  src: string;
  fill?: ImageProps['fill'];
  height?: number;
  width?: number;
}

export type InputColorMode = 'dark' | 'light';

export interface SocialLink {
  link: string;
  target?: LinkTarget;
  image: string;
  imageAlt: string;
  fill?: ImageProps['fill'];
  height?: number;
  width?: number;
  title?: string;
}

export interface LicenseData {
  meta: {
    title: string;
    description?: string;
  };
  title: string;
  licenseData: string;
}

export interface LoadingState {
  fetching: boolean;
  error: boolean;
}

export interface AltLoadingState {
  fetching: boolean;
  error: string | boolean;
}

export type TimeStamp = `${string}:${string}`;
