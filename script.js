const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");


const newYear = new Date ('4 April 2022').getTime();

var x = setInterval(function(){
    const currDate = new Date().getTime();
    const duration = newYear - currDate;

    // calculation for Second
    const sec = Math.floor((duration % (1000 *60)) / 1000);
    const min = Math.floor((duration % (1000*60*60)) / (1000*60));
    const hour = Math.floor((duration % (1000*60*60*24)) / (1000*60*60));
    const day = Math.floor(duration / (1000*60*60*24));

    daysEl.innerHTML = formatTime(day);
    hoursEl.innerHTML = formatTime(hour);
    minutesEl.innerHTML = formatTime(min);
    secondEl.innerHTML = formatTime(sec);
})
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
