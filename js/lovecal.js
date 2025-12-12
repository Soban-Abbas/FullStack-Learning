let boy=document.getElementById("boy");
let girl=document.getElementById("girl");
let checkbtn=document.getElementById("check");
checkbtn.addEventListener('click', check)
function check(){
    

let boylength=boy.value.length**3;
let girllength=girl.value.length**3;
let sum=girllength+boylength;
let result=(sum%101);
let loveheading=document.getElementById("percent");
loveheading.textContent=`Love ${result}%`;
    
}