import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import {
  PokeApiType,
  PokemonFetch,
} from '../../services/repository/poke.fetch.repo';
import { CardsContainer } from './cards-container';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
) as jest.Mock;

describe('Given the CardsContainer component', () => {
  const mockRepo: PokemonFetch = new PokemonFetch();
  let arr: Promise<PokeApiType>;
  beforeEach(async () => {
    mockRepo.loadPokemons();
    mockRepo.sortPokemons(arr);
  });
  describe("When it's instantiated", () => {
    document.body.innerHTML = '<slot></slot>';
    test('Then cardsContainer should be an instance of CardsContainer', () => {
      const cardsContainer = new CardsContainer('slot', mockRepo);
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
