/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class InfoCard extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `
    <section class="info">
      <button>Randomize</button>
    </section>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
