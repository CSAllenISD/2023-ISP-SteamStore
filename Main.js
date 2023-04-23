//these first two functions are used in the navigation, but might be used for other elements later
function openNav() {
    const barsContainer = document.querySelector('.header__bars');
    const nav = document.querySelector('.header__nav');
    barsContainer.addEventListener('click', () => {
	if (nav.style.width != '100%') {
	    nav.style.width = '100%';
	} else {
	    nav.style.width = '0';
	}
    });
}
// changes an icon
function transformIcon(icon, oldIcon, newIcon) {
    icon.classList.toggle(oldIcon);
    icon.classList.toggle(newIcon);
    icon.style.transform = icon.classList.contains(newIcon) ? "rotate(180deg)" : "rotate(0deg)";
}

// this function is used for links like the ones in the footer
function displayLinks() {
    const eventTracker = document.querySelectorAll('.footer__links-title');
    eventTracker.forEach(link => {
	link.addEventListener('click', () => {
	    const list = link.nextElementSibling;
	    list.style.display = (list.style.display != "block") ? "block" : "none";
	});
    });
}

document.addEventListener('DOMContentLoaded', () => {
    openNav();
    displayLinks();
    const footerLinks = document.querySelectorAll('.footer__links-title');
    footerLinks.forEach(link => {
	const icon = link.querySelector('.fa');
	link.addEventListener('click', () => {
	    transformIcon(icon, 'fa-plus', 'fa-minus');
	});
    });
    //<div class="footer__links-title events" onclick="toggleFooterIcon(this); displayLinks('.footer__links-list', 1)
});
