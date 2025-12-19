// let obj={
//     name:'Ali',
//     id:20,
//     age:32
// }
// console.log(obj.name)

// console.log(obj.hasOwnProperty('name'));
// console.log(obj.toString());

// let obj2={
//     class:'F23'
// }


// obj2.__proto__=obj;
// console.log(obj2.name)


// _________classes__________

// const obj1={
//     name:'Ali',
//     id:1,
//     class:'F23',
//     greet:function(){
// console.log(`Helo ${this.name}`);
//     }
// }
// const obj2={
//     name:'karim',
//     id:2,
//     class:'F23',
//      greet:function(){
// console.log(`Helo ${this.name}`);
//     }
// }
// const obj3={
//     name:'sarim',
//     id:3,
//     class:'F23',
//      greet:function(){
// console.log(`Helo ${this.name}`);
//     }
// }
// const obj4={
//     name:'Saram',
//     id:4,
//     class:'F23',
//      greet:function(){
// console.log(`Helo ${this.name}`);
//     }
// }

// obj4.greet();
// obj2.greet();


// _____using Concept of Classes

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}



const obj1=new student('ALi',20);
console.log(obj1.name)
console.log(obj1.hasOwnProperty('age'))
obj1.greet();


const obj2=new student('Soban',20)
console.log(obj1)
console.log(obj2)



class hostelizedStudent extends student{
    constructor(name,age,room,hostelNo){
        super(name,age);
        this.room=room;
        this.hostelNo=hostelNo;
    }

    checkRoom(){
        return this.room;
    }
}


let hostelizedStudent1=new hostelizedStudent("kamran",20,2,5);

console.log(hostelizedStudent1.checkRoom())