const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const links = $$('.link');

links.forEach(item => {
    item.onclick = function () {
        const active = $('.link.active');
        if (active) {
            active.classList.remove('active')
        }
        this.classList.add('active')
    }
})