function add(numbers) {
	if(numbers == "") {
		return 0;
	}

	//replace newline with comma before splitting
	var numberArray = numbers.replace(/\n/g, ",").split(",");
	validateNumbers(numberArray);
	return sum(numberArray);
}

function sum(numberArray) {

	var sum = 0;

	for(var i = 0; i < numberArray.length; i++) {

		if(parseInt(numberArray[i]) > 1000) {
			continue;
		}
		sum += parseInt(numberArray[i]);
	}

	return sum;
}

function validateNumbers(numberArray) {

	var negatives = [];

	for(var i = 0; i < numberArray.length; i++) {

		if(parseInt(numberArray[i]) < 0) {
			negatives.push(numberArray[i]);
		}
	}
	if(negatives.length) {
		throw "Negatives not allowed: " + negatives.join(",");
	}
	
}

module.exports = add;