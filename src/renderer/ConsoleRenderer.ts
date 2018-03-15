// tslint:disable no-console

import chalk from 'chalk';
import { Digit } from '../digit';
import { IRenderer } from './IRenderer';

export class ConsoleRenderer implements IRenderer {
  public render(digits: Digit | Digit[]) {
    let buffer;
    if (Array.isArray(digits)) {
      buffer = renderDigit(digits);
    } else {
      buffer = renderDigit([digits]);
    }

    console.log(chalk.red(buffer));
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
  return renderGrid(top, middle, bottom);
}

function renderGrid(top: string[], middle: string[], bottom: string[]) {
  return `${top.join('')}
${middle.join('')}
${bottom.join('')}`;
}
