// greeting();
// function greeting(){
//     console.log("hello world")
// }   

// function sum(a,b,c=0,d=0){
//     return a+b+c+d;
// }

// let result=sum(2,3);
// console.log(result)
// let result1=sum(2,3,6);

// console.log(result1)

// let result2=sum(2,3,4,6);
// console.log(result2)


// use of rest operator in function paramerters



// function sum(...num){
//     //rest operator convert all arguments ito array
//     let result=0
//     for(let items of num){
//  result=result+items;
//     }
// return result;
// }


// let result=sum(1,2,3,4,5,5);
// console.log(result);


//_________difference betweeen spread and rest

// spread is used to copy array into another array object into another 
// while rest operator is used to catch values 
// like 
// let arr=[12,2,4,5,5];
//const vari[first,second,...num]=arr here ...num is behaving as rest catching all other values and convert into array
//while spread is used to conbine 2 arrays or copy array into another 


// function expression

// const hellofunction=function(){
//     console.log("helli");
// }
// hellofunction()
//arrow function
// const hellofunction=( )=> console.log('hello')

// console.log(hellofunction())


// const arrow_function=()=>{
//     let user={
//         name:'soban',
//         age:20
    
//     }
//     return user;

// }

// console.log(arrow_function());


// const arrow_function=()=>{
//     return{
//         name:'soban',
//         age:20
    
//     }
//     return user;

// }

// console.log(arrow_function());

// const arrow_function=()=>({name:'soban', age:20 })




// console.log(arrow_function());



// __________IIFE

// (function greeting(){
//     console.log('Hello Sir');

// })();

// (()=>{
//     console.log("hello");
// })();




// ____________Call back function

// call back function meaning is passing any function as argument to another function 


// function greet( callbackfunction){
//     console.log("Hello sir");
//     callbackfunction();
   
// }
// function gather(){
//     console.log("we are gathering");
//      console.log("Moving back ")
// }
// function meet(){
//     console.log("please meet me");
// }


// // greet();
// // meet();
// // greet(meet());//this is not the way to executes call back function


// greet(meet);

// greet(gather);



function ranchers(){
    console.log("making your order at ranchers ")
}
function chezious(){
    console.log("preparing your order at chezious")
}

function foodpandaPayment(payment,CallResturent){
    console.log(`${payment} received successfully `)
    console.log("order plced successfully")
    CallResturent();

}


foodpandaPayment(5000,ranchers);
foodpandaPayment(3400,chezious);