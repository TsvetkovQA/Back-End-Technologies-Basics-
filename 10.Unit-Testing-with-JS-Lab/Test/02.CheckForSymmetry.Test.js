import { expect } from "chai";
import { isSymmetric } from "../02.CheckForSymmetry.js";

describe('function isSymmetric tests', function () {
    it('should return true for a symmetric array', function () {
        let result = isSymmetric([1, 25, 7, 25, 1]);
        expect(result).to.be.true;
    });

    it('should return false for a non-symmetric array', function () {
        let result = isSymmetric([1, 25, 3, 12, 1]);
        expect(result).to.be.false;
    });

    it('should return true for an empty array', function () {
        let result = isSymmetric([]);
        expect(result).to.be.true;
    });

    it('should return true for an array with a single element', function () {
        let result = isSymmetric([1]);
        expect(result).to.be.true;
    });

    it('should return false for a non-array input', function () {
        let result = isSymmetric('not an array');
        expect(result).to.be.false;
    });

    it('should return true for symmetric array of strings', function () {
        let result = isSymmetric(["a", "b", "b", "a"]);
        expect(result).to.be.true;
    });

    it('should return false for non-symmetric array of strings', function () {
        let result = isSymmetric(["a", "b", "c"]);
        expect(result).to.be.false;
    });

    it('should return false for non-array input which is a number', function () {
        let result = isSymmetric(123);
        expect(result).to.be.false;
    });

    it('should return false for non-array input which is an object', function () {
        let result = isSymmetric({ a: 1, b: 2 });
        expect(result).to.be.false;
    });

    it('should return true for symmetric array with mixed types which are numbers and strings', function () {
        let result = isSymmetric([1, "1", "1", 1]);
        expect(result).to.be.true;
    });

    it('should return false for non-symmetric array with mixed types which are numbers and strings', function () {
        let result = isSymmetric([1, "1"]);
        expect(result).to.be.false;
    });
});