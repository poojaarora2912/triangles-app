const quizForm = document.querySelector(".quiz-form");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

const correctAnswers = [
    "60",
    "isoceles",
    "othersides",
];

function calculate(){
    const formResults = new FormData(quizForm);
    let total = 0, index = 0;
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            total = total + 1;
        }
        index = index + 1;
    }
    score.innerText = "Your points: " + total; 
}


results.addEventListener("click",calculate)