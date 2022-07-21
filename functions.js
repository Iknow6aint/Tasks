function retnum(str) { 
    var num = str.replace(/[^0-9]/g, ''); 
    return parseInt(num,10); 
}

function replace (text){
    return  text.replace(/\d/g,"");
}

function justNumbers(string) 
{
   var numsStr = string.replace(/[^0-9]/g,'');
   return parseInt(numsStr);
}

const filter = arr.filter(num => num > 0 && num % parseInt(num) === 0)

function isPositive (num){
    return Math.sign(num) ===1;
}


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