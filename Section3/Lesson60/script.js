let n1 = window.prompt('Type First Number: ')
while (isNaN(n1)) n1 = window.prompt('invalid. Type First Number: ')

let n2 = window.prompt('Type Second Number: ')
while (isNaN(n2)) n2 = window.prompt('invalid. Type Second Number: ')

const getHigherNumber = (n1, n2) => n1 > n2 ? console.log(n1) : console.log(n2);

 
