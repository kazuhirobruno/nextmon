import { getPokemonById } from "@/src/services/pokemonService"
import { EvolutionChainLinkParsedItem, Pokemon } from "@/src/interfaces/pokemon"
import Image from "next/image";
import Link from "next/link";
import { findVariations } from "@/src/utils/FindVariations";

interface PokemonEvolutionLinkProps {
  pokemon: EvolutionChainLinkParsedItem, 
  selectedPokemon: Pokemon,
  isVariant: boolean
}

export default async function PokemonEvolutionLink ({ pokemon, selectedPokemon, isVariant }: PokemonEvolutionLinkProps) {
    const pokemonData = await getPokemonById(pokemon.id)
    const pokemonProperty: Pokemon[] = await findVariations(pokemonData, pokemon.name, isVariant)
    return (
      <>
        {pokemonProperty.map(pokemon => (
          <Link 
            href={`/${pokemon.id}`}
            className={`
              ${pokemon.name === selectedPokemon.name ? 'pointer-events-none' : '' }
              capitalize
              flex flex-col gap-2 justify-center items-center
            `}
            key={`evolution-link-${pokemon.name}-${pokemon.id}`}
          >
            <Image 
              height={48}
              width={48}
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
            {pokemon.species.name}
          </Link>
        ) )}
      </>
    )
  }