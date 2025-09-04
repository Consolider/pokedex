"use client"

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RandomPokemonBtn() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async () => {
    const params = new URLSearchParams(searchParams.toString());

    const maxPokemonId = 1025;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    params.set("random", randomId.toString());

    router.push(`${pathname}?${params.toString()}`);
  }

  return(
    <button
      className="btn-primary"
      onClick={handleClick}
    >
    <Image
      src="/Dice.svg"
      width={25}
      height={25}
      alt="Dice"
    />
    Random Pokémon</button>
)}