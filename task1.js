function getSum(arr){
    const n = arr.length
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n ; i++) {
        if (i%2 ==0) {
            even += arr[i]
        } else {
            odd += arr[1]
        }
    }
  console.log(`[${even},${odd}]`);
 
}

let arr = [1,2,3,4,5,6];

getSum(arr);

