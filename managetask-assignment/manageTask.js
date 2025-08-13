var task_array = []
var completed_task_idx_array = []
var completed_task_array = []

function addTask() {
    new_task = document.getElementById("task-name").value;
    task_array.push(new_task);
    displayTask();
    document.getElementById("task-name").value = ''
}

function displayTask() {
    req_html = ""
    let i = 0
    for (ele of task_array) {
        req_html += `<div id="task-data"><span id=${i} class="task-name">${ele}</span>
        <button class="task-button" onclick="handleDone(${i})">Mark as Done</button>
        <button class="task-button" onclick="handleRemove(${i})">Remove Task</button>
        </div><br>`
        i += 1
    }

    document.getElementById("tasks-div").innerHTML = req_html;
    displayDoneTasks();

}


function handleDone(index){
    completed_task_idx_array.push(index);
    completed_task_array.push(task_array[index]);
    displayDoneTasks();
}

function displayDoneTasks() {
    for(idx of completed_task_idx_array) {
       document.getElementById(idx).style = 'color: green;' 
    }
}

function handleRemove(index){
    task_array.splice(index, 1);
    if (completed_task_idx_array.includes(index)){
        completed_task_idx_array.splice(index, 1);
    }
    displayTask();
    displayDoneTasks();
}