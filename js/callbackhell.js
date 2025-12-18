// CallBack Hell

function orderFood(food, callbak) {
  setTimeout(() => {
    console.log(`order of ${food} is placed`);
    callbak();
  }, 3000);
}

function payment(callback){
    setTimeout(() => {
        console.log("Payment received Successfully");
            callback();
        
    }, 3000);
}
function PrepareOrder(callback){
    setTimeout(() => {
        console.log(`Order is Prepared`);
        callback();
    }, 3000);
}
function callDeliveryBoy(callback){
setTimeout(() => {
    console.log('Order is Picked from Resturent');
    callback();
}, 2000);
}
function Delivered(){
    setTimeout(() => {
        console.log("order is deliverd ")
    }, 3000);
}

orderFood('pizza',()=>{
    payment( ()=>{
        PrepareOrder(()=>{
            callDeliveryBoy(()=>{
                Delivered();
            });
        });
    });
});