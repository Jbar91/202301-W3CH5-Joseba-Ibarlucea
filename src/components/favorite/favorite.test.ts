import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Favorite } from './favorite';

describe('Given the Favorite component', () => {
  describe("When it's instantiated", () => {
    document.body.innerHTML = '<slot class="container"></slot>';
    test('Then favorite should be an instance of Favorite', () => {
      const favorite = new Favorite('slot');
      expect(favorite).toBeInstanceOf(Favorite);
    });
    test('Then it should render an ul element', () => {
      const ul = screen.getByRole('list');
      expect(ul).toBeInTheDocument();
    });
  });
});
