function noOfThrees(num) {
    let arr = []
    if(num < 3){
        return false;
    }
    for (let i = 0; i < num; i++) {
        if((""+i).indexOf(3) > -1){
            arr.push(i)
        }
    }
    return { array: arr.length, numbers: arr };
}
console.log(noOfThrees(34));