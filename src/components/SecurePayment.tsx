import React from 'react';
import styled from 'styled-components';

const SecurePaymentSection = styled.section`
  display: flex;
  margin-top: 99px;
  width: 1038px;
  max-width: 100%;
  padding-right: 19px;
  gap: 20px;
  justify-content: space-between;
`;

const PaymentImage = styled.img`
  aspect-ratio: 0.94;
  object-fit: auto;
  object-position: center;
  width: 100%;
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

const SecurePayment: React.FC = () => (
  <SecurePaymentSection>
    <PaymentImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49bc0be0f9d29c3aeedf6a3ef63bec2e42533cb3e5c974f41b3001c2cd635055?apiKey=ee013e4e62354fc39704ec724055f765&" alt="Secure Payment" />
    <ContentWrapper>
      <Title>Secure Payment</Title>
      <Description>
        Your money is safe. Our system ensures that everybody gets qualified content and paid for it.
      </Description>
    </ContentWrapper>
  </SecurePaymentSection>
);

export default SecurePayment;
