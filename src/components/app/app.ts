/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import { Header } from '../header/header';

export class App extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <div id="app"></div>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    new Header('#app');
  }
}
