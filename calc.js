
function getResult(ele){
    let resultTD = document.getElementById("result");
    let firstIn = ele.value;
    let calCheck = document.getElementById("calstatus").innerHTML;
    if(calCheck == 1){
        alert("Clear and start new calculation");
    }
    else{
        if (firstIn == "=") 
        {
            resultTD.innerHTML = eval(resultTD.innerHTML);
            document.getElementById("calstatus").innerHTML = 1;;
        }
        else if (resultTD.innerHTML == '0')
        {
            resultTD.innerHTML = firstIn;
        }
        else{
            resultTD.innerHTML += firstIn;
        }
    }
}
function clearCalc(){
    let resultTD = document.getElementById("result");
    resultTD.innerHTML = 0;
    document.getElementById("calstatus").innerHTML = 0;
}
