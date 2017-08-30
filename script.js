var correctAnswer = "your name";
var userInput = document.querySelector('prompt');

function riddle() {
  var para = document.getElementById('button');
  para.addEventListener('click', riddle);
  prompt('What is the answer?');
  if (userInput == correctAnswer){
    alert(userInput + ' is right! GOOD Job!');}
  else {
    alert(userInput + ' is a good guess! Try again!!');}
}
