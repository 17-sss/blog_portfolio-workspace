import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar, Card, CardContent, PropTypes } from '@material-ui/core';
import { getMediaQueries, GetMediaQueriesProps, setFlex, setFadeInAnimation } from 'utils/style';

export const ProfileCardLayout = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const ProfileCard = styled(Card)`
  margin: 0 20px;
  ${setFadeInAnimation()}
  ${getMediaQueries({ type: 'mobile' })} {
    margin: 0 12px;
  }
`;

type ProfileCardContentProps = {
  align?: PropTypes.Alignment;
  children?: React.ReactNode | React.ReactNode[];
};
export const ProfileCardContent = styled(({ ...props }) => <CardContent {...props} />)<ProfileCardContentProps>`
  padding: 16px;
  &:last-child {
    padding: 16px;
  }

  ${({ children }) => {
    const isArray = Array.isArray(children);
    const childrenLength = isArray ? children.length : +Boolean(children);
    const mediaParams: GetMediaQueriesProps = {
      type: 'tablet',
      customWidth: { minWidth: 0 },
      percentOption: { calcType: 'minus', percent: 5 },
    };

    return (
      childrenLength &&
      css`
        display: grid;
        justify-content: center;
        grid-template-columns: ${`repeat(${childrenLength}, calc(100% / ${childrenLength}))`};

        ${getMediaQueries(mediaParams)} {
          grid-template-columns: none;
        }
      `
    );
  }}
`;

export const ImageBox = styled.div`
  ${setFlex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })};
`;
export const ImageAvatar = styled(Avatar)`
  min-width: 210px;
  min-height: 210px;
  border: 1px solid ${({ theme }) => theme.grayScaleColors.line};
  ${getMediaQueries({ type: 'mobile' })} {
    min-width: 180px;
    min-height: 180px;
  }
`;

export const InfoBox = styled(ImageBox)`
  align-items: flex-start;
`;

export const AntecedentItem = styled.li`
  color: ${({ theme }) => theme.grayScaleColors.font};
  font-size: ${({ theme }) => theme.fontSizes['16']};
  ${getMediaQueries({ type: 'mobile' })} {
    font-size: ${({ theme }) => theme.fontSizes['14']};
  }

  p:first-of-type {
    font-weight: 500;
  }

  p + p {
    margin-top: 4px;
  }

  & + & {
    margin-top: 12px;
  }
`;

export const IconButtonBox = styled.div`
  ${setFlex({ alignItems: 'center', justifyContent: 'center' })};
  svg {
    font-size: ${({ theme }) => theme.fontSizes['32']};
    color: ${({ theme }) => theme.grayScaleColors.font};
  }
`;
