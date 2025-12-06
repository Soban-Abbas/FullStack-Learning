// let marks=[90,91,87,78,89,56,74,37,27,47,48,23];
// console.log(marks);
// console.log(marks.length)
// marks.push('hello')
// console.log(marks)
// console.log(marks[marks.length-1]);
// marks[1]=100;
// console.log(marks);

// //----deleting last element(using pop function)----
// marks.pop();//remoing hello from  the end
// console.log(marks);

 
// //______adding and deleting from start______
// marks.unshift(10);//adding 10 at start
// console.log(marks);

// marks.shift();//remoivng 1st element from array
// console.log(marks);





//____________looping on array

// let marks=[10,20,45,5,3,4]
// for(let i=0;i<marks.length;i++){
//     console.log(`The number at index ${i} are ${marks[i]}`);
// }


// //________for of loop modern way for looping array
// for(let mark of marks){
//     console.log(`The marks are ${mark}`)
// }


//_______splice (u can add remove replace elemrnts anywhere in array)
// let days=['sat','sun','mon','tues','wed','thurs','fri'];


//array.splice(startIndex, deleteCount, item1, item2, ...)
//remoivng 1 elemnt 
// console.log(days.splice(0,1));
// console.log(days);

// //adding 1 element
// console.log(days.splice(2,0,"holiday"));
// console.log(days)

//________slice_______

// const days=['sat','sun','mon','tues','wed','thurs','fri'];

// let some_days=days.slice(2,5);
// console.log(some_days);
// console.log(days);
// days[3]='holiday';
// console.log(days);
// let new_days=days.slice()
// console.log(new_days);
// let day=days.slice(2);
// console.log(day)


// ______spread operator (copy the array)


// let day1=['sat','sun','mon','tues'];

// let day2=['wed','thurs','fri'];

// let day3=[...day1,'holiday',...day2];
// console.log(day3);


//_____array to string conversion


// let day1=['sat','sun','mon','tues'];

// let str=day1.join("--");//join(here we speicify what to put betwen them )
// console.log(str);



// _________searching in array


// let day1=['sat','sun','mon','tues' , 'wed', 'thur', 'friday','sat', 'sun','mon','tues' , 'wed', 'thur', 'friday'];
// console.log(day1.indexOf("tues"));
// console.log(day1.lastIndexOf("tues"));
// console.log(day1.includes('friday'));
// console.log(day1.indexOf("holiday"));






// sorting in array
// const days=['sat','sun','mon','tues','wed','thurs','fri'];
// console.log(days);
// days.sort()
// console.log(days);
// days.reverse()
// console.log(days);
//sort function sort the array of words accordign to disnory but but it follow ascii table also , startig words with small a will be places after all wordign string from A-Z;



// __________sorting numbers
// const a= [1,2,3,5,100];
// a.sort();
// console.log(a);
// a.sort((a,b)=>a-b);
// a=1st value 
// b=next value
//let suppose  a=1;
// let suppose b=2
// 1-2=-1

// if result on subtracting a -b is -ive 
//
// a comes first
// 1 comes first then 2  
// if result on subtracting a -b is +ive 
// b comes first
// console.log(a);




//_____flattening the array
//flat function return new flat array without chnaging original 
// let arr=[10,20,30,[69,48,49,[90,100,78],89],80];//2d array

// console.log(arr[3]);
// console.log(arr[4]);

// console.log(arr[3][0])
// console.log(arr[3][1])
// console.log(arr[3][2])


// console.log(arr[3][3][1]);

// console.log(arr[3][3][2]);

// let flat_arr=arr.flat(Infinity);
// console.log(flat_arr)
// console.log(arr);




// ____________Arrray is not array in js
//defination 
// store same type of data at continues location
//but in js we can store differnt type of data and when we store diffenrt type of data number takes 4 bytes of data string takes 8bytes of data so we cannot find adress of any index value by formula
                //base_address+index*size of data

// we have base adreeess i mean 1st index adresss then also i will not find adresss of any index bevause of random size of data(number 4bytes , string evevry character will take 1 bytes so if string has 8 char so butes consumed etc);                