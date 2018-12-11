function isCorrectTime(n) {
  var nNumber = parseFloat(n);
  return !isNaN(nNumber) && (nNumber >= 0) && (nNumber <= 23);
}

var saleStartTime = prompt("When sale starts?","9");

while (!isCorrectTime(saleStartTime)) {
  saleStartTime = prompt("Please, enter time again. When sale starts?","9");
}

var saleEndTime = prompt("When sale ends?","13");

while (!isCorrectTime(saleEndTime)) {
  saleEndTime = prompt("Please, enter time again. When sale ends?","9");
}

var currentTime = prompt ("What time is it?","");

while (!isCorrectTime(currentTime)) {
  currentTime = prompt("Please, enter time again. What time is it?","");
}

function isDiscount(saleStartTime, saleEndTime, currentTime) {
  var numSaleStartTime = Number(saleStartTime);
  var numCurrentTime = Number(currentTime);
  var numSaleEndTime = Number(saleEndTime); 

  if (numSaleStartTime < numSaleEndTime) {
    if(numCurrentTime >= numSaleStartTime && numCurrentTime <= numSaleEndTime) {
      console.log("You will have a discount");
    }
    else {
      console.log("You will not have a discount");
    }
  } else {
    if((numCurrentTime >= numSaleStartTime) || (numCurrentTime <= numSaleEndTime)) {
      console.log("You will have a discount");
    } else {
      console.log("You will not have a discount");
    }
  }
}

isDiscount(saleStartTime, saleEndTime, currentTime);