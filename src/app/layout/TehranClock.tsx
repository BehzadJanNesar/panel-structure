import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useTehranClock } from '@/app/layout/use-tehran-clock';

/** Isolated live clock so only this subtree re-renders every second. */
export const TehranClock = memo(function TehranClock() {
   const { t } = useTranslation();
   const { display, dateTime } = useTehranClock();

   return (
      <time
         dateTime={dateTime}
         title={t('shell.clockTitle')}
         className="text-[13px] font-medium text-(--color-primary-deep) tabular-nums"
         dir="ltr"
      >
         {display}
      </time>
   );
});
