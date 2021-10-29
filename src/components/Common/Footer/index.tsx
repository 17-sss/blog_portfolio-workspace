import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import { FOOTER_TEXT } from 'utils/constants';

type FooterProps = {
  text?: string;
};

const Footer: FunctionComponent<FooterProps> = function ({ text }) {
  const defaultTexts = useMemo(() => {
    const tmpTexts = FOOTER_TEXT.split('|');
    const result = tmpTexts.reduce((result, currText, idx) => {
      result.push(<p key={idx}>{currText}</p>);
      return result;
    }, [] as JSX.Element[]);
    return <>{result.length ? result.map(v => v) : ''}</>;
  }, []);

  return <FooterLayout>{text ?? defaultTexts}</FooterLayout>;
};

export default Footer;

const FooterLayout = styled.div`
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
