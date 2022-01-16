// - Basic TO-DO App 

const todoAdd = document.getElementById('todo_add');
const todoInput = document.getElementById('todo_input');
const todoIn = document.getElementById('todo_in');




todoAdd.addEventListener('click', () =>{


    let li = document.createElement('li');
    li.className = 'list-group-item ';
    li.innerHTML = `<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>${todoInput.value}</div>`  ;


    todoIn.appendChild(li);
    todoInput.value = "";
})

function counttodo(index, todo){
    return `${index}.${todo}`
}


