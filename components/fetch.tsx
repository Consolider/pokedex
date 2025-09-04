import { PokemonQL } from "@/lib/interfaces";

export default async function Featch({query}: {query: string}) {
    const response = await fetch("https://graphql.pokeapi.co/v1beta2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query:{query}})
    })
    const results : PokemonQL = await response.json();
}