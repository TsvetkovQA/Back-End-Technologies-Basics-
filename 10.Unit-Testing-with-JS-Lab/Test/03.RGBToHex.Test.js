import { expect } from "chai";
import { rgbToHexColor } from "../03.RGBToHex.js";

describe('rgbToHexColor function tests', function () {
    it('should return correct value #0F6414 for (15, 100, 20)', function () {
        let result = rgbToHexColor(15, 100, 20);
        expect(result).to.equal('#0F6414');
    });

    it('should return #000000 for (0, 0, 0)', function () {
        let result = rgbToHexColor(0, 0, 0);
        expect(result).to.equal('#000000');
    });

    it('should return #FFFFFF for (255, 255, 255)', function () {
        let result = rgbToHexColor(255, 255, 255);
        expect(result).to.equal('#FFFFFF');
    });

    it('should return undefined for red value less than 0', function () {
        let result = rgbToHexColor(-15, 214, 235);
        expect(result).to.be.undefined;
    });

    it('should return undefined for green value greater than 255', function () {
        let result = rgbToHexColor(30, 256, 235);
        expect(result).to.be.undefined;
    });

    it('should return undefined for non-integer blue value', function () {
        let result = rgbToHexColor(35, 214, 2.5);
        expect(result).to.be.undefined;
    });

    it('should return undefined if not enough arguments are provided', function () {
        let result = rgbToHexColor(15, 214);
        expect(result).to.be.undefined;
    });

    it('should return undefined for non-integer green value (undefined)', function () {
        let result = rgbToHexColor(15, null, 214);
        expect(result).to.be.undefined;
    });

    it('should return undefined for non-integer blue value', function () {
        let result = rgbToHexColor(15, 214, 2.5);
        expect(result).to.be.undefined;
    });
});