// const DremaBig=document.createElement("h2");
// DremaBig.textContent="Dream";
// DremaBig.id='dream';


// const work=document.getElementById("work");
// work.after(DremaBig);

// const enjoy=document.createElement("h2");
// enjoy.textContent="enjoy";
// enjoy.id='enjoy';
// // enjoy.className='enjoy';
// // //ager dosra name class ko dyna hu pyle kay sath ab is ki class ka name enjoy be ha or mazay be
// // enjoy.className+=' mazay';

// //per ya oper wala tareeka muskil ha remeber krna

// //new way is 
// enjoy.classList.add("enjoy");
// enjoy.classList.add("mazay");
// enjoy.classList.remove("enjoy");
// enjoy.style.color="yellow";
// work.before(enjoy);
// console.log(enjoy); 



//______________ getting and setting attributes_____________

// let names=document.createElement("h1");
// names.setAttribute("id","first name");
// console.log(names.getAttribute("id"))
// console.log(names.getAttribute("class"));
// names.setAttribute("class","first nam");
// console.log(names.getAttribute("class"))

// names.classList.remove("nam");
// console.log(names.getAttribute("class"))



// // _____________adding element in parent element____________

// let getlist=document.getElementById("list");
// let createlist=document.createElement("li");
// createlist.textContent=textContent="meal";
// let list2=document.createElement("li");
// list2.textContent="Milk";
// let list3=document.createElement("li");
// list3.textContent="Cup Cake";

// getlist.append(createlist);
// getlist.append(list2);


// getlist.prepend(list3)

// let list4=document.createElement("li");
// list4.textContent="Chicken";


// createlist.after(list4);



// __________


let items=['Apple','SamSung','Google','OnePlus','Xiomi','Oppo','Vivo'];

let getlist=document.getElementById("list");

// for(let item of items){
//     let product=document.createElement("li");
//     product.textContent=item;
//     getlist.append(product)
// }


// Above practive is not good to bring data from backend or array and display to ui because i changing ul 7 times here but if we have 1000 or more element to append then it update ul back to back in second and break ul 
// so best practice is to create fragment but all data in fragment then to add into ui

let fragment1=document.createDocumentFragment();
for(let item of items){
    let product=document.createElement("li");
    product.textContent=item;
   fragment1.append(product)
}
console.log(fragment1)
 getlist.append(fragment1);




//__________remving element from ui__________
let workelement=document.getElementById("work");
workelement.remove();