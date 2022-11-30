let btnCreate = document.getElementById('btn-main');
let btnHide = document.getElementById('btn-toggle');
let btnRemove = document.getElementById('btn-remove');
let todos = document.getElementsByTagName('li');

btnCreate.addEventListener('click', () => {
    const newTask = document.getElementById('main')
    const list = document.querySelector('ul')
    const task = document.createElement('li');
    
    newTask.textContent = newTask.value;
    newTask.value = '';
    list.appendChild(task);
})



btnHide.addEventListener('click', () => {
    const contanier = document.querySelector('.list-container');
    if (contanier.style.display === 'none'){
        contanier.style.display = 'block';
    } else {
        contanier.style.display = 'none';
    }
    
})





