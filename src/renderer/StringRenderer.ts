import { Digit } from '../digit';
import { IRenderer } from './IRenderer';

export class StringRenderer implements IRenderer {
  private _buffer: string;

  constructor() {
    this._buffer = '';
  }

  public get buffer(): string {
    return this._buffer;
  }

  public render(digit: Digit) {
    this._buffer += `${digit.top.join('')}
${digit.middle.join('')}
${digit.bottom.join('')}`;
  }
}
