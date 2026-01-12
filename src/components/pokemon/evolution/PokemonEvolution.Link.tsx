import { getPokemonById } from "@/src/services/pokemonService"
import { EvolutionChainLinkParsedItem, Pokemon } from "@/src/interfaces/pokemon"
import { findVariations } from "@/src/utils/FindVariations";
import Image from "next/image";
import Link from "next/link";

interface PokemonEvolutionLinkProps {
  item: EvolutionChainLinkParsedItem, 
  selectedPokemon: Pokemon
}

export default async function PokemonEvolutionLink ({ item, selectedPokemon }: PokemonEvolutionLinkProps) {
    const pokemonData = await getPokemonById(item.id)
    const pokemonProperty: Pokemon[] = await findVariations(pokemonData)
  pokemonProperty.forEach(item => console.log(item.sprites.other["official-artwork"]))
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
            {pokemon.name}
          </Link>
        ) )}
      </>
    )
  }