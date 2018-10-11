function add(numbers) {
	if(numbers == "") {
		return 0;
	}


	if(numbers.startsWith("//")) {

		return sum(getCustomDelimeterArray(numbers));
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
		if(numberArray[i] == "") {
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

function getCustomDelimeterArray(numbers) {

	var newString = numbers.slice(2);
	var	delimeter = numbers[2];
	var numberArray = newString.replace(/\n/g, delimeter).split(delimeter);
	return numberArray;	
}

module.exports = add;