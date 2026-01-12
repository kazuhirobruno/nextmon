import { getPokemonById } from "@/src/services/pokemonService"
import { EvolutionChainLinkParsedItem, Pokemon } from "@/src/interfaces/pokemon"
import Image from "next/image";
import Link from "next/link";

interface PokemonEvolutionLinkProps {
  pokemon: EvolutionChainLinkParsedItem, 
  selectedPokemon: Pokemon
}

export default async function PokemonEvolutionLink ({ pokemon, selectedPokemon }: PokemonEvolutionLinkProps) {
    const pokemonData = await getPokemonById(pokemon.id)
    return (
      <Link 
        href={`/${pokemonData.id}`}
        className={`
          ${pokemonData.name === selectedPokemon.name ? 'pointer-events-none' : '' }
          capitalize
          flex flex-col gap-2 justify-center items-center
        `}
        key={`evolution-link-${pokemonData.name}-${pokemonData.id}`}
      >
        <Image 
          height={48}
          width={48}
          src={pokemonData.sprites.other['official-artwork'].front_default}
          alt={pokemonData.name}
        />
        {pokemonData.name}
      </Link>
    )
  }