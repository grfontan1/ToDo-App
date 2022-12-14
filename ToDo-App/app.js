let btnCreate = document.getElementById('btn-main');
let btnStar = document.getElementById('btn-star')
let btnHide = document.getElementById('btn-toggle');
let btnRemove = document.querySelector('.btn-remove');


btnCreate.addEventListener('click', () => {
    const newTask = document.querySelector('.input-main')
    const list = document.querySelector('ul')
    const todos = document.createElement('li');
    
    if(newTask.value){
        todos.textContent = newTask.value
        newTask.value = '';
        list.appendChild(todos);
    }else{
        alert('You did not enter a task!')
    }
    
    
});

btnStar.addEventListener('click', () => {
    const starInput = document.querySelector('.input-main');
    const starList = document.querySelector('ul');
    const starTask = document.createElement('li');

    if(starInput.value){
        starTask.textContent = starInput.value;
        starInput.value = '';
        starList.prepend(starTask);
    }else{
        alert('You did not enter an important task!')
    }
    

});



btnHide.addEventListener('click', () => {
    const contanier = document.querySelector('.list-container');
    if (contanier.style.display === 'none'){
        btnHide.textContent = 'Hide List';
        contanier.style.display = 'block';
    } else {
        btnHide.textContent = 'Show List';
        contanier.style.display = 'none';
    }
    
});

btnRemove.addEventListener('click', () => {
    const lastTask = document.querySelector('li:last-child');
    lastTask.remove();
});





