import { ADAPTIVE } from '@/utils/window';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  justify-content: center;
  align-items: center;
  display: flex;
  
  max-width: 100%;
  

  ${ADAPTIVE.minWidth.mobile} {
    margin-top: 186px;
    width: auto;
    padding: 0 40px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    margin-top: 186px;
    width: 1036px;
    padding: 0 60px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  justify-content: center;
  align-self: center;
  display: flex;
  gap: 8px;
`;

const Logo = styled.img`
  aspect-ratio: 4.76;
  object-fit: auto;
  object-position: center;
  width: 123px;
  max-width: 100%;
  margin: auto 0;
`;

const LogoIcon = styled.img`
  aspect-ratio: 1.82;
  object-fit: auto;
  object-position: center;
  width: 55px;
`;

const LinkWrapper = styled.div`
  justify-content: end;
  display: flex;
  margin-top: 24px;
  gap: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  line-height: 120%;
`;

const FooterLink = styled(Link)`
  font-family: Poppins, sans-serif;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterContent>
      <LogoWrapper>
        <Logo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd5984d17db31b6bb460f6e8df8bc846ada4f3105e659d502a5ff28819a3cebf?apiKey=ee013e4e62354fc39704ec724055f765&" alt="Logo" />
        <LogoIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96a95d61285d70d93998d4123f700bb6fa776ce5ae4fd304ec54678bb749df4e?apiKey=ee013e4e62354fc39704ec724055f765&" alt="Logo Icon" />
      </LogoWrapper>
      <LinkWrapper>
        <FooterLink href="/terms-service">Terms of service</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
      </LinkWrapper>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
