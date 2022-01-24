const list = document.querySelector('.task-list');
const inputTask = document.querySelector('.input-task');
const btnAdd = document.querySelector('.btn-add');


const saveTasks = () => {
  const tasks = list.querySelectorAll('li');
  const listTasks = [];

  for (let t of tasks) {
    listTasks.push(t.innerText.slice(0,-7));
  }
  localStorage.setItem('tasks', JSON.stringify(listTasks));
  
}
 
const createLi = () => document.createElement('li');


const clearInput = () => {
  inputTask.value = '';
  inputTask.focus();
}

const createClearButton = (li) => {
  li.innerText += ' ';
  const clearBtn = document.createElement('button');
  clearBtn.innerText = 'Delete';
  clearBtn.setAttribute('class','btn-delete');
  clearBtn.style.display = 'flex-end';
  li.appendChild(clearBtn);

}
  
const createTask = (taskInput) => {
  const newTask = createLi();
  newTask.innerText = taskInput;
  list.appendChild(newTask);
  clearInput();
  createClearButton(newTask);
}

const setTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let t of tasks) {
    createTask(t);
  }
}

setTasks();

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-delete')) {
    e.target.parentElement.remove();
    saveTasks();
  } 
})

inputTask.addEventListener('keypress', (e) => {
  if(e.keyCode === 13) {
    createTask(inputTask.value);
  }
});

btnAdd.addEventListener('click', () => {
  if(!inputTask.value) return;
  createTask(inputTask.value);
  saveTasks();
});

