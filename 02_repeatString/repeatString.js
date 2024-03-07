const repeatString = function(string, num) {
    let output = "";
    if (string === "") return ""; // check to see if string input is empty
    if (num < 0) return "ERROR"; // if number is negative, ERROR
    for (let i = 0; i < num; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
