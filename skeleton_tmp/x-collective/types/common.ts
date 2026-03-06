export interface PictureInfo {
  imageSrc: string;
  alt: string;
  imageSrcLarge?: string;
  imageSrcXxl?: string;
  imageSrcSm?: string;
  imageSrcXs?: string;
  imageSrcXxs?: string;
}

export interface FaqQuestion {
  questionText: string;
  answerText: string;
  answerLink?: string;
}

export interface FaqTopic {
  topicText: string;
  topicQuestions: FaqQuestion[];
}
