import { useEffect, useState } from 'react';

import { getTehranClockSnapshot, type TehranClockSnapshot } from '@/shared/lib/jalali';

/**
 * Wall-clock time in Asia/Tehran, updating once per second, aligned to OS second boundaries
 * (first timeout ≤ 1s, then setInterval 1000ms) to avoid visible drift.
 */
export const useTehranClock = (): TehranClockSnapshot => {
   const [snapshot, setSnapshot] = useState<TehranClockSnapshot>(getTehranClockSnapshot);

   useEffect(() => {
      let intervalId: number | undefined;

      const tick = () => setSnapshot(getTehranClockSnapshot());

      tick();
      const timeoutId = window.setTimeout(
         () => {
            tick();
            intervalId = window.setInterval(tick, 1000);
         },
         1000 - (Date.now() % 1000),
      );

      return () => {
         window.clearTimeout(timeoutId);
         if (intervalId !== undefined) window.clearInterval(intervalId);
      };
   }, []);

   return snapshot;
};
