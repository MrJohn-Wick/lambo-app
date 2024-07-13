import { ADAPTIVE } from "@/utils/window";
import { styled } from "styled-components";


export const MainWrapperStyled = styled.div`
  ${ADAPTIVE.minWidth.mobile} {
    padding: 0;
    margin-bottom: -100px;

    video {
      position: absolute;
      /* width: 700px; */
      width: 360px;
    }
  }

  ${ADAPTIVE.minWidth.tablet} {
    padding: 0;

    video {
      position: absolute;
      margin-top: 50px;
      width: 360px;
    }
  }

  ${ADAPTIVE.minWidth.desktop} {
    video {
      overflow: hidden;
      width: 805px;
      position: absolute;
      margin-top: 0px;
      z-index: 5;
    }
  }

  border-radius: 50%;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  font-weight: 600;
  padding: 80px 0;
  align-items: center;
  justify-content: start;
`;

export const HeroSection = styled.section`
  z-index: 5;

  ${ADAPTIVE.minWidth.desktop} {
    height: 800px;
  }
`;

export const TextSectionStyled = styled.div`
  z-index: 9;
  align-items: center;
  display: flex;
  flex-direction: column;

  ${ADAPTIVE.minWidth.mobile} {
    width: auto;
    /* height: 400px; */
    margin-top: 110px;
    /* margin-bottom: -70px; */

    h1 {
      text-align: center;
      font-family: Poppins;
      font-size: 56px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 56px */
      letter-spacing: -1.68px;
    }

    p {
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 19.2px */
      letter-spacing: -0.16px;

      width: auto;
    }
  }

  ${ADAPTIVE.minWidth.tablet} {
    width: auto;
    /* height: 400px; */
    margin-top: 170px;

    h1 {
      text-align: center;
      font-family: Poppins;
      font-size: 56px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 56px */
      letter-spacing: -1.68px;
    }

    p {
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 19.2px */
      letter-spacing: -0.16px;

      width: auto;
    }
  }

  ${ADAPTIVE.minWidth.desktop} {
    width: auto;
    height: 400px;
    margin-top: 250px;

    h1 {
      text-align: center;
      font-family: Poppins;
      font-size: 96px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 124.8px */
      letter-spacing: -2.88px;
    }

    p {
      text-align: center;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 28.8px */
      letter-spacing: -0.24px;

      width: auto;
    }
  }
`;

export const HeroBlurStyled = styled.div`
  div {
    position: absolute;

    ${ADAPTIVE.maxWidth.mobile} {
      width: 300px;
      height: 400px;

      position: absolute;
      margin-top: 0px;
      width: 1200px;
      overflow: hidden;
    }

    ${ADAPTIVE.maxWidth.desktop} {
      width: 596.573px;
      height: 788.019px;
    }

    transform: rotate(-73.814deg);
    flex-shrink: 0;

    border-radius: 229.003px;
    background: rgba(0, 0, 0, 0.01);
    filter: blur(46.66940689086914px);
    backdrop-filter: blur(18.618118286132812px);

    z-index: 5;
  }
`;
