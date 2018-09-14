module.exports = function getZerosCount(number, base) {
 var numbOfNulls = 0;
  var baseBiggestDivider = 5;//findDivider(base);
  var divider = findBiggestDivider(base);
  divider = getPowerOf2(base, divider);
  var currentNumber = number;
  while (currentNumber > 0) {
    currentNumber = Math.floor(currentNumber / divider);
    numbOfNulls = numbOfNulls + currentNumber;
  }
  if (findPower(divider, base) > 1) {
    numbOfNulls = Math.floor(numbOfNulls / findPower(divider, base));
  }
  return Math.floor(numbOfNulls);
}


function findPower(divider, base) {
  var power = 0;
  while (base % divider == 0) {
    base = base / divider;
    power++;
  }
  return power;
}

function findBiggestDivider(base) {
  var simpleDividers = [];
  for (i = base; i >= 2 ; i--) {
    if ((base % i == 0) && (simplicityCheck(i))) {
        var biggestDivider = i;
        break;
      }  
  }
  return biggestDivider;
}


function simplicityCheck(divider) {
  if (divider == 2) {
    return true;
  }
  for (var i = 2 ; i < divider; i++) {
    if (divider % i == 0) {
      return false
    }
  }
  return true;
}

function getPowerOf2(base, divider) {
  if (base % (divider * divider) == 0) {
    return divider;
  }
  base = base / divider;
  for (i = divider; i < 6; i++) {
    if (base % Math.pow(2, i) == 0 ) {
      return 2;
    }
  }
  return divider;
}

