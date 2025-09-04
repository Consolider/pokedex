export interface PokemonQL {
  data: {
    pokemon: [
      {
        name: string;
        id: number;
        pokemonstats: [
          {
            base_stat: number;
            stat: {
              name: string;
            }
          }
        ]
        pokemontypes: [
          {
            type: {
              name: string;
            }
          }
        ]
        pokemonsprites: [
          {
            sprites: string;
          }
        ]
      }
    ]
  }
}

export interface PokemonQL2 {
  data: {
    pokemon: [
      {
        name: string;
        id: number;
        pokemonstats: [
          {
            base_stat: number;
            stat: {
              name: string;
            }
          }
        ]
        pokemontypes: [
          {
            type: {
              name: string;
            }
          }
        ]
        pokemonsprites: [
          {
            sprites: {
              other: {
                "official-artwork": {
                  front_default: string;
                };
              };
            };
          }
        ]
      }
    ]
  }
}

export interface PokemonQLTypes {
  data: {
    pokemon: [
      {
      pokemontypes: [
        {
          type: {
            name: string;
          }
        }
      ]
      }
    ]
  }
}


export interface Pokemon{
  name: string;
  url: string;
}

export interface PokemonData {
  name: string;
  id: number;
  image: string;
  types: string[];
  hp: number;
  attack: number;
  defense: number;
}

export interface PokemonType {
  slot: number;
  type: {
      name: string;
      url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}