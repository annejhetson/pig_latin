var pigLatin = function(phase) {
	var multiwords = phase.split(" ")
	var wordarray = []
	multiwords.forEach(function(word) {
		console.log(word);

		if(word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
			wordarray.push(word[0].toUpperCase() + word.slice(1) + "ay");

		} else if (word.slice(0,3) === "squ") {
			wordarray.push(word[3].toUpperCase() + word.slice(4) + word.slice(0,3) + "ay");

		} else if (word.slice(0,2) === "qu") {
			wordarray.push(word[2].toUpperCase() + word.slice(3) + word.slice(0,2) + "ay");
		
		} else if (word.slice(0,2) === "qu") {
			wordarray.push(word[2].toUpperCase() + word.slice(3) + word.slice(0,2) + "ay");
		
		} else if (word.match(/[aeiou]/)) {
			console.log("got to here")
			var index = parseInt(word.indexOf(word.match(/[aeiou]/)[0]));
			wordarray.push(word[index].toUpperCase() + word.slice(index+1) + word.slice(0,index) + "ay")
		
		} else {
			wordarray.push("what? " + word)
		}

	});
	return wordarray;
};