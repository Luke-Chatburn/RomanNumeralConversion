const romanNumerals = require("../app/romanNumeral.js");
const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

describe("RomanNumerals conversion", () => {
    it("Converts numbers to Roman numerals", () => {
        expect(romanNumerals.toRoman(1)).to.equal("I");
        expect(romanNumerals.toRoman(2)).to.equal("II");
        expect(romanNumerals.toRoman(3)).to.equal("III");
        expect(romanNumerals.toRoman(4)).to.equal("IV");
        expect(romanNumerals.toRoman(1323)).to.equal("MCCCXXIII");
    });

    it("Won't accept out of range numbers", () => {
        expect(romanNumerals.toRoman(-1367)).to.be.false;
        expect(romanNumerals.toRoman(0)).to.be.false;
        expect(romanNumerals.toRoman(4000)).to.be.false;
    });

    it("Converts Roman Numerals to numbers", () => {
        expect(romanNumerals.fromRoman("I")).to.equal(1);
        expect(romanNumerals.fromRoman("II")).to.equal(2);
        expect(romanNumerals.fromRoman("III")).to.equal(3);
        expect(romanNumerals.fromRoman("IV")).to.equal(4);
        expect(romanNumerals.fromRoman("MCCCXXIII")).to.equal(1323);
    });

    it("Won't accept incorrect Roman numerals", () => {
        expect(romanNumerals.fromRoman("A")).to.be.false;
        expect(romanNumerals.fromRoman("AB")).to.be.false;
        expect(romanNumerals.fromRoman("ABI")).to.be.false;
        expect(romanNumerals.fromRoman("MCCCXXIVAMI")).to.be.false;
    });

    it("Won't accept invalid characters", () => {
        expect(romanNumerals.fromRoman("&")).to.be.false;
        expect(romanNumerals.toRoman("&")).to.be.false;
        expect(romanNumerals.fromRoman("^&*(£$%)")).to.be.false;
        expect(romanNumerals.toRoman("^&*(£$%)")).to.be.false;
    });
});