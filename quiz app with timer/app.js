const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Who is the founder of Pakistan?",
        options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Fatima Jinnah"],
        correct: "Quaid-e-Azam"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correct: "Blue Whale"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: "7"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });

    timeLeft = 10;
    document.getElementById('timer').innerText = timeLeft;
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    clearInterval(timer);
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('.quiz-container').style.display = 'none';
    const resultContainer = document.getElementById('result');
    resultContainer.style.display = 'block';
    document.getElementById('total-score').innerText = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);


loadQuestion();
