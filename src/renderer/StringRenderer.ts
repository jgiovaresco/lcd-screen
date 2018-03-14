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

  public render(digits: Digit[]) {
    this._buffer = renderDigit(digits);
  }
}

function renderDigit(digits: Digit[]) {
  const top = digits.reduce(
    (acc: string[], digit: Digit) => acc.concat(digit.top),
    [],
  );
  const middle = digits.reduce(
    (acc: string[], digit: Digit) => acc.concat(digit.middle),
    [],
  );
  const bottom = digits.reduce(
    (acc: string[], digit: Digit) => acc.concat(digit.bottom),
    [],
  );
  return renderInString(top, middle, bottom);
}

function renderInString(top: string[], middle: string[], bottom: string[]) {
  return `${top.join('')}
${middle.join('')}
${bottom.join('')}`;
}
