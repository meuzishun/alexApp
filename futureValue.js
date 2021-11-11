
function getFutureValue(pmt, int, time) {
    const val = Math.pow((1 + int), time);
    const futureValue = pmt * (val - 1) / int;
    return futureValue;
}

function roundToTwoDec(num) {
    return Math.round(num * 100) / 100;
}

console.log(roundToTwoDec(getFutureValue(25, 0.09, 3)));
// const futureValue = getFutureValue(25, 0.09, 3);
// const roundedFutureValue = roundToTwoDec(futureValue);
// console.log(roundedFutureValue);