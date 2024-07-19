'use client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyled';
import { SessionProvider } from 'next-auth/react';

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
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
