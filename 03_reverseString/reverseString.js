const reverseString = function(string) {
    // parameter check
    if (string === "") return "";
    
    output = "";
    // for loop from the front but reverses the addition so its reversed
    for (let i = 0; i < string.length; i++) {
        output = string[i] + output;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;


// getindexat
// append it to string at start