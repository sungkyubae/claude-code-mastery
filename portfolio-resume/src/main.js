// SNS 플랫폼별 인라인 SVG 아이콘 매핑 (외부 이미지 요청 없이 file://에서도 바로 동작)
const SOCIAL_ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.1 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.1ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.5.42a5 5 0 0 1 1.8 1.17c.5.5.85 1.1 1.17 1.8.17.5.36 1.3.42 2.5.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.5a5 5 0 0 1-1.17 1.8 5 5 0 0 1-1.8 1.17c-.5.17-1.3.36-2.5.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.5-.42a5 5 0 0 1-1.8-1.17 5 5 0 0 1-1.17-1.8c-.17-.5-.36-1.3-.42-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.5a5 5 0 0 1 1.17-1.8A5 5 0 0 1 5.66 1.63c.5-.17 1.3-.36 2.5-.42C9.4 1.15 9.8 1.15 12 1.15Zm0 2c-3.15 0-3.52.01-4.76.07-1 .05-1.5.21-1.85.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.3.85-.35 1.85C3.06 8.36 3.05 8.73 3.05 12s.01 3.64.07 4.88c.05 1 .21 1.5.35 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.85.3 1.85.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1-.05 1.5-.21 1.85-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.85.35-1.85.06-1.24.07-1.61.07-4.88s-.01-3.64-.07-4.88c-.05-1-.21-1.5-.35-1.85a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.85-.3-1.85-.35C15.52 4.16 15.15 4.15 12 4.15Zm0 3.4a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9Zm0 7.34a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8Zm5.66-7.5a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
  default:
    '<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7-1h6v2h-6v-2Zm4-4h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V7Z"/></svg>',
}

function socialIconMarkup(platform) {
  return SOCIAL_ICONS[platform] || SOCIAL_ICONS.default
}

// 텍스트를 HTML 특수문자로 이스케이프 (콘텐츠 데이터를 innerHTML에 안전하게 삽입하기 위함)
function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

function renderProfile(profile) {
  document.getElementById('profile-photo').src = profile.photo
  document.getElementById('profile-photo').alt = `${profile.name} 프로필 사진`
  document.getElementById('profile-name').textContent = profile.name
  document.getElementById('profile-job-title').textContent = profile.jobTitle
  document.getElementById('profile-tagline').textContent = profile.tagline
  document.getElementById('header-name').textContent = profile.name
  document.getElementById('footer-copyright').textContent = `© ${new Date().getFullYear()} ${profile.name}`
}

function renderAbout(aboutSentences) {
  const container = document.getElementById('about-content')
  container.innerHTML = aboutSentences.map((sentence) => `<p>${escapeHtml(sentence)}</p>`).join('')
}

function renderSkills(skills) {
  const categoryLabels = {
    language: 'Language',
    frontend: 'Frontend',
    backend: 'Backend',
    toolsInfra: 'Tools / Infra',
  }
  const container = document.getElementById('skills-content')
  container.innerHTML = Object.entries(skills)
    .map(([category, items]) => {
      const badges = items.map((item) => `<span class="skill-badge">${escapeHtml(item)}</span>`).join('')
      return `
        <div>
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary-500 dark:text-secondary-400">${categoryLabels[category] || category}</h3>
          <div class="flex flex-wrap gap-2">${badges}</div>
        </div>
      `
    })
    .join('')
}

function renderExperience(experienceList) {
  const container = document.getElementById('experience-content')
  container.innerHTML = experienceList
    .map(
      (item) => `
        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <h3 class="font-semibold">${escapeHtml(item.company)} · ${escapeHtml(item.role)}</h3>
          <p class="text-sm text-secondary-500 dark:text-secondary-400">${escapeHtml(item.period)}</p>
          <p class="mt-1 text-secondary-700 dark:text-secondary-200">${escapeHtml(item.description)}</p>
          <ul class="mt-2 list-inside list-disc text-secondary-700 dark:text-secondary-200">
            ${item.achievements.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}
          </ul>
        </div>
      `
    )
    .join('')
}

