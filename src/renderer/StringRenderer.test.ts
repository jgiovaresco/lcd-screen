import { ONE } from '../digit';
import { StringRenderer } from './StringRenderer';

describe('StringRenderer', () => {
  let renderer: StringRenderer;

  beforeEach(() => {
    renderer = new StringRenderer();
  });

  it('renders one digit in a string', () => {
    renderer.render([ONE]);
    expect(renderer.buffer).toBe(
      `   
  |
  |`,
    );
  });

  it('renders 2 digits in a string', () => {
    renderer.render([ONE, ONE]);
    expect(renderer.buffer).toBe(
      `      
  |  |
  |  |`,
    );
  });

  it('renders 3 digits in a string', () => {
    renderer.render([ONE, ONE, ONE]);
    expect(renderer.buffer).toBe(
      `         
  |  |  |
  |  |  |`,
    );
  });
});
