import { TimeStamp } from 'types';

const getSecondsFromTimeStamp = (timestamp: TimeStamp) => {
  const [minutes, seconds] = timestamp.split(':');

  return (Number(minutes) * 60) + Number(seconds);
};

export default getSecondsFromTimeStamp;
