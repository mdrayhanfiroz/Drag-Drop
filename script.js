const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

let draggedTask = null;

// Add drag event listeners to tasks
tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

// Add dragover event listener to columns to allow dropping
columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', drop);
});

function dragStart() {
    draggedTask = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

function dragEnd() {
    draggedTask.style.display = 'block';
    draggedTask = null;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.style.border = '2px dashed #ccc';
}

function dragLeave() {
    this.style.border = '1px solid #ddd';
}

function drop() {
    this.style.border = '1px solid #ddd';
    this.appendChild(draggedTask);
}
