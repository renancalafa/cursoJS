let varA = 'A';
let varB = 'B';
let varC = 'C';
let varAux;

console.log(varA, varB, varC);

 varAux = varA;
 varA=varB;
 varB=varC;
 varC=varAux;

 console.log(varA, varB, varC);
