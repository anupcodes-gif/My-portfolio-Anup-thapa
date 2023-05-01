document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close-btn')
  const toggleBtn = document.querySelector('.toggle-btn')
  const navLinks = document.querySelector('.nav-links')
  const aboutBtn = document.querySelector('.about')
  const aboutMeBtn = document.querySelector('.about-me')
  const projectBtn = document.querySelector('.project-btn')
  const project = document.querySelector('.project')
  const contactBtn = document.querySelector('.contact-btn')
  const contactt = document.querySelector('.contact')

  toggleBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'none') {
      navLinks.style.display = 'block'
    } else {
      navLinks.style.display = 'none'
    }
  })

  function toggleSection(button, section, otherSections) {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      if (section.style.display === 'none') {
        otherSections.forEach((s) => {
          s.style.display = 'none'
        })
        section.style.display = 'block'
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
          offset: { top: -100 },
        })
      } else {
        section.style.display = 'none'
      }
    })
  }
  toggleSection(aboutBtn, aboutMeBtn, [project, contactt])
  toggleSection(projectBtn, project, [aboutMeBtn, contactt])
  toggleSection(contactBtn, contactt, [aboutMeBtn, project])

  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const scrollsButton = document.querySelectorAll('.top-icon')
  scrollsButton.forEach((scrolls) => {
    scrolls.addEventListener('click', scrollToTop)
  })
})
