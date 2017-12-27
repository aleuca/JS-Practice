function parse(saying, numberOf) {
    let result = "";
    console.log(numberOf);
    for (let i = 0; i < numberOf; i++) {
        result += saying + " ";
    };
    return result;
}

module.exports = { parse: parse }