function reverseString(string){
    let reversey = [];

    for (let i = string.split("").length; i >= 0; i--) {
        reversey.push(string.split("")[i]);
    }
    return reversey.join("");
}

export default reverseString;