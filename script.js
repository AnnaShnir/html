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
	else if(result == "Rcaa" || "Rcab" || "Rcda" || "Rcdb" || "RNBeaa" || "RNBeaa" || "RNBeab" || "RNBeda" || "RNBedb" || "Raac" || "Raad" || "Radc" || "Radd" || "Rcac" || "Rcad" || "Rcdc" ||"Rcdd" || "RNBcbc" || "RNBcbd" || "RNBccc" || "RNBcdd"){
		console.log("Geisha Owl");
	}
	else if(result == "Rdaa" || "Rdab" || "Rdda" || "Rddb" || "Rbba" || "Rbbb" || "Rdac" || "Rdad"  || "Rddc" || "Rddd"){
		console.log("Moonlight Owl");
	}
	else if(result == "Reaa" || "Reab" || "Reda" || "Rebd" || "Reba" || "Rebb" || "Reca" || "Recb"  || "Oeaa" || "Oeab" || "Oeda" || "Oedb" || "Occa" || "Occb" || "Ocba" || "Ocbb" || "Reac" || "Read" || "Redc" || "Redd" || "Rcbc" || "Rcbd" || "Rccc" || "Rccd" || "Oaac" || "Oaad" || "Oadc" || "Oadd" || "Oeac" || "Oead" || "Oedc" || "Oedd" || "Ocbc" || "Ocbd" || "Occc" || "Occd"){
		console.log("Phonix Owl");
	}
	else if(result == "Raba" || "Rabb" || "Raca" || "Racb" || "Yaba" || "Yabb" || "Yaca" || "Yacb"  || "Rebc" || "Rebd" || "Recc" || "Recd" || "Yeac" || "Yead" || "Yedc" || "Yedd" || "Yabc" || "Yabd" || "Yacc" || "Yacd"){
		console.log("Spartan Owl");
	}
	else if(result == "Baaa" || "Baab" || "Bada" || "Badb" || "Bcba" || "Bcbb" || "Bcca" || "Bccb"  || "Beba" || "Bebb" || "Beca" || "Becb" || "Bcac" || "Bcad" || "Bcdc" || "Bcdd" || "Beac" || "Bead" || "Bedc" || "Bedd"){
		console.log("Sailor Owl");
	}
	else if(result == "" || "" || "" || "" || "" || "" || "" || ""  || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || ""){
		console.log("Upstate Owl");
	}
	else if(result == "" || "" || "" || "" || "" || "" || "" || ""  || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || ""){
		console.log("Moonlight Owl");
	}
	else if(result == "" || "" || "" || "" || "" || "" || "" || ""  || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || ""){
		console.log("Moonlight Owl");
	}
	else if(result == "" || "" || "" || "" || "" || "" || "" || ""  || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || "" || ""){
		console.log("Moonlight Owl");
	}

	
	// use switch statement for break purposes:
// 	switch(result()){
// 		case 'Raaa': 
// 		console.log("NY Owl switch statement worked");
// 		break;
// 		case 'Raab':
// 		console.log("switch statement fired");
// };
};









