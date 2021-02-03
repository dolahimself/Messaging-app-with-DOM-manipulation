document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#msg-list ul');
    const forms = document.forms;
  
    // delete messages
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
  
    // add messages
    const addForm = forms['add-msg'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
  
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const bookName = document.createElement('span');
  
      // add text content
      bookName.textContent = value;
  
      // add classes
      bookName.classList.add('name');
  
      // append to DOM
      li.appendChild(bookName);
      list.appendChild(li);
    });
  
    // search messages
    const searchBar = forms['search-msgs'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const books = list.getElementsByTagName('li');
      Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      });
    });