import React from 'react';
import styled from 'styled-components';

const SellFilesSection = styled.section`
  display: flex;
  margin-top: 99px;
  width: 1036px;
  max-width: 100%;
  padding-right: 68px;
  gap: 20px;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Title = styled.h2`
  color: #fff;
  font: 600 48px/150% Poppins, sans-serif;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 24px;
  font: 500 16px/19px Poppins, sans-serif;
`;

const FileTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: -0.32px;
  line-height: 150%;
  justify-content: center;
`;

const FileTypesContainer = styled.div`
  align-items: center;
  border-radius: 50px;
  border: 1px solid #fff;
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 48px 0 0 48px;
`;

const FileIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 180px;
  max-width: 100%;
`;

const FileTypesList = styled.div`
  align-self: end;
  display: flex;
  margin-top: 7px;
  gap: 0px;
`;

const FileType = styled.div`
  border-radius: 24px;
  border: 0.5px solid #fff;
  backdrop-filter: blur(18.68027687072754px);
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9px 18px;
`;

const FileTypeText = styled.span`
  font-family: Neue Montreal, sans-serif;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const fileTypes = ['PDF', 'PNG', 'MP4'];

const SellFiles: React.FC = () => (
  <SellFilesSection>
    <ContentWrapper>
      <Title>Sell files</Title>
      <Description>
        Record your fitness programs, construction layouts or family recipes and sell them in selected formats.
      </Description>
    </ContentWrapper>
    <FileTypesWrapper>
      <FileTypesContainer>
        <FileIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e2535b36efd67e7d73d9e981b80a43247e4c322a8f8ea5feddce720a25fc14?apiKey=ee013e4e62354fc39704ec724055f765&" alt="File icon" />
        <FileTypesList>
          {fileTypes.map((type, index) => (
            <FileType key={index}>
              <FileTypeText>{type}</FileTypeText>
            </FileType>
          ))}
        </FileTypesList>
      </FileTypesContainer>
    </FileTypesWrapper>
  </SellFilesSection>
);

export default SellFiles;
