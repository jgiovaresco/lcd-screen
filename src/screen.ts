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
} from './digit';
import { IRenderer } from './renderer';

const DIGITS = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

export class Screen {
  private renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  public display(num: number) {
    const digits = [DIGITS[num]];
    this.renderer.render(digits);
  }
}
