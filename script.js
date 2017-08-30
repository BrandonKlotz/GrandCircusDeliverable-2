function riddle() {
  var text;
  var correctAnswer = "your name";
    var correctAnswerTwo = "Your name";
  var userInput = prompt('What is the answer?');
  switch (userInput) {
    case correctAnswer:
      text = userInput + ' is right! GOOD Job!';
      break;
      case correctAnswerTwo:
        text = userInput + ' is right! GOOD Job!';
        break;
    default:
      text = userInput + ' is not correct, try again..';
      break;
  }
  document.getElementById("responder").innerHTML = text;
  return;
}
