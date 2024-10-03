function make_avg(arr){
    let sum = 0;
    for(let i = 0; i <= arr.length - 1; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(make_avg([2, 4, 6 , 8])) // 20 /4 = 5