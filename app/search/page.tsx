import { Metadata } from "next";
import SearchBarRounded from "@/components/search-bar-rounded";
import CardSearch from "@/components/card-search";
import CardEmpty from "@/components/card-empty";

const metadata: Metadata = {
  title: "Pokédex | Search",
  description: "A search site for Pokemons.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  
  const { query } = await searchParams
 
return (
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta find 'em all!</h1>
        <p className="text-center text-black text-xl">Search a Pokémon.<br />Find your favourite and learn about their stats.</p>
        <SearchBarRounded />
        {(query && query !== "") ?<CardSearch searchQuery={query}/>: <CardEmpty />}
      </section>
  )
}
