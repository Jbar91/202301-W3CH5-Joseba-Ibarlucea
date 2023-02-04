import '@testing-library/jest-dom';
import { Favorite } from '../favorite/favorite';
import { App } from './app';

describe('Given the app component', () => {
  document.body.innerHTML = '<slot></slot>';
  describe("When it's instantiated", () => {
    test('Then element should be an instance of App', () => {
      const app = new App('slot');
      expect(app).toBeInstanceOf(App);
    });
    describe('When the path is /favorite', () => {
      test('Then it should render the Favorite component', () => {
        const fav = new Favorite('slot');
        expect(fav).toBeInstanceOf(Favorite);
      });
    });
  });
});
