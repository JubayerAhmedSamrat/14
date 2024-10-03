function count_zero(binString){
    let count = 0;
    for( let i = 0; i <= binString.length; i++){
        if( binString[i] === '0'){
            count++;
        }
    }
    return count;
}

console.log(count_zero('01010101000111')); // 7