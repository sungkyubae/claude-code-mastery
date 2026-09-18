# 개발자 웹 이력서 개발 로드맵

## 프로젝트 개요
HTML, CSS, JavaScript, Tailwind CSS로 제작하는 반응형 웹 이력서(온라인 포트폴리오 겸용) 프로젝트입니다.

- **기술 스택**: HTML5, CSS3, Vanilla JavaScript, Tailwind CSS
- **산출물**: 정적 웹사이트 1페이지 (필요 시 다크모드, 인쇄/PDF 출력 지원)
- **목표**: 실제 채용 담당자에게 공유 가능한 수준의 완성도 있는 온라인 이력서

---

## Phase 0. 준비 단계
- [x] 프로젝트 폴더 구조 설계
  ```
  /
  ├── index.html
  ├── src/
  │   ├── input.css        # Tailwind 진입 CSS
  │   └── main.js
  ├── dist/
  │   └── output.css       # Tailwind 빌드 결과물
  ├── assets/
  │   ├── images/          # 프로필 사진, 아이콘 등
  │   └── resume.pdf       # 다운로드용 이력서 PDF (선택)
  ├── tailwind.config.js
  ├── package.json
  └── README.md
  ```
- [x] Node.js 및 npm 설치 확인
- [x] Tailwind CSS 설치 및 초기화 (`npm install -D tailwindcss`, `npx tailwindcss init`)
- [x] `tailwind.config.js`에 content 경로(`./index.html`, `./src/**/*.js`) 설정
- [x] Git 저장소 초기화 및 `.gitignore` 작성 (node_modules, dist 등)
- [x] 배포 방식 결정 (GitHub Pages / Vercel / Netlify) — GitHub Pages로 결정 (실제 배포는 Phase 6에서 진행)

---

## Phase 1. 콘텐츠 기획 (이력서 정보 정리)
일반적인 개발자 이력서에 들어가는 표준 항목을 기준으로 정리합니다.

- [x] **헤더/프로필**: 이름, 직무(예: Frontend Developer), 프로필 사진, 한 줄 소개(태그라인)
- [x] **연락처**: 이메일, 전화번호, GitHub, LinkedIn, 블로그/포트폴리오 링크 (SNS 링크는 별도 `social` 목록으로 분리: GitHub, YouTube, Instagram, LinkedIn)
- [x] **자기소개 (About)**: 3~5문장 정도의 개발자 소개, 강점, 지향점
- [x] **기술 스택 (Skills)**: 카테고리별 정리
  - Language: JavaScript, TypeScript, Java 등
  - Frontend: HTML, CSS, React, Tailwind 등
  - Backend: Node.js, Spring, Express 등
  - Tools/Infra: Git, Docker, AWS, CI/CD 등
- [x] **경력 (Experience)**: 회사명, 직책, 재직 기간, 담당 업무, 주요 성과(정량적 지표 포함 권장)
- [x] **프로젝트 (Projects)**: 프로젝트명, 기간, 사용 기술, 역할, 주요 성과, 링크(Github/배포 URL)
- [x] **학력 (Education)**: 학교명, 전공, 재학 기간, 학위
- [x] **자격증/수상 (Certificates & Awards)**: 자격증명, 취득일, 발급기관
- [x] **기타**: 사용 가능 언어, 취미/관심사(선택 사항)
- [x] 위 항목을 `content.json` 또는 JS 객체 형태로 데이터화하여 마크업과 콘텐츠 분리 고려 — `src/content.js`의 `window.RESUME_CONTENT` 객체로 구현 (현재 모두 플레이스홀더 데이터, 실제 정보로 교체 필요)

---

## Phase 2. 마크업 구조 설계 (HTML)
- [x] 시맨틱 태그 기반 레이아웃 설계 (`header`, `nav`, `main`, `section`, `footer`)
- [x] 섹션별 앵커(id) 지정 및 네비게이션 링크 연결 (`#about`, `#skills`, `#experience`, `#projects`, `#education`, `#contact`)
- [x] 접근성(a11y) 고려: `alt` 속성, `aria-label`, 적절한 heading 레벨(h1~h3) 구조화
- [x] SEO 기본 메타 태그 작성 (title, description, Open Graph 태그)
- [x] 파비콘 및 소셜 공유 썸네일 이미지 준비 — 파비콘은 인라인 SVG data URI, 썸네일은 프로필 placeholder SVG로 대체

