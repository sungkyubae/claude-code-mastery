// 이력서 전체 콘텐츠 데이터 (단일 소스)
// 아직 실제 정보가 없어 모두 플레이스홀더로 채워져 있습니다.
// 실제 이력서 정보로 교체할 때는 이 파일의 값만 수정하면 됩니다.
window.RESUME_CONTENT = {
  profile: {
    name: '홍길동',
    jobTitle: 'Frontend Developer',
    tagline: '사용자 경험을 세심하게 다듬는 프론트엔드 개발자입니다.',
    photo: 'assets/images/profile-placeholder.svg',
  },

  contact: {
    email: 'hong.gildong@example.com',
    phone: '010-1234-5678',
    blog: 'https://blog.example.com',
  },

  // SNS 링크 목록: platform 식별자를 기준으로 아이콘을 매핑합니다 (src/main.js의 SOCIAL_ICONS 참고)
  social: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/example',
    },
    {
      platform: 'youtube',
      label: 'YouTube',
      url: 'https://youtube.com/@example',
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com/example',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/example',
    },
  ],

  about: [
    '3년차 프론트엔드 개발자로, 사용자 인터페이스를 만들고 개선하는 일에 즐거움을 느낍니다.',
    'React와 Tailwind CSS를 주로 사용하며, 접근성과 성능을 함께 고려한 개발을 지향합니다.',
    '팀원들과의 명확한 커뮤니케이션을 중요하게 생각하며, 문제를 근본부터 해결하는 것을 선호합니다.',
    '새로운 기술을 학습하고 실제 프로젝트에 적용해보는 과정을 즐깁니다.',
  ],

  skills: {
    language: ['JavaScript', 'TypeScript', 'Java'],
    frontend: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Spring'],
    toolsInfra: ['Git', 'Docker', 'AWS', 'GitHub Actions'],
  },

  experience: [
    {
      company: 'OOO 주식회사',
      role: '프론트엔드 개발자',
      period: '2022.03 - 재직중',
      description: '웹 서비스의 프론트엔드 개발 및 유지보수를 담당했습니다.',
      achievements: [
        '페이지 로딩 속도를 30% 개선',
        '컴포넌트 라이브러리 구축으로 개발 속도 향상',
      ],
    },
    {
      company: 'XXX 스타트업',
      role: '주니어 개발자',
      period: '2020.07 - 2022.02',
      description: '사내 관리자 페이지 개발 및 API 연동 업무를 수행했습니다.',
      achievements: ['신규 관리자 대시보드 기능 개발 및 배포'],
    },
  ],

  projects: [
    {
      name: '개발자 웹 이력서',
      period: '2026.09',
      stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
      role: '기획 및 개발',
      achievements: ['다크모드, 인쇄용 스타일, 스크롤 애니메이션 구현'],
      githubUrl: 'https://github.com/example/resume',
      demoUrl: '',
      image: 'assets/images/project-sample-1.svg',
    },
    {
      name: '샘플 프로젝트',
      period: '2025.01 - 2025.03',
      stack: ['React', 'Node.js'],
      role: '풀스택 개발',
      achievements: ['예시 프로젝트 설명입니다.'],
      githubUrl: 'https://github.com/example/sample-project',
      demoUrl: 'https://example-project.vercel.app',
      image: 'assets/images/project-sample-2.svg',
    },
  ],

  education: [
    {
      school: 'OO대학교',
      major: '컴퓨터공학과',
      period: '2016.03 - 2020.02',
      degree: '학사',
    },
  ],

  certificates: [
    {
      name: '정보처리기사',
      date: '2020.05',
      issuer: '한국산업인력공단',
    },
  ],

  misc: {
    languages: ['한국어(모국어)', '영어(비즈니스 회화)'],
    hobbies: ['등산', '사진 촬영'],
  },
}
