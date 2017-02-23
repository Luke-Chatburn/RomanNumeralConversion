const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

describe("RomanNumerals conversion", () => {
    it("Converts numbers to Roman numerals", () => {
        const romanNumerals = require("../app/romanNumeral.js");

        expect(romanNumerals.generate(1)).to.equal("I");
        expect(romanNumerals.generate(2)).to.equal("II");
        expect(romanNumerals.generate(3)).to.equal("III");

    });
});