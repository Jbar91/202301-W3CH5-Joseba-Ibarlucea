/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import { Favorite } from '../favorite/favorite';
import { Header } from '../header/header';
import { Home } from '../home/home';

export class App extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <div id="app">
      <main class="container">
      </main>
    </div>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    new Header('#app');

    if (location.pathname === '/') {
      new Home('#app');
    }

    if (location.pathname === '/favorite') {
      new Favorite('#app');
    }
  }
}
