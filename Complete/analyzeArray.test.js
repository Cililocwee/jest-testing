import analyzeArray from './analyzeArray'

test("Returns an object with average, min, max, and length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ 
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("Returns an object with avg, min, max, and length", () => {
    expect(analyzeArray([2,5,3,7,9,6,4,1,6,7,8,10,12,20,55,45,32,7])).toEqual({
        average:13.3,
        min: 1,
        max: 55,
        length: 18
    })
})