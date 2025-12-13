const stars = [
  "Capricorn",  // January
  "Aquarius",   // February
  "Pisces",     // March
  "Aries",      // April
  "Taurus",     // May
  "Gemini",     // June
  "Cancer",     // July
  "Leo",        // August
  "Virgo",      // September
  "Libra",      // October
  "Scorpio",    // November
  "Sagittarius" // December
];
//size 31
const compliments = [
  "You have a calm strength that people notice.",
  "You genuinely care about people’s feelings.",
  "You try to be honest even when it’s difficult.",
  "You have strong emotional intelligence.",
  "People feel safe sharing things with you.",
  "You don’t give up easily in tough situations.",
  "You handle responsibilities maturely.",
  "You think deeply before taking decisions.",
  "You respect people even when you disagree.",
  "You value loyalty a lot.",
  "You have a natural problem-solving mindset.",
  "You are more patient than most people.",
  "You stay grounded during chaos.",
  "You believe in fairness.",
  "You quietly support others.",
  "You are self-aware.",
  "You learn from mistakes.",
  "You try to grow every day.",
  "You don’t pretend to be someone else.",
  "You have good control over emotions.",
  "You respect boundaries.",
  "You give importance to self-improvement.",
  "You are emotionally mature.",
  "You listen more than you speak.",
  "You don’t judge people quickly.",
  "You are dependable.",
  "You value meaningful connections.",
  "You keep promises.",
  "You think long-term.",
  "You try to stay balanced.",
  "You have inner discipline."
];
//size 21
const victimCardCompliments = [
  "You often give more than you receive.",
  "People take your kindness for granted.",
  "You stay strong even when you feel tired.",
  "You rarely get the appreciation you deserve.",
  "You forgive people who don’t deserve it.",
  "You put others first and forget yourself.",
  "You hide pain behind a calm face.",
  "You stay silent to avoid conflict.",
  "You help people even when you are struggling.",
  "You are misunderstood most of the time.",
  "You don’t express pain easily.",
  "You expect fairness but don’t always get it.",
  "You hold yourself accountable for others’ mistakes.",
  "You care deeply, sometimes too deeply.",
  "You don’t like asking for help.",
  "You accept less than you deserve.",
  "You try to keep everyone happy.",
  "You sacrifice your comfort for others.",
  "You carry emotional weight quietly.",
  "You stay loyal even when hurt."
];
//size 31
const recommendations = [
  "Focus on your mental peace.",
  "Don’t explain yourself to everyone.",
  "Learn to say no politely.",
  "Protect your emotional energy.",
  "Trust actions more than words.",
  "Give yourself enough rest.",
  "Stop blaming yourself unnecessarily.",
  "Let go of things you can’t control.",
  "Value your time.",
  "Don’t overcommit.",
  "Choose peace over arguments.",
  "Set personal boundaries.",
  "Listen to your instincts.",
  "Take breaks without guilt.",
  "Avoid unnecessary stress.",
  "Focus on personal growth.",
  "Spend time with supportive people.",
  "Don’t chase validation.",
  "Accept imperfections.",
  "Slow down when needed.",
  "Prioritize your health.",
  "Avoid emotional burnout.",
  "Be kind to yourself.",
  "Let silence speak sometimes.",
  "Detach from negativity.",
  "Don’t overthink every detail.",
  "Celebrate small wins.",
  "Stay consistent.",
  "Choose clarity over confusion.",
  "Focus on long-term peace."
];
//size 21
const predictions = [
  "This period is about emotional growth.",
  "You will gain clarity soon.",
  "A decision will bring peace.",
  "You will understand someone better.",
  "Letting go will help you move forward.",
  "Patience will be rewarded.",
  "You will feel more balanced soon.",
  "Something unresolved will settle.",
  "You may rethink an important choice.",
  "Personal growth is happening quietly.",
  "Your mindset is changing positively.",
  "You will feel lighter emotionally.",
  "Clarity will replace confusion.",
  "A calm phase is approaching.",
  "You will feel more confident.",
  "Old stress will slowly fade.",
  "You will prioritize yourself more.",
  "You will gain emotional strength.",
  "Your perspective will mature.",
  "Peace will matter more than drama."
];
const astrology=document.getElementById("result");
const form=document.getElementById("astroForm");
form.addEventListener("submit",(e)=>{
e.preventDefault();

const name= document.getElementById("name").value;
const day= parseInt(document.getElementById("day").value);
const month= parseInt(document.getElementById("month").value);
const year= parseInt(document.getElementById("year").value);
const result=document.createElement("h3")
result.textContent=`Hi, ${name} your star is ${stars[month-1]} , ${compliments[(day**3)%31]}, ${victimCardCompliments[(month**3)%21]}, ${recommendations[day-1]}, ${predictions[(year*month*day)%21]}`;

console.log(result.textContent);
astrology.appendChild(result);
form.reset();
})