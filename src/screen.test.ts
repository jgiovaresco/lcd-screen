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

  it('displays 2', () => {
    expect(display(2)).toBe(
      ` _ 
 _|
|_ `,
    );
  });
});
