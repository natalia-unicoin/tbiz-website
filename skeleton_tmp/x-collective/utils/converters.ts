import {
  AllContentData,
  ContentElement,
  ParsedContent,
} from 'types';

const contentTypes = {
  images: 'image',
  galleries: 'gallery',
  headers: 'header',
  links: 'link',
  videos: 'video',
  lists: 'list',
};

const contentRegExp = /(gallery_\d+)|(header_\d+)|(image_\d+)|(list_\d+)|(video_\d+)|\n/;
const contentLinksRegExp = /(link_\d+)/g;

const getDataById = (
  keyIdContent: string[],
  allData: AllContentData,
) => {
  const data: ContentElement[] = [];

  Object.keys(contentTypes).forEach((key) => {
    if (keyIdContent[0] === contentTypes[key as keyof AllContentData]) {
      allData[key as keyof AllContentData]?.map((element: ContentElement) => {
        return (keyIdContent[1] === String(element.id)) && (
          data.push({ ...element })
        );
      });
    }
  });

  return data[0];
};

export const parseContent = (
  content: string,
  allData: AllContentData,
) => {
  const contentArray = content
    ?.replace(/<br>/g, '')
    ?.split(allData?.links?.length ? contentLinksRegExp : contentRegExp)
    ?.filter(Boolean);

  return contentArray.reduce((accum, element) => {
    if (
      contentRegExp.test(element)
      || (Boolean(allData?.links?.length) && element?.includes('link_'))
    ) {
      const keyIdContent = element.split('_'); // array form: [key, id]

      const data = getDataById(
        keyIdContent,
        allData,
      );

      const contentElement = {
        [keyIdContent[0]]: data,
      };

      accum.push(contentElement);
    } else {
      accum.push({ text: element });
    }

    return accum;
  }, [] as ParsedContent[]);
};
