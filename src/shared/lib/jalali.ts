import dayjs from 'dayjs';
import 'dayjs/locale/fa';
import jalaliday from 'jalaliday';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(jalaliday);
dayjs.locale('fa');
dayjs.calendar('jalali');

export { dayjs };

export const formatJalali = (value: dayjs.ConfigType, template = 'YYYY/MM/DD') =>
   dayjs(value).calendar('jalali').locale('fa').format(template);

export type TehranClockSnapshot = {
   display: string;
   dateTime: string;
};

/** Wall time in Asia/Tehran. Fanum glyphs in IRANSans render the digits as Persian. */
export const getTehranClockSnapshot = (): TehranClockSnapshot => {
   const now = dayjs().tz('Asia/Tehran');

   return {
      dateTime: now.toDate().toISOString(),
      display: now.calendar('jalali').locale('fa').format('YYYY/MM/DD  HH:mm:ss'),
   };
};
