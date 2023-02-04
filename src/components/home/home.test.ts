import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Component } from '../component/component';
import { Home } from './home';

describe('Given the Home Component', () => {
  describe("When it's instantiated", () => {
    document.body.innerHTML = '<div class="container"></div>';
    test('Then home should be an instance of Component', () => {
      const home = new Home('div');
      expect(home).toBeInstanceOf(Component);
    });
    test('Then it should render buttons', () => {
      const prevBtn = screen.getByRole('button', { name: 'Previous' });
      const nextBtn = screen.getByRole('button', { name: 'Next' });
      expect(prevBtn).toBeInTheDocument();
      expect(nextBtn).toBeInTheDocument();
    });
  });
});
