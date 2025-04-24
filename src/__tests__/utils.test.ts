import { hexToRgba } from '../utils';

describe('hexToRgba', () => {
    // Test cases for valid hex codes
    it('should convert a 6-digit hex code to rgba with default opacity 1', () => {
        expect(hexToRgba('#FF0000')).toBe('rgba(255,0,0,1)');
        expect(hexToRgba('#00FF00')).toBe('rgba(0,255,0,1)');
        expect(hexToRgba('#0000FF')).toBe('rgba(0,0,255,1)');
        expect(hexToRgba('#FFFFFF')).toBe('rgba(255,255,255,1)');
        expect(hexToRgba('#000000')).toBe('rgba(0,0,0,1)');
    });

    it('should convert a 3-digit hex code to rgba with default opacity 1', () => {
        expect(hexToRgba('#F00')).toBe('rgba(255,0,0,1)');
        expect(hexToRgba('#0F0')).toBe('rgba(0,255,0,1)');
        expect(hexToRgba('#00F')).toBe('rgba(0,0,255,1)');
        expect(hexToRgba('#FFF')).toBe('rgba(255,255,255,1)');
        expect(hexToRgba('#000')).toBe('rgba(0,0,0,1)');
    });

    it('should convert a 6-digit hex code to rgba with specified opacity', () => {
        expect(hexToRgba('#FF0000', 0.5)).toBe('rgba(255,0,0,0.5)');
        expect(hexToRgba('#00FF00', 0.7)).toBe('rgba(0,255,0,0.7)');
        expect(hexToRgba('#0000FF', 0)).toBe('rgba(0,0,255,0)');
    });

    it('should convert a 3-digit hex code to rgba with specified opacity', () => {
        expect(hexToRgba('#F00', 0.5)).toBe('rgba(255,0,0,0.5)');
        expect(hexToRgba('#0F0', 0.7)).toBe('rgba(0,255,0,0.7)');
        expect(hexToRgba('#00F', 0)).toBe('rgba(0,0,255,0)');
    });

    it('should handle hex codes with different casing', () => {
        expect(hexToRgba('#ff0000')).toBe('rgba(255,0,0,1)');
        expect(hexToRgba('#fF00fF')).toBe('rgba(255,0,255,1)');
        expect(hexToRgba('#F0F')).toBe('rgba(255,0,255,1)');
    });

    // Test cases for invalid hex codes
    it('should throw an error for invalid hex codes', () => {
        expect(() => hexToRgba('FF0000')).toThrow('Bad Hex'); // Missing #
        expect(() => hexToRgba('#F00F')).toThrow('Bad Hex'); // Invalid length (4)
        expect(() => hexToRgba('#12345')).toThrow('Bad Hex'); // Invalid length (5)
        expect(() => hexToRgba('#GGGGGG')).toThrow('Bad Hex'); // Invalid characters
        expect(() => hexToRgba('blue')).toThrow('Bad Hex'); // Not a hex code
        expect(() => hexToRgba('')).toThrow('Bad Hex'); // Empty string
    });

    it('should throw an error even if opacity is provided for invalid hex', () => {
        expect(() => hexToRgba('invalid', 0.5)).toThrow('Bad Hex');
    });
});
