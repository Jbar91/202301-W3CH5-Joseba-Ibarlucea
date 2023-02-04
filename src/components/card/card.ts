/* eslint-disable no-unused-vars */
import { CardStructure } from '../../models/card';
import { Component } from '../component/component';

export class Card extends Component {
  constructor(public selector: string, public pokeInfo: CardStructure) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <div class="card" data-id="${this.pokeInfo.id}">
      <div class="card__sprite">
        <img src="${this.pokeInfo.sprite}" alt="${this.pokeInfo.name} sprite">
      </div>
      <ul class="card__info">
        <li>${this.pokeInfo.name}</li>
        <li>${this.pokeInfo.types}</li>
      </ul>
    </div>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
