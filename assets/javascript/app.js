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
var Trivia = {
    Correct: 0,
    Incorrect: 0,
    Unanswered: 0,
    Timer: 30,
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
}