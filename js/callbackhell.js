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
// //     });
// // });
// function selectFood(food) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (food === "" || typeof food === Number) {
//         console.log(`please select Available food`);
//         reject();
//       } else {
//         console.log(`${food} Added to Cart`);
//         resolve();
//       }
//     }, 2000);
//   });
// }

// function makePayment(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!value) {
//         reject("Payment Unsuccessfull");
//       } else {
//         console.log(`Payment Successfull`);
//         resolve();
//       }
//     }, 2000);
//   });
// }

// function PrepareOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Food is Prepared`);
//       resolve();
//     }, 3000);
//   });
// }

// function callDeliveryBoy() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Order is picked at resturent`);
//       resolve();
//     }, 2000);
//   });
// }

// function deliverd() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Order is deliveed `);
//       resolve();
//     }, 2000);
//   });
// }

// selectFood("pizza")
//   .then(() => {
//     return makePayment(false);
//   })
//   .then(() => {
//     return PrepareOrder();
//   })
//   .then(() => {
//     return callDeliveryBoy();
//   })
//   .then(() => {
//     return deliverd();
//   })

//   .catch((error) => {
//     console.log(error);
//   });

// ________Call Back Hell_________

// let orderDetails = {
//   orderId: 2345,
//   items: ["pizza", "soup", "cold Drink"],
//   amount: 5000,
//   adress: "Lahore punjab",
//   orderPlaced: false,
// };
// function placeOrder(callback) {
//   console.log("payment is in Progress");
//   setTimeout(() => {
//     console.log("Payment is done and order is placed");
//     callback();
//   }, 3000);
// }

// function prepareOrder(callback) {
//   console.log("Order Preparation Started");
//   setTimeout(() => {
//     console.log("Order is Prepared");
//     callback();
//   }, 3000);
// }

// function PickOrder() {
//   console.log(
//     `Please Pick Order with order id ${orderDetails.orderId} from Resturent  `
//   );
//   setTimeout(() => {
//     console.log('Order is Picked from a resturent by a rider ISB-345');
//     orderDetails.riderNumber='ISB-345';
//   }, 3000);
// }

// placeOrder(()=>{
//   prepareOrder(()=>{
//     PickOrder();
//   });
// })

// function placeOrder(callback){
//   console.log('Placing Order...');
//   setTimeout(() => {
//     const orderDetails={orderId:345,items:['pizza','pasta','cold drink'],total:5000,adress:'Lahore'}
//     console.log(`${orderDetails.items} added to cart`);
//     callback(orderDetails);
//   }, 3000);
// }

// function payment(order,callback){
//   console.log(`Payment is in Progress`);
//   setTimeout(() => {
//     order.payment='Successfull'
//     console.log(`Payment is Done for ${order.orderId}`);
// callback(order);
//   }, 3000);
// }

// function prepareOrder(order,callback){
//   console.log('Order Preparation Started');
//   setTimeout(() => {
//     order.preparation='Done'
//     console.log(`Order is Prepared`);
//     callback(order);
//   }, 3000);
// }

// function assignRider(order,callback){
//   console.log('Finding Rider...');
// setTimeout(() => {
//   order.riderNumber='Isb-111';
//   console.log(`Order is picked by ${order.assignRider} from resturent`);
//   callback();
// }, 3000);

// }

// function delivery(order){
//   console.log(`Rider is on the way to Deliver your Order`);
//   setTimeout(() => {
//     console.log('Order is Deliver Successfully')
//     console.log(order);
//   }, 3000);
// }

// placeOrder((order)=>{
//   payment(order,(order)=>{
//     prepareOrder(order,(order)=>{
//       assignRider(order,(order)=>{
//         delivery(order)
//       })
//     })
//   })
// })

// //   _______movie ticketing website_______
// function selectMovie(callback){
//   console.log(`user selecting movie...`);
// setTimeout(() => {
//   const movieInfo={
//     movieName:'dont breath',
//     ticketPrice:5000,
//     ticketID:123

//   }
//   console.log(`Your Selected movie : ${movieInfo.movieName}`)
//   callback(movieInfo);
// }, 3000);
// }

// function payTicketFee(movieInfo,callback){
//   console.log(`payment in Progress of ticket ID  ${movieInfo.ticketID} `);
//   setTimeout(() => {
//     movieInfo.payment='Successfull';
//     console.log(`payment Successfull`)
//     callback(movieInfo);
//   }, 3000);
// }

// function enteringCinema(movieInfo){
//   console.log(`User entering in cinema for movie ${movieInfo.movieName}`);
//   setTimeout(() => {
//     movieInfo.TicketStatus='Expire';
//     console.log(`User Watching movie : ${movieInfo.movieName}`)
//   }, 3000);
// }

// selectMovie((movieInfo)=>{
//   payTicketFee(movieInfo,(movieInfo)=>{
//     enteringCinema(movieInfo);

//   })
// })

// ______________cart____________

function itemToCart(callback) {
  console.log(`adding items to cart...`);
  setTimeout(() => {
    const items = {
      item: ["Mobile", "Laptop", "Bag"],
      totalBill: 50000,
    };
    console.log(`${items.item} added to cart`);
    callback(items);
  }, 3000);
}

function payment(items, callback) {
  items.orderID = "34567";
  console.log(`Payment is in Progress against OrderID ${items.orderID}`);
  setTimeout(() => {
    console.log(`Payment is Successfull`);
    items.payment = "Successfull";
    callback(items);
  }, 3000);
}

function shipOrder(items, callback) {
  console.log(`Shipping Order to WareHouse `);
  setTimeout(() => {
    console.log(`Order is ship from WereHourse to Courior Office`);
    items.ShippingID = 987;
    callback(items);
  }, 3000);
}

function deliverOrder(items) {
  console.log(`Your Order is on The way to deliver `);
  setTimeout(() => {
    console.log(`Your Order Of ${items.item} Are delivered Successfully`);
    console.log(`Complete Order Details: ${items}`);
  }, 3000);
}

itemToCart((OrderDetails) => {
  payment(OrderDetails, (billPayed) => {
    shipOrder(billPayed, (ShippedWarehouse) => {
      deliverOrder(ShippedWarehouse);
    });
  });
});
