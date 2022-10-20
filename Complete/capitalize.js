function capitalize(string) {
    let first = string.split("")[0].toUpperCase();
    let second = string.split("");
    second[0] = first;
    return second.join("");
}

export default capitalize;