import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { CardsContainer } from './cards-container';

describe('Given the CardsContainer component', () => {
  describe("When it's instantiated", () => {
    document.body.innerHTML = '<slot></slot>';
    test('Then cardsContainer should be an instance of CardsContainer', () => {
      const cardsContainer = new CardsContainer('slot');
      expect(cardsContainer).toBeInstanceOf(CardsContainer);
    });
    test('Then it should render buttons', () => {
      const prevBtn = screen.getByRole('button', { name: 'Previous' });
      const nextBtn = screen.getByRole('button', { name: 'Next' });
      expect(prevBtn).toBeInTheDocument();
      expect(nextBtn).toBeInTheDocument();
    });
  });
});
