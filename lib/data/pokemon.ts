const endpoint = "https://graphql.pokeapi.co/v1beta2";

import { GenerateRandomId, GetRandomInt } from "@/lib/util";

const randomInt = GetRandomInt(1, 1000);

// GraphQL Query
export const pokemonQuery = (id: string) => `
query pokemonQuery {
  pokemon(where:{id:{_eq: ${id} }})
  {
    name
    id
    pokemonstats(limit: 3) {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        name
      }
    }
    pokemonsprites {
      sprites(path: "front_default")
    }
  }
}`;


export const pokemonQuery2 = `
query pokemonQuery2 {
  pokemon(where:{id:{_eq: ${randomInt} }})
  {
    name
    id
    pokemonstats {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        name
      }
    }
    pokemonsprites {
      sprites
    }
  }
}`;


export const pokemonQueryFeatured = `
query pokemonQueryFeatured {
  pokemon(where: {id: {_gt: 0} _and: [ {
     id:  {
        _lte: 4
     }
  }]}) {    
    name
    id
    pokemonstats {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        name
      }
    }
    pokemonsprites {
      sprites(path: "front_default")
    }
  }
}`;


export const pokemonQueryTypes = (typesInput: string) => `
query pokemonQueryTypes {
  pokemon(where: {_and: [{pokemontypes: {type: {name: {_eq: "${typesInput}" }}}} {id: {_lte: 1025}}]})
  {
    name
    id
    pokemonstats(limit: 3) {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        name
      }
    }
    pokemonsprites {
      sprites(path: "front_default")
    }
  }
}`


export const pokemonQuerySearch = (searchQuery: string) => `
query pokemonQuerySearch {
  pokemon(where: {name: {_iregex: ".*${searchQuery}.*"}, id: {_lte: 1025}})
  {
    name
    id
    pokemonstats(limit: 3) {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        name
      }
    }
    pokemonsprites {
      sprites(path: "front_default")
    }
  }
}`;

