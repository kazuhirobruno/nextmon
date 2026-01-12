import { getPokemonById } from "@/src/services/pokemonService"
import { EvolutionChainLinkParsedItem, Pokemon } from "@/src/interfaces/pokemon"
import { findRegionalVariations } from "@/src/utils/FindVariations";
import PokemonCard from "../card/PokemonCard";

interface PokemonEvolutionLinkProps {
  pokemon: EvolutionChainLinkParsedItem, 
  selectedPokemon: Pokemon,
  isVariant: boolean
}

export default async function PokemonEvolutionLink ({ pokemon, selectedPokemon, isVariant }: PokemonEvolutionLinkProps) {
    const pokemonData = await getPokemonById(pokemon.id)
    const pokemonProperty: Pokemon[] = await findRegionalVariations(pokemonData, pokemon.name, isVariant)
    return (
      <>
        {pokemonProperty.map(pokemon => (
          <PokemonCard 
            selectedPokemon={selectedPokemon}
            pokemon={pokemon}
            key={`evolution-link-${pokemon.name}-${pokemon.id}`} 
          />
        ))}
      </>
    )
  }