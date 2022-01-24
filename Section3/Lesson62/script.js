const analiseNumber = (e) => {

  if(isNaN(e) || e < 0 || e > 100) return 'Use number between 0 and 100.'
  if(e % 3 === 0) {
    if (e % 5 === 0) return 'FizzBuzz';
    return 'Fizz';
  }else if(e % 5 == 0) return 'Buzz';
  else return e;
}

console.log(analiseNumber('r'));