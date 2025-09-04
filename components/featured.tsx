import "@/app/globals.css";
import styles from "./card.module.css"
import Link from "next/link";
import Image from "next/image";
import { PokemonQL } from "@/lib/interfaces";
import { pokemonQueryFeatured } from "@/lib/data/pokemon";

export default async function Featured(){
//     const response = await fetch("https://graphql.pokeapi.co/v1beta2", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({query:pokemonQueryFeatured})
//     })
//     const results : PokemonQL = await response.json();

  return (
    <div className={styles.container}>
        <h2>Featured Pokémon</h2>
    <div>
 
    <ul className="grid gap-14 grid-cols-[repeat(auto-fit,minmax(15ch,35ch))] content-stretch justify-center">
    <li className={styles.card}>
        <div className={styles.card__content}>
        <Image
            className="border border-electric"
            src="/25.png"
            alt="pikachu"
            width={150}
            height={150}
        />
            <p className="id id-electric">#25</p>
            <h3 className={styles.card__title}>Pikachu</h3>
            <div className={styles.card__tag_container}>
                <p className="badge badge-electric">Electric</p>
            </div>
        </div>
        <footer className={styles.card__footer}>
            <ul>
                <li>HP</li>
                <li>Attack</li>
                <li>Defense</li>
            </ul>
            <ul>
                <li>35</li>
                <li>55</li>
                <li>40</li>
            </ul>
        </footer>
    </li>

       <li className={styles.card}>
        <div className={styles.card__content}>
        <Image
            className="border border-flying"
            src="/17.png"
            alt="pidgeotto"
            width={150}
            height={150}
        />
            <p className="id id-flying">#17</p>
            <h3 className={styles.card__title}>Pidgeotto</h3>
            <div className={styles.card__tag_container}>
                <p className="badge badge-normal">Normal</p>
                <p className="badge badge-flying">Flying</p>
            </div>
        </div>
        <footer className={styles.card__footer}>
            <ul>
                <li>HP</li>
                <li>Attack</li>
                <li>Defense</li>
            </ul>
            <ul>
                <li>63</li>
                <li>60</li>
                <li>55</li>
            </ul>
        </footer>
    </li>

       <li className={styles.card}>
        <div className={styles.card__content}>
        <Image
            className="border border-poison"
            src="/32.png"
            alt="nidoran-m"
            width={150}
            height={150}
        />
            <p className="id id-poison">#32</p>
            <h3 className={styles.card__title}>Nidoran-m</h3>
            <div className={styles.card__tag_container}>
                <p className="badge badge-poison">Poison</p>
            </div>
        </div>
        <footer className={styles.card__footer}>
            <ul>
                <li>HP</li>
                <li>Attack</li>
                <li>Defense</li>
            </ul>
            <ul>
                <li>46</li>
                <li>57</li>
                <li>40</li>
            </ul>
        </footer>
    </li>

       <li className={styles.card}>
        <div className={styles.card__content}>
        <Image
            className="border border-fighting"
            src="/66.png"
            alt="machop"
            width={150}
            height={150}
        />
            <p className="id id-fighting">#66</p>
            <h3 className={styles.card__title}>Machop</h3>
            <div className={styles.card__tag_container}>
                <p className="badge badge-fighting">fighting</p>
            </div>
        </div>
        <footer className={styles.card__footer}>
            <ul>
                <li>HP</li>
                <li>Attack</li>
                <li>Defense</li>
            </ul>
            <ul>
                <li>70</li>
                <li>80</li>
                <li>50</li>
            </ul>
        </footer>
    </li>
    </ul>
  </div>
</div>
)};
