const input_color = document.querySelector('input[type="color"]')
const input_text = document.querySelector('input[type="text"]')
const textArea = document.querySelector('textarea')
const button_Add = document.querySelector('#add')
let color = document.querySelector('.color')
let cards = document.querySelector('.cards')
const overvlow = document.querySelector('.total_overvlow')


input_color.addEventListener('mouseleave' , ()=>{
    color.style.background = input_color.value
})

button_Add.addEventListener('click', e =>{
    e.preventDefault()

    /*if(!input_text.value || !textArea.value){
        alert('campo vazio')
        throw new Error
    }
    */
    let div = document.createElement('div')
    let p = document.createElement('p')
    let h4 = document.createElement('h4')
    let div_remove = document.createElement('div')
    let remove = document.createElement('div')



    div_remove.classList.add('div-remove')

    remove.classList.add('remove')
   






    div.classList.add('tasks') 
    p.innerText = textArea.value
    h4.innerText = input_text.value


    div_remove.appendChild(remove)
    div.appendChild( div_remove)
    div.appendChild(h4)
    div.appendChild(p)


    div.style.background = input_color.value

    cards.appendChild(div)



    total_overvlow.classList.remove('active')
    
    let task = document.querySelectorAll('.tasks')
    let Array = [...task]
    Array.map(arrayTask =>{
        arrayTask.setAttribute('draggable', 'true')
    })


    

    remove.addEventListener('click', ()=>{
        document.querySelector('.tasks').remove()
    })



    //DRAG AND DROP


    const tasks = document.querySelectorAll('.tasks')

    tasks.forEach(task =>{
        task.addEventListener('dragstart', dragstart)
        task.addEventListener('drag', drag)
        task.addEventListener('dragend', dragend)
    })




    function dragstart(){
        dropzones.forEach(dropzone => dropzone.classList.add('highligth'))
        this.classList.add('is-dragging')
    }

    function drag() {   

    }

    function dragend(){
        dropzones.forEach(dropzone => dropzone.classList.remove('highligth'))
        this.classList.remove('is-dragging')

    }

    // place where we will drop new tasks
    const dropzones = document.querySelectorAll('.cards')
    
    dropzones.forEach(dropzone =>{
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
        dropzone.addEventListener('drop',drop)
    })

    function dragenter(){

    }

    function dragover(){

        this.classList.add('over')

        // get dragging task
        const taskBeingDragged = document.querySelector('.is-dragging')

        this.appendChild(taskBeingDragged)
    }
    function dragleave(){
        this.classList.remove('over')

    }

    function drop(){
        this.classList.remove('over')

    }

    
})

