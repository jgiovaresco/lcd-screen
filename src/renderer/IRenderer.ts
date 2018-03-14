import { Digit } from '../digit';

export interface IRenderer {
  render(digits: Digit[]): void;
}
