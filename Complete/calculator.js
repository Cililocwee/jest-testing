const calculator = {
    add(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    },
    multiply(a, b){
        return a * b;
    },
    divide(a, b){
        if (a == 0) { return "spooky" }
        if (b == 0) { return "WE DON'T DO THAT HERE"}
        return a / b;
    }
}

export default calculator;