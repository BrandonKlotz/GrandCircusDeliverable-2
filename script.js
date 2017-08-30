var correctAnswer = "your name";
var button = document.getElementsByTagName('button');
var userInput = document.querySelector('prompt');

function riddle() {
  var para = document.getElementById('answer');
  para.addEventListener('click', riddle);
  prompt('What is the answer?');
  if (userInput = correctAnswer){
    alert(prompt.value + ' is right! GOOD Job!');}
  else {
    alert(prompt.value + ' is a good guess! Try again!!');}
}
