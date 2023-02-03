/* eslint-disable no-unused-vars */
export type CardStructure = {
  name: string;
  sprite: string;
  types: [];
  isFavorite: boolean;
};

export class Card implements CardStructure {
  public isFavorite: boolean;
  constructor(public name: string, public sprite: string, public types: []) {
    this.isFavorite = false;
  }
}
