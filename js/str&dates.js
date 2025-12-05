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

let users=`ali,almas,posh,mahan,ksim`;
let user=users.toUpperCase();
console.log(user.split(","))//split where see commas ... but we can aplit on bases of spaces also

