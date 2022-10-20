import calculator from './calculator'

test("Adds two numbers", () => {
    expect(calculator.add(2, 4)).toBe(6);
})

test("Subtracts smaller number from a larger number", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test("Subtracts larger number from a smaller number", () => {
    expect(calculator.subtract(3, 5)).toBe(-2)
})

test("Multiplies two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
})

test("Divides two non-zero numbers", () => {
    expect(calculator.divide(9, 3)).toBe(3);
})

test("Returns smarmy message on division by 0", () => {
    expect(calculator.divide(3,0)).toBe("WE DON'T DO THAT HERE");
})

test("Returns ghost noises when dividing 0", () => {
    expect(calculator.divide(0,3)).toBe("spooky")
})