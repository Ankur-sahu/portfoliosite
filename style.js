let star = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
//let header = document.querySelector('header');
let info = document.getElementById('info');
let developer = document.getElementById('developer');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    star.style.left = value * 0.25 + "px";
    moon.style.top = value  + "px";
    mountains_behind.style.top = value *0.5 + "px";
    info.style.top = 200 + value + "px";
    text.style.bottom = 250 + -value + "px";
    btn.style.marginTop = value *1.5 + "px";
}) 