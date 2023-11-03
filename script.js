let time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".restart");
const lap = document.querySelector(".lap");
const timer = document.querySelector(".el");
let second=0,minute=0,hour=0;
function watch(){
    second++;
   // console.log(second);
   if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hour++;
        }
   }
    let s = second<10 ? "0"+second : second;
    let m = minute<10 ? "0"+minute : minute;
    let h = hour<10 ? "0"+hour : hour;
    time.innerText = h+":"+m+":"+s;
}
let ehleh;
start.addEventListener('click',()=>{
    ehleh = setInterval(watch,17);
});
stop.addEventListener('click',()=>{
    clearInterval(ehleh);
});
restart.addEventListener('click',()=>{
    clearInterval(ehleh);
    hour=0;
    minute=0;
    second=0;
    time.innerText="00:00:00";
    time.innerHTML="";
});
lap.addEventListener('click',()=>{
let lapEl = document.createElement('p')
let s = second<10 ? "0"+second : second;
let m = minute<10 ? "0"+minute : minute;
let h = hour<10 ? "0"+hour : hour;
lapEl.innerText = h+":"+m+":"+s;
const timer = document.querySelector('.el');
timer.append(lapEl);
});

