var button = document.querySelector('button');
var correctAnswer = "your name";
var userInput = document.querySelector('promt.value');

button.onclick = function() {
  var name = prompt('What is the answer?');
  if (userInput == correctAnswer){
    alert(name.value + ' is correct! Good Job!!');
  }
  else {
    alert(nane.value + ' is a good guess! Try again!!');
  }
}
