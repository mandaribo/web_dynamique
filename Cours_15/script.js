let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTasKButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTasKButton.addEventListener('click', addTask())
function addTask(){
    const description = taskInput.value.trim();
    if (description){
        const task = {
            description: description,
            termine: false
        };
        tasks.push(task);
        taskInput.value = "";
        //renderTasks();
        console.log(tasks);
    }
}

/*function renderTasks(){
    taskList.innerHTML = '';
    tasks.forEach(task, index) => {
        const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.termine;
            checkbox.addEventListener('change', () => toggleTask(index));

            const span = document.createElement('span')
    }
}*/