/* eslint-disable no-unused-vars */
import { CardStructure } from './card';

// Found short descriptions on api
type InfoStructure = {
  description: string;
};

export type CardInfoStructure = CardStructure & InfoStructure;

export class CardInfo implements CardInfoStructure {
  public isFavorite: boolean;
  constructor(
    public name: string,
    public sprite: string,
    public types: [],
    public description: string
  ) {
    this.isFavorite = false;
  }
}
