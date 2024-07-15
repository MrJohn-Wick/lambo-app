'use client';

import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

import { Poppins } from "next/font/google";
import { ADAPTIVE } from '@/utils/window';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../app/GlobalStyled';

const theme = {
  // Add any theme variables here
};

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '100'
});

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  /* background-color: #160326; */
  display: flex;
  flex-direction: column;
  align-items: center;

  ${ADAPTIVE.minWidth.mobile} {
    padding: 24px 30px 40px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    padding: 48px 60px 80px;
  }
`;

const ContentWrapper = styled.main`
  display: flex;
  width: 100%;
  max-width: 1488px;
  flex-direction: column;
  align-items: center;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <LayoutWrapper className={`${poppins.variable} font-poppins`}>
      <ContentWrapper>
        <Header />
        {children}
        <Footer />
      </ContentWrapper>
    </LayoutWrapper>
  </ThemeProvider>
);

export default Layout;
