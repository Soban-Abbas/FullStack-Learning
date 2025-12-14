let body=document.getElementsByTagName("body")[0];
body.addEventListener("click",(e)=>{
    let div=document.createElement("div");
    div.classList.add('circle');
div.style.position='absolute';
div.style.top=`${e.clientY-25}px`;
div.style.left=`${e.clientX-25}px`;

let colors=['orange','yellow','red','pink','green','blue'];

let color =Math.floor(Math.random()*(colors.length-0)+0)
div.style.backgroundColor=colors[color];
console.log(colors[color])

    body.append(div);

setTimeout(() => {
    div.remove();
}, 5000);
})


