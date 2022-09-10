const quizForm = document.querySelector(".form1");
const results = document.querySelector("#submit");
const score = document.querySelector("#output");

results.addEventListener("click",calculate)

const correctAnswers = [
    "60",
    "isoceles",
    "othersides",
    "tworightangles",
    "equilateraltriangle",
    "equilateral",
    "rightangle",
    "equilateral",
    "100",
    "30",
];

function calculate(){
    console.log("working");
    var formResults = new FormData(quizForm);
    let total = 0, index = 0;
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            total = total + 1;
        }
        index = index + 1;
    }
    score.innerText = "Your points: " + total; 
}


