document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#msg-list ul');
    const forms = document.forms;
  
    // add messages
    const addForm = forms['add-msg'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
  
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const msgName = document.createElement('span');
  
      // add text content
      msgName.textContent = value;
  
      // add classes
      msgName.classList.add('name');
  
      // append to DOM
      li.appendChild(msgName);
      list.appendChild(li);
    });
})

