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
import { IRenderer } from './renderer';

const DIGITS = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

export class Screen {
  private renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  public display(num: number) {
    this.renderer.render(numberToDigits(num));
  }
}

function numberToDigits(n: number): Digit[] {
  const stringNumber = n.toLocaleString();
  return stringNumber.split('').map(num => DIGITS[parseInt(num, 10)]);
}
