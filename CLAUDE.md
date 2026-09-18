# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개발자 웹 이력서(온라인 포트폴리오 겸용) 프로젝트입니다. HTML, CSS, JavaScript, Tailwind CSS로 제작하는 반응형 정적 웹사이트이며, 현재는 초기 기획 단계로 `ROADMAP.md`에 정의된 8단계(Phase 0~7)를 따라 개발을 진행합니다. 구현 전 반드시 `ROADMAP.md`를 확인하여 현재 어느 Phase에 해당하는지 파악하세요.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 아키텍처 (계획된 구조)

`ROADMAP.md`의 Phase 0에 정의된 구조를 기준으로 프로젝트를 구성합니다.

```
/
├── index.html
├── src/
│   ├── input.css        # Tailwind 진입 CSS
│   └── main.js
├── dist/
│   └── output.css       # Tailwind 빌드 결과물
├── assets/
│   ├── images/           # 프로필 사진, 아이콘 등
│   └── resume.pdf        # 다운로드용 이력서 PDF (선택)
├── tailwind.config.js
└── package.json
```

- 콘텐츠(경력, 프로젝트, 기술 스택 등)는 `src/content.js`에서 `window.RESUME_CONTENT` 전역 객체로 정의합니다. `fetch('content.json')`은 `index.html`을 `file://`로 직접 열 때 CORS로 차단되기 때문에 일반 `<script>` 로드 방식을 사용합니다. 현재 값은 모두 플레이스홀더이며 실제 이력서 정보로 교체가 필요합니다.
- 다크 모드는 Tailwind의 `dark:` variant와 클래스 토글 방식으로 구현하며, 상태는 `localStorage`에 저장합니다(`src/main.js`의 `setupDarkMode`).
- 인쇄/PDF 출력을 위해 `print-hidden` 유틸리티 클래스와 `@media print` 스타일을 `src/input.css`에 정리했습니다.
- 스크롤 애니메이션과 스크롤 스파이는 Intersection Observer API를 사용합니다(`src/main.js`의 `setupScrollReveal`, `setupScrollSpy`).
- Tailwind CSS는 **v3**(`^3.4.19`)를 사용합니다. v4는 CSS-first config로 전환되어 `ROADMAP.md`에 기술된 `tailwind.config.js` 기반 워크플로우와 맞지 않고, 구버전 브라우저 호환성 리스크도 있어 채택하지 않았습니다.
- `assets/resume.pdf`는 다운로드 버튼 동작 확인용 최소 placeholder PDF입니다. 실제 이력서 PDF 파일로 교체해야 합니다.

## 개발 명령어

- 의존성 설치: `npm install`
- Tailwind CSS 개발 중 watch 빌드: `npm run dev`
- Tailwind CSS 프로덕션 빌드(minify): `npm run build`
- 로컬 정적 서버 실행 (선택, `index.html`을 `file://`로 직접 열어도 동작하지만 실제 배포 경로를 검증할 때 권장): `npm run serve`

## 참고 문서

- `ROADMAP.md`: 전체 개발 단계(Phase 0~7)와 각 단계별 체크리스트가 정의되어 있습니다. 새로운 기능을 구현하기 전 관련 Phase의 항목을 확인하세요.
