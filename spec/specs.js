describe('pigLatin', function() {
	it('initializes with split and capitalized word(s)', function() {
		pigLatin("apple banana")[0][0].should.equal("A")
	});

	it('adds "ay" to the endFor words that start with a vowel', function() {
		pigLatin("quantum")[0].should.equal("Antumquay");
	});

	it('For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay"', function() {
		pigLatin("test")[0].should.equal("Esttay")
	});

	it('for words that start with one or more consonants, moves all of the first consecutive consonants to the end and add "ay". (If the first consonants include "qu", move the "u" along with the "q". Don\'t forget about words like "squeal" where the "qu" doesn\'t come first!)', function() {
		// pigLatin("square")[0].should.equal("Aresquay")
		pigLatin("quantum")[0].should.equal("Antumquay");
		pigLatin("the")[0].should.equal("Ethay");
	});
});