/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { CardsContainer } from '../cards-container/cards-container';
import { Component } from '../component/component';
import { Header } from '../header/header';

export class Home extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return ``;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    new Header('#app');
    new CardsContainer('.container');
  }
}
