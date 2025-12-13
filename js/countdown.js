let timer=document.getElementById("timer");
setInterval(()=>{

let todayDate=Date.now();
console.log(todayDate);
let fifaDate=new Date(2026,5,11) //it will give fifaDate in real time date time formate

//now i have fifa data in milisec
fifaDate=fifaDate.getTime();
console.log(fifaDate);
//i wanna get the date from now to fifa if i subtract today data from fifa i will get the between time in both of these dates
let re_date=fifaDate-todayDate;

let days=Math.floor(re_date/(1000*60*60*24));
re_date=re_date%(1000*60*60*24);

let hours=Math.floor(re_date/(1000*60*60));
re_date=re_date%(1000*60*60);


let minutes= Math.floor(re_date/(1000*60));
re_date=re_date%(1000*60);

let sec=Math.floor((re_date)/1000);
re_date=re_date%1000;





timer.textContent=`${days}d ${hours}h ${minutes}m ${sec}s`;




},1000)