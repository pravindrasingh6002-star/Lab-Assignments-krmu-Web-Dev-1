// ===============================
// Prompt Quizzer – A Quiz Game
// Web Dev I Lab Assignment 4
// ===============================

const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "New Delhi"
    },
    {
        question: "Which language runs in a web browser? (Java, Python, JavaScript)",
        answer: "JavaScript"
    },
    {
        question: "Who is known as the father of computers?",
        answer: "Charles Babbage"
    },
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    }
];


function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) { 
        
        let userAnswer = prompt(quizQuestions[i].question); 
        
        if (!userAnswer) {
            alert("No answer entered. Moving to next question.");
            continue;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

       
        if (userAnswer === quizQuestions[i].answer.toLowerCase().trim()) {
            score++;
            alert("Correct! 🎉"); 
        } else {
            alert(`Wrong! ❌\nCorrect Answer: ${quizQuestions[i].answer}`);
        }
    }

    
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}

runQuiz();
