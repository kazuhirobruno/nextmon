import { Pokemon } from "@/src/interfaces/pokemon"
import { findAllVariations } from "@/src/utils/FindVariations"
import PokemonCard from "../card/PokemonCard"

interface PokemonVariantsLayoutProps {
  selectedPokemon: Pokemon
}

export default async function PokemonVariantsLayout({ selectedPokemon }: PokemonVariantsLayoutProps) {
  const speciesVariations = await findAllVariations(selectedPokemon)


  return (
    <>
      {speciesVariations.length > 1 ? (
        <div className="flex flex-col">
          <h2 className="ww-full text-center font-bold text-lg mb-1">Variações:</h2>
          <div className="flex items-center justify-center gap-4 w-full flex-wrap mb-4">
            {speciesVariations.map(pokemon => (
              <PokemonCard 
                selectedPokemon={selectedPokemon} 
                pokemon={pokemon} 
                variationSection={true}
                key={`evolution-link-${pokemon.name}-${pokemon.id}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}