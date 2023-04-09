function animateNav(eventTracker, changedElement, property) {
    const openButton = document.querySelector(eventTracker);
    const overlay = document.querySelector(changedElement);
    
    openButton.addEventListener('click', changeNavPropSize(overlay, property));
}
function changeNavPropSize(element ,property) {    
    if (element.style[property] == '0%') {
	element.style[property] = '100%';
    } else {
	element.style[property] = '0%';
    }
}

function toggleIcon(containerDiv, className, oldIcon, newIcon, linksClass) {
    var icon = containerDiv.querySelector(className);
    var links = containerDiv.parentElement.querySelector(linksClass);
    icon.classList.toggle(oldIcon);    
    icon.classList.toggle(newIcon);
    links.style.display = (links.style.display === "none") ? "block" : "none";
    if (icon.classList.contains(newIcon)) {
	icon.style.transform = "rotate(360deg)";
    } else {
	icon.style.transform = "rotate(90deg)";
    }
}

