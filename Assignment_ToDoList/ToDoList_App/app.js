const log = console.log;


// get elements:

const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// check if enter button is pushed:
// const onKeyDown = (e) => 
const taskRender = () =>{
    let listItem = document.createElement('div');
    listItem.classList.add('task-item');


    let isDoneCheck = document.createElement('input');
    isDoneCheck.type = 'checkbox';
    isDoneCheck.name = 'task-status';
    isDoneCheck.id = 'task-is-done';
    isDoneCheck.className = 'task-check-c';
    
    let trashBtn = document.createElement('button');
    trashBtn.className = 'trash-btn';

    let taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.name = 'task-text';
    taskText.className = 'task-text-c';
    taskText.id = 'task-text';
    taskText.value = taskInput.value;
    taskInput.value = '';


    listItem.appendChild(isDoneCheck); // checkbox
    listItem.appendChild(taskText);  // text
    listItem.appendChild(trashBtn);  // img
    taskList.appendChild(listItem); //all of a listItem


    trashBtn.addEventListener('click', ()=>{
        listItem.style.background = 'red';
    });
    isDoneCheck.addEventListener('change', (e)=>{
        log('checkbox event', e.currentTarget.checked ? 'is checked': 'is not checked')
        listItem.style.background = 'blue';
    })

}

taskInput.addEventListener('keydown', (e) => {if(e.key === 'Enter' && e.target.value !== '') taskRender()});
// addBtn.addEventListener('click', (e) => {if(e.target.value !== '') taskRender()});
addBtn.addEventListener('click', (e) => {if(taskInput.value!=='') taskRender()});


/* document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    log('which', event.key, event,`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false); */