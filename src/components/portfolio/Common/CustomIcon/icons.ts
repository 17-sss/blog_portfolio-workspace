import HTML5Icon from './svg/html5.svg';
import CSS3Icon from './svg/css3.svg';
import JavaScriptIcon from './svg/javascript.svg';
import TypeScriptIcon from './svg/typescript.svg';
import ReactIcon from './svg/reactIcon.svg';
import SassIcon from './svg/sass.svg';
import RecoilIcon from './svg/recoilIcon.svg';
import BootstrapIcon from './svg/bootstrap.svg';
import MaterialIcon from './svg/materialui.svg';
import ExpressIcon from './svg/expressIcon.svg';
import SequelizeIcon from './svg/sequelize.svg';
import MySQLIcon from './svg/mysql.svg';
import JiraIcon from './svg/jirasoftware.svg';
import ConfluenceIcon from './svg/confluence.svg';
import SlackIcon from './svg/slack.svg';
import GitIcon from './svg/gitIcon.svg';
import GithubIcon from './svg/github.svg';
import VScodeIcon from './svg/vscode.svg';

export const iconNames = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Sass',
  'Recoil',
  'Bootstrap',
  'Material-UI',
  'express',
  'Sequelize',
  'MySQL',
  'Jira',
  'Confluence',
  'Slack',
  'Git',
  'GitHub',
  'VSCode',
] as const;
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
  Sass: SassIcon,
  Recoil: RecoilIcon,
  Bootstrap: BootstrapIcon,
  'Material-UI': MaterialIcon,
  express: ExpressIcon,
  Sequelize: SequelizeIcon,
  MySQL: MySQLIcon,
  Jira: JiraIcon,
  Confluence: ConfluenceIcon,
  Slack: SlackIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  VSCode: VScodeIcon,
};

export const findIconName = (name: string) => {
  const iconKeys = Object.values(iconNames) as IconNameType[];
  const findNames = iconKeys.filter(
    v => name.toLowerCase().includes(v.toLowerCase()) || v.toLowerCase().includes(name.toLowerCase()),
  );

  if (findNames.length > 1) return findNames.find(v => v === name) ?? findNames[0];
  else if (findNames.length === 1) return findNames[0];
  else return;
};
