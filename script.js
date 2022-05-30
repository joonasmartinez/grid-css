// Variáveis
var date = new Date();
var tasks=[];





// Funções
function init(){

    document.getElementById('date').innerHTML = date.toLocaleDateString();
    document.getElementById('addTask').addEventListener('click', addTaskBar);
    noTasks()
    updateCounts()
}

function inputEmpty(){
    let inputDesc = document.getElementById('inputDescription')
    let inputHour = document.getElementById('inputHora');

    if(inputHour.value == ""){
        return inputHour.focus();
}
    if(inputDesc.value == ""){
        return inputDesc.focus();
}
return (inputHour.value != "" && inputDesc.value != "")
}

function clearInputs(){

    document.getElementById('inputDescription').value = "";
    document.getElementById('inputHora').value = "";
    document.getElementById('inputHora').focus();

}
function noTasks(){
    updateCounts()
    let text = document.createElement('p')
    if(tasks.length == 0){
        
        text.innerHTML = `Sem tarefas até o momento.`
        document.getElementById("taskToDo").appendChild(text)
    } else{
        try{document.getElementById("taskToDo").getElementsByTagName("p")[0].remove()}catch{}
    }
}

function updateCounts(){
    document.getElementById("tasksToDoCount").innerHTML = tasks.length;
    let tasksDone = 0;
    tasks.forEach((task)=>{
        if(task.querySelector("input").checked) tasksDone++;
    })

    document.getElementById("tasksCheckedCount").innerHTML = tasksDone;
    
}
function updateTasks(){
    let Element = document.querySelector("#taskToDo");
    for(let a=0;a < tasks.length ;a++){
        Element.children[0].remove()
    }

    elementSort()

    tasks.forEach((task)=>{
        Element.appendChild(task)
    })
}

function elementSort(){
    tasks.sort((a, b)=>{
        if(a.getElementsByClassName("taskTime")[0].innerHTML > b.getElementsByClassName("taskTime")[0].innerHTML) return 1;
        if(a.getElementsByClassName("taskTime")[0].innerHTML < b.getElementsByClassName("taskTime")[0].innerHTML) return -1;
    })
}

const addTaskBar = ()=>{
        if(document.getElementsByClassName('formCreateTask')[0]) return alert("Complete o preenchimento para adicionar a tarefa.");
        
        let addtaskbarC = document.createElement('div');
    addtaskbarC.innerHTML = `
    
    <div class="formCreateTask">
                <span>Criar tarefa</span>
                <form id="formtask">
                    <div class="topper">
                            <div class="hora">

                                <label for="">Hora</label>
                                <input type="time" name="hora" id="inputHora">

                            </div>
                            <div class="description">

                                <label for="">Tarefa</label>
                                <input type="text" name="descricao" id="inputDescription" autocomplete="off" placeholder="Arrumar a casa">

                            </div>

                    </div>
                    
                    <div class="actions">

                        <button id="btnsubmit" type="submit">Criar</button>
                        <button id="btnreset" type="reset">Fechar</button>

                    </div>
                    
                    
                </form>
                
            </div>
    
    `

    document.getElementsByClassName("box5")[0].appendChild(addtaskbarC);
    document.getElementById('btnsubmit').addEventListener('click', (event)=>{

        event.preventDefault();
        taskbarSubmit();
           
    })
    document.getElementById('btnreset').addEventListener('click', (event)=>{

        event.preventDefault();
        document.getElementsByClassName("box5")[0].removeChild(addtaskbarC)
           
    })
    inputEmpty()
}  

const taskbarSubmit = ()=>{
    if(inputEmpty()){
        let task = document.createElement('div');
        task.classList.add("taskBarList");
        task.innerHTML = `
                <input type="checkbox">
                <div class="taskbox">
                    <div class="taskTime">
                    ${document.getElementById('inputHora').value}
                    </div>
                    <div class="taskDescription">
                    ${document.getElementById('inputDescription').value}
                    </div>
                    <div class="taskAction">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve" width="25" height="25">
                            <g>
                                <polygon style="fill:#F78F8F;" points="40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  "/>
                                <path style="fill:#C74343;" d="M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z"/>
                            </g>
                        </svg>
                    </div>
                </div>
        `
        tasks.push(task);
        noTasks();
        document.getElementById("taskToDo").appendChild(task);
        updateTasks();
        task.getElementsByClassName("taskAction")[0].addEventListener('click', ()=>{
            if(confirm("Confirme a exclusão desta tarefa."))task.remove();
            tasks.splice(tasks.indexOf(task), 1)
            noTasks()
            
        })
        task.getElementsByTagName("input")[0].addEventListener('click', ()=>{
            updateCounts();
        })

        clearInputs()
    }

}


// execuções

init()