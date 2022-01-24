// const formatDate = () => {
//   const date = new Date();
//   const stringDate = `Date: ${addLeftZero(date.getDate())}/${addLeftZero(date.getMonth()+1)}/${date.getFullYear()} </br> Hour: ${addLeftZero(date.getHours())}:${addLeftZero(date.getMinutes())}:${addLeftZero(date.getSeconds())}</br> Day of the week: `;
//   const dayWeek = getDayWeek(date.getDay());
//   return stringDate + dayWeek;
// }

// const getDayWeek = (date) => {
//   switch (date) {
//     case 0:
//       return 'Sunday';
//     case 1:
//       return 'Monday';
//     case 2:
//       return 'Tuesday';
//     case 3:
//       return 'Wednesday';
//     case 4:
//       return 'Thursday';
//     case 5:
//       return 'Friday';
//     case 6:
//       return 'Saturday';
//     default: 
//       return 'Invalid Day';
//   }
// }

// const addLeftZero = (num) => {
//   return num >= 10 ? num : `0${num}`;
// }

const title = document.querySelector('.container h1');
const date = new Date();
const options = {
  dateStyle: 'full',
  // timeZoneName: 'short'
}
title.innerHTML = date.toLocaleDateString('en', options);