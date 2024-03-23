function displayTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    let timeString24 = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
    let timeString12;
    const period = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    timeString12 = `${hours
      .toString()
      .padStart(2, "0")}:${minutes}:${seconds} ${period}`;
  
    document.getElementById('clock24').textContent = timeString24;
    document.getElementById('clock12').textContent = timeString12;
  }
  
  function toggleClockFormat() {
    const clock24Element = document.getElementById('clock24');
    const clock12Element = document.getElementById('clock12');
    
    if (clock24Element.style.display === 'none') {
      clock24Element.style.display = 'block';
      clock12Element.style.display = 'none';
    } else {
      clock24Element.style.display = 'none';
      clock12Element.style.display = 'block';
    }
  }
  
  setInterval(displayTime, 1000); 

  displayTime();

// CALCULATOR

function clr(){
    document.getElementById("result").value = "";
}
function display(val){
document.getElementById("result").value += val;
}
function equate(){
let x = document.getElementById("result").value;
let y = eval(x);
document.getElementById("result").value = y
}

// TO-Do list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = function () {
      li.remove();
  };

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.onclick = function () {
      li.classList.toggle('completed');
  };

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = '';
}