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

  it('displays 3', () => {
    expect(display(3)).toBe(
      ` _ 
 _|
 _|`,
    );
  });

  it('displays 4', () => {
    expect(display(4)).toBe(
      `   
|_|
  |`,
    );
  });

  it('displays 5', () => {
    expect(display(5)).toBe(
      ` _ 
|_ 
 _|`,
    );
  });

  it('displays 6', () => {
    expect(display(6)).toBe(
      ` _ 
|_ 
|_|`,
    );
  });

  it('displays 7', () => {
    expect(display(7)).toBe(
      ` _ 
  |
  |`,
    );
  });

  it('displays 8', () => {
    expect(display(8)).toBe(
      ` _ 
|_|
|_|`,
    );
  });

  it('displays 9', () => {
    expect(display(9)).toBe(
      ` _ 
|_|
  |`,
    );
  });
});
