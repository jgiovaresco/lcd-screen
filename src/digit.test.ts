import {
  Digit,
  EIGHT,
  FIVE,
  FOUR,
  NINE,
  ONE,
  SEVEN,
  SIX,
  THREE,
  TWO,
  ZERO,
} from './digit';

describe('Digit', () => {
  describe('display', () => {
    it('displays a custom digit', () => {
      const digit = new Digit(
        [' ', ' ', ' '],
        ['|', '-', '|'],
        [' ', ' ', ' '],
      );

      expect(digit.display()).toBe(
        `   
|-|
   `,
      );
    });

    it('displays 0', () => {
      expect(ZERO.display()).toBe(
        ` _ 
| |
|_|`,
      );
    });

    it('displays 1', () => {
      expect(ONE.display()).toBe(
        `   
  |
  |`,
      );
    });

    it('displays 2', () => {
      expect(TWO.display()).toBe(
        ` _ 
 _|
|_ `,
      );
    });

    it('displays 3', () => {
      expect(THREE.display()).toBe(
        ` _ 
 _|
 _|`,
      );
    });

    it('displays 4', () => {
      expect(FOUR.display()).toBe(
        `   
|_|
  |`,
      );
    });

    it('displays 5', () => {
      expect(FIVE.display()).toBe(
        ` _ 
|_ 
 _|`,
      );
    });

    it('displays 6', () => {
      expect(SIX.display()).toBe(
        ` _ 
|_ 
|_|`,
      );
    });

    it('displays 7', () => {
      expect(SEVEN.display()).toBe(
        ` _ 
  |
  |`,
      );
    });

    it('displays 8', () => {
      expect(EIGHT.display()).toBe(
        ` _ 
|_|
|_|`,
      );
    });

    it('displays 9', () => {
      expect(NINE.display()).toBe(
        ` _ 
|_|
  |`,
      );
    });
  });
});
