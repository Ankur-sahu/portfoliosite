let star = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let btn = document.getElementById('btn');
//let header = document.querySelector('header');
let info = document.getElementById('info');
let rect = info.getBoundingClientRect();//getting X and Y position of element
let developer = document.getElementById('developer');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    star.style.left = value * 0.25 + "px";
    moon.style.top = value *1.3 + "px";
    mountains_behind.style.top = value *0.5 + "px";
    info.style.top = rect.y + value + "px";
    btn.style.marginTop = value *1.5 + "px";
}) 
