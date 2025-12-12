let btn=document.getElementsByClassName("btn");
console.log(btn)
btn=[...btn];
for(let btns of btn){
    btns.addEventListener("click" ,(e)=>{
               document.body.style.backgroundColor=e.target.id;
    })
}

