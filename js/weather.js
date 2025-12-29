let city=document.getElementById('location')
const key='7e47cf862ce3f0c61d9d3b43c62e3495';
async function weatherdata(){
event.preventDefault()
    const data=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`)
    const Data= await data.json()
console.log(Data);
}