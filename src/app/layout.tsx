'use client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyled';
import { SessionProvider } from 'next-auth/react';
import StyledComponentsRegistry from '../lib/registry';

import './globals.css';

const theme = {
  // Add any theme variables here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
              <GlobalStyles />
              {children}
            </StyledComponentsRegistry>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
