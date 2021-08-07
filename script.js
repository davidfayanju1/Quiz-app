const quizQuestions = [
        {
            question: ' How many soccer players should each team have on the field at the start of each match?',
            answers: [ 10, 20, 11, 22 ],
            correct: 11
        },

        {
            question: ' When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
            answers: [ 8, 6, 12, 17 ],
            correct: 6
        },

        {
            question: 'Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?',
            answers: ['usain flash', 'Usain Lightning', 'Johan Blake', 'Ulsain Bolt'],
            correct: 'Ulsain Bolt'
        },

        {
            question: ' What’s the shortcut for the “copy” function on most computers?',
            answers: ['ctrl c', 'ctrl a', 'ctrl v', 'shift Del'],

            correct: 'ctrl c'
        },

        {
            question: ' Which city in India would you find the Taj Mahal in?',
            answers: ['bangalore', 'mumbai', 'delhi', 'agra'],

            correct: 'agra'
        }
]

const displayQuestions = document.querySelector('.questions');
const displayAnswers = document.querySelector('.answers');
const prevBtn  = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const quizDisplay = document.querySelector('.container-2');
const endBtn = document.querySelector('.buttons');

const display = document.querySelector('.result');

let i = 0;
let qIndex = 1;
let quizScore = 0;


//display first question

const quizDisplayScreen = () => {
    
    quizDisplay.innerHTML = `
        <div class="questions card">
            <div class="card-header">
                <h4 class="question-number">Question ${qIndex}</h4>
            </div>
            <div class="card-body quiz-body">
                <p>${quizQuestions[i].question}</p>
                <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[0]}">
                <span>${quizQuestions[i].answers[0]}</span>
                <br>
                <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[1]}">
                <span>${quizQuestions[i].answers[1]}</span>
                <br>    
                <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[2]}">
                <span>${quizQuestions[i].answers[2]}</span>
                <br>
                <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[3]}">
                <span>${quizQuestions[i].answers[3]}</span>
            </div>
        </div>
        `;

    const checkbox = document.querySelectorAll('.checkbox');
    
    for(let i = 0; i < checkbox.length; i++){

        checkbox[i].addEventListener('click', () => {
                
            if(parseInt(checkbox[i].value) === quizQuestions[0].correct){

                // update score
                 quizScore += 20;
            }else{

                // show the correct answer 
                console.log(quizQuestions[0].correct);
            };

        });    
    };
    ;
}




if(i === 0){

    quizDisplayScreen()
    prevBtn.classList.add('d-none');
}else{
        
    nextBtnMove();
    prevBtnMove();
}


const submit = document.querySelector('#submit');

//move to next question

const nextBtnMove = () => {

    prevBtn.classList.remove('d-none');

    quizDisplay.innerHTML = `
    <div class="questions card">
        <div class="card-header">
            <h4 class="question-number">Question ${qIndex += 1}</h4>
        </div>
        <div class="card-body quiz-body">
            <p>${quizQuestions[i += 1].question}</p>
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[0]}">
            <span>${quizQuestions[i].answers[0]}</span>
            <br>
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[1]}">
            <span>${quizQuestions[i].answers[1]}</span>
            <br>    
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[2]}">
            <span>${quizQuestions[i].answers[2]}</span>
            <br>
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[3]}">
            <span>${quizQuestions[i].answers[3]}</span>
        </div>
    </div>`
    
    const checkbox = document.querySelectorAll('.checkbox');

    checkbox.forEach((e) => {
        e.addEventListener('click', () =>{
            if(e.value === quizQuestions[i].correct){

                // result
                quizScore += 20;

            }else if(parseInt(e.value) === quizQuestions[i].correct){

                // result
                quizScore += 20;

            }else{

                console.log(quizQuestions[i].correct);    
            }
        });
    })
    
    if(i == quizQuestions.length - 1){
        
        nextBtn.classList.add('d-none');
        submit.classList.remove('d-none');
    }        

}

// moving to previous question

const prevBtnMove = () => {

    if(i === 1){

        prevBtn.classList.add('d-none');
    };
    quizDisplay.innerHTML = `


    <div class="questions card">
        <div class="card-header">
            <h4 class="question-number">Question ${qIndex -= 1}</h4>
        </div>
        <div class="card-body quiz-body">
            <p>${quizQuestions[i -= 1].question}</p>
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[0]}">
            <span>${quizQuestions[i].answers[0]}</span>
            <br>
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[1]}">
            <span>${quizQuestions[i].answers[1]}</span>
            <br>    
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[2]}">
            <span>${quizQuestions[i].answers[2]}</span>
            <br>
            <input type="radio" name="checkbox" class="checkbox" value="${quizQuestions[i].answers[3]}">
            <span>${quizQuestions[i].answers[3]}</span>
        </div>
    </div>`
        
}        

//Ending the Game
submit.addEventListener ('click', (e) => {
    e.preventDefault();
    if( quizScore === 20 ){
        document.body.innerHTML = `
        <div class="bg-light mx-auto my-5 card container text-align-center">
            <p class="display-4"> You No Try ${quizScore}%</p>
        </div>   
        `
    }else if( quizScore > 80 ){
        document.body.innerHTML = `
        <div class="bg-light mx-auto my-5 card container text-align-center">
            <p class="display-4"> You Try, Na Your Score be this ${quizScore}%</p>
        </div>   
        `
    } else if( quizScore === 60 ){
        document.body.innerHTML = `
        <div class="bg-light mx-auto my-5 card container text-align-center">
            <p class="display-4">Gbasibe Eeyan mi ${quizScore}%</p>
        </div>   
        `
    }else if( quizScore === 0){
        document.body.innerHTML = `
        <div class="bg-light mx-auto my-5 card container text-align-center">
            <p class="display-4">Really?? ${quizScore}% ...</p>
        </div>   
        `
    }   
    
})

prevBtn.addEventListener('click', prevBtnMove);     
nextBtn.addEventListener('click', nextBtnMove);