import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export interface FooterProps {
  text: string;
};

const Footer: FunctionComponent<FooterProps> = function ({ text }) {
  return <FooterLayout>{text}</FooterLayout>;
};

export default Footer;

const FooterLayout = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  white-space: pre-line;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
