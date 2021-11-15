const form = document.querySelector('form');
const resultContainer = document.querySelector('#future-value-result');
// console.log(form);
form.addEventListener('submit', handleCalcBtn);

function getFutureValue(pmt, int, compPer) {
	const val = Math.pow(1 + int, compPer);
	const futureValue = pmt * ((val - 1) / int);
	return futureValue;
}

function roundToTwoDec(num) {
	return Math.round(num * 100) / 100;
}

function gatherInputs(form) {
	const inputs = [...form.querySelectorAll('input')];
	const values = {};
	inputs.forEach((input) => {
		values[input.id] = Number(input.value);
	});
	return values;
}

function handleCalcBtn(e) {
	e.preventDefault();
	const form = e.srcElement;
	const values = gatherInputs(form);
	// console.log(values);
	const futureValue = getFutureValue(values.payment, values.interest, values.periods);
	const result = roundToTwoDec(futureValue);
	// console.log(result);
	resultContainer.textContent = `$${result}`;
}

// console.log(roundToTwoDec(getFutureValue(25, 0.09, 3)));
// const futureValue = getFutureValue(25, 0.09, 3);
// const roundedFutureValue = roundToTwoDec(futureValue);
// console.log(roundedFutureValue);
