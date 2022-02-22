window.onload= function(){


document.querySelector('#add_button').onclick = function(){
    if(document.querySelector('#add_task input').value.length == 0){
        alert("C'mon you haven't die yet! Write something ʕ╥ᴥ╥  ʔ")
    }
    else{
        document.querySelector('#element_list').innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector('#add_task input').value}
            </span>
            <button class="delete_button">
            <img src="../assets/img/delete_button.svg" id="delete_button_svg" alt="svg for delete button">
            </button>
            </div>
        `;
        

let current_tasks = document.querySelectorAll(".delete_button");
for(let i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick= function(){
        this.parentNode.remove();
    }
}

    document.querySelector("#add_task input").value = "";
     }
}}