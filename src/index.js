document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
   const taskList = document.getElementById("tasks")   
   const li = document.createElement("li");
   li.textContent = e.target["new-task-description"].value;
   
   const btn = document.createElement("button");
   btn.textContent = "x";
   taskList.append(li , btn);

   btn.addEventListener("click", ()=> {
    btn.remove();
    li.remove();
   })
   
  
   // task.appendChild(e.target["new-task-description"].value);
  })
  
});

