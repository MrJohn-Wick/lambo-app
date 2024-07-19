'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HeroSection, MainWrapperStyled, TextSectionStyled } from './styled';
// import { useTime, useTransform } from "framer-motion";
import { ADAPTIVE } from '@/utils/window';
import Link from 'next/link';

const HeroTitle = styled.h1`
  background: linear-gradient(
    169deg,
    #fff 25.94%,
    rgba(255, 255, 255, 0) 122.58%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: start;
  margin-top: 90px;
  margin: 0;

  ${ADAPTIVE.minWidth.mobile} {
    font-size: 46px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.68px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-family: Poppins, sans-serif;
    font-size: 96px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.68px;
  }
`;

const HeroDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 114px;
  font: 24px/29px Poppins, sans-serif;
`;

const Hero: React.FC = () => {
  // const time = useTime();
  // const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });

  useEffect(() => {
    if (document.getElementById('vid')) {
      {/* @ts-ignore */}
      document.getElementById('vid').play();
    }
  }, []);

  return (
    <MainWrapperStyled>
      {/* @ts-ignore */}
      <video loop={true} muted={true} autoPlay={true} playsInline={true} width="100%" id="vid">
        <source src="0712.webm" type="video/webm" />
        <source src="0712.mp4" type="video/mp4" />
      </video>
      <HeroSection>
        <TextSectionStyled>
          <HeroTitle>Education made easy</HeroTitle>
          <HeroDescription>
            Learn, share, stream, communicate, find friends from all continents.
          </HeroDescription>
          <div>
            <Link href="/login">Login</Link>
          </div>
          <div>
            <Link href="/register">Registration</Link>
          </div>
        </TextSectionStyled>
      </HeroSection>
    </MainWrapperStyled>
  );
};

export default Hero;
