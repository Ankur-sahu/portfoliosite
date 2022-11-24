let star = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
let info = document.getElementById('info');
let rect = info.getBoundingClientRect();//getting X and Y position of element
let developer = document.getElementById('developer');
let menuBtn = document.getElementsByClassName('btn-menu');
let sidemenu = document.getElementById('sidemenu');
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click',()=>{
        if (i==0) {
            sidemenu.style.right = -100 + "%";
        } else {
            sidemenu.style.right = "0";
        }
        
    })
}
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    star.style.left = value * 0.25 + "px";
    moon.style.top = value *1.3 + "px";
    mountains_behind.style.top = value *0.5 + "px";
    info.style.top = rect.y + value + "px";
    btn.style.marginTop = value *1.5 + "px";
    header.style.top = value *0.5 + "px";
}) 
