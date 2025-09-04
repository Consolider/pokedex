import { Pokemon, PokemonData, PokemonStat, PokemonType } from "../interfaces";

// Övade med searchParams, men funkar inte på pokemon
// export async function Pokemons(limit = 8, skip = 0) {
//   const response = await fetch(
//     // `https://pokeapi.co/api/v2/{endpoint}/?limit=${limit}&skip=${skip}`
//     `https://pokeapi.co/api/v2/25/?limit=${limit}&skip=${skip}`
//   );
//   const { recipes, total }: Pokemon = await response.json();

//   return { recipes, total };
// }

export async function Pokemons() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/`
        // `https://pokeapi.co/api/v2/${id}/`
  );
  const { name, url }: Pokemon = await response.json();
  return { name, url };
}