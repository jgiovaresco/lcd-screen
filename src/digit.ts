export class Digit {
  private _top: string[];
  private _middle: string[];
  private _bottom: string[];

  constructor(top: string[], middle: string[], bottom: string[]) {
    this._top = top;
    this._middle = middle;
    this._bottom = bottom;
  }

  get top(): string[] {
    return this._top;
  }

  get middle(): string[] {
    return this._middle;
  }

  get bottom(): string[] {
    return this._bottom;
  }
}

export const ZERO = new Digit(
  [' ', '_', ' '],
  ['|', ' ', '|'],
  ['|', '_', '|'],
);

export const ONE = new Digit([' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', '|']);

export const TWO = new Digit([' ', '_', ' '], [' ', '_', '|'], ['|', '_', ' ']);

export const THREE = new Digit(
  [' ', '_', ' '],
  [' ', '_', '|'],
  [' ', '_', '|'],
);

export const FOUR = new Digit(
  [' ', ' ', ' '],
  ['|', '_', '|'],
  [' ', ' ', '|'],
);

export const FIVE = new Digit(
  [' ', '_', ' '],
  ['|', '_', ' '],
  [' ', '_', '|'],
);

export const SIX = new Digit([' ', '_', ' '], ['|', '_', ' '], ['|', '_', '|']);

export const SEVEN = new Digit(
  [' ', '_', ' '],
  [' ', ' ', '|'],
  [' ', ' ', '|'],
);

export const EIGHT = new Digit(
  [' ', '_', ' '],
  ['|', '_', '|'],
  ['|', '_', '|'],
);

export const NINE = new Digit(
  [' ', '_', ' '],
  ['|', '_', '|'],
  [' ', ' ', '|'],
);
