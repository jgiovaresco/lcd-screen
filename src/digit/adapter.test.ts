import { numberToDigits } from './adapter';
import {
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
} from './digits';

describe('numberToDigits', () => {
  it('adapts a one digit number', () => {
    expect(numberToDigits(1)).toEqual([ONE]);
    expect(numberToDigits(2)).toEqual([TWO]);
    expect(numberToDigits(3)).toEqual([THREE]);
    expect(numberToDigits(4)).toEqual([FOUR]);
    expect(numberToDigits(5)).toEqual([FIVE]);
    expect(numberToDigits(6)).toEqual([SIX]);
    expect(numberToDigits(7)).toEqual([SEVEN]);
    expect(numberToDigits(8)).toEqual([EIGHT]);
    expect(numberToDigits(9)).toEqual([NINE]);
    expect(numberToDigits(0)).toEqual([ZERO]);
  });

  it('adapts a two digits number', () => {
    expect(numberToDigits(34)).toEqual([THREE, FOUR]);
  });

  it('adapts a three digits number', () => {
    expect(numberToDigits(123)).toEqual([ONE, TWO, THREE]);
  });

  it('adapts a four digits number', () => {
    expect(numberToDigits(1234)).toEqual([ONE, TWO, THREE, FOUR]);
  });

  it('adapts a 10 digits number', () => {
    expect(numberToDigits(1234567890)).toEqual([
      ONE,
      TWO,
      THREE,
      FOUR,
      FIVE,
      SIX,
      SEVEN,
      EIGHT,
      NINE,
      ZERO,
    ]);
  });
});
