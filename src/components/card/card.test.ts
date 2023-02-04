import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { CardStructure } from '../../models/card';
import { Card } from './card';

describe('Given the Favorite component', () => {
  const pokeInfo: CardStructure = {
    id: 4,
    name: 'charmander',
    sprite: 'ss',
    types: [],
    description: 'asads',
  };
  describe("When it's instantiated", () => {
    document.body.innerHTML = '<slot></slot>';
    test('Then favorite should be an instance of Favorite', () => {
      const card = new Card('slot', pokeInfo);
      expect(card).toBeInstanceOf(Card);
    });
    test('Then it should render an ul', () => {
      const ul = screen.getByRole('list');
      expect(ul).toBeInTheDocument();
    });
  });
});
