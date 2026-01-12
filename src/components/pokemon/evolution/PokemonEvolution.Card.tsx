import { EvolutionChainLinkParsedItem, Pokemon } from "@/src/interfaces/pokemon";
import PokemonEvolutionLink from "@/src/components/pokemon/evolution/PokemonEvolution.Link";

interface PokemonEvolutionCardProps {
  evolution:EvolutionChainLinkParsedItem[],
  selectedPokemon: Pokemon,
  isVariant: boolean
}

export default async function PokemonEvolutionCard ({ evolution, selectedPokemon, isVariant }: PokemonEvolutionCardProps) {
  return (
    <div className="flex items-center justify-center gap-4 w-full flex-wrap mb-4">
      {evolution.map(pokemon => 
        <PokemonEvolutionLink 
          pokemon={pokemon} 
          selectedPokemon={selectedPokemon}
          isVariant={isVariant}
          key={`evolution-card-${pokemon.name}-${pokemon.id}`} 
        />)
      }
    </div>
  )
  }