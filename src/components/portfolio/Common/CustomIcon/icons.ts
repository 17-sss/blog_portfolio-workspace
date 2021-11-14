import HTML5Icon from './svg/html5.svg';
import CSS3Icon from './svg/css3.svg';
import JavaScriptIcon from './svg/javascript.svg';
import TypeScriptIcon from './svg/typescript.svg';
import ReactIcon from './svg/reactIcon.svg';  // 이파일... 이름이 react 였다가 계속 찐 react 찾아내서 삽질 오지게함. (3시간)

export const iconNames = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'] as const;
export type IconNameType = typeof iconNames[number];

export type IconListType = {
  [name in IconNameType]: any;
};

export const iconList: IconListType = {
  HTML5: HTML5Icon,
  CSS3: CSS3Icon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
};
