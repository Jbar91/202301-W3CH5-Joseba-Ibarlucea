/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = "Catch 'Em All") {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <header class="header">
    <img src="pokemon-logo.svg" alt="Pokemon logo" class=header__img>
        <h1 class="header__title">${this.title}</h1>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
