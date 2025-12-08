// foreach,map,filter,reduce,set




// __________foreach__________
// const arr=[12,3,4,56,6,6]
// arr.forEach((Number,index,array)=>{
//     console.log(Number,index,array)
// })

// const arr=[12,3,4,56,6,6];
// let sum=0;
// arr.forEach((number)=>{
// sum=sum+number
// })
// console.log(sum);

// _________filter_________
// when we try to select some specific elemnt from array we filter the array on specific conditions

// const arr=[12,3,34,56,66,6]

// const newarr=arr.filter((number)=>number>25);
// console.log(newarr);

// __________map_________

const data = [
  {
    id: 1,
    name: "Alice",
    age: 22,
    role: "student",
    score: 78,
    active: true,
    country: "USA",
  },
  {
    id: 2,
    name: "Bob",
    age: 27,
    role: "developer",
    score: 88,
    active: false,
    country: "Canada",
  },
  {
    id: 3,
    name: "Charlie",
    age: 31,
    role: "manager",
    score: 95,
    active: true,
    country: "UK",
  },
  {
    id: 4,
    name: "David",
    age: 20,
    role: "student",
    score: 67,
    active: true,
    country: "India",
  },
  {
    id: 5,
    name: "Eva",
    age: 29,
    role: "designer",
    score: 82,
    active: false,
    country: "Germany",
  },
  {
    id: 6,
    name: "Farah",
    age: 26,
    role: "developer",
    score: 91,
    active: true,
    country: "Pakistan",
  },
  {
    id: 7,
    name: "George",
    age: 34,
    role: "manager",
    score: 74,
    active: true,
    country: "USA",
  },
  {
    id: 8,
    name: "Hina",
    age: 23,
    role: "intern",
    score: 60,
    active: false,
    country: "India",
  },
  {
    id: 9,
    name: "Ibrahim",
    age: 30,
    role: "developer",
    score: 85,
    active: true,
    country: "UAE",
  },
  {
    id: 10,
    name: "Jessica",
    age: 28,
    role: "designer",
    score: 92,
    active: true,
    country: "France",
  },
  {
    id: 11,
    name: "Kiran",
    age: 24,
    role: "student",
    score: 71,
    active: false,
    country: "Pakistan",
  },
  {
    id: 12,
    name: "Leo",
    age: 33,
    role: "developer",
    score: 89,
    active: true,
    country: "Brazil",
  },
  {
    id: 13,
    name: "Maria",
    age: 25,
    role: "intern",
    score: 66,
    active: true,
    country: "Spain",
  },
  {
    id: 14,
    name: "Nina",
    age: 32,
    role: "manager",
    score: 94,
    active: false,
    country: "USA",
  },
  {
    id: 15,
    name: "Omar",
    age: 29,
    role: "designer",
    score: 80,
    active: true,
    country: "Egypt",
  },
];

// const goodScore=data.filter((student)=>student.score>80).sort((a,b)=>b.score-a.score);
// console.log(goodScore);

// _______map______
// const active_user=data.filter(user=>user.active===true).map(user=>{
//   return{
//     Active_User_id:user.id,

//     Active_user:user.name,
//     Country:user.country

//   }
// })
// console.log(active_user);

// _________making my custom map

// function mapping(callback,data){
//   let result=[];
//   for(let item of data){
//   let collectItem=callback(item)
//   console.log(collectItem);
// result.push(collectItem)
//   }
// return result;
// }
// let Active_user=data.mapping(user=>({name:user.name,country:user.country}))
// console.log(Active_user)

// ____________learning reduce_________________

// const sum = data
//   .filter((user) => user.active === true)
//   .reduce((acculator, currentValue) => {
//     return acculator + currentValue.score;
//   }, 0);
// console.log(`The sum of Active Users are ${sum}`);


// let names=data.map((user)=>user.name);
// console.log(names)

// let second=data.map((user)=>{
//   return{
//     name:user.name,
//     score:user.score
//   }
// })


// console.log(second);

// // HOw many users are active

// let third=data.reduce((acc,currv)=>{
//   if(currv.active){
//    return acc+1;
//   }else{
//     return acc;
//   }
// },0)

// console.log(`active users are ${third}` );

// // Count how many users are active.
//   let totalActive=0;
// data.forEach((user)=>{

//   if(user.active){
// totalActive= totalActive+1
//   }else{
//   totalActive=totalActive+0;
//   }
// })
// console.log(`Total Ative users are ${totalActive}`);


// get all developers
// let developers = data.filter((user)=>{

//   return user.role==='developer';

//   })

//   console.log(developers);



// finding avg age  of all scores 

// let avgage=data.reduce((acc,curr)=>{
// return acc+curr.age;
// },0)/data.length;

// ;

// console.log(`The avg active user age are ${avgage.toFixed(2)}`);

// let activeUsers=data.filter((user)=>{
//   return user.active===true;


// }).map((user)=>{
//   return user.name;
// })

// console.log(activeUsers)


// 
// let sentence=data.map((user)=>{
//   return `${user.name} from ${user.country} Scored ${user.score}`
// })

// console.log(sentence);


//grouping users on role

// let groupUsers=Object.groupBy(data,(user)=>user.role);
// console.log(groupUsers);




// _______learning group by using reduce_______

// FIRST — Forget reduce for a moment

// Let’s pretend you want to build a grouped object manually.

// Imagine this:

// You want this final result:

// {
//   developer: [...],
//   student: [...],
//   manager: [...],
//   designer: [...],
//   intern: [...]
// }


// To build this, you would do:

// let result = {};

// for each user:
//     if user.role not in result:
//         create empty array (result[user.role] = [])
//     push user into that array


// let groupUser=data.reduce((acc,curr)=>{
// if(!acc[curr.role]){
//   acc[curr.role]=[];
// }
// acc[curr.role].push(curr);
// return acc;
// },{})




// _____________data structures______________
//1 set

// set ik array he huta ha per unique values present hute hin, duplicate values nahi hute hin


// let arr=[10,20,30,27,62,27,10,30];
// let set1=new Set(arr);
// console.log(set1);
// set1.add(40)
// console.log(set1);
// console.log(set1.has(20));
// console.log(set1.has(22))
// set1.delete(10);
// console.log(set1);
// console.log(set1.size);
// set1.clear()
// console.log(set1);




// _______real use case of set_______
// let email=['sobanabbass@gmail.com','saba@gmail.com','soban@gmail.com','sobanabbass@gmail.com','soba@gmail.com','sobanabbass@gmail.com' ]
// let uniqueEmail=[...new Set(email)];
// console.log(uniqueEmail);











// _____map data structure_____

// till now we learn that our keys of object can only b symbols or string 
// but now we want our  key can be anything like obj,array,boolean
//so we use map and map will store our data in key value pairs but our key can be anyting not only string or symbol


//syntax of map
// const map1=new map([
//   [Key,value],
//   [Key,value]
// ])

//example
const map1=new Map([
  ['name','soban'],
  [20,20],
  [true,'student'],
  [[10,20,30],'marks']
])

console.log(map1);
map1.set({name:'ali'},"hello")

// has 
// delete
// clear are the function with Map also 