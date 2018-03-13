import { Digit } from '../digit';

export interface IRenderer {
  render(digit: Digit): void;
}
