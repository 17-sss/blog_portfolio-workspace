import { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import { TCarouselProps } from 'rano-react-carousel'; // 내가 만든 캐러셀 적용
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { PortfolioImageType } from 'src/queries';
import * as S from './style';

interface ImageCarouselProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  images: PortfolioImageType[];
}
const ImageCarousel: FunctionComponent<ImageCarouselProps> = function ({ title, images, ...props }) {
  const carouselImages = useMemo(() => {
    if (!images || !images.length) return;
    return images.map(({ publicURL }, i) => (
      <S.Image key={i} src={publicURL} alt={`${title} : ${i}`} width={'100%'} height={'100%'} />
    ));
  }, [images]);

  const carouselProps: TCarouselProps = {
    children: carouselImages,
    infiniteLoop: carouselImages && carouselImages.length > 1,
    buttonStyle: {
      left: { icon: <ArrowBackIosIcon />, style: { left: '8px', color: '#333' } },
      right: { icon: <ArrowForwardIosIcon />, style: { right: '8px', color: '#333' } },
    },
    iconRatio: 12,
    additionalOptions: { isAllFluidSize: true },
  };

  return <S.CarouselLayout {...{ ...carouselProps, ...props }} />;
};

export default ImageCarousel;

/* 

// [1] 일반 이미지 적용
const carouselImages = useMemo(() => {
  if (!images || !images.length) return;
  return images.map(({ publicURL }, i) => (
    <S.Image key={i} src={publicURL} alt={`${title} : ${i}`} width={'100%'} height={'100%'} />
  ));
}, [images]);

// [2] Gatsby 이미지 적용 -- 버벅임.
const carouselImages = useMemo(() => {
  if (!images || !images.length) return;
  return images.map(({ childImageSharp, publicURL }, i) => {
    if (!childImageSharp && !publicURL) return;
    const gatsbyImageData = childImageSharp?.gatsbyImageData;
    const alt = `${title} : ${i}`;

    if (gatsbyImageData) return <S.CarouselGatsbyImage key={i} alt={alt} image={gatsbyImageData} />;
    return <S.Image src={publicURL} alt={alt} width={'100%'} height={'100%'} />;
  });
}, [images]);

// [3] 동영상 적용 -- 이걸 적용해야 하는데..
const carouselImages = useMemo(() => {
  if (!images || !images.length) return;
  return images.map(({ childImageSharp, publicURL }, i) => {
    if (!childImageSharp && !publicURL) return;
    const gatsbyImageData = childImageSharp?.gatsbyImageData;
    const alt = `${title} : ${i}`;

    if (gatsbyImageData) return <S.CarouselGatsbyImage key={i} alt={alt} image={gatsbyImageData} />;

    const allowExtenstion = ['mp4', 'webm'];
    const extension = getExtension(publicURL)?.slice(1) ?? '';
    if (allowExtenstion.includes(extension.toLowerCase())) {
      return (
        // 방법 1 (이렇게 해야하는데..)
        // 현재 source를 넣어서 처리하면 원활하게 동작하지 않음..
        <video autoPlay loop muted playsInline src={publicURL}>
          <source src={publicURL} type={`video/${extension}`} />
        </video>
        // 방법 2 (잘 동작하나 이동시 깜박임)
        <video autoPlay loop muted playsInline src={publicURL} width="100%" height="100%"/>
      );
    }
    return <S.Image src={publicURL} alt={alt} width={'100%'} height={'100%'} />;
  });
}, [images]);
*/
