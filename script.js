var answer = [];

//here the var is declared outside the scope of the functions responsible for each answer. The functions are supposed to change values of these global variables, and pushed into an array from the button like "See my result"
var question0Value;
var question1Value;
var question2Value;
var question3Value;

function pageRefresh() {
	location.reload();
}


function answerQuestion0() {

	var question0Value = document.querySelector("input[name='color']:checked").value;

// remove question0 card:
	var questionWrapper = document.getElementById("question-cards-wrapper");
	questionWrapper.removeChild(questionWrapper.childNodes[1]);
	document.getElementById("question-1").style.display ="block";

// array not needed, remove after testing:
	answer.push(question0Value);
	
	console.log(question0Value);
	
};

function answerQuestion1() {

	var question1Value = document.querySelector("input[name='pastime']:checked").value;

// remove question0 card:
	var questionWrapper = document.getElementById("question-cards-wrapper");
	questionWrapper.removeChild(questionWrapper.childNodes[2]);
	document.getElementById("question-2").style.display ="block";


	// the problem here is inability of the user to go back and change the answer AND avoid repeating elements in the array. To solve this problem, push all var-s into the array at the end, after all questions have been answered and answer variables defined
	answer.push(question1Value);

	console.log(question1Value);
	
};

function answerQuestion2() {

	var question2Value = document.querySelector("input[name='meet']:checked").value;

// remove question0 card:
	var questionWrapper = document.getElementById("question-cards-wrapper");
	questionWrapper.removeChild(questionWrapper.childNodes[3]);
	document.getElementById("question-3").style.display ="block";


	// the problem here is inability of the user to go back and change the answer AND avoid repeating elements in the array. To solve this problem, push all var-s into the array at the end, after all questions have been answered and answer variables defined
	answer.push(question2Value);
	console.log(question2Value);
	
};

function answerQuestion3() {

	var question3Value = document.querySelector("input[name='accomp']:checked").value;

// remove question0 card:
	var questionWrapper = document.getElementById("question-cards-wrapper");
	questionWrapper.removeChild(questionWrapper.childNodes[4]);

	// use code block below for adding more questions in future:
	// document.getElementById("question-4").style.display ="block";


	// the problem here is inability of the user to go back and change the answer AND avoid repeating elements in the array. To solve this problem, push all var-s into the array at the end, after all questions have been answered and answer variables defined
	answer.push(question3Value);
	console.log(question3Value);
	testResult();
};

	// CALCULATE OWL RESULT:
function testResult(){

	var result = answer.join('');

	if (result == "Raaa" || "Rada" || "Raab" || "Radb" || "Rcba" || "Rcca" || "Rcbb" || "Rccb" || "Rabc" || "Racc" || "Rabd" || "Rabc"){
		//create div with display:hidden for result:
		//style the winner in accordance to the owl-result
		// document.getElementById("winning-owl").style.display ="block";
		// document.getElementById("winning-owl").addClass("style-for-winner");
		console.log("New York Owl");
	}
	elseif (){

	}
}









