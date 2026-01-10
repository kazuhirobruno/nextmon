import "@/src/styles/PokemonTypeStyle.css"
import { usePokemon } from "@/src/context/PokemonContext";

export default function PokemonType() {
  const { state } = usePokemon()
  
  return (
    <>
      {state.selectedPokemon && (
        <div className="flex flex-row gap-1">
          {state.selectedPokemon.types.map(type => 
            <span className={`bg-type-${type.type.name} rounded-lg capitalize flex-1 py-1 px-3`} key={type.type.name}>{type.type.name}</span>
          )}
        </div>
      )}
    </>
  )
  
}