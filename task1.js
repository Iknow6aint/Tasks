function isArry(arry){
    return Array.isArray(arry);
}
function isPositive (num){
    return Math.sign(num) ===1;
}

//const filter = arr.filter(num => num > 0 && num % parseInt(num) === 0)

function sumOfNumbers(arry){
    if (!isArry(arry)) {
        return 'error'
    } else {
        let odds = 0;
        let even = 0;
        let filtered = arry.filter(i=>{return isPositive})
        filtered = filtered
            .sort((a,b)=> a-b)
            .map(i=>{ 
                return parseInt(i)
            });
        for (let i = 0; i < filtered.length; i++) {
            if (filtered[i] % 2 === 0){
                even +=filtered[i];
            }else{
                odds += filtered[i];
            }
          }
          return [even, odds];
    }
}

console.log(sumOfNumbers([1, 2, 3, 4, "a", "5", "6"]));
