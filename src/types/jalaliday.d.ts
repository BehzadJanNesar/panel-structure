import 'dayjs';

declare module 'jalaliday' {
   import type { PluginFunc } from 'dayjs';

   const plugin: PluginFunc;
   export default plugin;
}

declare module 'dayjs' {
   type JalaliCalendar = 'jalali' | 'gregory';

   function calendar(calendarType: JalaliCalendar): Dayjs;

   interface Dayjs {
      calendar(calendarType: JalaliCalendar): Dayjs;
   }
}
