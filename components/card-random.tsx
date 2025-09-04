import styles from "./card.module.css"
import Image from "next/image";
import { PokemonQL } from "@/lib/interfaces";
import { pokemonQuery } from "@/lib/data/pokemon";
import { CapitalizeFirstLetter } from "@/lib/util";
import TypeBadge, { TypeBorder, TypeId } from "./TypeBadge";

export default async function CardRandom({id}: {id: string}) {
  const response = await fetch("https://graphql.pokeapi.co/v1beta2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({query:pokemonQuery(id)})
  })

 const results : PokemonQL = await response.json();
 const p = results.data.pokemon[0]

return (
  <div className={`${styles.card} grid grid-cols-[repeat(auto-fit,minmax(15ch,27ch))] content-stretch justify-center">`}>
      <div className={styles.card__content}>
        <Image
          className={`border border-${p.pokemontypes[0].type.name}`}
          src={p.pokemonsprites[0].sprites}
          alt={p.name}
          width={150}
          height={150}
        />
      <TypeId name={p.pokemontypes[0].type.name} id={p.id} />
        <h3 className={styles.card__title}>{CapitalizeFirstLetter(p.name)}</h3>
        <div className={styles.card__tag_container}>
          <TypeBadge name={p.pokemontypes[0].type.name} />
        </div>
      </div>
      <footer className={styles.card__footer}>
        <ul>
            {p.pokemonstats.map((s) => (
                <li key={s.stat.name}>{CapitalizeFirstLetter(s.stat.name)}</li>
            ))}
        </ul>
        <ul>
            {p.pokemonstats.map((s) => (
                <li key={s.stat.name}>{s.base_stat}</li>
            ))}
        </ul>
      </footer>
  </div>
)};