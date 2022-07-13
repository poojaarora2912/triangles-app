const inputs = document.querySelectorAll('.inputs');
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculate.addEventListener("click", result);

function result(){
    const firstside = Number(inputs[0].value);
    const secondside = Number(inputs[1].value);
    const thirdside = Number(inputs[2].value);
    if(firstside + secondside > thirdside && secondside + thirdside > firstside && firstside + thirdside > secondside){
        const semiperimeter = (firstside+secondside+thirdside)/2;
        const area = Math.sqrt (semiperimeter*(semiperimeter-firstside)*(semiperimeter-secondside)*(semiperimeter-thirdside)).toFixed(4);
        output.innerText = "Area of triangle is =" + area + " using Heron's formula."
    }else{
        output.innerText = "Enter valid values";
    }
}
