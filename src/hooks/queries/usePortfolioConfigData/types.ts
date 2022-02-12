// [getPortfoiloConfig] - types

// introduce ===========
export interface ProfileCardType {
  antecedents: string[];
  contactInfo: {
    email: string;
    github: string;
    instagram: string;
  };
  imageInfo: {
    alt: string;
    staticSrc: string;
  };
  name: string;
}

const introduceNames = ['direction', 'goal', 'motivation'] as const;
type IntroduceNames = typeof introduceNames[number];
type IntroduceListType = {
  [name in IntroduceNames]: { contents: string; subject: string };
};

export interface PortfolioIntroduceType {
  text: string;
  introduceList: IntroduceListType;
  profileCard: ProfileCardType;
}

// skill ===========

const skillNames = ['backend', 'communication', 'frontend', 'tools'] as const;
type SkillNames = typeof skillNames[number];
interface SkillValues {
  name: string;
  color: string;
}
type SkillListType = {
  [name in SkillNames]: SkillValues[];
};

interface TopSkillValues extends SkillValues {
  percent: number;
}
type TopSkillListType = TopSkillValues[];

// ----------------------------------------------

export interface PortfolioConfigQuery {
  site: {
    siteMetadata: {
      portfolio: {
        config: {
          header: {
            text: string;
          };
          footer: {
            text: string;
          };
          sections: {
            home: {
              text: string;
            };
            introduce: PortfolioIntroduceType;
            projects: {
              /*
                  각 프로젝트의 내용 데이터는 "./contents/_portfolio" 안에 있는 Markdown파일들을 불러옴  
                  (hooks/queries의 usePortfolioMarkdownData() 참고)
                */
              text: string;
            };
            skills: {
              skillList: SkillListType;
              isUseTopSkillCards: boolean;
              topSkillList: TopSkillListType;
              text: string;
            };
          };
        };
      };
    };
  };
}
