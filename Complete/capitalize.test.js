import capitalize from './capitalize';

test("Capitalizes the first letter of a simple string", () => {
    expect(capitalize("hummus")).toBe("Hummus");
})

test("Capitalizes the first letter of a complex string", () =>{
    expect(capitalize("tommy said no")).toBe("Tommy said no");
})

test("Ignores the first character if it's an integer", () => {
    expect(capitalize("1 is the loneliest number")).toBe("1 is the loneliest number");
})
