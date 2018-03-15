import { Digit } from './Digit';
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

const DIGITS = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

export function numberToDigits(n: number): Digit[] {
  const stringNumber = n.toLocaleString();
  return stringNumber.split('').map(num => DIGITS[parseInt(num, 10)]);
}
