var correctAnswer = "Your name"
var intense = "!!!!"


function runRiddle() {
  if (document.getElementById('riddleAnswer').innerHTML('correctAnswer') == true) {
    document.alert("You got it right" + 'intense');
  }
  else if (document.getElementById('riddleAnswer').innerHTML('correctAnswer') == false) {
    document.alert("Try again" + 'intense');
  }
  else (document.getElementById('riddleAnswer').innerHTML('null') == true) {
    document.alert("Hey there was nothing there" + 'intense');
    return;
  }
}
