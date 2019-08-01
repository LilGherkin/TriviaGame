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
    //Keeps track of questions where time ran out.
    Unanswered: 0,
    //Timer set for 30 seconds. 
    Timer: 30,
    //Time that is displayed. Starts off as blank.
    CurrentTime: "",
    //Sets our timer on and off. Off by default.
    TimerRunning: false,
    //Keeps track of what question we're on.
    CurrentQuestion: 0,
    //Question bank.
    Questions: {
        Question1: "1+1 = ?",
        Question2: "3*4 = ?",
        Question3: "5-6 = ?",
        Question4: "15/5 = ?",
        Question5: "2 ^ 3 = ?",
        Question6: "5 % 2 = ?",
        Question7: "3 * 2 + 1 = ?",
        Question8: "30x - 5 = 10. What is x expressed as a decimal?",
        Question9: "-1 * -5 * -2 = ?",
        Question10: "How would you simplify writing out the following: 1 * 2 * 3 * ... * 100?"
    },
    //Option bank
    Options: {
        Question1: ["2", "4", "3", "1"],
        Question2: ["12", "6", "7", "1"],
        Question3: ["1", "0", "-1", "Undefined"],
        Question4: ["1", "5", "15", "3"],
        Question5: ["5", "6", "8", ".6666"],
        Question6: ["2.5", "1", ".1", "1"],
        Question7: ["7", "9", "8", "6"],
        Question8: ["15/30", ".5", "1/2", ".15"],
        Question9: ["10", "100", "-100", "-10"],
        Question10: ["Σ100", "No known notation", "100!", "100?"]
    },
    //Answer Bank
    Answers: {
        Question1:["2"],
        Question2:["12"],
        Question3:["-1"],
        Question4:["3"],
        Question5:["8"],
        Question6:["1"],
        Question7:["7"],
        Question8:[".5"],
        Question9:["-10"],
        Question10:["100!"],
    },
}

function StartGame(){
    Trivia.CurrentQuestion = 0
    Trivia.Correct = 0;
    Trivia.Incorrect = 0;
    Trivia.Unanswered = 0;
    clearInterval(Trivia.CurrentTime);
    console.log(Trivia);
    NewQuestion();
}

function NewQuestion(){
    //Resets timer to 30 seconds.  
    Trivia.Timer = 30;
    //Writes text to our timer.
    $("#timer").text(Trivia.Timer);
    //Sets our question as a variable to be reference later.
    var QuestionQuestion = Object.values(Trivia.Questions)[Trivia.CurrentQuestion];
    //Populates the Question field.
    $("#Question").text(QuestionQuestion);
    //Array of all options for the question.
    var QuestionOptions = Object.values(Trivia.Options)[Trivia.CurrentQuestion];
    //Populate Option field. .each gathered from JQuery API. Goes through the key value pairs
    //We're appending buttons to our Options div that contains the content.
    $.each(QuestionOptions, function(index, value){
        $("#Options").append($('<button class="Options">'+value+'</button>'));
    })
}

function CheckGuess(){
    //Sets the answer equal to whatever we defined as the answer in our Trivia.Answers at the counter for the current question.
    var CurrentQuestionAnswer = Object.values(Trivia.Answers)[Trivia.CurrentQuestion];
    //If the chosen guess has the same value as CurrentQUestionANswer then they got it right, and get 1 point.
    //This is being used becaues it should be referring to the button that is clicked on. We have a listener for buttons on clicked to run check guess.
    if($(this).text() === CurrentQuestionAnswer){
        //Increment our correct answers tally.
        Trivia.Correct++;
        //Clear the timer.
        clearInterval(Trivia.CurrentTime);
    } else {
        //Increment wrong answers tally.
        Trivia.Incorrect++;
        //Clear the timer.
        clearInterval(Trivia.CurrentTime);

    }
}

//Sets the time, and adds to unanswered if it hits 0.
function TimerGoing(){
    //Once Trivia.Timer is equal to 0 then increment unanswered, clear the clock, run the next question.
    if(Trivia.Timer === 0){
        Trivia.Unanswered++;
        clearInterval(Trivia.CurrentTime);
    }
}
//Clears prevoius question and options and then grabs a new question. 
function SweepEmUp(){
    Trivia.CurrentQuestion++;
    $(".Options").remove();
    NewQuestion();
}
//Listeners
$("#Start").on("click", StartGame());
$(document).on("click", "#Option", CheckGuess());



//This closes out $(document).ready(function()){
});