const romanNumerals = function () {};

const romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

romanNumerals.prototype.generate = function(number) {
    let result = "";

    if (number < 1 || number > 3999) 
        return "Number out of range";

    for (let i = 0; i < numbers.length; i++)
        while(number >= numbers[i]) {
            result += romanNumeral[i];
            number -= numbers[i];
        }

    return result;
}

module.exports = new romanNumerals();