const num1 = Number(window.prompt("Type a number: "));

const numTitle = document.getElementById('number-title');
const details = document.getElementById('number-detail');

numTitle.innerHTML += num1;

details.innerHTML += `<p> Square root:  ${num1**1/2}</p>`;
details.innerHTML += `<p> ${num1} is integer: ${Number.isInteger(num1)}</p>`;
details.innerHTML += `<p> is NaN: ${isNaN(num1)}</p>`;
details.innerHTML += `<p> Round downwards: ${Math.floor(num1)}</p>`;
details.innerHTML += `<p> Round upwards: ${Math.ceil(num1)}</p>`;
details.innerHTML += `<p> 2 Decimal places: ${Number(num1).toFixed(2)}</p>`;
