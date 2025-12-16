// QUESTIONS DATA
const quizData = [
  {
    question: "What is JavaScript?",
    options: ["Markup Language", "Programming Language", "Database", "Browser"],
    correctAnswer: 1
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<header>"],
    correctAnswer: 0
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-size", "color", "background", "text-style"],
    correctAnswer: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    correctAnswer: 1
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correctAnswer: 2
  }
];

let questions=document.getElementById("question");
let opt1=document.getElementById("opt1");
let opt2=document.getElementById("opt2");
let opt3=document.getElementById("opt3");
let opt4=document.getElementById("opt4");
let result=document.getElementById("result")
let selectOption=null;
let score=0;
let currentQuestionIndex=0;
function loadQuestion(){
questions.textContent=quizData[currentQuestionIndex].question;
opt1.textContent=quizData[currentQuestionIndex].options[0];
opt2.textContent=quizData[currentQuestionIndex].options[1];
opt3.textContent=quizData[currentQuestionIndex].options[2];
opt4.textContent=quizData[currentQuestionIndex].options[3];
result.textContent='';
selectOption=null;
highlightOption();

}



loadQuestion();

// let question=document.getElementById("question");
// question.textContent=quizData[0].question;
// let opt1=document.getElementById("opt1");
// let opt2=document.getElementById("opt2");
// let opt3=document.getElementById("opt3");
// let opt4=document.getElementById("opt4");
// opt1.textContent=quizData[0].options[0];
// opt2.textContent=quizData[0].options[1];
// opt3.textContent=quizData[0].options[2];
// opt4.textContent=quizData[0].options[3];

// let selectOption=null;

opt1.addEventListener("click",()=>{
  selectOption=0;
  highlightOption();
})

opt2.addEventListener("click",()=>{
  selectOption=1;
  highlightOption();
})


opt3.addEventListener("click",()=>{
  selectOption=2;
  highlightOption();
})


opt4.addEventListener("click",()=>{
  selectOption=3;
  highlightOption();
})

function highlightOption(){
  opt1.style.backgroundColor='';
  opt2.style.backgroundColor='';
  opt3.style.backgroundColor='';
  opt4.style.backgroundColor='';

  if(selectOption==0){
    opt1.style.backgroundColor='lightblue';

  }else if(selectOption==1){
    opt2.style.backgroundColor='lightblue'
  }
  else if(selectOption==2){
    opt3.style.backgroundColor='lightblue';
  }
  else if(selectOption==3){
    opt4.style.backgroundColor='lightblue'
  }
}
// let result=document.getElementById("result")
// let submit=document.getElementById("submit");
// submit.addEventListener("click",()=>{
//   if(selectOption===null){
// result.textContent=`Please Select Option`
//   }else if( selectOption==quizData[0].correctAnswer){
//     result.textContent=`Correct Answer`;
//   }else{
//     result.textContent=`wrong Answer`
//   }
// })

let submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
  if(selectOption===null){
    result.textContent="please Select Option"
    result;
  } if(selectOption===quizData[currentQuestionIndex].correctAnswer){
    score++;
   
  }
   currentQuestionIndex++;
if(currentQuestionIndex<quizData.length){
  loadQuestion();
}else{
  result.textContent=`Quiz finish 
  your Score are ${score}/${quizData.length}`
}
})