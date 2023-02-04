import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Component } from '../component/component';
import { InfoCard } from './infocard';

describe('Given the InfoCard component', () => {
  document.body.innerHTML = '<slot></slot>';
  describe("When it's instantiated", () => {
    test('Then infoCard should be an instance of InfoCard', () => {
      const infoCard = new InfoCard('slot');
      expect(infoCard).toBeInstanceOf(Component);
    });
    test('Then InfoCard should render a button', () => {
      const btn = screen.getByRole('button');
      expect(btn).toBeInTheDocument();
    });
  });
});
