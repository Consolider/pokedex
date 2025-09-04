"use client"

import { CapitalizeFirstLetter } from "@/lib/util";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const typesArray = ["bug", "dark", "dragon", "electric", "fairy", "fire", "fighting", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"]

export default function TypeBtn() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async () => {
    const params = new URLSearchParams(searchParams.toString());

    // const maxPokemonId = 1025;
    // const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    // params.set("random", randomId.toString());

    const pokeType = "grass"
    params.set("type", pokeType.toString());

    router.push(`${pathname}?${params.toString()}`);
  }

  return(
    <div className="w-[650px] text-center">
        {typesArray.map((type) => (
        <button
            key={type}
            className={`badge badge-${type} p-2 pl-6 pr-6 m-1 cursor-pointer text-xl text-white rounded-full font-bold flex items-center justify-center gap-1`}
            onClick={handleClick}
        >
        {CapitalizeFirstLetter(type)}
        </button>
        ))}
    </div>
)}