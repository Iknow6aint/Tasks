function isPositive (num) {
    return Math.sign(num) === 1;
  };
  
  function isArry(arry){
    return Array.isArray(arry);
}

  function isPrimeNum (num){
    if (!isPositive(num)){
        return false
    };
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  const isArray = (arry) => {
    return Array.isArray(arry);
  };
  
  const arrayOfPrimes = (arry) => {
    if (!isArray(arry)) return "error";
    else {
      arry = arry.sort((a, b) => a - b);
      return arry.filter((i) => isPrimeNum(i));
    }
  };
  
  var numArray = [3, 2, 4, 6, 8, 5, 7, 9, 10];
  
  console.log(arrayOfPrimes(numArray));