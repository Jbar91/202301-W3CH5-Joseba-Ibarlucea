export type CardStructure = {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  description: string;
};

export class Card implements CardStructure {
  public id: number;
  public name: string;
  public types: [
    {
      type: {
        name: string;
      };
    }
  ];

  public sprites: { front_default: string };
  public isFavorite: boolean;
  public description: string;
  constructor(dtoPoke: CardStructure) {
    this.id = dtoPoke.id;
    this.name = dtoPoke.name;
    this.sprites = dtoPoke.sprites;
    this.types = dtoPoke.types;
    this.isFavorite = false;
    this.description = dtoPoke.description;
  }
}
