import caesarCipher from './caesarCipher'

test("Shifts text by 1 letter", () => {
    expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
})

test("Shifts text by 3 letters", () => {
    expect(caesarCipher("World", 3)).toBe("Zruog");
})

test("Skips blank spaces", () => {
    expect(caesarCipher("Hello world", 1)).toBe("Ifmmp xpsme");
})

test("Properly wraps around", () => {
    expect(caesarCipher("ZZZ zzz", 1)).toBe("AAA aaa");
})

test("Properly wraps both ways", () => {
    expect(caesarCipher("zzz ZZZ", 1)).toBe("aaa AAA");
})