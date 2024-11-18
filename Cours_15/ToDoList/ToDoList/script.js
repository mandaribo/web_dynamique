let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const description = taskInput.value.trim();
    if (description) {
        const task = {
            description: description,
            termine: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.termine;
        checkbox.addEventListener('change', () => toggleTask(index));
        
        const span = document.createElement('span');
        span.textContent = task.description;
        span.className = 'task-description';
        if (task.termine) {
            span.style.textDecoration = 'line-through';
        }
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => deleteTask(index));
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].termine = !tasks[index].termine;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

renderTasks();
