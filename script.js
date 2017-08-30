var button = document.querySelector('button');
var userInput = document.querySelector('prompt') = "your name";

button.onclick = riddle() {
  var name = prompt('What is the answer?');
  if (document.getElementsByName('prompt') == "Your name"){
    alert(name.value + ' is right!!');
  }
  else {
    alert(name.value + ' is a good guess! Try again!!');
  }
}
