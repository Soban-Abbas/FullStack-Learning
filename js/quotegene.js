const quotes = [
  "Success is built on small, consistent steps.",
  "Learning never stops—keep exploring.",
  "Stay curious, and solutions will find you.",
  "Every challenge is a chance to grow.",
  "Code is like art—write it with care.",
  "Failure is just a temporary detour, not the end.",
  "Great things take time—be patient with yourself.",
  "The best way to learn is by building.",
  "Small improvements add up to big results.",
  "Believe in your ability to figure things out.",
  "Don’t compare your journey to others.",
  "Your future self will thank you for starting today.",
  "Debugging is where true learning happens.",
  "Nothing is impossible when you break it into steps.",
  "Your mindset matters more than your skillset.",
  "A good engineer asks good questions.",
  "Progress beats perfection every time.",
  "You learn more by doing than by watching.",
  "Stay humble, stay hungry.",
  "Every expert was once a beginner."
];
console.log(quotes.length)
let quotebtn=document.getElementById("quotebtn")
let quoteheading=document.getElementById("quoteheading");
quotebtn.addEventListener("click",newquote)
function newquote(){
    let newquote=Math.floor(Math.random()*(quotes.length-0)+0)
    console.log(newquote)
    quoteheading.textContent=quotes[newquote];
}