import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getDayjs = (date?: dayjs.ConfigType, timezone = 'Asia/Seoul') =>
  dayjs(date).tz(timezone);

export const today = getDayjs().startOf('day');
