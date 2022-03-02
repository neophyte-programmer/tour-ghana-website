/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*==== MENU SHOW ====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

/*==== MENU HIDDEN ====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById('header')
	// When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 100) header.classList.add('scroll-header')
	else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let windowWidth = document.documentElement.clientWidth || window.innerWidth
slides = 0

if (windowWidth < 480) slides = 2
else slides = 3

let swiper = new Swiper('.discover__container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: slides,
	loop: true,
	spaceBetween: 0,
	coverflowEffect: {
		rotate: 50,
	},
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playPause() {
	if (videoFile.paused) {
		// Play video
		videoFile.play()

		// Change icon on click
		videoIcon.classList.add('ri-pause-line')
		videoIcon.classList.remove('ri-play-line')
	} else {
		// Pause video
		videoFile.pause()

		// Change icon on click
		videoIcon.classList.add('ri-play-line')
		videoIcon.classList.remove('ri-pause-line')
	}
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
	// Change icon when video ends
	videoIcon.classList.add('ri-play-line')
	videoIcon.classList.remove('ri-pause-line')
}

videoFile.addEventListener('ended', finalVideo)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up')
	// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 200) scrollUp.classList.add('show-scroll')
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SESSIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link')
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
	distance: '60px',
	duration: 2800,
	reset: true,
})

sr.reveal(
	`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,
	{
		origin: 'top',
		interval: 100,
	}
)

sr.reveal(
	`.about__data, 
           .video__description,
           .subscribe__description`,
	{
		origin: 'left',
	}
)

sr.reveal(
	`.about__img-overlay, 
           .video__content,
           .subscribe__form`,
	{
		origin: 'right',
		interval: 100,
	}
)
