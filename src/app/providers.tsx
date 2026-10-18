import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import faIR from 'antd/locale/fa_IR';
import JalaliProvider from 'antd-jalali-v5';
import { useState, type ReactNode } from 'react';

import { antdTheme } from '@/shared/config/antd-theme';
import { createQueryClient } from '@/shared/config/query-client';

type AppProvidersProps = {
   children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
   const [queryClient] = useState(createQueryClient);

   return (
      <QueryClientProvider client={queryClient}>
         <ConfigProvider theme={antdTheme} direction="rtl" locale={faIR}>
            <JalaliProvider />
            {children}
         </ConfigProvider>
      </QueryClientProvider>
   );
};
