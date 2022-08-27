const inputs = document.querySelectorAll('.angle');
const checkbutton = document.querySelector('#checktriangle');
const output = document.querySelector('#output');

function checktriangle(){
    var a = Number(inputs[0].value);
    var b = Number(inputs[1].value);
    var c = Number(inputs[2].value);
    if(a=='' || b=='' || c==''){
        output.innerText="Enter valid values";
    }else{
    const sum = sumofangles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sum===180){
        output.innerText="It is a triangle!";
    }else{
        output.innerText="It is not a triangle!";
    }
 }
}

function sumofangles(angle1, angle2, angle3){
    return angle1+angle2+angle3;
}

checkbutton.addEventListener('click', checktriangle)