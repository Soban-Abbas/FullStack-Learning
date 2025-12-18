// async function greet(){
//     return 'hello'
// }

// console.log(greet())//async function alway return promise 
// //we need to store that promise in varibale then we can call .then and .catch on that varibale

// let promise=greet()
// promise.then((data)=>{
// console.log(data)
// })


// let githubUsers=fetch('https://api.github.com/users')
// console.log(githubUsers)

// githubUsers.then((data)=>{
// return data.json();
// }).then((data)=>{
// console.log(data)
// })



// asyn await easy method
async function github() {
    console.log('hi')
const response = await fetch('https://api.github.com/users');


const respJson= await response.json();

console.log(respJson);
}
github()
console.log('hello g');   