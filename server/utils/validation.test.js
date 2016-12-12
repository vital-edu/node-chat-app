const {isRealString} = require('./validation');
const expect = require('expect');

describe('Validation', () => {
  describe('isRealString', () => {
    it('should reject non-string values', () => {
      expect(isRealString(20)).toBeFalsy();
      expect(isRealString(['house'])).toBeFalsy();
      expect(isRealString({'house': 'blank'})).toBeFalsy();
    });

    it('should allow string with non-space characteres', () => {
      expect(isRealString('   a   ')).toBeTruthy();
      expect(isRealString('   Blank House   ')).toBeTruthy();
      expect(isRealString('Blank House')).toBeTruthy();
    });

    it('should reject blank string', () => {
      expect(isRealString('')).toBeFalsy();
    });

    it('should reject string with only space characteres', () => {
      expect(isRealString('      ')).toBeFalsy();
      expect(isRealString(' ')).toBeFalsy();
    });
  });
});