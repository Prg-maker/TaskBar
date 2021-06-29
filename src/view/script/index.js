const add_new_task  = document.querySelectorAll('.add_new_tasks')
const cancel = document.querySelector('#cancel')
const total_overvlow = document.querySelector('.total_overvlow')
let addArray = [...add_new_task]

const addFunction = addArray.map(add =>{
    add.addEventListener('click', ()=>{
        total_overvlow.classList.add('active')
    })
})
cancel.addEventListener('click', ()=>{
    total_overvlow.classList.remove('active')
})