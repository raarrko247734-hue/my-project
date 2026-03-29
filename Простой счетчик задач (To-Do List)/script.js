document.addEventListener('DOMContentLoaded', function() {
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-btn');

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';
}
    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            e.target.parentElement.classList.toggle('completed');
        }

        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
