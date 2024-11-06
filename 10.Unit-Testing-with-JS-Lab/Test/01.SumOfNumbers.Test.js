import { expect } from "chai";
import { sum } from "../01.SumOfNumbers.js";

describe('sum function test', function () {
    it('should return the sum of numeric values in the array', function () {
        let result = sum([4, 3, 1]);
        expect(result).to.equal(8);
    });

    it('should return the sum of numeric negative values in the array', function () {
        let result = sum([-4, -3, 1]);
        expect(result).to.equal(-6);
    });

    it('should return the sum of numeric string values in the array', function () {
        let result = sum(['4', '3', '1']);
        expect(result).to.equal(8);
    });

    it('should return 0 for an empty array', function () {
        let result = sum([]);
        expect(result).to.equal(0);
    });

    it('should return the sum of mixed numeric and string values in the array', function () {
        let result = sum([1, '2', 3]);
        expect(result).to.equal(6);
    });

    it('should return NaN for an array with non-numeric string values', function () {
        let result = sum(['a', 'b', 'c']);
        expect(result).to.be.NaN;
    });
});