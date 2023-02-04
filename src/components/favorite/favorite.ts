/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import { Header } from '../header/header';

export class Favorite extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return ``;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
