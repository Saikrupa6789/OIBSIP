function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a valid task.");
      return;
    }
  
    var task = createTaskElement(taskText);
    document.getElementById("pendingList").appendChild(task);
    taskInput.value = "";
  }
  
  function createTaskElement(taskText) {
    var li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    return li;
  }
  
  function completeTask(button) {
    var task = button.parentNode;
    var completedList = document.getElementById("completedList");
    completedList.appendChild(task);
    button.parentNode.removeChild(button);
  }
  
  function deleteTask(button) {
    var task = button.parentNode;
    task.parentNode.removeChild(task);
  }
  
  
