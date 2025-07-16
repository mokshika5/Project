let timerdisplay = document.querySelector('.box h1');
let startbtn = document.querySelector('.start_btn');
let stopbtn = document.querySelector('.stop_btn');
let resetbtn = document.querySelector('.reset_btn');

let msec= 0;
let sec= 0;
let min= 0;

let timerid =null;

startbtn.addEventListener('click', function(){
    if(timerid!=null){
        clearInterval(timerid);
    }
    timerid=setInterval(start_timer, 10)
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerid);
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerid);
    timerdisplay.innerHTML = ` 00 : 00 : 00 `
    msec=0;
    sec=0;
    min=0;

});

function start_timer(){
    msec++;
    if (msec===100){
        sec+=1;
        msec=0;
        if(sec===60){
        min+=1;
        sec=0;
            }
        }
    let msecstring = msec<10 ? `0${msec}` : msec ;
    let secstring = sec<10 ? `0${sec}` : sec ;
    let minstring = min<10 ? `0${min}` : min ;

    timerdisplay.innerHTML = ` ${minstring} : ${secstring} : ${msecstring} ` ;
    
    }