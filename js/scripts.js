var pigLatin = function(phrase) {
	var multiwords = phrase.split(" ")
	var wordarray = []
	multiwords.forEach(function(word) {
		
		  if(word.match(/[.]/)) {
		  	var index = parseInt(word.indexOf(word.match(/[.]/)[0]));

			if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
				wordarray.push(word[0].toUpperCase() + word.slice(1, index) + "ay.");

			} else if (word.slice(0,3) === "squ") {
				wordarray.push(word[3].toUpperCase() + word.slice(4, index) + word.slice(0,3) + "ay.");

			} else if (word.slice(0,2) === "qu") {
				wordarray.push(word[2].toUpperCase() + word.slice(3, index) + word.slice(0,2) + "ay.");
			
			} else if (word.slice(0,2) === "qu") {
				wordarray.push(word[2].toUpperCase() + word.slice(3, index) + word.slice(0,2) + "ay.");
			
			} else if (word.match(/[aeiou]/)) {
				var vowindex = parseInt(word.indexOf(word.match(/[aeiou]/)[0]));
				wordarray.push(word[vowindex].toUpperCase() + word.slice(vowindex+1, index) + word.slice(0,vowindex) + "ay.")
			
			} else {
				wordarray.push(word)
			};

		  } else {
		    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
				wordarray.push(word[0].toUpperCase() + word.slice(1) + "ay");

			} else if (word.slice(0,3) === "squ") {
				wordarray.push(word[3].toUpperCase() + word.slice(4) + word.slice(0,3) + "ay");

			} else if (word.slice(0,2) === "qu") {
				wordarray.push(word[2].toUpperCase() + word.slice(3) + word.slice(0,2) + "ay");
			
			} else if (word.slice(0,2) === "qu") {
				wordarray.push(word[2].toUpperCase() + word.slice(3) + word.slice(0,2) + "ay");
			
			} else if (word.match(/[aeiou]/)) {
				var index = parseInt(word.indexOf(word.match(/[aeiou]/)[0]));
				wordarray.push(word[index].toUpperCase() + word.slice(index+1) + word.slice(0,index) + "ay")
			
			} else {
				wordarray.push(word)
			}	

		  };	

	});
	return wordarray;
};

$(document).ready(function() {

  $("#cancel").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
  });

  $('form').submit(function(event) {
    var phrase = $('textarea').val();
    var answer = pigLatin(phrase).join(" ");

    $('#answer').text(answer);	

    event.preventDefault();
  });
})