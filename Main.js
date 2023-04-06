function animateNav(eventTracker, changedElement, property) {
    var openButton = document.querySelector(eventTracker);
    var overlay = document.querySelector(changedElement);
    
    openButton.addEventListener('click', changeNavPropSize(overlay, property));
}
function changeNavPropSize(element ,property) {    
    if (element.style[property] == "0%") {
	element.style[property] = '100%';
    } else {
	element.style[property] = '0%';
    }
}


