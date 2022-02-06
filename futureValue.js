const form = document.querySelector('form');
const resultContainer = document.querySelector('#future-value-result');
// console.log(form);
form.addEventListener('submit', handleCalcBtn);

function getFutureValue(presVal, pmt, int, compPer) {
  let futureValue = presVal;
  for (let i = 0; i < compPer; i++) {
    futureValue = (futureValue + pmt) * (1 + int);
  }
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
  console.log(values);
  const futureValue = getFutureValue(
    values.present_value,
    values.payment,
    values.interest,
    values.periods
  );
  const result = roundToTwoDec(futureValue);
  resultContainer.textContent = `$${result}`;
}
