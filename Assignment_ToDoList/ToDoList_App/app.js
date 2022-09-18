const log = console.log;


// get elements:

const addTaskBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// let trashBtn = null;

const renderDb = async () =>{
    let getData = await getTasks();
    // log('getData',getData); 
    getData.forEach(task => {
        taskRender({'description': task.description, 'done': task.done, 'id': task._id });
    })
    


}


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

  /*   let taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.name = 'task-text';
    taskText.className = 'task-text-c';
    taskText.id = 'task-text';
    taskText.value = taskInput.value;
    taskInput.value = ''; */

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
    })

}

taskInput.addEventListener('keydown', (e) => {
    if(e.key==='Enter' && e.target.value !== '') {
        let newTask = e.target.value;
        setTasks({description: newTask, done: false});
        // taskRender(resultId);
        // getTasks();
        // renderDb();
    };
});
addTaskBtn.addEventListener('click', () => {
    if(taskInput.value!=='') {
    //    let newTask = e.target.value;
        // setTasks({description: newTask, done: false});

        // taskRender(resultId);
        // getTasks();
        // renderDb();
    };
});



renderDb();