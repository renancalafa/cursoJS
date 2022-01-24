const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnRecord = document.querySelector('.btn-record');
const btnReset = document.querySelector('.btn-reset');

const timer = document.querySelector('.div-time');
const timerRecords = document.querySelector('.div-records');

const setLeftZero = (num) => num < 10 ? '0' + num : '' + num;

let timerInterval;
let timerOn = false;
let sec = 0;
let min = 0;
let hour = 0;



const startTimer = () => {
  if (!timerOn) {
  timerInterval = setInterval(() => {
      sec++;
      if (sec === 60) {
        min++;
        sec = 0;
      }
      if (min === 60) {
        hour++;
        min = 0;
      }
      if (hour === 24) hour = 0;
      timer.innerHTML = printTimer(sec, min, hour);
    }, 1);
    return !timerOn;
  }
  return timerOn;
}

const stopTimer = () => {
  if (timerOn) {
    clearInterval(timerInterval);
    return !timerOn;
  }
  return timerOn;
}

const resetTimer = () => {
  sec = 0;
  min = 0;
  hour = 0;
  timer.innerHTML = printTimer(sec, min, hour);
  timerRecords.innerHTML = '';
  if (timerOn) clearInterval(timerInterval);  
  return false;
}

const recordTimer = () => {
  let newTimer = document.createElement('p');
  timerRecords.appendChild(newTimer);
  newTimer.innerHTML = printTimer(sec, min, hour);
}
 
 
const printTimer = (s, m, h) =>  `${setLeftZero(h)}:${setLeftZero(m)}:${setLeftZero(s)}`;
 
btnStart.addEventListener('click', (e) => {
  timerOn = startTimer();
});

btnStop.addEventListener('click', (e) => {
  timerOn = stopTimer();
});

btnRecord.addEventListener('click', (e) => {
  recordTimer();
});

btnReset.addEventListener('click', (e) => {
  timerOn = resetTimer();
});