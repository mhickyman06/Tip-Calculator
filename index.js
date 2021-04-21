var content = document.getElementById("totalTip");
var calculate = document.getElementById("calculate");
var servicePercent = document.getElementById("serviceQual");
var peopleAmt = document.getElementById("peopleamt");
var tipElement = document.getElementById("tip");
var billAmt = document.getElementById("billamt");


function calc(){
    content.style.display = "inherit"; 
    if(billAmt.value == "" || isNaN(billAmt.value) || billAmt == 0){
        alert("please enter a valid input");
    }
    if(servicePercent.value == 0 || peopleAmt.value < 1 || peopleAmt.value == ""){
        alert("Enter numbers");
    }
     else
     {
        var percent = servicePercent.value /100;
        var tip = (billAmt.value * percent)/peopleAmt.value;
        tipElement.innerHTML = tip.toFixed(2);
    }
}
content.style.display ="none";
calculate.addEventListener("click",function(){
    calc();
})