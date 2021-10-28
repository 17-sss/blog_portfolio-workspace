import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';
import { INTRODUCTION_TEXTS } from 'utils/constants';

type IntroductionProps = {
  title?: string;
  subTitle?: string;
};

const Introduction: FunctionComponent<IntroductionProps> = function ({ subTitle, title }) {
  return (
    <IntroductionLayout>
      <IntroductionBox>
        <ProfileImage />
        <TextBox>
          <SubTitleText>{subTitle ?? INTRODUCTION_TEXTS.subTitle}</SubTitleText>
          <TitleText>{title ?? INTRODUCTION_TEXTS.title}</TitleText>
        </TextBox>
      </IntroductionBox>
    </IntroductionLayout>
  );
};

export default Introduction;

const IntroductionLayout = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

const TextBox = styled.div``;

const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const SubTitleText = styled.p`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const TitleText = styled.p`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
