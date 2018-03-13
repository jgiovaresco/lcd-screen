import { display } from './screen';

describe('display', () => {
  it('displays 0', () => {
    expect(display(0)).toBe(
      ` _ 
| |
|_|`,
    );
  });

  it('displays 1', () => {
    expect(display(1)).toBe(
      `   
  |
  |`,
    );
  });
});
