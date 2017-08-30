function riddle() {
  var text;
  var answer = prompt("What's your guess?");
  switch(answer) {
    case "your name":
        text = " is right! Good Job";
        break;
    default:
        text = 'answer' + " is not correct. Try again..";
        break;
      }     
}
