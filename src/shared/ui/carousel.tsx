'use client';

import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, type ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

type CarouselProps = {
   children: ReactNode;
   options?: EmblaOptionsType;
   className?: string;
   label: string;
};

export function Carousel({ children, options, className, label }: CarouselProps) {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      direction: 'rtl',
      align: 'start',
      ...options,
   });

   const scrollPrevious = useCallback(() => {
      emblaApi?.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
      emblaApi?.scrollNext();
   }, [emblaApi]);

   return (
      <section aria-label={label} className={cn('relative', className)}>
         <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">{children}</div>
         </div>
         <div className="mt-3 flex gap-2">
            <button
               type="button"
               onClick={scrollPrevious}
               aria-label="قبلی"
               className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-200"
            >
               <ChevronRight className="size-4" />
            </button>
            <button
               type="button"
               onClick={scrollNext}
               aria-label="بعدی"
               className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-200"
            >
               <ChevronLeft className="size-4" />
            </button>
         </div>
      </section>
   );
}
