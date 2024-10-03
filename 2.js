function takeNum(num){
    if(num % 2 === 0){ // jodi even hoy
        return num / 2;
    } else{           // jodi odd hoy
        return num * 2;
    }
}
console.log(takeNum(4));

// // using ternary operator

// function takeNum(num){
    
//     return (num % 2 === 0) ? num /2 : num * 2;
// }

// console.log(takeNum(5))