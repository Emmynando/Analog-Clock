'use strict';

const hourDial = document.querySelector('#hour');
const minDial = document.querySelector('#minute');
const secDial = document.querySelector('#seconds');

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    
    let hRotate = hours * 30 + mins / 2;
    let mRotate = 6 * mins;
    let sRotate = 6 * secs;
    
    hourDial.style.transform = `rotate(${hRotate}deg)`;
    minDial.style.transform = `rotate(${mRotate}deg)`;
    secDial.style.transform = `rotate(${sRotate}deg)`;
    
}, 1000);