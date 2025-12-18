let parent=document.getElementById("parent")
let p1=fetch('https://api.github.com/users');
console.log(p1);
const users=p1.then((response)=>{
    console.log(response)
    if(!response.ok){
        throw new Error("Data Is Not Present on Server")
    }
    return response.json();
})

users.then((response)=>{




    for(let i=0;i<response.length;i++){
        
        let img=document.createElement("img");
        img.src=response[i].avatar_url;
        img.style.height='60px';
        img.style.width='60px';
        parent.append(img);
    }
})
users.catch((error)=>{
    parent.textContent=error.message;
    console.log(parent.textContent);
})

// ____________json & javascript object

// ____json format is a common formate that is undetrand by any langauge python ,cpp, js C#,java javascript

//syntax
//Basic JSON Example
// {
//   "name": "Ali",
//   "age": 21,
//   "isStudent": true
// }

// Keys are always in double quotes

// Values can be string, number, boolean


//______object syntax 
// js object is only undertand by js lanaguage and not undertand by any other

//example
// let user={
// name:'soban',
// age:20,
// reg_no:4805
// }

// // converting js object into json

// let jsonformate=JSON.stringify(user);
// console.log(jsonformate);


// //json formate
// let jsonUser=`{
//     "name":"Ali",
//     "age":20,
//     "reg_number":4805
// }`;
// //json formate is just a string
// let Obj =JSON.parse(jsonUser)
// console.log(Obj)
