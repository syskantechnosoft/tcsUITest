MathUtils = function() {};

MathUtils.prototype.sum = function (num1, num2){
    return (num1+num2);
}

MathUtils.prototype.sub = function (num1,num2){
    return (num1-num2);
}

MathUtils.prototype.mul = function (num1, num2){
    return (num1*num2);
}

MathUtils.prototype.div = function (num1, num2) {
    return (num1/num2);
}

MathUtils.prototype.avg = function (num1, num2) {
    return (num1+num2)/2;
}

MathUtils.prototype.factorial = function(num) {
    if (num<0) {
        throw new Error("There is no Factorial for Negative Numbers");
    } else if (num == 1 || num==0){
        return 1;
    } else {
        return num * this.factorial(num-1);
    }
}