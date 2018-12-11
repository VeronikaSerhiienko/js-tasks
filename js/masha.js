var isStepan = confirm("Is Stepan here?");
var isAngela = confirm("Is Angela here?");
var isMykola = confirm("Is Mykola here?");

function isMashaHappy (isStepan, isAngela, isMykola) {
  if ((isAngela && !isStepan && !isMykola) || (isAngela && isStepan && !isMykola) || (isAngela && !isStepan && isMykola) || (!isAngela && isStepan && isMykola)) {
    console.log("Masha is happy");
  } else {
    console.log("Masha is unhappy");
  }
}

isMashaHappy(isStepan, isAngela, isMykola);