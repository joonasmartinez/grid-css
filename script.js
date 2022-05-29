// Variáveis
var date = new Date();







// Funções
function init(){

    document.getElementById('date').innerHTML = date.toLocaleDateString();
    document.getElementById('addTask').addEventListener('click', addTaskBar);

}

const addTaskBar = ()=>{
    let addtaskbar = document.getElementsByClassName("formCreateTask");
    console.log(addtaskbar)
    addtaskbar.hidden = !(addtaskbar.hidden)
}


// execuções

init()