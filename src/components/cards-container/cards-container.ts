/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class CardsContainer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
      <section class="container__display"></section>
        <div class="container__pages">
          <button>Previous</button>
          <button>Next</button>
        </div>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
