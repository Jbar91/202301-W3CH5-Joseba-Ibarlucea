import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given the component Header', () => {
  describe("When it's instantiated", () => {
    document.body.innerHTML = '<slot></slot>';
    test('Then header should be an instance of Header', () => {
      const header = new Header('slot');
      expect(header).toBeInstanceOf(Header);
    });
    test('Then it should render an h1', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
    });
  });
});
