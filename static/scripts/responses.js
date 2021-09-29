function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } 
  else if (input == "learn") {
    return "Check out the training section and continue your learning journey!";
  } 
  else if (input == "doubt" || input == "forum" || ) {
    return "If you have any doubts and you need help, go to the forum section and discuss your problems with other members!";
  } 
  else if (input == "inspiration") {
    return "There are a lot of women who have worked hard and reached success in life, if you want to know their stories feel free to to to the inspiration section and there you can also select the category of entreprenuers!";
  } 
  else if (input == "session") {
    return "Everyone needs to learn new things with time. If you want to learn something, do check out  the session section. There many leaders and tutors post their upcoming sessions; Feel free to go through them and register in which you want to learn!";
  } 
  else if (input == "newsletter") {
    return "We know you are a great learner. Subscribe to our newsletter in Stay in touch section and get regular updates!";
  } 
  else if (input == "thanks") {
    return "You are Welcome!";
  } else {
    return "Try asking something else!";
  }

}
