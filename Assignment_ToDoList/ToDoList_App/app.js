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
        // log('is task done?', task.description, task.done)
        // log('task', task)
        
    });
};

const taskRender = (task) =>{
    let listItem = document.createElement('div');
    listItem.classList.add('task-item');
    listItem.id = task.id;

    let isDoneCheck = document.createElement('input');
    isDoneCheck.type = 'checkbox';
    isDoneCheck.name = 'task-status';
    isDoneCheck.id = 'task-is-done';
    isDoneCheck.className = 'task-check-c';
    
    
    let trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.addEventListener('click', (e)=>{
        for(let item of taskList.children){
            if(item.id === task.id) 
            {
                taskList.removeChild(item);
                delTasks(item.id);
            }
        }
        
    })

    let taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.classList.add('task-text-c', 'tasks');
    taskText.value = task.description;
    taskText.addEventListener('keydown', (e) => {
        if(e.key==='Enter') {
            updateTasks(listItem.id,{'description': e.target.value, 
            'done': task.done});
        }
    });


    if(task.done) {
        taskText.style.textDecoration = 'line-through';
        isDoneCheck.checked = true;
    }else{
        taskText.style.textDecoration = 'none';
        isDoneCheck.checked = false;
    }

    taskInput.value = '';

    listItem.appendChild(isDoneCheck); // checkbox
    listItem.appendChild(taskText);  // text
    listItem.appendChild(trashBtn);  // img
    taskList.appendChild(listItem); //all of a listItem

    let allListItems = document.getElementsByClassName('task-check-c');
    for(let item of allListItems){
        item.addEventListener('click', (e)=> {
            if(item.parentElement.id === task.id){
                if(e.currentTarget.checked){
                taskText.style.textDecoration = 'line-through';
                updateTasks(listItem.id,{'description': taskText.value, 
                'done': true});
                }else{
                    taskText.style.textDecoration = 'none';
                    // isDoneCheck.checked = false;
                    updateTasks(listItem.id,{'description': taskText.value, 
                    'done': false});
                }
            }
            
        })
    }
    // let newList = [...allListItems];
    // log('newlist', newList)
    // newList.forEach(item =>{
    //     log(item)
    // })
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


