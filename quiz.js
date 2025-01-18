function checkAnswer(){
   let correctAnswer = "4"; 
   let answer = document.getElementsByName("quiz");
   if (answer) {
    console.log("User's answer:", answer);
  } else {
    console.log("No option selected.");
  }
}