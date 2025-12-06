// creating object



// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500
// }

// console.log(user);

// user.age=21;
// user.bank_type='konnect';

// console.log(user.age);
// console.log(user)

// user.amount=2000;
// console.log(user);


// // delting key value
// delete user.email_id;
// console.log(user);


//___________imp thing
//we cannot give spacing b/w keys like
// let user={
//     user name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500
// }

// to achieve this we store key as a string and behind the scene every key is stored in string so we manually can store key as string toacheve string

// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab'
// }


// console.log(user["name"]);
// console.log(user["Home Adress"]);



// _________copy refernce
// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab'
// }

// let user2=user;
// user2.age=25;
// console.log(user);



// _________accessing keys only

// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab'
// }

// console.log(Object.keys(user));//this return array of keys are we can store them in verbale 

// // _______accessing only valus

// console.log(Object.values(user))

// // _________to access all key values 

// console.log(Object.entries(user))//retur array which contain subarrays for every key value




// _________loooping on obj

// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab'
// }
// for (let keys in user ){
//     console.log(keys);//keys 
//     console.log(user[keys])

// }



// 
// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab'
// }

// const name=user.name;
// const age=user.age;
// console.log(name);
// console.log(age);


// insted of doing above method for getting and stroing any value into valriable form obj we use concpet of destructing




// _________destructing 

// const {name,age}=user
// // above line is destructing of obj right side will be obj name then left varibal type e.g let cont and the keys values u want to get in curlee braces
// console.log(name);
// console.log(age);
// if u wantto give new name to varibale like new name to name and age then do 

//const {name:user_name,age:user_age}=user
//console.log(user_name)
//console.log(user_age)

// __________array destruting
// let arr=[1,3,4,5,23,43,5,4];
// const [first_number , second_number]=arr
// console.log(first_number);
// console.log(second_number)



// _________for of loop on obj
// we know that we use for of loop on Array so we need array to run for of loop so for that we first get keys of obj in array by doing Object.keys(user) then store that array in variable then apply for of loop on that avribale 

// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab'
// }

// let key_array=Object.keys(user);
// console.log(key_array);
// for(let keys of key_array){
//     console.log(keys);
// }

// //for iterating on values of obj we do
// let value_array=Object.values(user);
// for(let values of value_array){
//     console.log(values)
// }

// for iterating ob key values of obj throw for of
//we use
// let array_obj=Object.entries(user) 


// for(let [key,value] of array_obj){
//     console.log(key,value)
// } 





// _________creating funtions in objects
// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     'Home Adress':'punjab',
//    greeting:function(){
//     console.log(`hello sir ${user.name}`);
//     //perferred way using this keyword
//     //this keyword has reference of object in which this is present so when we do this .name its mean user.name
//     console.log(`your amount is ${this.amount}`)
//     return 20;
//    }
// }

// const function_output=user.greeting();
// console.log(function_output);







// nested object
// let user={
//     name:'soban',
//     age:20,
//     email_id:'noban@gmail.com',
//     amount:3500,
//     address:{

//         city:"isb",
//         area:'H-10'

//     }
//  }
// console.log(user.address.area);

// //when we do 
// let user2=user;
// user2.address.area="I9";
// console.log(user.address.area);

// //so now creating copy of user into user2
// user2={...user};
// user2.name='ALi';
// console.log(user2);
// user2.address.area='i-10';
// console.log(user2)
// console.log(user)

///the issue lies in nested obj when we update nested object copy origial get also updated so we need to create stricted copy of 1st  obj


// let user2=structuredClone(user);
// user2.address.area='chakwal';
// console.log(user.address.area)
// console.log(user2.address.area);


//_______key can be string and symbol
const a=Symbol("hello");
const b=Symbol("hello");
console.log(a==b);

let user={
    name:'soban',
    age:20,
    email_id:'noban@gmail.com',
    amount:3500,
    'Home Adress':'punjab',
    [a]:'jek'
}
console.log(user[a]);
console.log(user['age']);