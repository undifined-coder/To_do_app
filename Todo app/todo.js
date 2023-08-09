const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function addtoDom(task){}

    const li=document.createElement('li');
    li.innerHTML=
    <li>
        
    <label for="${task.id}">${task.text}</label>

    <input type="checkbox" id="${task.id}" class="custom-checkbox">


    <img src="bin.svg" class="delete" data-id="${task.id}" />
    </li>;


function renderList () {
    taskList.innerHTML='';

    for(let i=0; i<tasks.length; i++)
    {
        addtoDom(tasks[i]);
    }

    tasksCounter.innerHTML=tasks.length;
}

function markTaskAsComplete (taskId) {
    const task=tasks.filter(function(task)
    {   return task.id==taskId;

    });

    if(task.length>0)
    {
        const curr_task=task[0];
        curr_task.done=!curr_task.done;
        renderList();
        showNotification('Task toggle Sucessfully');
        return;
    }

    showNotification('task cannot  be toogle');
}

function deleteTask (taskId) {
    const newtasks=tasks.filter(function(task)
    {   return task.id!=taskId;

    });

    tasks=newtasks;
    renderList();
    showNotification('Tasks added succesfully');
}

function addTask (task) {
    if(task){
    tasks.push(task);
    renderList();
    showNotification('Task added succesfully');}
        else{
 showNotification('Task cant be added');}
}

function showNotification(text) {

    alert(text);
}


function handleInputKeypress(e)
{
    if(e.key=='Enter')
    {
        const text=e.target.value;
        console.log('text:',text);
        if(!text)
        {
            showNotification('Task cannot be empty')
        }

        const task={
            text,
            id:Date.now().toString(),
            done:false

        }

        e.target.value='';
        addTask(task);

    }
}

addTaskInput.addEventListener('keyup',handleInputKeypress);