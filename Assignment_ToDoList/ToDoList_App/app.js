const log = console.log;


// get elements:

const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', (e) => {
    log('value entered is: ', taskInput.value);
    let listItem = document.createElement('span');
    listItem.innerText = taskInput.value;
    listItem.classList.add('task-item');
    taskList.appendChild(listItem);
});
