const addBtn = document.getElementById("addBtn");
const task = document.getElementById("task");
const taskArea= document.getElementById("task-Area");
const errorMessage = document.getElementById("error");
addBtn.addEventListener("click",()=>{
   if(task.value!==""){
       errorMessage.classList.add("d-none");
       addTask(task);
   }else{
       errorMessage.classList.remove("d-none");
   }
});
function getTasks(){
    if(localStorage.getItem("tasks")===null){
        return [];
    }else{
        return JSON.parse(localStorage.getItem("tasks"));
    }
}
function addTask(a){
    let tasks = getTasks();
    tasks.push(a.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    a.value = "";
    taskArea.innerHTML = ""
    displayTasks(tasks);
}
function displayTasks(a){
    a.forEach((task,index)=>{
        const newDiv = document.createElement("div");
        const delBtn = document.createElement("button");
        newDiv.classList.add("card","bg-warning","flex-row","justify-content-between","p-3","mt-3");
        delBtn.classList.add("btn");
        delBtn.innerHTML = `<i class="bi bi-trash" id="${index}" onclick="deleteTask(this.id)"></i>`;
        newDiv.appendChild(document.createTextNode(task));
        newDiv.appendChild(delBtn);
        taskArea.appendChild(newDiv);
        taskArea.classList.remove("d-none")
    });
}
function deleteTask(b){
    let taskArray  = JSON.parse(localStorage.getItem("tasks"));
    taskArray.splice(b,1);
    localStorage.setItem("tasks",JSON.stringify(taskArray));
    let tasks = getTasks();
    taskArea.innerHTML = "";
    displayTasks(tasks);
}