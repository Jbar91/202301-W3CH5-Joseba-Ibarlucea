/* eslint-disable no-unused-vars */
import { Card } from '../card/card';
import { Component } from '../component/component';

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
