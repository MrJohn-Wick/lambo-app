import React from 'react';
import styled from 'styled-components';

const DividerLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 100px;
`;

const Divider: React.FC = () => <DividerLine />;

export default Divider;
