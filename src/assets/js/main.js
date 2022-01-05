const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const links = $$('.link');
const boxImg = $('#boxImg');
const boxLine = $('#boxLine');



links.forEach(item => {
    item.onclick = function () {
        const active = $('.link.active');
        if (active) {
            active.classList.remove('active')
        }
        this.classList.add('active')
    }
})

const handleMouseOverW = (e) => {
    
    boxImg.style.transform = `translate3d(-${e.clientX / 50}px, -${e.clientY / 50}px, 0px)`;
    // boxLine.style.transform = `translate(${e.clientX / 80}px, ${e.clientY / 80}px)`;
    
    
   
}

window.addEventListener("mousemove", handleMouseOverW)
