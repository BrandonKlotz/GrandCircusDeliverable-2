
var correctAnswer = "your name";
var button = document.getElementsByTagName('button');
var userInput = prompt('What is the answer?');

function riddle() {
  var para = document.getElementById('answer');
  para.addEventListener('click', riddle);
  if (userInput = correctAnswer){
    alert(prompt.value + ' is right! GOOD Job!');}
  else {
    alert(prompt.value + ' is a good guess! Try again!!');}
}
