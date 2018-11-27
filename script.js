var owl = [];




function answerQuestion1() {

	var question0Value = document.querySelector("input[name='color']:checked").value;

	var questionWrapper = document.getElementById("question-cards-wrapper");
	questionWrapper.removeChild(questionWrapper.childNodes[1]);
	questionWrapper;



	// the problem here is inability of the user to go back and change the answer AND avoid repeating elements in the array. To solve this problem, push all var-s into the array at the end, after all questions have been answered and answer variables defined
	owl.push(question0Value);
	console.log(owl);
	
};











