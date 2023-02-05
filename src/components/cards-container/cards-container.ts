/* eslint-disable no-unused-vars */

import { CardStructure } from '../../models/card';
import {
  PokeApiType,
  PokemonFetch,
} from '../../services/repository/poke.fetch.repo';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './cards-container.scss';

export class CardsContainer extends Component {
  constructor(public selector: string, public repo: PokemonFetch) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
    this.loadCards();
  }

  async nextPokemons() {
    const next = this.repo.nextPokemons();
    this.loadCards(next);
  }

  async prevPokemons() {
    const prev = this.repo.prevPokemons() as Promise<PokeApiType>;
    this.loadCards(prev);
  }

  async loadCards(val = this.repo.loadPokemons()) {
    const qlq = await this.repo.sortPokemons(val);
    const all = Promise.all<CardStructure>(qlq);
    (await all).forEach(
      (item) =>
        new Card('.container__display', {
          id: item.id,
          name: item.name,
          sprites: item.sprites,
          types: item.types,
          description: item.description,
        })
    );
  }

  clear() {
    const container = document.querySelector(
      '.container__display'
    ) as HTMLElement;
    container.innerHTML = '';
  }

  private createTemplate() {
    return `
      <section class="container__display"></section>
        <div class="container__pages">
          <button class="prev">Previous</button>
          <button class="next">Next</button>
        </div>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    const nextBtn = document.querySelector('.next') as HTMLButtonElement;
    nextBtn.addEventListener('click', this.clear);
    nextBtn.addEventListener('click', this.nextPokemons.bind(this));
    const prevBtn = document.querySelector('.prev') as HTMLButtonElement;
    prevBtn.addEventListener('click', this.clear);
    prevBtn.addEventListener('click', this.prevPokemons.bind(this));
  }
}
