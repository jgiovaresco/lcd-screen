const ZERO = ` _ 
| |
|_|`;

const ONE = `   
  |
  |`;

export function display(digit: number): string {
  if (1 === digit) {
    return ONE;
  }

  return ZERO;
}
