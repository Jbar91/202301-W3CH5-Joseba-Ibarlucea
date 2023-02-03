import '@testing-library/jest-dom';
import { App } from './app';

describe('Given the app component', () => {
  document.body.innerHTML = '<slot></slot>';
  describe("When it's instantiated", () => {
    test('Then element should be an instance of App', () => {
      const app = new App('slot');
      expect(app).toBeInstanceOf(App);
    });
  });
});
