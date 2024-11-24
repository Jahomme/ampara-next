'use client';

import { PropsWithChildren } from 'react';
import GlobalStyles from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { UserContextProvider } from '@/context/UserContext';

export function Providers({ children }: PropsWithChildren) {
    return (
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          {' '}
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </UserContextProvider>
    );
}
