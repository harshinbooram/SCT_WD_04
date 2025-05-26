let tasks = [];

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `task${task.completed ? ' completed' : ''}`;

    const taskText = document.createElement('span');
    taskText.textContent = `${task.text} ${task.time ? '(' + task.time + ')' : ''}`;
    li.appendChild(taskText);

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = task.completed ? 'Undo' : 'Done';
    toggleBtn.onclick = () => toggleComplete(index);
    li.appendChild(toggleBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(index);
    li.appendChild(editBtn);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => deleteTask(index);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

function addTask() {
  const text = document.getElementById('taskInput').value.trim();
  const time = document.getElementById('taskTime').value;
  if (text !== '') {
    tasks.push({ text, time, completed: false });
    document.getElementById('taskInput').value = '';
    document.getElementById('taskTime').value = '';
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

// Initial render
renderTasks();
