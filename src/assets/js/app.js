const btnDarkMode = document.querySelector('.dark-mode-btn')

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
}

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn--active')
    document.body.classList.remove('dark')
}

// при смене системных настроек меняется тема
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    const colorTheme = e.matches ? 'dark' : 'light'

    if (colorTheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active')
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')

    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active')
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')
    }
})

btnDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
})


const navProjects = document.getElementById('navProjects')
const navSkills = document.getElementById('navSkills')
const navContacts = document.getElementById('navContacts')

if (window.location.pathname === '/index.html') {
    navProjects.classList.add('nav-list__link--active')
    navSkills.classList.remove('nav-list__link--active')
    navContacts.classList.remove('nav-list__link--active')
} else if (window.location.pathname === '/skills.html') {
    navSkills.classList.add('nav-list__link--active')
    navProjects.classList.remove('nav-list__link--active')
    navContacts.classList.remove('nav-list__link--active')
} else if (window.location.pathname === '/contacts.html') {
    navContacts.classList.add('nav-list__link--active')
    navProjects.classList.remove('nav-list__link--active')
    navSkills.classList.remove('nav-list__link--active')
}
