export type CardStructure = {
  id: number;
  name: string;
  sprite: string;
  types: [];
  isFavorite: boolean;
  description: string;
};

export class Card implements CardStructure {
  public id: number;
  public name: string;
  public sprite: string;
  public types: [];
  public isFavorite: boolean;
  public description: string;
  constructor(dtoPoke: CardStructure) {
    this.id = dtoPoke.id;
    this.name = dtoPoke.name;
    this.sprite = dtoPoke.sprite;
    this.types = dtoPoke.types;
    this.isFavorite = false;
    this.description = dtoPoke.description;
  }
}
