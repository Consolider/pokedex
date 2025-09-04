import { Metadata } from "next";
import CardEmpty from "@/components/card-empty";
import TypeBtn from "@/components/type-btn";
import CardType from "@/components/card-type";

export const metadata: Metadata = {
  title: "Pokédex | Types",
  description: "A collection of Pokemon types.",
};

export default async function Types({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  
  const { type } = await searchParams
  console.log(type)

  return (
    <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
      <h2 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Chech out all types of types!</h2>
      <p className="text-center text-black text-xl">Check out all Pokémons in a specific type. Click <br /> on a type to list all Pokémons for it.</p>
        <TypeBtn />
        {(type && type !== "") ?<CardType typesInput={type}/>: <CardEmpty />}
        {/* <CardType typesInput={pokeType} /> */}
    </section>
  )
}