function isPrime(n)
{

    for (let i = 2; i < n; i++){
        if (n % i == 0||n <= 1){
            return false;
        }else{
            return true;
        }
    }
}
  

 
 isPrime(11) ? console.log(" true") : console.log(" false");
 