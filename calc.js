
function getResult(ele){
    let resultTD = document.getElementById("result");
    let firstIn = ele.value;
    if (firstIn == "=") 
    {
        resultTD.innerHTML = eval(resultTD.innerHTML);
    }
    else if (firstIn == '.')
    {
        if(!(resultTD.innerHTML).includes('.'))
        {
            resultTD.innerHTML+=firstIn;
        }
        else
        {
            alert("Clear and start new calculation");
        }
    }
    else if (resultTD.innerHTML == '0')
    {
        resultTD.innerHTML = firstIn;
    }
    
    else{
        resultTD.innerHTML += firstIn;
    }
    // if(isNaN(firstIn)){
    //     if(firstIn == '+'){

    //     }
    //     else if(firstIn == 'Clear'){
    //         resultTD.innerHTML = 0;
    //     }
    //     alert("Only Number allowed");
    // }
    // // else{
    // //     document.getElementById("result").value = firstIn;  
    // // }
}
function clearCalc(){
    let resultTD = document.getElementById("result");
    resultTD.innerHTML = 0;
}