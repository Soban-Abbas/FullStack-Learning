// let name='soban';
// let name1=`my name
//  is soban`;

// console.log(name1);

                 //---------
// let day=11;

// let course_date=` course date is ${day}`;

// console.log(course_date);

                //------------

  // let str=`my name is soban abbbas`;
  // console.log(str.length);
  //   console.log(str[7]);
  //   str[0]="X";
  //   console.log(str)

  //   console.log(str.toUpperCase())

    
                //------------
   
                
// let str=`my name is soban abbbas soban`;
// console.log(str.indexOf('sob'));
// console.log(str.indexOf('sb'));
// console.log(str.lastIndexOf('so'));

// let str1=str.toUpperCase();
// console.log(str1);

// console.log(str.includes('soban'));

                //------------slice 
// console.log(str.slice(2,5));
// console.log(str.slice(5));
                //------------substring same as slice
//  let str=`my name is soban abbbas soban`;
     
//   console.log(str.substring(3,5))

//____________connecting 2 strings____________
// let a=`soban`;
// let b=`abbas`;
// console.log(a+" "+b);

//_____________replace part of string with other string_____________
// let str=`i am going to school am`;
// console.log(str.replace("am","am not"));
// let str1=`i am going to school am `;
// console.log(str.replaceAll("am","am not"));




//______trim (removign extra spaceing from start and end )______

// let user=`       soban abbas    `;
// console.log(user);


// console.log(user.trim())//very imp alway use this when getting input from user;


//______spliting string ______
// most of times we get data into array lilke differnt users name e.g `soban,abbas,ali,waqas,samar,jhan,qasim` now i want that i get seperated everyone

// let users=`ali,almas,posh,mahan,ksim`;
// let user=users.toUpperCase();
// console.log(user.split(","))//split where see commas ... but we can aplit on bases of spaces also





//________date_______

// let date=new Date();
// console.log(date);//this will show current UTC time and pakistan is 5 hours ahead from utc so it show time back hours behind from your device time


//if u want to get your device time u just need to do is
// console.log(date.toString());
// console.log(date.toISOString())
// console.log(date.toLocaleString())
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getFullYear())


//________creating my custom date_________

// let date=new Date(2023,11,31,10,20,50);
// console.log(date);
// console.log(date.toISOString())//UTC time
// console.log(date.toString())
// console.log(date.toLocaleString())



//________getting date in milisec

// let date=Date.now();
// console.log(date)//this will give date in milisec and it get updated after every milisec

//conviering these milisec to real date
// let dates=new Date(1764916081798);
// console.log(dates.toString())


// at 1764916081798 milisec it showing today date and 0 milisec it will show 1days on that milisec date concept get started

// let dates=new Date(0);
// console.log(dates.toString())


// Thu Jan 01 1970 05:00:00 GMT+0500 (Pakistan Standard Time) date concept in milisec get started

let date=Date.now();
console.log(date)
let dates=new Date(date)
console.log(dates)