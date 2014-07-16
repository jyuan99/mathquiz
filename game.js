if(jQuery){
	var checkAnswers = function(){
		alert(1);
		var answerString = "";
		var answers = $(":checked");
		answers.each(function(i){
			answerString = answerString + answers[i].value;
		});
		$(":checked").each(function(i){
			var answerString = answerString + answers[i].value;
		});
		checkIfCorrect(answerString);
	}

	var checkIfCorrect = function(theString){
		alert(2);
		if(parseInt(theString, 16) === 830634){
			$("body").addClass("correct");
			$("h1").text("You Win!");
		}
	};
}