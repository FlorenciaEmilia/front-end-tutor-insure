const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	if (toggleButton.getAttribute('src') === './images/icon-hamburger.svg') {
		toggleButton.src = './images/icon-close.svg';
	} else {
		toggleButton.src = './images/icon-hamburger.svg';
	}
	navbarLinks.classList.toggle('active');
});


