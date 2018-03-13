const ZERO = ` _ 
| |
|_|`;

const ONE = `   
  |
  |`;

const TWO = ` _ 
 _|
|_ `;

const digits = [ZERO, ONE, TWO];

export function display(digit: number): string {
  return digits[digit];
}
