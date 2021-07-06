var questions = [
    {
     "question": "Inside which HTML element do we put the JavaScript?",
     "Option1":"<javascript>",
     "Option2":"<scripting>",
     "Option3":"<js>",
     "Option4":"<script>",
     "answer":"4"
    },
    {
     "question": "What is the correct syntax for referring to an external script called xxx.js?",
     "Option1":"<script href ='xxx.js'>",
     "Option2":"<script src ='xxx.js'>",
     "Option3":"<script name ='xxx.js'>",
     "Option4":"<script link ='xxx.js'>",
     "answer":"2"
    },
    {
     "question": "The external JavaScript file must contain the <script> tag.",
     "Option1":"True",
     "Option2":"False",
     "Option3":"Both",
     "Option4":"None Of These",
     "answer":"2"
    },
    {
     "question": "How do you write 'Hello World' in an alert box?",
     "Option1":"alertbox('Hello World');",
     "Option2":"alert('Hello World');",
     "Option3":"msgbox('Hello World');",
     "Option4":"msg('Hello World');",
     "answer":"2"
    },
    {
     "question": "How do you create a function in JavaScript?",
     "Option1":"Function = Myfunction()",
     "Option2":"Function === Myfunction()",
     "Option3":"Function  Myfunction()",
     "Option4":"Function : Myfunction()",
     "answer":"1"
    },
    {
     "question": "How do you call a function named 'myFunction'?",
     "Option1":"myfunction()",
     "Option2":"call myfuntion()",
     "Option3":"call function myfunction()",
     "Option4":"function()",
     "answer":"1"
    },
    {
     "question": "How to write an IF statement in JavaScript?",
     "Option1":"if i = 5 then",
     "Option2":"if (i == 5)",
     "Option3":"if i == 5 then",
     "Option4":"if i = 5",
     "answer":"2"
    },
    {
     "question": "How can you add a comment in a JavaScript?",
     "Option1":"This is Comment",
     "Option2":"*/comment",
     "Option3":"//comment",
     "Option4":"<!--comment-->",
     "answer":"3"
    },
    {
     "question": "How do you round the number 7.25, to the nearest integer?",
     "Option1":"Math.round(7.25)",
     "Option2":"math(7.25)",
     "Option3":"Math(7.25)",
     "Option4":"round(7.25)",
     "answer":"1"
    },
    {
     "question": "JavaScript is the same as Java.",
     "Option1":"True",
     "Option2":"Ofcourse",
     "Option3":"False",
     "Option4":"none of these",
     "answer":"3"
    }
 ];



var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.Option1;
	opt2.textContent = q.Option2;
	opt3.textContent = q.Option3;
	opt4.textContent = q.Option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
	alert ("PLease select any one of them")
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);