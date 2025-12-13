let time=document.getElementById("time");
setInterval(()=>{

    let timer=new Date();
    time.textContent=timer.toLocaleTimeString('en-US',{
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:true
    });
    

},1000)