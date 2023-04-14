//these first two functions are used in the navigation, but might be used for other elements later
function openNav() {
    const x = document.querySelector('.overlay');
    if (x.style.width != '100%') {
	x.style.width = '100%';
    } else {
	x.style.width = '0';
    }
    
}
// changes an icon
function toggleIcon(containerDiv, className, oldIcon, newIcon) {
    var icon = containerDiv.querySelector(className);
    icon.classList.toggle(oldIcon);    
    icon.classList.toggle(newIcon);    
    icon.style.transform = icon.classList.contains(newIcon) ? "rotate(180deg)" : "rotate(0deg)";
}

// this function is used for links like the ones in the footer
function displayLinks(linksClass) {
    const links = document.querySelector(linksClass);
    links.style.display = (links.style.display != "block") ? "block" : "none";
}



