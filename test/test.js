const romanNumerals = require("../app/romanNumeral.js");
const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

describe("RomanNumerals conversion", () => {
    it("Converts numbers to Roman numerals", () => {
        expect(romanNumerals.generate(1)).to.equal("I");
        expect(romanNumerals.generate(2)).to.equal("II");
        expect(romanNumerals.generate(3)).to.equal("III");
        expect(romanNumerals.generate(4)).to.equal("IV");

        expect(romanNumerals.generate(1323)).to.equal("MCCCXXIII");

    });

    it("Will handle less than 1 or greater than 3999", () => {
        expect(romanNumerals.generate(0)).to.equal("Number out of range");
        expect(romanNumerals.generate(4689)).to.equal("Number out of range");

    });
});