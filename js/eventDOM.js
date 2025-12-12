function handleClick(){
    let chnageHeading=document.getElementById("name");
    chnageHeading.textContent="I am Software engineer"
}


// loooping on chilren of parent and chnaging their content

let parentDiv=document.getElementById("parent");
console.log(parentDiv.children);

for(let items of parentDiv.children){
    items.addEventListener('click',()=>{
        items.textContent=`i Am clicked `;
    })
}