var correctAnswer = "Your name"
var intense = "!!!!"


function runRiddle() {
  if (document.getElementById('riddleAnswer').innerHTML('correctAnswer') == true) {
    document.getElementById('riddleResponder').innerHTML.append("You got it right" + 'intense');
  }
  else if (document.getElementById('riddleAnswer').innerHTML('correctAnswer') == false) {
    document.getElementById('riddleResponder').innerHTML.append("Try again" + 'intense');
  }
  else (document.getElementById('riddleAnswer').innerHTML('null') == true) {
    document.getElementById('riddleResponder').innerHTML.append("Hey there was nothing there" + 'intense');
    return;
  }
}
