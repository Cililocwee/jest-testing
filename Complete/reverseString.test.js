import reverseString from './reverseString'

test("Reverses simple string", () => {
    expect(reverseString("Hello")).toBe("olleH");
})

test("Reverses complex string", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
})