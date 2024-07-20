
var Questions = 
[
    
    {
        Question : "Javascript is an _______ language?",      
            a:"Object-Oriented",
            b:"Object-Based",
            c:"Assembly-language",
            d:"High-level",
            ans :"opt2",
        
    },
    {
        Question : "Which one of the following also known as Conditional Expression:",

            a:"Alternative to if-else",
            b:"Switch statement",
            c:"If-then-else statement",
            d:"immediate if",        
            ans : "opt4",
    },
    {
        Question : "In JavaScript, what is a block of statement?",
        
            a:"Conditional block",
            b:"block that combines a number of statements into a single compound statement",
            c:"both conditional block and a single statement",
            d:"block that contains a single statement",
            ans : "opt2",

    },
    {
            Question : "When interpreter encounters an empty statements, what it will do:",
        
            a:"Shows a warning",
            b:"Prompts to complete the statement",
            c:"Throws an error",
            d:"Ignores the statements",
            ans : "opt4",

    },
    {

            Question : 'The "function" and " var" are known as:',
        
            a:"Keywords",
            b:"Data types",
            c:"Declaration statements",
            d:"Prototypes",
            ans : "opt3",

    },
    {
            Question : 'Which of the following variables takes precedence over the others if the names are the same?',
        
            a:"Global variable",
            b:"The local element",
            c:"The two of the above",
            d:"None of the above",
            ans : "opt2",

    },
    {

            Question : 'Which one of the following is the correct way for calling the JavaScript code?',
        
            a:"Preprocessor",
            b:"Triggering Event",
            c:"RMI",
            d:"Function/Method",
            ans : "opt4",

    },
    {

            Question : 'Which of the following type of a variable is volatile?',
        
            a:"Mutable variable",
            b:"Dynamic variable",
            c:"Volatile variable",
            d:"Immutable variable",
            ans : "opt1",
        
    },
    {
            Question : 'Which of the following type of a variable is volatile?',
        
            a:"Mutable variable",
            b:"Dynamic variable",
            c:"Volatile variable",
            d:"Immutable variable",
            ans : "opt1",


    },
    {
        Question : 'Which of the following option is used as hexadecimal literal beginning?',
        
        a:"00",
        b:"0x",
        c:"00x",
        d:"Both 0x and 0X",
        ans : "opt1",
    },
]; 

const Question = document.querySelector('.question');
const option1 = document.querySelector('.Option1');
const option2 = document.querySelector('.Option2');
const option3 = document.querySelector('.Option3');
const option4 = document.querySelector('.Option4');
const Submit = document.querySelector('#Submit');
// var key = document.querySelector('email01');

const answers = document.querySelectorAll('.answer');
const Showscore = document.querySelector('#Showscore');

let count = 0;
let score = 0;
function loadQue()
{
    const list = (Questions[count]);
    Question.innerText = list.Question;

    Option1.innerText = list.a;
    Option2.innerText = list.b;
    Option3.innerText = list.c;
    Option4.innerText = list.d;
}
loadQue();

// const opt1 = document.querySelector('#opt1');
// const opt2 = document.querySelector('#opt2');
// const opt3 = document.querySelector('#opt3');
// const opt4 = document.querySelector('#opt4');
const getchechans = ()  =>
{   
    let answer;
    answers.forEach((element) => {
       

        if(element.checked)
        {
             answer= element.id;
        }
        
        
    })
    return answer;     
};

const deselectAll = () =>
{
    answers.forEach((element) =>
        element.checked = false
    );
}

Submit.addEventListener('click',() =>
{
    const checkans = getchechans();
    console.log(checkans);

    if(checkans === Questions[count].ans)
    {
        score ++;
    }
    count++;
    localStorage.setItem(email,score);

    deselectAll();
    if(count < Questions.length)
    {
        loadQue();
    }
    else
    {
        Showscore.innerHTML = `
        <h3>You Scored ${score}/${Questions.length}</h3>
        <button class = "btn" onclick = "location.reload()">Play Again </button>  `;
        Showscore.classList.remove('Scorearea');
    }
    
});
const email =  new URLSearchParams(window.location.search).get('email');