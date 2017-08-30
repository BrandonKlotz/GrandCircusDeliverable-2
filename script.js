
var correctAnswer = "your name";
var button = document.getElementsByTagName('button');


function riddle() {
  var text;
  var userInput = prompt('What is the answer?');
  switch (userInput) {
    case "your name":
      text = userInput + ' is right! GOOD Job!';
      break;
    default:
      text = userInput + ' is not correct, try again..';
      break;
  }
  document.getElementById("responder").innerHTML = text;
}
