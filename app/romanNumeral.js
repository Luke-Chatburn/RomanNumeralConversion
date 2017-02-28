class romanNumerals {
    constructor() {
        const numeral = (value, numeral) => {
            return {value: value, numeral: numeral};
        }

        this.numeralList = [
            numeral(1000, "M"),
            numeral(900, "CM"),
            numeral(500, "D"),
            numeral(400, "CD"),
            numeral(100, "C"),
            numeral(90, "XC"),
            numeral(50, "L"),
            numeral(40, "XL"),
            numeral(10, "X"),
            numeral(9, "IX"),
            numeral(5, "V"),
            numeral(4, "IV"),
            numeral(1, "I")
        ];
    }

    toRoman(number) {
        let result = "";

        // stop any out of range numbers.
        if (number < 1 || number > 3999)
            return false;

        for (let n of this.numeralList)
            for(; number >= n.value; number -= n.value)
                result += n.numeral;

        // if no result return false
        return result === "" ? false : result;
    }

    fromRoman(string) {
        let result = 0;
        let invalidNumeral

        // Prevent invalid characters
        for (let s of string) {
            invalidNumeral = this.numeralList.filter(n => !n.numeral.indexOf(s));
            if (invalidNumeral.length < 1)
                return false;
        }
        
        for (let n of this.numeralList)
            for(; string.indexOf(n.numeral) === 0; string = string.replace(n.numeral, ""))
                result += n.value;

        return result;
    }
}
module.exports = new romanNumerals();