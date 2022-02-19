document.querySelector('#add_button').onclick = function(){
    if(document.querySelector('#add_task input').value.length == 0){
        alert("please enter task")
    }
    else{
        document.querySelector('#element_list').innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector('#add_task input').value}
            </span>
            <button class="delete">x</button>
            </div>
        `;
        
     }
}