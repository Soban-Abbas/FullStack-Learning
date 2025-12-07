// scope clousre , HOF
// let num1=20;

// function printnumber(){
//     let num1=30;
//     console.log(num1);//first check it own scope if veribale present print it if now move to outer scope
// }

// printnumber();

//____imp__________ kisi b scope ma jab ham koie varibale access krne ki koshis krte hin tu sab sy payle wo apne he scope ma dikta ha phr phr wo bahir scope ma jata ha

//1 global scope apne scope ma he varibale ko dikhay ga
//2 function scope sab sy payle apne function ma dikhe ga phr wo parent function am dikhe ga phr wo global scope ma dikhe ga

// similiary block scope b pyle apny scope ma dikhe ga ager nahi milta tu global scope ma dikhe ga

// let num1=20;
// function printnumber(){
//     let num1=30;
//     console.log("Printing number")
//     function check(){
//         let num1=30
//         console.log(num1);
//         console.log("i will check my outer scope not directly global scope")
//     }
//     check();
// }
// printnumber()

// function greet(){
//     console.log("Hello sir");
//     function meet(){
//         console.log("When U are avaiable to meet");
//        return 'Sir Elster';
//     }
//      return meet();
// }
// // const meetfunction=
// const meetreturn=greet();
// console.log(meetreturn);
// console.log(meetfunction);
// meetfunction()

// ____________closure ______________
// A function that remember varibale from its outer scope even after the outer scope has finished it execution

// function outer() {
//     const message = "Hello";

//     function inner() {
//         console.log(message);  // Accesses outer's variable
//     }

//     return inner;  // Return the function
// }

// const myFunction = outer();  // outer() finishes executing
// myFunction();  // "Hello" - but how does it still remember "message"?

// _________**What just happened?**

// 1. `outer()` runs and creates `message`
// 2. `inner()` is defined INSIDE `outer()` - it "closes over" `message`
// 3. `outer()` returns `inner` and finishes
// 4. Normally, `message` would be garbage collected... **BUT**
// 5. `inner` still has a reference to `message` - this is a **closure**!
// 6. When we call `myFunction()` (which is `inner`), it still remembers `message`



 
// _________banking app

// function BankAccount(initial_balance) {
//   const acc_number = 12344566;
// let balance=0;
//   if(typeof initial_balance==='number' && initial_balance>0){
//   balance = initial_balance;
//   }
 
//   return {
//     deposite: function (amount) {
//       if (amount <= 0 ) {
//         console.log(`please enter correct amount`);
//       } else if (amount>0 && typeof amount==='number'){
//          balance = balance + amount;
//       console.log(`deposting ${amount} successfully`);
//       }
      
//     },
//     withdraw: function (amount) {
//      if(amount>0 && amount<balance && typeof amount==='number') {
//         balance = balance - amount;
//       console.log(`RS ${amount} widthdrawn successfully`);
//       } 
//         else  {
//         console.log(`please enter correct amount to widthdraw`);
//       } 
//     },
//     account_info: function () {
//       console.log(`Account Number is ${acc_number}
//                 and Balance in acount is ${balance}`);
//     },
//   };
// }
// const acc_details = BankAccount(2000);
// acc_details.account_info()
// // acc_details.deposite(0)
// acc_details.withdraw(5000)
// acc_details.withdraw('hit')




// _________Higher order function
// passign function as argument in another function or return function from another function
