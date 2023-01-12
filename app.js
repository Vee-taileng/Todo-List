const add_button = document.querySelector(".add_button");
const inputField = document.querySelector("#input_field");
const input_warning = document.querySelector(".warning");
const todo_list = document.querySelector(".todo_center")
const list = document.querySelector(".list");

add_button.addEventListener("click", (e)=>{
    let input_value = inputField.value.trim(); //remove leading/trailing spaces
    if(input_value === ""){
        input_warning.style.display = "block"
    }else{
        input_warning.style.display = "none"
        const html = `
            <li class="list">
                <span>${input_value}</span>
                <i class="fa fa-times delete_task"></i>
            </li>`
        todo_list.insertAdjacentHTML("beforeend",html); // Using insertAdjacentHTML instead of concatenating to innerHTML
        inputField.value = ""
    }

    // Add to local storage
    let currentTodos = JSON.parse(localStorage.getItem("todo")) || []
    currentTodos.push(input_value)
    localStorage.setItem("todo", JSON.stringify(currentTodos))
});




todo_list.addEventListener("click", e => {
    if (!e.target) return; 
    if (e.target.matches('.list')) {
        e.target.classList.toggle("finished_task");
    }
    
    if (e.target.matches('.delete_task')) {
      let confirmation = confirm("Are you sure you want to delete this task?");
      if (confirmation) {
        e.target.closest("li").remove();
      }
    }
});
