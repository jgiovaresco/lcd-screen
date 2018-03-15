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