---

## Phase 3. 스타일링 (Tailwind CSS)
- [x] 디자인 컨셉 및 컬러 팔레트 결정 (Primary/Secondary/Accent 색상)
- [x] `tailwind.config.js`에 커스텀 컬러, 폰트, breakpoint 등 테마 확장
- [x] 구글 폰트 등 웹폰트 적용
- [x] 공통 컴포넌트 스타일링
  - [x] 헤더/히어로 섹션 (프로필 카드)
  - [x] 네비게이션 바 (스크롤 시 고정, 모바일 햄버거 메뉴)
  - [x] 기술 스택 뱃지/태그 컴포넌트
  - [x] 타임라인 형태의 경력/학력 리스트
  - [x] 프로젝트 카드 그리드
  - [x] 연락처/푸터 섹션 (SNS 아이콘 링크 포함)
- [x] 반응형 디자인 적용 (모바일 → 태블릿 → 데스크톱, `sm/md/lg/xl` breakpoint)
- [x] 다크 모드 지원 (`dark:` variant, 클래스 토글 방식)
- [x] 인쇄용(`print:`) 스타일 정리 (PDF로 저장 시 불필요한 요소 숨김)

---

## Phase 4. 인터랙션 구현 (JavaScript)
- [x] 모바일 네비게이션 메뉴 열기/닫기 토글
- [x] 스크롤 시 현재 섹션 하이라이트 (Scroll Spy)
- [x] 다크모드 토글 버튼 및 `localStorage` 상태 저장
- [x] 스크롤 애니메이션 (요소 진입 시 fade-in/slide-up 등, Intersection Observer 활용)
- [x] 이력서 PDF 다운로드 버튼 연결 — 현재 최소 placeholder PDF, 실제 파일로 교체 필요
- [ ] (선택) 연락처 폼 구현 시 유효성 검사 및 전송 처리(이메일 서비스 연동 등)
- [ ] (선택) 다국어(한/영) 전환 기능

---

## Phase 5. 최적화 및 품질 관리
- [ ] 이미지 최적화 (WebP 변환, lazy loading `loading="lazy"`)
- [ ] Tailwind 빌드 시 미사용 클래스 제거(purge) 확인 및 최종 CSS 용량 점검
- [ ] Lighthouse로 성능/접근성/SEO/모범 사례 점수 측정 및 개선
- [ ] 크로스 브라우저 테스트 (Chrome, Edge, Safari, Firefox)
- [ ] 반응형 테스트 (실제 모바일 기기 또는 개발자 도구 디바이스 모드)
- [ ] 키보드 내비게이션 및 스크린리더 접근성 점검

---

## Phase 6. 배포
- [ ] `npm run build`로 Tailwind CSS 프로덕션 빌드 생성
- [ ] GitHub 저장소에 push
- [ ] GitHub Pages / Vercel / Netlify 중 택1하여 배포 설정
- [ ] 커스텀 도메인 연결 (선택 사항)
- [ ] 배포 후 실제 URL 기준으로 최종 점검

---

## Phase 7. 유지보수
- [ ] 경력/프로젝트 추가 시 콘텐츠 업데이트 절차 문서화
- [ ] 정기적으로 기술 스택 및 프로젝트 최신화
- [ ] 방문자 분석 도구 연동 (선택, 예: Google Analytics, Plausible)

---

## 참고: 우선순위 제안
1. Phase 0~2 (환경 세팅 + 콘텐츠 확정 + 기본 마크업) → 뼈대 완성
2. Phase 3 (Tailwind 스타일링) → 시각적 완성도 확보
3. Phase 4 (인터랙션) → 사용성 개선
4. Phase 5~6 (최적화 및 배포) → 실제 공개 가능한 상태로 마무리
