const quizQuestions = [
    {
        question: ' How many soccer players should each team have on the field at the start of each match?',
        answers: [ 10, 20, 11, 22 ],
        correct: 11,
        clickedValue: ''
    },

    {
        question: ' When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
        answers: [ 8, 6, 12, 17 ],
        correct: 6,
        clickedValue: ''
    },

    {
        question: 'Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?',
        answers: ['usain flash', 'Usain Lightning', 'Johan Blake', 'Ulsain Bolt'],
        correct: 'Ulsain Bolt',
        clickedValue: ''
    },

    {
        question: ' What’s the shortcut for the “copy” function on most computers?',
        answers: ['ctrl c', 'ctrl a', 'ctrl v', 'shift Del'],
        correct: 'ctrl c',
        clickedValue: ''
    },

    {
        question: ' Which city in India would you find the Taj Mahal in?',
        answers: ['bangalore', 'mumbai', 'delhi', 'agra'],
        correct: 'agra',
        clickedValue: ''
    },
    {
        question: 'Which animal can be seen on the Porsche logo?',
        answers: ['tiger', 'wolf', 'puma','horse'],
        correct: 'd',
        clickedValue: ''
    },

    {
        question: 'Who is often credited with creating the world’s first car?',
        answers: ['Karl Benz', 'rogers federer', 'hellen keller', 'mattias pratt'],
        correct: 'a',
        clickedValue: ''
    },

    {
        question: 'Which country produces the most coffee in the world?',
        answers: ['england', 'brazil', 'france', 'scotland'],
        correct: 'b',
        clickedValue: ''
    },

    {
        question: 'Which country invented tea?',
        answers: ['denmark', 'paris', 'italy', 'china'],
        correct: 'd',
        clickedValue: ''
    },

    {
        question: 'Which country is responsible for giving us pizza and pasta?',
        answers: [
            'england',
            'turkey',
            'italy',
            'madagascar'
        ],
        correct: 'c',
        clickedValue: ''
    },

            
]

const quizStartBtn = document.querySelector('#quizStartBtn');
const quizContainer = document.querySelector('#quizContainer');
const question = document.querySelector('#question');
const quizOutput = document.querySelector('#quizOutput');
const questionHeader = document.querySelector('#questionHeader');
const navBtn = document.querySelector('.navBtns');
const quizOptions = document.querySelector('.quiz-answers');
const quizStopper = document.querySelector('.quizTimer');

let i = 0;
let quizScore = 0;
let radio;


quizQuestions

const startQuiz = () => {

    quizStartBtn.classList.add('d-none');

    quizLoadQuestion();
        
    
}

const startTimer = document.querySelector('#startTimer')

const quizLoadQuestion = () => {

    loader = 3;

    let quizLoader = setInterval (() => {

        startTimer.classList.remove('d-none');

        
        loader--;

        if(loader === 0){

            startTimer.classList.add('d-none');
            quizDisplay();
            stopTimer();
            clearInterval(quizLoader);
    }
}, 1000)

}


const stopTimer = () => {

    let quizTimer = 30;

    const timer = setInterval(() => {

        quizStopper.innerText = quizTimer;
        
        quizTimer--;

        if(quizTimer <= 5){
            quizStopper.classList.add('text-danger');
            quizStopper.innerHTML = `${quizTimer}!`;
        }

        if(quizTimer === 0){       
            
            endQuiz();
            clearInterval(timer);
        }
    }, 1200);
}
    

const questionIndex = document.querySelector('#questionIndex');

const quizDisplay = () => {
 
    quizContainer.classList.remove('d-none');

    questionHeader.innerHTML = `Question ${i + 1}`;
    questionIndex.innerHTML = `${i + 1} of ${quizQuestions.length}`
    question.innerHTML = quizQuestions[i].question;
    
    quizOptions.innerHTML = '';
    quizQuestions[i].answers.forEach((answer) => {
        quizOptions.innerHTML += `
        <div class="mb-2">
            <input type="radio" value="${answer}" name="radio" class="radio">
            <label for="radio">
                ${answer}
            </label>
        </div>
        ` 
    })
    handleQuizScore();   
}

const tellScore = (e) => {

    if(parseInt(e.target.value) === quizQuestions[i].correct){
       quizScore += 10
    }else if(e.target.value === quizQuestions[i].correct){
        quizScore += 10
    }else{
        quizScore += 0;
    }

    radio.forEach((rad) => {
        rad.checked = false;
    })
    
    quizQuestions[i].clickedValue = e.target.value;
    e.target.checked = true;
               
}

const handleQuizScore = () => {

    radio  = document.querySelectorAll('input');

    radio.forEach((rad) => {

        rad.addEventListener('change', tellScore)
        
        if(rad.value === quizQuestions[i].clickedValue){
            rad.checked = true;            
        }

    })
}

    
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const endBtn  = document.querySelector('#endBtn');

const quizNav = (e) => {

    if(e.target.innerText === 'NEXT'){
    
        prevBtn.classList.remove('d-none');

        i++;
        quizDisplay();

        if(quizQuestions.length - 1 === i){
            endBtn.classList.remove('d-none');
            nextBtn.classList.add('d-none');
        };
       
    }else if(e.target.innerText === 'PREV'){
        if(i === 1){
            prevBtn.classList.add('d-none');
        }

        i--;
        quizDisplay();
    }
}

prevBtn.addEventListener('click', ((e) => {
    
    if(quizQuestions.length > i){
        endBtn.classList.add('d-none');
        nextBtn.classList.remove('d-none');
    }
}))
const endQuiz = () => {
    quizDisplay();
    document.body.innerHTML = `<div class="container d-flex justify-content-center align-item-center mt-5">
                                    <div class="display-4 font-weight-bold">Your Score Is ${quizScore}%</div>
                            </div>`
}



endBtn.addEventListener('click', endQuiz);
navBtn.addEventListener('click', quizNav)
quizStartBtn.addEventListener('click', startQuiz);