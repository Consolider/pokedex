import { Metadata } from "next";
import SearchBar from "@/components/search-bar";
import Featured from "@/components/featured";
import CardEmpty from "@/components/card-empty";
import CardRandom from "@/components/card-random";
import RandomPokemonBtn from "@/components/random-btn";

export const metadata: Metadata = {
  title: "Pokédex",
  description: "A site for Pokemon data.",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { random } = await searchParams;
 
  return (
    <main>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-black text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <RandomPokemonBtn />
        {(random && random !== "") ?<CardRandom id={random}/>: <CardEmpty />}
      </section>
      <SearchBar />
      <Featured />
    </main>
  );
}
