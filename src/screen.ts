const ZERO = ` _ 
| |
|_|`;

const ONE = `   
  |
  |`;

const TWO = ` _ 
 _|
|_ `;

const THREE = ` _ 
 _|
 _|`;

const FOUR = `   
|_|
  |`;

const FIVE = ` _ 
|_ 
 _|`;

const SIX = ` _ 
|_ 
|_|`;

const SEVEN = ` _ 
  |
  |`;

const EIGHT = ` _ 
|_|
|_|`;

const NINE = ` _ 
|_|
  |`;

const digits = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

export function display(digit: number): string {
  return digits[digit];
}
