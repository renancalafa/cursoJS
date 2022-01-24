const people = [];  

const getPerson = () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('.name').value;
    const surname = form.querySelector('.surname').value;
    const weight = form.querySelector('.weight').value;
    const height = form.querySelector('.height').value;
    people.push({name,surname,weight,height});
    people.map((ppl) => {
      console.log(`Name: ${ppl.name}  Surname: ${ppl.surname} Weight: ${ppl.weight} Height: ${ppl.height}`);
    });

  
    
  });
    
  
}
getPerson();

// function getPerson() {
//   const form = document.querySelector('.form');
//   form.onsubmit = function(event) {
//     event.preventDefault();
//     alert(1);
//   };
// }
// getPerson();


