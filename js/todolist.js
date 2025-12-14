let inputTask=document.getElementById("task");
let form=document.getElementById("form");
let alltasks=document.getElementById("alltask")
form.addEventListener("submit",(e)=>{
e.preventDefault();

let taskparent=document.createElement("div");
taskparent.classList.add("alltask.div");
alltasks.append(taskparent);
let taskChild=document.createElement("span");
taskChild.textContent=inputTask.value.trim();
taskparent.append(taskChild);
let deletebtn=document.createElement("button");
deletebtn.textContent="Delete";
let donebtn=document.createElement("button");
donebtn.textContent="Done";
let btndiv=document.createElement("div")
btndiv.classList.add("btndiv")
btndiv.append(donebtn,deletebtn)
taskparent.append(btndiv)

deletebtn.addEventListener("click",(e)=>{
    if(e.target.tagName==='BUTTON'){
        e.target.parentElement.parentElement.remove();
    }

})

donebtn.addEventListener("click",()=>{
    taskChild.style.textDecoration='line-through'
})

})