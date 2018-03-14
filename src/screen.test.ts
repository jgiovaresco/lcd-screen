import { StringRenderer } from './renderer';
import { Screen } from './screen';

describe('display', () => {
  let screen: Screen;
  let renderer: StringRenderer;

  beforeEach(() => {
    renderer = new StringRenderer();
    screen = new Screen(renderer);
  });

  describe('with one digit number', () => {
    it('displays 0', () => {
      screen.display(0);
      expect(renderer.buffer).toBe(
        ` _ 
| |
|_|`,
      );
    });

    it('displays 1', () => {
      screen.display(1);
      expect(renderer.buffer).toBe(
        `   
  |
  |`,
      );
    });

    it('displays 2', () => {
      screen.display(2);
      expect(renderer.buffer).toBe(
        ` _ 
 _|
|_ `,
      );
    });

    it('displays 3', () => {
      screen.display(3);
      expect(renderer.buffer).toBe(
        ` _ 
 _|
 _|`,
      );
    });

    it('displays 4', () => {
      screen.display(4);
      expect(renderer.buffer).toBe(
        `   
|_|
  |`,
      );
    });

    it('displays 5', () => {
      screen.display(5);
      expect(renderer.buffer).toBe(
        ` _ 
|_ 
 _|`,
      );
    });

    it('displays 6', () => {
      screen.display(6);
      expect(renderer.buffer).toBe(
        ` _ 
|_ 
|_|`,
      );
    });

    it('displays 7', () => {
      screen.display(7);
      expect(renderer.buffer).toBe(
        ` _ 
  |
  |`,
      );
    });

    it('displays 8', () => {
      screen.display(8);
      expect(renderer.buffer).toBe(
        ` _ 
|_|
|_|`,
      );
    });

    it('displays 9', () => {
      screen.display(9);
      expect(renderer.buffer).toBe(
        ` _ 
|_|
  |`,
      );
    });
  });

  describe('with two digits number', () => {
    it('displays 12', () => {
      screen.display(12);
      expect(renderer.buffer).toBe(
        `    _ 
  | _|
  ||_ `,
      );
    });
  });
});
