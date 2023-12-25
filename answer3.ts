function nonRecur(denominator:number, integer?:number){

    if (!integer){
        integer = 0
    }
    if (denominator < 2){
        throw new Error ('Invalid input');
    }

    let decimalNumbers = 0;
    for (let n = 2; n <= denominator; n++) {
        decimalNumbers += 1 / (n * (n - 1));
    }
  
    return integer + decimalNumbers;

    // Despite by mathematical logic the function could return as integer + (denominator - 1) / denominator, the calls of the division is different between nonRecur and recur, which the loss of precision in float is different. The differences will increase along with the growth of denominator size. Therefore, the use of a for loop to do the division is needed to replicate the amount of division of recursive call to produce the exact same result.
}


