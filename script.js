var answer = [];

//here the var is declared outside the scope of the functions responsible for each answer. The functions were supposed to change values of these global variables, but they didn't.
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

	// the problem here is inability of the user to go back and change the answer AND avoid repeating elements in the array. To solve this problem, later add a button to go Back, with function triggered to remove the last element from the array.
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
	// console.log(typeof result);

	if (result == "Raaa" || result == "Rada" || result == "Raab" || result == "Radb" || result == "Rcba" || result == "Rcca" || result == "Rcbb" || result == "Rccb" || result == "Rabc" || result == "Racc" || result == "Rabd" || result == "Rabc"){
		console.log("New York Owl");
		var owl = "new york owl";
	}
	else if(result == "Rbaa" || result == "Rbab" || result == "Rbda" || result == "Rbdb" || result == "Rdba" || result == "Rdbb" || result == "Rdca" || result == "Rdcb" || result == "Rbac" || result == "Rbad" || result == "Rbdc" || result == "Rbdd" || result == "Rbbc" || result == "Rbbd" || result == "Rbcc" || result == "Rbcd" || result == "Rdbc" || result == "Rdbd" || result == "Rdcc" || result == "Rdcd"){
		console.log("Geisha Owl");
		var owl = "geisha owl";
	}
	else if(result == "Rdaa" || result == "Rdab" || result == "Rdda" || result == "Rddb" || result == "Rbba" || result == "Rbbb" || result == "Rdac" || result == "Rdad"  || result == "Rddc" || result == "Rddd"){
		console.log("Moonlight Owl");
		var owl = "moonlight owl";
	}
	else if(result == "Reaa" || result == "Reab" || result == "Reda" || result == "Rebd" || result == "Reba" || result == "Rebb" || result == "Reca" || result == "Recb"  || result == "Oeaa" || result == "Oeab" || result == "Oeda" || result == "Oedb" || result == "Occa" || result == "Occb" || result == "Ocba" || result == "Ocbb" || result == "Reac" || result == "Read" || result == "Redc" || result == "Redd" || result == "Rcbc" || result == "Rcbd" || result == "Rccc" || result == "Rccd" || result == "Oaac" || result == "Oaad" || result == "Oadc" || result == "Oadd" || result == "Oeac" || result == "Oead" || result == "Oedc" || result == "Oedd" || result == "Ocbc" || result == "Ocbd" || result == "Occc" || result == "Occd"){
		console.log("Phoenix Owl");
		var owl = "phoenix owl";
	}
	else if(result == "Raba" || result == "Rabb" || result == "Raca" || result == "Racb" || result == "Yaba" || result == "Yabb" || result == "Yaca" || result == "Yacb"  || result == "Rebc" || result == "Rebd" || result == "Recc" || result == "Recd" || result == "Yeac" || result == "Yead" || result == "Yedc" || result == "Yedd" || result == "Yabc" || result == "Yabd" || result == "Yacc" || result == "Yacd"){
		console.log("Spartan Owl");
		var owl = "spartan owl";
	}
	else if(result == "Baaa" || result == "Baab" || result == "Bada" || result == "Badb" || result == "Bcba" || result == "Bcbb" || result == "Bcca" || result == "Bccb"  || result == "Beba" || result == "Bebb" || result == "Beca" || result == "Becb" || result == "Bcac" || result == "Bcad" || result == "Bcdc" || result == "Bcdd" || result == "Beac" || result == "Bead" || result == "Bedc" || result == "Bedd"){
		console.log("Sailor Owl");
		var owl = "sailor owl";
	}
	else if(result == "Bbaa" || result == "Bbab" || result == "Bbda" ||result == "Bbdb" || result == "RNBaba" || result == "RNBabb" || result == "RNBdba" || result == "RNBdbb" || result == "RNBdca" || result == "RNBdcb" || result == "Bcbc" || result == "Bcbd" || result == "Bccc" || result == "Bccd" || result == "RNBdac" ||result == "RNBdad" || result == "RNBddc" || result == "RNBddd" || result == "RNBabc" || result == "RNBabd" || result == "RNBacc" || result == "RNBacd"){
	 	console.log("Upstate Owl");
	 	var owl = "upstate owl";
	}
	else if(result == "Bcaa" || result == "Bcab" || result == "Bcda" ||result == "Bcdb" || result == "Bbba" || result == "Bbbb" || result == "Bbca" || result == "Bbcb" || result == "Bbac" || result == "Bbad" || result == "Bbdc" || result == "Bbdd"){
	 	console.log("Coffee Owl");
	 	var owl = "coffee owl";
	}
	else if(result == "Bdaa" || result == "Bdab" || result == "Bdda" ||result == "Bddb" || result == "Bdac" || result == "Bdad" || result == "Bddc" || result == "Bddd" || result == "Bbbc" || result == "Bbbd" || result == "Bbcc" || result == "Bbcd"){
	 	console.log("Cozy Owl");
	 	var owl = "cozy owl";
	}
	else if(result == "Beaa" || result == "Beab" || result == "Beda" ||result == "Bedb" || result == "Baac" || result == "Baad" || result == "Badc" || result == "Badd"){
	 	console.log("Stormchaser Owl");
	 	var owl = "stormchaser owl";
	}
	else if(result == "Baba" || result == "Babb" || result == "Baca" ||result == "Bacb" || result == "Babc" || result == "Babd" || result == "Bacc" || result == "Bacd" || result == "Bebc" || result == "Bebd" || result == "Becc" || result == "Becd"){
	 	console.log("Samurai Owl");
	 	var owl = "samurai owl";
	}
	else if(result == "Bdba" || result == "Bdbb" || result == "Bdca" ||result == "Bdcb" || result == "Bdbc" || result == "Bdcc" || result == "Bdcd"){
	 	console.log("Winter Queen Owl");
	 	var owl = "winter queen owl";
	}
	else if(result == "Yaaa" || result == "Yaab" || result == "Yada" ||result == "Yadb" || result == "Ycba" || result == "Ycbb" || result == "Ycca" || result == "Yccb" || result == "Yeba" || result == "Yebb" || result == "Yeca" || result == "Yecb" || result == "Oaaa" || result == "Oaab" || result == "Oada" ||result == "Oadb" || result == "Ocaa" || result == "Ocda" || result == "Ocda" || result == "Ocdb" || result == "Yaac" || result == "Yaad" || result == "Yadc" || result == "Yadd"  || result == "Yebc" || result == "Yebd" || result == "Yecc" ||result == "Yecd" || result == "Ocac" || result == "Ocad" || result == "Ocdc" || result == "Ocdd"){
	 	console.log("Zesty Owl");
	 	var owl = "zesty owl";
	}
	else if(result == "Ybaa" || result == "Ybab" || result == "Ybda" ||result == "Ybdb" || result == "Ybbc" || result == "Ybbd" || result == "Ybcc" || result == "Ybcd"){
	 	console.log("Forest Fairy Owl");
	 	var owl = "forest fairy owl";
	}
	else if(result == "Ycaa" || result == "Ycab" || result == "Ycda" ||result == "Ycdb" || result == "Ybba" || result == "Ybbb" || result == "Ybca" || result == "Ybcb" || result == "Ybac" || result == "Ybad" || result == "Ybdc" || result == "Ybdd" || result == "Ycbc" || result == "Ycbd" || result == "Yccc" ||result == "Yccd"){
	 	console.log("Vitruvian Owl");
	 	var owl = "vitruvian owl";
	}
	else if(result == "Ydaa" || result == "Ydab" || result == "Ydda" ||result == "Yddb" || result == "Ydba" || result == "Ydbb" || result == "Ydca" || result == "Ydcb" || result == "Ydac" || result == "Ydad" || result == "Yddc" || result == "Yddd" || result == "Ydbc" || result == "Ydbd" || result == "Ydcc" ||result == "Ydcd"){
	 	console.log("Rainy Day Owl");
	 	var owl = "rainy day owl";
	}
	else if(result == "Yeaa" || result == "Yeab" || result == "Yeda" ||result == "Yedb" || result == "Ycac" || result == "Ycad" || result == "Ycdc" || result == "Ycdd"){
	 	console.log("Chef Owl");
	 	var owl = "chef owl";
	}
	else if(result == "Obaa" || result == "Obab" || result == "Obda" ||result == "Obdb" || result == "Odaa" || result == "Odab" || result == "Odda" || result == "Oddb" || result == "Oeba" || result == "Oebb" || result == "Oeca" || result == "Oecb" || result == "Obac" || result == "Obad" || result == "Obdc" ||result == "Obdd" || result == "Odac" || result == "Odad" || result == "Oddc" || result == "Oddd" || result == "Oebc" || result == "Oebd" || result == "Oecc" || result == "Oecd"){
	 	console.log("Yogi Sage Owl");
	 	var owl = "yogi sage owl";
	}
	else if(result == "Oaba" || result == "Oabb" || result == "Oaca" ||result == "Oacb" || result == "Oabc" || result == "Oabd" || result == "Oacc" ||result == "Oacd"){
	 	console.log("Summer Owl");
	 	var owl = "summer owl";
	}
	else if(result == "Obba" || result == "Obbb" || result == "Obca" ||result == "Obcb" || result == "Obbc" || result == "Obbd" || result == "Obcc" || result == "Obdd"){
	 	console.log("Owlstein Owl");
	 	var owl = "owlstein owl";
	}
	else if(result == "Odba" || result == "Odbb" || result == "Odca" ||result == "Odcb" || result == "Odbc" || result == "Odbd" || result == "Odcc" || result == "Odcd"){
	 	console.log("Pumpkin Owl");
	 	var owl = "pumpkin owl";
	}
	else if(result == "Gaaa" || result == "Gaab" || result == "Gada" ||result == "Gadb" || result == "Gada" || result == "Gadb" || result == "Geaa" || result == "Geab" || result == "Geda" || result == "Gedb" || result == "Gcba" || result == "Gcbb" || result == "Gcca" || result == "Gccb" || result == "Geba" ||result == "Gebb" || result == "Geca" || result == "Gecb" || result == "Gcac" || result == "Gcad" || result == "Gcdc" || result == "Gcdd"){
	 	console.log("Pirate Owl");
	 	var owl = "pirate owl";
	}
	else if(result == "Gcaa" || result == "Gcab" || result == "Gcda" ||result == "Gcdb" || result == "Gbba" || result == "Gbbb" || result == "Gbca" || result == "Gbcb" || result == "Gbac" || result == "Gbad" || result == "Gbdc" || result == "Gbdd" || result == "Gcbc" || result == "Gcbd" || result == "Gccc" ||result == "Gccd"){
	 	console.log("Owlpatra Owl");
	 	var owl = "owlpatra owl";
	}
	else if(result == "Gdaa" || result == "Gdab" || result == "Gdda" ||result == "Gddb" || result == "Gdba" || result == "Gdbb" || result == "Gdca" || result == "Gdcb" || result == "Gdac" || result == "Gdad" || result == "Gddc" || result == "Gddd" || result == "Gbbc" || result == "Gbbd" || result == "Gbcc" ||result == "Gbcd"){
	 	console.log("Green Feather Owl");
	 	var owl = "green feather owl";
	}
	else if(result == "RNBaaa" || result == "RNBaab" || result == "RNBada" ||result == "RNBadb" || result == "RNBcba" || result == "RNBcbb" || result == "RNBcca" || result == "RNBccb" || result == "RNBaac" || result == "RNBaad" || result == "RNBadc" || result == "RNBadd"){
	 	console.log("Mermaid Owl");
	 	var owl = "mermaid owl";
	}
	else if(result == "RNBbaa" || result == "RNBbab" || result == "RNBbda" ||result == "RNBbdb" || result == "RNBbba" || result == "RNBbbb" || result == "RNBbca" || result == "RNBbcb" || result == "RNBbbc" || result == "RNBbbd" || result == "RNBbcc" || result == "RNBbcd" || result == "RNBdbc" || result == "RNBdbd" || result == "RNBdcc" ||result == "RNBdcd"){
	 	console.log("Celestial Owl");
	 	var owl = "celestial owl";
	}
	else if(result == "RNBcaa" || result == "RNBcab" || result == "RNBcda" ||result == "RNBcdb" || result == "RNBeba" || result == "RNBebb" || result == "RNBeca" || result == "RNBecb" || result == "RNBcac" || result == "RNBcad" || result == "RNBcdc" || result == "RNBcdd" || result == "RNBebc" || result == "RNBebd" || result == "RNBecc" ||result == "RNBecd"){
	 	console.log("NOLA Owl");
	 	var owl = "nola owl";
	}
	else if(result == "RNBdaa" || result == "RNBdab" || result == "RNBdda" ||result == "RNBddb" || result == "RNBbac" || result == "RNBbad" || result == "RNBbdc" || result == "RNBbdd"){
	 	console.log("Balerina Owl");
	 	var owl = "balerina owl";
	 	var image = "<img src='https://static1.squarespace.com/static/547e86a0e4b0c76689c8ba6e/58ffc9f1bebafb65a517e693/59165069f5e2317b6a22e9e8/1494634607552/Hawaiian-owl-art-print-eve-devore.jpg?format=300w'></img>";
	}
	// ADD OTHER OWLS BELOW:
	// else if(result == "" || result == "" || result == "" ||result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" ||result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == ""  || result == "" || result == "" || result == "" ||result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" ||result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" ||result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == ""  || result == "" || result == "" || result == "" ||result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == "" || result == ""){
	//  	console.log("Additional Owl");
	// }
	else {
		console.log("Hawaii Owl");
		var owl = "hawaii owl";
		var image = "<img src='https://static1.squarespace.com/static/547e86a0e4b0c76689c8ba6e/58ffc9f1bebafb65a517e693/59165069f5e2317b6a22e9e8/1494634607552/Hawaiian-owl-art-print-eve-devore.jpg?format=300w'></img>";
	};

// alert("You are a " + owl);
var questionCardsWrapper = document.getElementById("question-cards-wrapper");
questionCardsWrapper.className = "testing";

var answerCard = document.createElement("div");
answerCard.className = owl;
// add jquery animation FadeIn or similar style

console.log(answerCard);
questionCardsWrapper.appendChild(answerCard);


	
	// use switch statement for break purposes:
// 	switch(result()){
// 		case 'Raaa': 
// 		console.log("NY Owl switch statement worked");
// 		break;
// 		case 'Raab':
// 		console.log("switch statement fired");
// };
};










