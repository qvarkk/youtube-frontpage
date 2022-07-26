const searchBox = document.getElementById('search-input');
const invisibleSeachElement = document.getElementById('visible-on-focus');

window.setInterval(() => {
    if (searchBox === document.activeElement) {
        invisibleSeachElement.classList.remove('transparent');
    } else {
        invisibleSeachElement.classList.add('transparent');
    }
}, 50);