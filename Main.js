//these first two functions are used in the navigation, but might be used for other elements later
function openNav() {
    const barsContainer = document.querySelector('.header__bars');
    const exitContainer = document.querySelector('.header__nav-links--close');
    const nav = document.querySelector('.header__nav');
    
    barsContainer.addEventListener('click', () => {
	if (nav.style.width != '100%') {
	    nav.style.width = '100%';
	}				   
    });
    exitContainer.addEventListener('click', () => {
	if (nav.style.width != '0%') {
	    nav.style.width = '0%';
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
    // Add JavaScript code below the HTML and CSS code

    // Get all the box elements
    var boxes = document.getElementsByClassName('new__box');

    // Set initial index and show the first box
    var currentIndex = 0;
    boxes[currentIndex].classList.add('active');

    // Function to hide all boxes
    function hideBoxes() {
	for (var i = 0; i < boxes.length; i++) {
	    boxes[i].classList.remove('active');
	}
    }

    // Function to show the next box
    function showNextBox() {
	hideBoxes();
	currentIndex = (currentIndex + 1) % boxes.length;
	boxes[currentIndex].classList.add('active');
    }

    // Auto cycle to the next box every 3 seconds
    setInterval(showNextBox, 3000);
});
