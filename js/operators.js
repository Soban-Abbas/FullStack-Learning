// type conversion


//conveting to string
// let num=123;
// let strnum=String(num);
// console.log( typeof strnum);

// let bool=true;
// let strbool=String(bool);
// console.log( typeof strbool)

// let values=[7,8,3,4,5,1];
// let strvalues=String(values)
// console.log(typeof strvalues);



// converting to number

// let invalidstr="apple";
// let numinvalid=Number(invalidstr);
// console.log(numinvalid);

// let check=undefined;
// let numcheck=Number(check);
// console.log( typeof numcheck);

// let check=null;
// let numcheck=Number(check);
// console.log(numcheck);


//parseint

// let num='100px';
// let num1=Number(num);
// console.log(num1);
// console.log(typeof num1);

// let num2=parseInt(num);
// console.log(num2);
// console.log( typeof num2);


// let num='4.67kg';
// let num1=Number(num);
// console.log(num1);
// let num2=parseFloat(num);
// console.log(num2);
// console.log(typeof num2);


//boolean conversion

// let value=false;
// console.log(typeof value);
// let value1=Boolean(value);
// console.log(typeof value1);

// let num1=null;
// let num2=null;
// console.log(num1===num2);

// let num1=NaN;
// let num2=NaN;
// console.log(num1===num2);


// let a=[];
// let b=a;
// console.log(a===b);


// let a =0.1;
// let b=0.2;
// // console.log(a+b);
// let c=a+b;

// // console.log(typeof c);
// console.log(c);


// let name="soban"
// console.log(name[0]);
// name[0].push='R';
// console.log(name);

 
// function isEmpty(value){
//     if(value===null){
//         return null;
//     }
//     else if(value===undefined){
//         return undefined;
//     }
//     else if(value===""){
//         return "";
//     }
//     else{
//         console.log("proper value");
//     }
// }

// let a;
// console.log(isEmpty(a));


// let a=0.1;
// let b =0.2;
// // method 1 -> let sum=(a+b).toFixed(1);
// // method 2 ->
//  let sum=a+b;
//  sum= Math.round(sum*100)/100;
// console.log(sum);

let a =prompt("Enter number 1");
a=Number(a);
a=a*100;
let b =prompt("Enter number 2");
b=Number(b);
b=b*100;
sum=a+b;
console.log(sum/100);