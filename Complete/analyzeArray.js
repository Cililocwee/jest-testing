function analyzeArray(array){
    let sorted = array.sort((a,b) => { return a - b });

    let bitsandpieces = {
        average: +((sorted.reduce((prev, curr) => prev + curr, 0)/sorted.length).toFixed(1)),
        min: sorted[0],
        max: sorted[sorted.length - 1],
        length: sorted.length
    }
    return bitsandpieces;
}

export default analyzeArray;