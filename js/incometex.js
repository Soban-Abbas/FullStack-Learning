let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let income=document.getElementById("income");
    let incomeValue=income.value ;
    let result=document.getElementById('result')
    let tax=0;
    if(incomeValue<50000){
result.textContent=`Tax: 0%`
    }else if(incomeValue<100000){
        tax = incomeValue * (5/ 100)

        result.textContent=`Tax: ${tax}`
    }else if(incomeValue<200000){
        tax = incomeValue * (10 / 100)

        result.textContent=`Tax: ${tax}`;
    }else if(incomeValue>200000){
        tax = incomeValue * (20/ 100)

        result.textContent=`Tax: ${tax}`

    }

    form.reset();
})