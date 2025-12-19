let orderDetails={
    order_id:123,
    cus_name:'Ali',
    items:['pizza','burger','shawarma'],
    amount:5000,
    address:'Punjab, Pakistan',
    Account_no:123456789
}
function PlaceOrder(orderDetails){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.3){
            console.log(`Your Order ${orderDetails.items} is Placed `);
            resolve({
                ...orderDetails,
                order_status:'Placed'
            });
        }else{
        
            reject('Order Not Placed , Server Down')
        }
        
    }, 3000);
})
}

function Payment(orderDetails){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.5){
                console.log(`Payment Successfull ${orderDetails.amount} detected from your Account: ${orderDetails.Account_no}`);
                resolve({
                    ...orderDetails,
                    payment:'Successfull'
                })
            }else{
                reject('Payment Unsuccessfull');
            }
        }, 3000);
    })
}

function PreparingOrder(orderDetails){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`your Order ${orderDetails.items} are prepared`);
            resolve({
                ...orderDetails,
                Prepared_Order:'Done'
            });
        }, 2000);
    })
}
function delivery(orderDetails){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.3){
                console.log(`Your Order is on way to deliver at your ${orderDetails.address} `);
                resolve({
                    ...orderDetails,
                    Delivery_status:'Delivered'
                })
            }else{
                reject('Address not Found')
            }
        }, 3000);
    })
}

async function OrderFood() {
    try{
        const order =await PlaceOrder(orderDetails);
        const pay=await Payment(order);
        const preparefood= await PreparingOrder(pay);
        const Delivery=await delivery(preparefood);
        console.log('Order Summary : '+Delivery)

    }
    catch(error){
console.log('Error :' +error)
    }
    
}

OrderFood();