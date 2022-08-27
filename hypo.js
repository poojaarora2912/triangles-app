const inputs = document.querySelectorAll('.inputs');
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculate.addEventListener("click", result);

function result(){
var a = Number(inputs[0].value);
var b = Number(inputs[1].value);
if (a=='' || b==''){
    output.innerText = "Enter valid values";
}
else{
const sumofsquares = sum(Number(inputs[0].value), Number(inputs[1].value));
const lengthofhypo = Math.sqrt(sumofsquares);
output.innerText = "Length of Hypotenuse is:" + lengthofhypo;
}
}

function sum(a,b){
    return a*a + b*b;
    
}
