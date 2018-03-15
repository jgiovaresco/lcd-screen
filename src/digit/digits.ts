import { Digit } from './Digit';

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
