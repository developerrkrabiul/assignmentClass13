
const timeBox = document.querySelector(".time-box");
const timeHour = document.querySelector(".time-hour");
const timeMin = document.querySelector(".time-min");
const timeSic = document.querySelector(".time-sic");
const timeampm = document.querySelector(".ampm");
const timeDate = document.querySelector(".time-date");



setInterval(function(){

    let date = new Date();

    let h       = date.getHours();
    let m       = date.getMinutes();
    let s       = date.getSeconds();
    let d       = date.getDate();
    let month   = date.getMonth();
    let y       = date.getFullYear();

    let hour = "";
    let ampm = "no";

    if(h > 0 && h <= 12){
        hour = h
        ampm = "AM"
    }else if(h == 0 || h > 12){
        hour = h - 12
        ampm = "PM"
    }else{
        hour = "no"
        ampm = "no"
    }

    timeHour.innerHTML = `${zero(Math.abs(hour))}`
    timeMin.innerHTML = `${zero(m)}`
    timeSic.innerHTML = `${zero(s)}`
    timeampm.innerHTML = `${ampm}`
    timeDate.innerHTML = `${zero(d)}/${zero(month + 1)}/${y}`

}, 1000);

// Zero Funtion Work start hear.

/**
 * this funtion creat for get a(0) valu.
 * @param {*} time 
 * @returns just return a(0) .
 */

function zero(time){
    if(time < 10){
        return `0${time}`
    }
    else{
        return `${time}`
    }
};

// Zero Funtion Work End Hear.

