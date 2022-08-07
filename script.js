const pausePlay = document.querySelector('.pause-play');
const replay = document.querySelector('.replay');
const timer = document.getElementById("timer");
const pausebtn = document.querySelector('.pause-play')

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSec = 0;
let leadingMn = 0;
let leadingHr = 0;

let timeInterval = null;
let timeStatus = 'stopped';

function watch (){
    seconds++;
    if(seconds%60 === 0){
        seconds = 0;
        minutes++;
        if(minutes%60 === 0){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        leadingSec = `0${seconds}`;
    }else{
        leadingSec = seconds;
    }
    if(minutes < 10){
        leadingMn = `0${minutes}`;
    }else{
        leadingMn = minutes;
    }
    if(hours < 10){
        leadingHr = `0${hours}`;
    }else{
        leadingHr = hours;
    }

    timer.innerText = `${leadingHr}:${leadingMn}:${leadingSec}`
}

pausePlay.addEventListener('click', ()=>{
        if(timeStatus === 'stopped'){
            timerInterval = window.setInterval(watch, 1000);
            pausePlay.innerHTML = `<i class = "fa-solid fa-pause" id="play"></i>`
            pausebtn.classList.remove('play')
            pausebtn.classList.add('pause')
            timeStatus = 'played'
        }
        else{
            window.clearInterval(timerInterval);
            pausePlay.innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`
            pausebtn.classList.remove('pause');
            pausebtn.classList.add('play')
            timeStatus = 'stopped';
        }

})

replay.addEventListener('click', ()=>{
    window.clearInterval(timerInterval);
    timer.innerText = '00:00:00'
    seconds = 0;
    minutes = 0;
    hours = 0;

    pausePlay.innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`
            pausebtn.classList.remove('pause');
            pausebtn.classList.add('play')
            timeStatus = 'stopped';

})