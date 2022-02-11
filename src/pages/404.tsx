import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import GlobalStyle from 'src/components/blog/Common/GlobalStyle';
import { NOTFOUND_DESCRIPTION, NOTFOUND_TEXTS } from 'src/utils/constants';

const NotFoundPage: FunctionComponent = function () {
  const defaultDesc = useMemo(() => NOTFOUND_DESCRIPTION.map((text, idx) => <p key={idx}>{text}</p>), []);
  return (
    <NotFoundPageLayout>
      <GlobalStyle />
      <NotFoundText>{NOTFOUND_TEXTS.notFound}</NotFoundText>
      <NotFoundDescription>{defaultDesc}</NotFoundDescription>
      <GoToMainButton to="/">{NOTFOUND_TEXTS.goToMain}</GoToMainButton>
    </NotFoundPageLayout>
  );
};

export default NotFoundPage;

const NotFoundPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundText = styled.div`
  font-size: 150px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

const NotFoundDescription = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;
