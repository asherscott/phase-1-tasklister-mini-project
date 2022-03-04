document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const makeTask = document.querySelector("form > input + input");
  const taskList = document.getElementById('tasks');
  const taskText = document.getElementById('new-task-description');
  let delBut = [];




  document.addEventListener('click', (event) => {
    event.preventDefault();

    if(event.target === makeTask) {
      const listItem  = document.createElement('li');
      const delItem   = document.createElement('button');
      
      listItem.innerHTML = taskText.value;
      taskText.value = '';
      delItem.innerHTML = 'x';

      taskList.append(listItem);
      listItem.append(delItem);
    
      taskText.focus();

      delBut = Array.from(document.querySelectorAll('button'));
    }
    
    if(callBack(delBut)) {
      event.target.parentNode.remove()
      delBut = Array.from(document.querySelectorAll('button'));
    }
  });
});

function callBack(array) {
  for(const ele of array) {
    if(event.target === ele) {
      return ele;
    }
  }
}
