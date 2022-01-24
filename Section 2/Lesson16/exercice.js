const firstName = 'Tommy';
const lastName = 'Vircetti';
const age = 33;
const weight = 88.6;
const height = 1.88;
let bcm = weight/(Math.pow(height,2));
let yearOfBirth = 2021 - age;


console.log(firstName, lastName, 'is', age, 'y/o, has', weight, 'kg, is', height, 'm');
console.log('and their BMC is',bcm);
console.log(firstName, lastName, 'was born in', yearOfBirth + '.');
