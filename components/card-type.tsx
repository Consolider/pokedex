import styles from "./card.module.css"
import Image from "next/image";
import { PokemonQL } from "@/lib/interfaces";
import { pokemonQueryTypes } from "@/lib/data/pokemon";
import { CapitalizeFirstLetter } from "@/lib/util";

export default async function CardType({typesInput}: {typesInput: string}) {
  const response = await fetch("https://graphql.pokeapi.co/v1beta2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({query:pokemonQueryTypes(typesInput)})
  })

 const results : PokemonQL = await response.json();
 const p = results.data

return (
<div className="w-[100%]">
    <ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(15ch,35ch))] content-stretch justify-center">
      {p.pokemon.map((poke, i) => (
        <li key={i} className={styles.card}>
          <div className={styles.card__content}>
            {/* Prevent Error: An empty string ("") was passed to the src attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string. */}
            {(poke.pokemonsprites[0].sprites && poke.pokemonsprites[0].sprites !== "") ?
            <Image
              className={`border border-${poke.pokemontypes[0].type.name}`}
              src={poke.pokemonsprites[0].sprites} 
              key={i}
              alt={`Image for ${poke.name}`}
              width={150}
              height={150}
            />:
            <Image
              className={`border border-${poke.pokemontypes[0].type.name}`}
              src="/Dice3.png"
              key={i}
              alt={`Image for ${poke.name}`}
              width={150}
              height={150}
            />}
            <p className={`id id-${poke.pokemontypes[0].type.name}`}>#{poke.id}</p>
            <h3 className={styles.card__title}>{CapitalizeFirstLetter(poke.name)}</h3>
            <div className={styles.card__tag_container}>
                {poke.pokemontypes.map((t) => (
                  <p key={t.type.name} className={`badge badge-${t.type.name}`}>{t.type.name}</p>
                ))}
            </div>
          </div>
          <footer className={styles.card__footer}>
            <ul>
                {poke.pokemonstats.map((s) => (
                <li key={s.stat.name}>{CapitalizeFirstLetter(s.stat.name)}</li>
            ))}
        </ul>
        <ul>
            {poke.pokemonstats.map((s) => (
                <li key={s.stat.name}>{s.base_stat}</li>
            ))}
            </ul>
        </footer>
        </li>
        ))}
    </ul>
</div>
)};