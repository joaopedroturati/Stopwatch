const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById("start");
const pause_btn = document.getElementById("pause");
const restart_btn = document.getElementById("restart");
const title = document.getElementById("title");

let sec = 0;
let interval = null;

//event listener

start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', stop);
restart_btn.addEventListener('click', reset);

function timer() {
    sec++;

    //format the time 
    let hrs = Math.floor( sec / 3600 );
    let min = Math.floor((sec - (hrs*3600)) / 60 );
    let secs = sec % 60;

    if(hrs < 10) hrs = "0" + hrs;
    if(min < 10) min = "0" + min;
    if(secs < 10) secs = "0" + secs;
    if(sec >= 1) title.innerText = `${hrs}:${min}:${secs}`;

    time_el.innerText = `${hrs}:${min}:${secs}`;
}

function start() {
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    sec = 0;
    time_el.innerText = '00:00:00';
    title.innerText = 'Cronômetro online';
}
