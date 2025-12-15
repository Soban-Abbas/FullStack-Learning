
const words = ["apple", "banana", "apple", "orange", "banana"];

let count=words.reduce((acc,curr)=>{
acc[curr]=(acc[curr] || 0)+1;
return acc;
},{})

console.log(count);

const nums = [10, 5, 30, 25];

// output: 30
let max=nums.reduce((acc,curr)=>{

  if(curr>acc){
    return curr;
  }else{
    return acc;
  }


},0)

console.log(max)


const cart = [
  { name: "pen", price: 10 },
  { name: "book", price: 50 },
  { name: "bag", price: 200 }
];

let total=cart.reduce((acc,curr)=>{
acc= acc+curr.price;
return acc;
},0)

console.log(total)


const people = [
  { name: "Ali", role: "student" },
  { name: "Sara", role: "teacher" },
  { name: "Ahmed", role: "student" }
];

let groupby=people.reduce((acc,curr)=>{
    if(!acc[curr.role]){
      acc[curr.role]=[];
    }
    acc[curr.role].push(curr)
    return acc;
},{})
console.log(groupby)