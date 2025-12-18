// // CallBack Hell

// function orderFood(food, callbak) {
//   setTimeout(() => {
//     console.log(`order of ${food} is placed`);
//     callbak();
//   }, 3000);
// }

// function payment(callback){
//     setTimeout(() => {
//         console.log("Payment received Successfully");
//             callback();

//     }, 3000);
// }
// function PrepareOrder(callback){
//     setTimeout(() => {
//         console.log(`Order is Prepared`);
//         callback();
//     }, 3000);
// }
// function callDeliveryBoy(callback){
// setTimeout(() => {
//     console.log('Order is Picked from Resturent');
//     callback();
// }, 2000);
// }
// function Delivered(){
//     setTimeout(() => {
//         console.log("order is deliverd ")
//     }, 3000);
// }

// orderFood('pizza',()=>{
//     payment( ()=>{
//         PrepareOrder(()=>{
//             callDeliveryBoy(()=>{
//                 Delivered();
//             });
//         });
//     });
// });
function selectFood(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (food === "" || typeof food === Number) {
        console.log(`please select Available food`);
        reject();
      } else {
        console.log(`${food} Added to Cart`);
        resolve();
      }
    }, 2000);
  });
}

function makePayment(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!value) {
        reject("Payment Unsuccessfull");
      } else {
        console.log(`Payment Successfull`);
        resolve();
      }
    }, 2000);
  });
}

function PrepareOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Food is Prepared`);
      resolve();
    }, 3000);
  });
}

function callDeliveryBoy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Order is picked at resturent`);
      resolve();
    }, 2000);
  });
}

function deliverd() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Order is deliveed `);
      resolve();
    }, 2000);
  });
}

selectFood("pizza")
  .then(() => {
    return makePayment(false);
  })
  .then(() => {
    return PrepareOrder();
  })
  .then(() => {
    return callDeliveryBoy();
  })
  .then(() => {
    return deliverd();
  })

  .catch((error) => {
    console.log(error);
  });
