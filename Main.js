function displayLinks(links, width) {
    var x = document.getElementById(links);
    if (x.style.display === 'none') {
	x.style.display = 'block';
	x.style.width = width;	
    } else {
	x.style.display = 'none';	
    }
}

