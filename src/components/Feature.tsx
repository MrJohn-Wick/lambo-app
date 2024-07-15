"use client";
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { motion, Variants } from 'framer-motion';
import { ADAPTIVE } from '@/utils/window';
import { useWindowSize } from '@/hooks/useWindowSize';

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  $isReversed?: boolean;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5
    }
  }
};

const FeatureSection = styled.section<{ isReversed?: boolean }>`
  display: flex;
  max-width: 100%;

  ${ADAPTIVE.minWidth.mobile} {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  ${ADAPTIVE.minWidth.tablet} {
    flex-direction: column;
    text-align: center;
    display: flex;
    align-items: center;
  }

  ${ADAPTIVE.minWidth.desktop} {
    margin-top: 100px;
    /* gap: 150px; */
    width: 1036px;
    flex-direction: ${props => props.isReversed ? 'row-reverse' : 'row'};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;

  ${ADAPTIVE.minWidth.desktop} {
    max-width: 100%;
    margin-top: 40px;
    gap: 24px;
  }
`;

const Title = styled.h2`

  ${ADAPTIVE.minWidth.mobile} {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    /* line-height: 24px; */
    letter-spacing: -0.96px;
    text-align: center;
  }

  ${ADAPTIVE.minWidth.desktop} {
    color: #fff;
    font-size: 48px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    margin-bottom: 0;
    text-align: left;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  /* margin-top: 24px; */
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;

  ${ADAPTIVE.minWidth.mobile} {
    margin: 0;
    text-align: center;
  }

  ${ADAPTIVE.minWidth.desktop} {
    /* margin-top: 24px; */
    text-align: left;
    width: 400px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled(Image)`
  ${ADAPTIVE.minWidth.mobile} {
    width: 100%;
  }

  ${ADAPTIVE.minWidth.desktop} {
    width: auto;
    aspect-ratio: auto 488 / 396;
    /* height: 396px; */
  }
`;

// const EllipseStyled = styled.div`
//   position: absolute;
//   width: 264px;
//   height: 70px;
//   flex-shrink: 0;
//   border-radius: 264px;
//   background: var(--brand-aqua-blue-dark-1000, #55b4e7);
//   background-position: center;
//   filter: blur(55px);
//   top: 40px;
// `;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;

  ${ADAPTIVE.minWidth.mobile} {
    order: 2;
    width: 80%;
  }

  ${ADAPTIVE.minWidth.tablet} {
    width: auto;
  }

  ${ADAPTIVE.minWidth.desktop} {
    order: 1;
    /* width: auto; */
  }
`;

const MotionDivStyled = styled(motion.div)<{ isReversed?: boolean }>`
  
  ${ADAPTIVE.minWidth.mobile} {
    order: 1;
  }

  ${ADAPTIVE.minWidth.desktop} {
    order: 2;
    ${props => props.isReversed ? 'margin-right: auto' : 'margin-left: auto'};
  }
`;

// @ts-ignore
const Feature: React.FC<FeatureProps> = ({ title, description, imageSrc, imageAlt, isReversed }) => {
  
  const { isMobileView, isTabletView } = useWindowSize();
  
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <FeatureSection isReversed={isReversed}>
        {/* @ts-ignore */}
        <ContentColumn isReversed={isReversed}>
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Content>
        </ContentColumn>
        {/* @ts-ignore */}
        <MotionDivStyled variants={isMobileView || isTabletView ? {} : cardVariants} isReversed={isReversed}>
          {/* @ts-ignore */}
          <ImageColumn isReversed={isReversed}>
            {/* @ts-ignore */}
            <ImageStyled src={imageSrc} alt={imageAlt} loading="lazy" isReversed={isReversed} />
          </ImageColumn>
        </MotionDivStyled>
      </FeatureSection>
    </motion.div>
  );
}

export default Feature;
