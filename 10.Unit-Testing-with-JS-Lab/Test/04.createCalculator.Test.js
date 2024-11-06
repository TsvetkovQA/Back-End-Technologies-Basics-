import { expect } from "chai";
import { createCalculator } from "../04.createCalculator.js";

describe('createCalculator tests', function () {
    let calculator;

    beforeEach(function () {
        calculator = createCalculator();
    });

    it('should return 0 as the initial value', function () {
        expect(calculator.get()).to.equal(0);
    });

    it('should return 5 after adding 5', function () {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });

    it('should return -5 after subtracting 5', function () {
        calculator.subtract(5);
        expect(calculator.get()).to.equal(-5);
    });

    it('should return 0 after adding 10 and subtracting 10', function () {
        calculator.add(10);
        calculator.subtract(10);
        expect(calculator.get()).to.equal(0);
    });

    it('should return 5 after adding "5"', function () {
        calculator.add("5");
        expect(calculator.get()).to.equal(5);
    });

    it('should return -5 after subtracting "5"', function () {
        calculator.subtract("5");
        expect(calculator.get()).to.equal(-5);
    });

    it('should return 1.5 after adding 2.5 and subtracting 1', function () {
        calculator.add(2.5);
        calculator.subtract(1);
        expect(calculator.get()).to.equal(1.5);
    });

    it('should not change value when calling get()', function () {
        calculator.add(10);
        calculator.get();
        expect(calculator.get()).to.equal(10);
    });

    it('should return NaN after adding a non-parsed value', function () {
        calculator.add("invalid");
        expect(calculator.get()).to.be.NaN;
    });

    it('should have independent calculators with separate values', function () {
        let calculator2 = createCalculator();
        calculator.add(5);
        calculator2.add(10);
        expect(calculator.get()).to.equal(5);
        expect(calculator2.get()).to.equal(10);
    });
});
