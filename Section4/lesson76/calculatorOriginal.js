function createCalculator () {
  return {

    display: document.querySelector('.display-calc'),

    init() {
      console.log(this.display);
      this.clickBtn();
    },

    clickBtn () {
      document.addEventListener ('click', function (e) {
        const clickedBtn = e.target;
        if (clickedBtn.classList.contains('btn-num')) {
          this.displayBtn(clickedBtn.innerText);
        } else if (clickedBtn.classList.contains('btn-clear')) {
          this.display.value = '';
        } else if (clickedBtn.classList.contains('btn-del')) {
          this.display.value = this.display.value.slice(0,-1);
        }
      }.bind(this));
    },

    displayBtn (text) {
      this.display.value += text;
    },

  };
}

const calculator = createCalculator();
calculator.init();
