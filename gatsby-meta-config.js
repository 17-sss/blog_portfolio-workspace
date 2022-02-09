module.exports = {
  // [+] 공통
  common: {
    // 1. 공통 metaData
    metaData: {
      author: `Hoyoung Son`,
      twitter: {
        site: `@17-sss`, // 사용자 이름
        creator: `@17-sss`, // 사용자 이름
      },
      webMasterKeys: {
        google: 'EnJH07IqCza2RRsk3dnbayCSB08fnsvqpMhawDSsOFU',
        naver: 'e2504342f5b1a3a3a9360c2ca831fa1881e6e5b6',
      },
    },
  },

  // -----------------------------------------------------------

  // [1] 블로그
  blog: {
    // 1. 블로그 metaData
    metaData: {
      title: `Hoyoung's Library`,
      siteUrl: `https://17-sss.github.io/`,
      description: `꾸준함이라는 덕목이 최고의 미덕이라고 생각하는 주니어 개발자입니다.`,
    },

    // 2. 댓글 위젯 옵션
    utterances: {
      src: 'https://utteranc.es/client.js',
      repo: '17-sss/17-sss.github.io',
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    },
  },

  // -----------------------------------------------------------

  // [2] 포트폴리오
  portfolio: {
    // 1. 포트폴리오 metaData
    metaData: {
      title: `Developer Hoyoung's portfolio`,
      siteUrl: `https://17-sss.github.io/portfolio`,
      description: `주니어 개발자 손호영의 포트폴리오 입니다.`,
    },

    // 2. 페이지 구성 데이터
    config: {
      // + Header
      header: {
        text: 'PORTFOLIO',
      },
      // + Footer
      footer: {
        text: `© 2022. Hoyoung Son <Rano>. All rights reserved.`,
      },
      // + Sections
      sections: {
        // 1) Home (메인)
        home: {
          text: `Developer Hoyoung's portfolio.`,
        },
        // 2) introduce (소개)
        introduce: {
          text: '꾸준함이라는 덕목이 최고의 미덕이라고 생각하는 주니어 개발자입니다.',
          profileCard: {
            name: '손호영',
            antecedents: [
              '2021.07 ~ 2021.08|네이버 부스트캠프 (웹 풀스택 : 챌린지) 교육과정 수료',
              '2021.01 ~ 2021.06|코드스쿼드 마스터즈 코스 (프론트엔드) 교육과정 수료',
              '2018.11 ~ 2020.12|프로그램 유지보수 개발자',
              '2017.11 ~ 2018.04|Java & SpringFramework 기반 국비지원 교육과정 수료',
            ],
            imageInfo: { staticSrc: '/profile-image.jpeg', alt: `Hoyoung's profile image` },
            contactInfo: {
              github: `https://github.com/17-sss`,
              instagram: `https://www.instagram.com/17__sss/`,
              email: `mailto:xzxking17@gmail.com`,
            },
          },
          introduceList: {
            motivation: {
              subject: '동기',
              contents: `저는 과거에 운동선수를 했던 경험이 있습니다. 
                선수 시절에 병상에서 개발자 도구를 통해 웹이 문자로만 되어 있는 것을 보고 흥미를 가지게 되었고,
                꿈을 품게 되었습니다.`,
            },
            goal: {
              subject: '목표',
              contents: `그저 흥미로 시작했고 지금도 여전히 좋아하는 분야입니다. 
                현재 프론트엔드 개발자가 되기 위해 다양한 교육과정을 수료했으며, 
                프론트엔드 개발자라는 꿈을 이루고 더 나아가 풀스택 개발자가 되는 것이 목표입니다.`,
            },
            direction: {
              subject: '방향',
              contents: `무엇보다 꾀 많은 토끼보다는 포기하지 않는 거북이가 옳다고 생각합니다. 
              지금처럼 꾸준하게 학습하며 프론트엔드 개발자라는 하나의 목표가 이루어지고 
              더욱 성장하기 위해 필요 지식을 습득하여 다음 목표를 향해 나아갈 것입니다.`,
            },
          },
        },
        // 3) skills (사용 기술)
        skills: {
          text: '한번씩은 접해봤던 기술들을 나열한 공간입니다.',
          skillList: {
            frontend: [
              { name: 'HTML', color: '#E34F26' },
              { name: 'CSS', color: '#1572B6' },
              { name: 'JavaScript', color: '#F7DF1E' },
              { name: 'TypeScript', color: '#3178C6' },
              { name: 'React', color: '#61DAFB' },
              { name: 'Sass', color: '#CC6699' },
              { name: 'Recoil', color: '#3577E5' },
              // { name: 'Bootstrap', color: '#7952B3' }, // 사용 안함
              { name: 'Material-UI', color: '#0081CB' },
            ],
            backend: [
              { name: 'express', color: '#000' },
              { name: 'Sequelize', color: '#52B0E7' },
              { name: 'MySQL', color: '#4479A1' },
            ],
            communication: [
              { name: 'Jira', color: '#0052CC' },
              { name: 'Confluence', color: '#172B4D' },
              { name: 'Slack', color: '#4A154B' },
            ],
            tools: [
              { name: 'Git', color: '#F05032' },
              { name: 'GitHub', color: '#181717' },
              { name: 'VSCode', color: '#007ACC' },
            ],
          },
          // <옵션> 기술의 척도를 %로 나타낼 것인지. (최대 5개) / isUseTopSkillCards가 true여야 표시함.
          isUseTopSkillCards: false,
          topSkillList: [
            { name: 'HTML', percent: 70, color: '#E34F26' },
            { name: 'CSS', percent: 60, color: '#1572B6' },
            { name: 'JavaScript', percent: 65, color: '#F7DF1E' },
            { name: 'TypeScript', percent: 60, color: '#3178C6' },
            { name: 'React', percent: 65, color: '#61DAFB' },
          ],
          // ---
        },
        // 4) projects (그동안 해왔던 프로젝트)
        // <참고> 각 프로젝트의 내용 데이터는 "./contents/_portfolio" 안에 있는 파일들 참고
        projects: {
          text: '그동안 작업한 프로젝트 & 라이브러리 입니다.',
        },
      },
    },
  },
};