function renderProjects(projectList) {
  const track = document.getElementById('projects-track')
  track.innerHTML = projectList
    .map(
      (project) => `
        <div class="project-slide">
          <div class="project-card">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)} 썸네일" class="h-40 w-full object-cover" />
            <div class="p-6">
              <h3 class="font-semibold">${escapeHtml(project.name)}</h3>
              <p class="text-sm text-secondary-500 dark:text-secondary-400">${escapeHtml(project.period)}</p>
              <div class="mt-2 flex flex-wrap gap-1">
                ${project.stack.map((s) => `<span class="skill-badge">${escapeHtml(s)}</span>`).join('')}
              </div>
              <p class="mt-2 text-sm text-secondary-700 dark:text-secondary-200">${escapeHtml(project.role)}</p>
              <ul class="mt-2 list-inside list-disc text-sm text-secondary-700 dark:text-secondary-200">
                ${project.achievements.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}
              </ul>
              <div class="mt-3 flex gap-3 text-sm font-medium text-primary-600 dark:text-primary-400">
                ${project.githubUrl ? `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                ${project.demoUrl ? `<a href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer">Demo</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join('')

  const dotsContainer = document.getElementById('projects-dots')
  dotsContainer.innerHTML = projectList
    .map(
      (project, index) => `
        <button
          type="button"
          class="carousel-dot"
          data-index="${index}"
          aria-label="${index + 1}번째 프로젝트(${escapeHtml(project.name)})로 이동"
        ></button>
      `
    )
    .join('')
}

function renderEducation(educationList) {
  const container = document.getElementById('education-content')
  container.innerHTML = educationList
    .map(
      (item) => `
        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <h3 class="font-semibold">${escapeHtml(item.school)} · ${escapeHtml(item.major)}</h3>
          <p class="text-sm text-secondary-500 dark:text-secondary-400">${escapeHtml(item.period)} (${escapeHtml(item.degree)})</p>
        </div>
      `
    )
    .join('')
}

function renderCertificates(certificateList) {
  const container = document.getElementById('certificates-content')
  container.innerHTML = `
    <ul class="space-y-1 text-secondary-700 dark:text-secondary-200">
      ${certificateList
        .map((c) => `<li>${escapeHtml(c.name)} · ${escapeHtml(c.issuer)} (${escapeHtml(c.date)})</li>`)
        .join('')}
    </ul>
  `
}

function renderContactAndSocial(contact, social) {
  const contactContainer = document.getElementById('contact-content')
  contactContainer.innerHTML = `
    <p>이메일: <a href="mailto:${escapeHtml(contact.email)}" class="text-primary-600 dark:text-primary-400">${escapeHtml(contact.email)}</a></p>
    <p>전화: ${escapeHtml(contact.phone)}</p>
    <p>블로그: <a href="${escapeHtml(contact.blog)}" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400">${escapeHtml(contact.blog)}</a></p>
  `

  // #contact 섹션: 아이콘 + 라벨 나열형
  const socialLinksContainer = document.getElementById('social-links')
  socialLinksContainer.innerHTML = social
    .map(
      (item) => `
        <a
          href="${escapeHtml(item.url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="${escapeHtml(item.label)} 방문하기"
        >
          ${socialIconMarkup(item.platform)}
          <span>${escapeHtml(item.label)}</span>
        </a>
      `
    )
    .join('')

  // footer: 아이콘 전용 축약형
  const footerIconsContainer = document.getElementById('footer-social-icons')
  footerIconsContainer.innerHTML = social
    .map(
      (item) => `
        <a
          href="${escapeHtml(item.url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon-btn"
          aria-label="${escapeHtml(item.label)} 방문하기"
        >
          ${socialIconMarkup(item.platform)}
        </a>
      `
    )
    .join('')
}

function renderContent(content) {
  renderProfile(content.profile)
  renderAbout(content.about)
  renderSkills(content.skills)
  renderExperience(content.experience)
  renderProjects(content.projects)
  renderEducation(content.education)
  renderCertificates(content.certificates)
  renderContactAndSocial(content.contact, content.social)
}

function setupMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')

  function closeMenu() {
    menu.hidden = true
    menuBtn.setAttribute('aria-expanded', 'false')
    menuBtn.textContent = '☰'
    menuBtn.setAttribute('aria-label', '메뉴 열기')
  }

  function openMenu() {
    menu.hidden = false
    menuBtn.setAttribute('aria-expanded', 'true')
    menuBtn.textContent = '✕'
    menuBtn.setAttribute('aria-label', '메뉴 닫기')
  }

  menuBtn.addEventListener('click', () => {
    if (menu.hidden) openMenu()
    else closeMenu()
  })

  menu.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })
}

function setupDarkMode() {
  const toggleBtn = document.getElementById('dark-mode-toggle')
  const root = document.documentElement

  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark')
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙'
  }

  let storedTheme = null
  try {
    storedTheme = localStorage.getItem('theme')
  } catch (e) {
    // localStorage 접근 불가(프라이빗 모드 등) 시 시스템 설정으로 폴백
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(storedTheme || (prefersDark ? 'dark' : 'light'))

  toggleBtn.addEventListener('click', () => {
    const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'
    applyTheme(nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch (e) {
      // 저장 실패 시 무시 (테마 적용 자체는 정상 동작)
    }
  })
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('main section[id]')
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const id = entry.target.id
        navLinks.forEach((link) => {
          link.classList.toggle('nav-link-active', link.dataset.nav === id)
        })
      })
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )

  sections.forEach((section) => observer.observe(section))
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  revealElements.forEach((el) => observer.observe(el))
}

function setupProjectsCarousel() {
  const track = document.getElementById('projects-track')
  const prevBtn = document.getElementById('projects-prev')
  const nextBtn = document.getElementById('projects-next')
  const dots = Array.from(document.querySelectorAll('#projects-dots .carousel-dot'))
  const slides = Array.from(track.children)

  if (slides.length === 0) return

  function slideStep() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return slides[0].getBoundingClientRect().width + gap
  }

  function updateArrowState() {
    const maxScroll = track.scrollWidth - track.clientWidth
    prevBtn.disabled = track.scrollLeft <= 4
    nextBtn.disabled = track.scrollLeft >= maxScroll - 4
  }

  function updateActiveDot() {
    const step = slideStep()
    const activeIndex = step > 0 ? Math.round(track.scrollLeft / step) : 0
    dots.forEach((dot, index) => {
      dot.classList.toggle('carousel-dot-active', index === activeIndex)
    })
  }

  // requestAnimationFrame으로 스크롤 이벤트를 한 프레임당 한 번만 처리 (디바운스)
  let ticking = false
  function handleScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      updateArrowState()
      updateActiveDot()
      ticking = false
    })
  }

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' })
  })

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' })
  })

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slides[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    })
  })

  track.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleScroll)

  handleScroll()
}

document.addEventListener('DOMContentLoaded', () => {
  renderContent(window.RESUME_CONTENT)
  setupMobileNav()
  setupDarkMode()
  setupScrollSpy()
  setupScrollReveal()
  setupProjectsCarousel()
})
