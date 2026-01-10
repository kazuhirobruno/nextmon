import { Ability } from "@/src/types/pokemon";
import "@/src/styles/PokemonTypeStyle.css"
import { usePokemon } from "@/src/context/PokemonContext";

export default function PokemonAbility() {
  const { state } = usePokemon()

  const showHiddenAbility = () => {
    const { selectedPokemon } = state;
    const hiddenAbility: Ability | undefined = selectedPokemon?.abilities.find(
      ability => ability.is_hidden
    );

    return hiddenAbility && (
      <>
        <h4 className="w-full col-span-2 text-center font-semibold mt-2 text-gray-500">
          Habilidade Oculta
        </h4>
        <span className="capitalize col-span-2 py-1 px-3 bg-gray-300 rounded text-center block text-gray-900">
          {hiddenAbility.ability.name.replace(/-/g, " ")}
        </span>
      </>
    );
  };

  const renderAbility = () => {
    const { selectedPokemon } = state;
    const noHiddenAbility = selectedPokemon?.abilities.filter(abilityList => !abilityList.is_hidden)
    if (!noHiddenAbility) return <></>;
    
    return (
        noHiddenAbility.map(ability => (
          <span
            key={ability.ability.name}
            className={`capitalize col-span-1 py-1 px-3 bg-blue-200 rounded text-center block text-gray-900 
              ${noHiddenAbility.length === 1 && "col-span-2"}`}
          >
            {ability.ability.name.replace(/-/g, " ")}
          </span>
        ))
    )
  }

  return (
    <>
      {state.selectedPokemon && (
        <div className="grid grid-cols-2 gap-2">
          {/* Título */}
          <h4 className="w-full col-span-2 text-center font-bold text-lg mb-1">Habilidades</h4>
    
          {/* Habilidades normais */}
          {renderAbility()}
    
          {/* Habilidade oculta */}
          {showHiddenAbility()}
        </div>
      )}
    </>
  );
}