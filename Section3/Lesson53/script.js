const elements = [
  {tag: 'p', description: 'Phrase 1'},
  {tag: 'div', description: 'Phrase 2'},
  {tag: 'footer', description: 'Phrase 3'},
  {tag: 'section', description: 'Phrase 4'},
]

const body = document.querySelector('.container');

for (let i = 0; i < 5; i++) {
  let {tag, description} = elements[i];
  let element = document.createElement(tag);
  body.appendChild(element);
  element.innerText = description;
}