function init(){
    let tasks = document.querySelectorAll("tr");
    
    tasks.forEach((tr)=>{
        tr.addEventListener('click', (tr)=>{
            taskDone(tr);
            
        }, {once:true})
    })
}

const taskDone = (tr)=>{
    tr.path[1].classList.add('taskDone');
}
init()