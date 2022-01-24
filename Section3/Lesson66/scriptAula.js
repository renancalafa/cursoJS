const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnRecord = document.querySelector('.btn-record');
const btnReset = document.querySelector('.btn-reset');

const timer = document.querySelector('.div-time');

let timerOn;
let sec = 0;

const getHourBySeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'GMT'
  });
}

const printTimer = (time) => timer.innerHTML = time;

const stopTimer = () => {
  if(timerOn) clearInterval(timerOn);
}
 
 
btnStart.addEventListener('click', (e) => {
  if(!timerOn) timerOn = setInterval(() => {
    sec++;
    printTimer(getHourBySeconds(sec));
  },1000);
});

btnStop.addEventListener('click', () => {
  if(timerOn) {
    clearInterval(timerOn);
    timerOn = 0;
  }
});

btnReset.addEventListener('click', () => {
  sec = 0;
  clearInterval(timerOn);
  timerOn = 0;
  printTimer(getHourBySeconds(sec));

});