function isPositive (num) {
    return Math.sign(num) === 1;
  };
  
  function isPrimeNum (num){
    if (!isPositive(num)){
        return false
    };
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };
  
  console.log(isPrimeNum(2));

  