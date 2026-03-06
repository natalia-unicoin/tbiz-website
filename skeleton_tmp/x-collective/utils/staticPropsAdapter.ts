import axios from 'axios';
import dayjs from 'dayjs';

interface FetchData {
  url: string;
  requestParams?: Record<string, any>;
  defaultData?: any;
}

const requestData = async ({
  url,
  requestParams = {},
  defaultData = {},
}: FetchData) => {
  let data = defaultData;

  try {
    data = await axios.get(url, { params: requestParams });
  } catch (error: any) {
    console.error(`Request API error at ${dayjs().format('dd:MM:YYYY mm:ss')}: ${error?.stack}`);
  }

  // @ts-ignore
  return data?.data || data?.data || data;
};

export const requestDataPost = async ({
  url,
  defaultData = {},
  requestParams = {},
}: FetchData) => {
  let data = defaultData;

  try {
    data = await axios.post(url, data, requestParams);
  } catch (error: any) {
    console.error(`Request API error at ${dayjs().format('dd:MM:YYYY mm:ss')}: ${error}`);
  }

  // @ts-ignore
  return data?.data || data?.data || data;
};

export default requestData;
