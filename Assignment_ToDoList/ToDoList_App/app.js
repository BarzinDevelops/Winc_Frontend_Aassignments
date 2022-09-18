const log = console.log;


// get elements:

const addTaskBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const renderDb = async () =>{
    let getData = await getTasks();
    getData.forEach(task => {
        taskRender({'description': task.description, 
                    'done': task.done, 'id': task._id });
    });
};

const taskRender = (taskId) =>{
    let listItem = document.createElement('div');
    listItem.classList.add('task-item');
    listItem.id = taskId.id;

    let isDoneCheck = document.createElement('input');
    isDoneCheck.type = 'checkbox';
    isDoneCheck.name = 'task-status';
    isDoneCheck.id = 'task-is-done';
    isDoneCheck.className = 'task-check-c';
    
    let trashBtn = document.createElement('button');
    trashBtn.className = 'trash-btn';
    trashBtn.addEventListener('click', (e)=>{
        for(let item of taskList.children){
            if(item.id === taskId.id) 
            {
                taskList.removeChild(item);
                delTasks(item.id);
            }
        }
        
    })

    let taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.className = 'task-text-c';
    taskText.value = taskId.description;
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
    });

}

taskInput.addEventListener('keydown', (e) => {
    if(e.key==='Enter' && e.target.value !== '') {
        let enteredTask = e.target.value;
        setTasks({description: enteredTask, done: false});
        taskList.replaceChildren();
        renderDb();
    };
});
addTaskBtn.addEventListener('click', (e) => {
    if(taskInput.value!=='') {
        let clickedTask = taskInput.value;
        setTasks({description: clickedTask, done: false});
        taskList.replaceChildren();
        renderDb();
    };
});

renderDb();

