import { type FaqTopic } from 'types';

const generateFaqTopics = (
  questionCounts: number[],
  baseKey: string,
): FaqTopic[] => {
  return questionCounts.map((questionCount, topicIndex) => ({
    topicText: `${baseKey}${topicIndex + 1}`,
    topicQuestions: Array.from({ length: questionCount }, (_, questionIndex) => ({
      questionText: `${baseKey}${topicIndex + 1}_question${questionIndex + 1}`,
      answerText: `${baseKey}${topicIndex + 1}_answer${questionIndex + 1}`,
      answerLink: `${baseKey}${topicIndex + 1}_link${questionIndex + 1}`,
    })),
  }));
};

export default generateFaqTopics;
