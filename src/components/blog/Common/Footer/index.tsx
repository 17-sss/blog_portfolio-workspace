import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import { BLOG_FOOTER_DESCRIPTION } from 'utils/constants';

type FooterProps = {
  text?: string;
};

const Footer: FunctionComponent<FooterProps> = function ({ text }) {
  const defaultDesc = useMemo(() => BLOG_FOOTER_DESCRIPTION.map((text, idx) => <p key={idx}>{text}</p>), []);
  return <FooterLayout>{text ?? defaultDesc}</FooterLayout>;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
