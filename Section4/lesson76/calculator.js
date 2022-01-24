const calculatorInput = document.querySelector('.display-calc');
const buttons = document.querySelectorAll('button');

const addBtnEvent = (btn) => {
  const btnValues = ['', '(', ')', '/', 7, 8, 9, '*', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '', ''];
  for (let index in btn) {
    if (index != 0 && index != 18 && index != 19 && index < 20) {
      console.log(index);
      btn[index].addEventListener('click', () => {
        calculatorInput.value += btnValues[index];
      });
    } else if (index == 0) {
      btn[index].addEventListener('click', () => {
        calculatorInput.value = '';
      });
    } else if (index == 18) {
      btn[index].addEventListener('click', () => {
        calculatorInput.value = calculatorInput.value.slice(0, -1);
      });
    }
  }

}
addBtnEvent(buttons);


