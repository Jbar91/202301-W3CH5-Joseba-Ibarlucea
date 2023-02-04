import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Home } from './home';

describe('Given the Home Component', () => {
  describe("When it's instantiated", () => {
    document.body.innerHTML =
      '<slot id="app"><div class="container"></div></slot>';
    test('Then home should be an instance of Home', () => {
      const home = new Home('slot');
      expect(home).toBeInstanceOf(Home);
    });
    test('Then it should render an h1', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
    });
    test('Then it should render buttons', () => {
      const prevBtn = screen.getByRole('button', { name: 'Previous' });
      const nextBtn = screen.getByRole('button', { name: 'Next' });
      expect(prevBtn).toBeInTheDocument();
      expect(nextBtn).toBeInTheDocument();
    });
  });
});
