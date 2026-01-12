import { EvolutionChainLinkParsedItem, Pokemon } from "@/src/interfaces/pokemon";
import PokemonEvolutionLink from "@/src/components/pokemon/evolution/PokemonEvolution.Link";

interface PokemonEvolutionCardProps {
  evolution:EvolutionChainLinkParsedItem[],
  selectedPokemon: Pokemon
}

export default function PokemonEvolutionCard ({ evolution, selectedPokemon }: PokemonEvolutionCardProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full flex-wrap mb-4">
      {evolution.map(pokemon => 
        <PokemonEvolutionLink 
          pokemon={pokemon} 
          selectedPokemon={selectedPokemon} 
          key={`evolution-card-${pokemon.name}-${pokemon.id}`} 
        />)
      }
    </div>
  )
  }