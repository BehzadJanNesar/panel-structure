import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

/**
 * Same fa locale that `antd-jalali-v5` installs: Jalali month names + weekStart شنبه.
 * Built-in `dayjs/locale/fa` still uses Gregorian month labels.
 */
const faJalali = {
   name: 'fa',
   weekStart: 6,
   ordinal: (n: number) => n,
   weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
   weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
   weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
   months: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
   jmonths: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
   monthsShort: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
   formats: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm',
   },
   relativeTime: {
      d: 'یک روز',
      M: 'یک ماه',
      y: 'یک سال',
      dd: '%d روز',
      MM: '%d ماه',
      h: 'یک ساعت',
      yy: '%d سال',
      hh: '%d ساعت',
      m: 'یک دقیقه',
      past: '%s پیش',
      mm: '%d دقیقه',
      s: 'چند ثانیه',
      future: 'در %s',
   },
};

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(jalaliday);
dayjs.locale(faJalali);
dayjs.calendar('jalali');
dayjs.tz.setDefault('Asia/Tehran');

export { dayjs };

export const JALALI_DATE_FORMAT = 'YYYY/MM/DD';

export const formatJalali = (value: dayjs.ConfigType, template = JALALI_DATE_FORMAT) =>
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
