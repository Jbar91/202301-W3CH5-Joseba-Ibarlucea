/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PokemonFetch } from '../../services/repository/poke.fetch.repo';
import { CardsContainer } from '../cards-container/cards-container';
import { Component } from '../component/component';

export class Home extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return ``;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    new CardsContainer('.container', new PokemonFetch());
  }
}
