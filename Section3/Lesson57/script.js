const div = document.querySelector('.container');
const paragraphs = div.querySelectorAll('p');
const bgColor = getComputedStyle(document.body).backgroundColor;

// console.log(paragraphs);

for (let paragraph of paragraphs) {
  paragraph.style.padding = '5px';
  paragraph.style.backgroundColor = bgColor; 
  paragraph.style.borderRadius = '5px';
  paragraph.style.color = '#fff'
}
