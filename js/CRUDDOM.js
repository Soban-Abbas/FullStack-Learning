const DremaBig=document.createElement("h2");
DremaBig.textContent="Dream";
DremaBig.id='dream';


const work=document.getElementById("work");
work.after(DremaBig);

const enjoy=document.createElement("h2");
enjoy.textContent="enjoy";
enjoy.id='enjoy';
// enjoy.className='enjoy';
// //ager dosra name class ko dyna hu pyle kay sath ab is ki class ka name enjoy be ha or mazay be
// enjoy.className+=' mazay';

//per ya oper wala tareeka muskil ha remeber krna

//new way is 
enjoy.classList.add("enjoy");
enjoy.classList.add("mazay");
enjoy.classList.remove("enjoy");
enjoy.style.color="yellow";
work.before(enjoy);
console.log(enjoy);

