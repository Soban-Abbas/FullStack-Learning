//symbols
let id1 = Symbol("hello");
console.log(id1);
let id2 = Symbol("hello");
console.log(id2);
console.log(id1 == id2);

//symbols unique values create krne kay liay use huta ha
// chiay ap same value store kro 2 differnt variables ma lakin in variables ki values kabi same nahi hu ge

// array
let names = ["haha", 3, "v", "ok"];
console.log(names);
console.log(typeof names); 

//objects key values pair ma hute hin

let student = {
  id: 1,
  name:'helo',
  email:'wndkdknwk'
};


//functions
function add(){
    return "hello"
}

console.log(add())


//storing functions in varibles
let greet=function greet(){
    return "AOA"
}

console.log(greet); 

console.log(typeof greet);
console.log(greet()) 