export type PokeApiType = {
  count: number;
  next: string;
  previous: null | string;
  results: [{ name: string; url: string }];
};

export interface PokeFetchRepoStructure {
  loadPokemons(): Promise<PokeApiType>;
  sortPokemons(): Promise<string[]>;
}

export class PokemonFetch {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  async loadPokemons(some = this.url): Promise<PokeApiType> {
    const res = await fetch(some);
    const data = (await res.json()) as Promise<PokeApiType>;
    return data;
  }

  async sortPokemons(arr: Promise<PokeApiType>) {
    const sorted = (await arr).results?.map((item) => item!.url);
    const fetchUrl = sorted?.map(async (link) => {
      const some = await fetch(link);
      const someData = await some.json();
      return someData;
    });
    return fetchUrl;
  }

  async nextPokemons(): Promise<PokeApiType> {
    const some = await this.loadPokemons(this.url);
    const next = await some.next;
    this.url = next;
    const nextData = await this.loadPokemons(next);
    return nextData;
  }

  async prevPokemons(): Promise<void | PokeApiType> {
    const some = await this.loadPokemons(this.url);
    const prev = await some.previous;
    if (prev === null) {
      return;
    }

    const prevData = await this.loadPokemons(prev);
    return prevData;
  }
}
