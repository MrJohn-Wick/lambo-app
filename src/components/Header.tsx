import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 9;
`;

const Logo = styled.img`
  aspect-ratio: 4.76;
  object-fit: auto;
  object-position: center;
  width: 124px;
  max-width: 100%;
  margin: auto 0;
`;

const LogoIcon = styled.img`
  aspect-ratio: 1.82;
  object-fit: auto;
  object-position: center;
  width: 55px;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Link href="/">
      <Logo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd5984d17db31b6bb460f6e8df8bc846ada4f3105e659d502a5ff28819a3cebf?apiKey=ee013e4e62354fc39704ec724055f765&" alt="Logo" />
      <LogoIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96a95d61285d70d93998d4123f700bb6fa776ce5ae4fd304ec54678bb749df4e?apiKey=ee013e4e62354fc39704ec724055f765&" alt="Logo Icon" />
    </Link>
  </HeaderWrapper>
);

export default Header;
