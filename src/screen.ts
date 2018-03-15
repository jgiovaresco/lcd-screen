import { numberToDigits } from './digit';
import { IRenderer } from './renderer';

export class Screen {
  private renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  public display(num: number) {
    this.renderer.render(numberToDigits(num));
  }
}
