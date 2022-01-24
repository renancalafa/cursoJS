
const form = document.querySelector('.form-bmi');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputWeight = event.target.querySelector('.weight').value;
  const inputHeight = event.target.querySelector('.height').value;
  if(!inputWeight || !inputHeight) {
    setResult(`Invalid Values.`, false);
    return;
  }
  let BMI = getBMI(inputWeight,inputHeight);
  setResult(BMI, true)
  console.log(BMI);
});

const getBMI = (weight, height) => {
  return ( (weight/(height/100) ** 2).toFixed(2));
}
 
const setP = () => {
  const p = document.createElement(`p`);
  return p;
}

const setResult = (BMI, isValid) => {
  const divResult = document.querySelector('.results');
  divResult.innerHTML = ``;
  const p = setP();
  divResult.appendChild(p);
  p.innerHTML = setStatus(BMI);
}
 

const setStatus = (BMI) => {
  const msg = `Your BMI is ${BMI}. `;
  if (BMI >= 40) {
    return (msg + `You have Class 3 Obesity.`);
  }
  if (BMI >= 35) {
    return (msg + `You have Class 2 Obesity.`);
  }
  if (BMI >= 30) {
    return (msg + `You have Class 1 Obesity.`);
  }
  if (BMI >= 25) {
    return (msg + `You're overweight.`);
  }
  if (BMI >= 18.5) {
    return (msg + `You're healthy.`);
  }
  if (BMI < 18.5) {
    return (msg + `You're underweight.`);
  }
}
