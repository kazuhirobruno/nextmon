import "@/src/styles/PokemonTypeStyle.css"
import { Pokemon } from "@/src/types/pokemon"

interface PokemonTypeProps {
  selectedPokemon: Pokemon
}

export default function PokemonType({ selectedPokemon }: PokemonTypeProps) {
  return (
    <div className="flex flex-row gap-1">
      {selectedPokemon.types.map(type => (
        <span className={`bg-type-${type.type.name} rounded-lg capitalize flex-1 py-1 px-3`} key={type.type.name}>{type.type.name}</span>
      ))}
    </div>
  )  
}