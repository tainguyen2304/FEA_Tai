const accordionList = document.getElementsByClassName('accordion');
if (accordionList) {
    for (let accordion of accordionList) {
        accordion.onclick = function () {
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            }
            else {
                panel.style.display = 'block';
            }
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }
    }
}