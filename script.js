// Variáveis
var date = new Date();







// Funções
function init(){

    document.getElementById('date').innerHTML = date.toLocaleDateString();
    document.getElementById('addTask').addEventListener('click', addTaskBar);

}

const addTaskBar = ()=>{
    let addtaskbar = document.getElementById("formCreateTask");
    let addtaskbarC = document.createElement('div');
    addtaskbarC.innerHTML = `
    
    <div id="formCreateTask" class="formCreateTask">
                <span>Criar tarefa</span>
                <form action="">
                    <div class="topper">
                            <div class="hora">

                                <label for="">Hora</label>
                                <input type="time" name="hora" id="">

                            </div>
                            <div class="description">

                                <label for="">Tarefa</label>
                                <input type="text" name="descricao" id="" placeholder="Arrumar a casa">

                            </div>

                    </div>
                    
                    <div class="actions">

                        <button type="submit">Criar</button>
                        <button type="reset">Cancelar</button>

                    </div>
                    
                    
                </form>
                
            </div>
    
    `
    document.getElementsByClassName("box5")[0].appendChild(addtaskbarC);
    document.getElementById('addTask').disabled = true;
}


// execuções

init()