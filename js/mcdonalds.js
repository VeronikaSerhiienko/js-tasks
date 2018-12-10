function isCorrectAmount(n) {
  var nNumber = parseFloat(n);
  return !isNaN(nNumber) && (nNumber >= 0);
}

var amountOfMoney = prompt("How much money do you have?","");

while (!isCorrectAmount(amountOfMoney)) {
  amountOfMoney = prompt("Please, enter  again. How much money do you have","100");
}

function showResults(result, text1, text2) {
  switch (result) {
    case true :
    console.log(text1);
    break;
    case false :
    console.log(text2);
    break;
  }
}

function yourOrderIs(amountOfMoney) {
  var result;
  if (amountOfMoney >= 100) {
    result = confirm("You can buy BigMacMenu. Wish?");
    showResults(result, "Your order is BigMacMenu", "You do not order anything");
  }  
  else if (amountOfMoney >= 50 && amountOfMoney < 100) {
    result = confirm("You can buy hamburger and french fries. Wish?");
    showResults(result, "Your order is hamburger and french fries", "You do not order anything");
  } 
  else if (amountOfMoney < 50 && amountOfMoney >= 20) {
    result = confirm("you can buy coca cola. Wish?");
    showResults(result, "Your order is coca cola", "You do not order anything"); 
  } 
  else if (amountOfMoney < 20) {
    result = console.log("Sorry we do not have dishes for you here");
    console.log("You do not order anything");
  }  
}

yourOrderIs(amountOfMoney);