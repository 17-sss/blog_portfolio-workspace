import { Section } from 'components/portfolio/Common';
import { FunctionComponent } from 'react';

const HomeSection: FunctionComponent = function ({ ...props }) {
  return <Section {...props}></Section>;
};

export default HomeSection;
