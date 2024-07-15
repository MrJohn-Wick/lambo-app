import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyled';

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
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
