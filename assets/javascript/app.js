/*
User clicks a button to begin the game. Game state is set to on.
Once began a question shows up and they have 30 seconds and 4 possible options to choose from. 
    If they are correct then increment correct count by 1
    If wrong, increment incorrect by 1. 
    If they don't answer within the time limit: increment the unanswered count by 1. 
    Then go onto the next question, maybe show an image and provide a quick 1-3 second break.
    If they 
        Wipe away current answers and questions. 
        Reset the timer to 30.
Repeat above process until they go through the entire list of questions.
Once completed, display the final socres.

*/

$(document).ready(function(){

//Various things being kept track of during the game.
var Trivia = {
    //Keeps track of correct answers
    Correct: 0,
    //Keeps track of incorrect answers.
    Incorrect: 0,
    //Keeps track of questiosn where time ran out.
    Unanswered: 0,
    //Timer set for 30 seconds. 
    Timer: 30,
    //Sets our timer on and off. Off by default.
    TimerRunning: false,
    //Keeps track of what question we're on.
    CurrentQuestion: 0,
    //Question bank.
    Questions: {
        Question1: "Question 1",
        Question2: "Question 2",
        Question3: "Question 3",
        Question4: "Question 4",
        Question5: "Question 5",
        Question6: "Question 6",
        Question7: "Question 7",
        Question8: "Question 8",
        Question9: "Question 9",
        Question10: "Question 10"
    },
    //Option bank
    Options: {
        Question1: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question2: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question3: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question4: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question5: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question6: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question7: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question8: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question9: ["Answer", "Wrong", "Wrong", "Wrong"],
        Question10: ["Answer", "Wrong", "Wrong", "Wrong"]
    },
    //Answer Bank
    Answers: {
        Question1:["Answer"],
        Question2:["Answer"],
        Question3:["Answer"],
        Question4:["Answer"],
        Question5:["Answer"],
        Question6:["Answer"],
        Question7:["Answer"],
        Question8:["Answer"],
        Question9:["Answer"],
        Question10:["Answer"],
    },
//Closes out Trivia object.
}

function StartGame (){
    Trivia.CurrentQuestion = 0
    Trivia.Correct = 0;
    Trivia.Incorrect = 0;
    Trivia.Unanswered = 0;
    clearInterval()
}

//This closes out $(document).ready(function()){
});