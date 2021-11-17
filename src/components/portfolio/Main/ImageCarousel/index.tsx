import { FunctionComponent, useMemo } from 'react';
import { TCarouselProps } from 'rano-react-carousel'; // 내가 만든 캐러셀 적용
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { PortfolioImage } from 'utils/types';
import * as S from './style';

type ImageCarouselProps = { title: string; images: PortfolioImage[] };
const ImageCarousel: FunctionComponent<ImageCarouselProps> = function ({ title, images }) {
  const carouselImages = useMemo(() => {
    if (!images || !images.length) return;
    return images.map(({ childImageSharp, publicURL }, i) => {
      if (!childImageSharp && !publicURL) return;
      const gatsbyImageData = childImageSharp?.gatsbyImageData;
      const alt = `${title} : ${i}`;
      return gatsbyImageData ? (
        <S.CarouselGatsbyImage key={i} alt={alt} image={gatsbyImageData} />
      ) : (
        <S.Image src={publicURL} alt={alt} width={'100%'} height={'100%'} />
      );
    });
  }, [images]);

  const carouselProps: TCarouselProps = {
    children: carouselImages,
    infiniteLoop: carouselImages && carouselImages.length > 1,
    buttonStyle: {
      left: { icon: <ArrowBackIosIcon />, style: { left: '8px', color: '#333' } },
      right: { icon: <ArrowForwardIosIcon />, style: { right: '8px', color: '#333' } },
    },
    iconRatio: 12,
  };

  return <S.CarouselLayout {...carouselProps} />;
};

export default ImageCarousel;
