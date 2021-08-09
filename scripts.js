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
    }
]

const quizStartBtn = document.querySelector('#quizStart');
const quizContainer = document.querySelector('#quizContainer');
const question = document.querySelector('#question');
const quizOutput = document.querySelector('#quizOutput');
const questionHeader = document.querySelector('#questionHeader');
const navBtn = document.querySelector('.navBtns');
const quizOptions = document.querySelector('.quiz-answers');
const quizStopper = document.querySelector('.quizTimer');

let i = 0;



const startQuiz = () => {

    quizStartBtn.classList.add('d-none');
    quizDisplay();
    timer();
    
}

let quizTimer = 10;
const timer = setInterval(() => {

    quizStopper.innerText = quizTimer;
    console.log(quizTimer);
    quizTimer--;
    if(quizTimer === 0){       
        
        endQuiz();
    }
}, 1000);


let quizScore = 0;

const quizDisplay = () => {

    quizContainer.classList.remove('d-none');

    questionHeader.innerHTML = `Question ${i + 1}`;

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

    const radio  = document.querySelectorAll('.radio');

    radio.forEach((rad) => {
        rad.addEventListener('click', (e) => {
            if(parseInt(e.target.value) === quizQuestions[i].correct){
               quizScore += 20
            }else if(e.target.value === quizQuestions[i].correct){
                quizScore += 20
            }else{
                quizScore += 0;
            }

        })
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

const endQuiz = () => {
    quizDisplay();
    document.body.innerHTML = `<div class="container d-flex justify-content-center align-item-center mt-5">
        <div class="display-4 font-weight-bold">You Score Is ${quizScore}%</div>
    </div>`
}



endBtn.addEventListener('click', endQuiz);
navBtn.addEventListener('click', quizNav)
quizStartBtn.addEventListener('click', startQuiz);