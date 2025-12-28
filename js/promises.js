
// const p1=fetch('https://api.github.com/users');
// console.log(p1);



// const p2=p1.then((response)=>{
// return response.json();
// })

// p2.then((response)=>{
//     console.log(response)
// })

function login(){
    console.log(`Login to Your  Account`);
    
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const user={
            AccId:111,
            Name:'Ali',
            Balance:5000
        }
        if(Math.random()>0.4){
            console.log(`Login Successfull`);
            resolve(user)
        }
        else{
            reject('Invalid Credentials')
        }
    }, 3000);
})
}


function checkBalance(userdetails){
    console.log(`Checking balance`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.2){
                console.log(`Your Current Balance is ${userdetails.Balance}`);
                resolve(userdetails);
            }else{
                reject(`Session Out`)
            }
        }, 3000);
    })
}


function transferMoney(userdetails){
    console.log(`Transferring Money from Account ${userdetails.AccId}`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.5){
                userdetails.sendMoney='Successful';
                resolve(userdetails)
            } else {
                reject('Not Sufficient Balance')
            }
        }, 3000);
    })
}

function sendRecept(userdetails){
    console.log(`Sending Recept`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Recept Send`)
            resolve(userdetails);
        }, 3000);
    })
}


login()
.then((user)=>{
    return checkBalance(user)
})
.then((user)=>{
    return transferMoney(user)
})
.then((user)=>{
    return sendRecept(user)
})

.catch((error)=>{
    console.log(`Error :` ,error)
})