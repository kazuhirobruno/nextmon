import { usePokemon } from "@/src/context/PokemonContext";
import PokemonStatsItem from "./PokemonStatItem";

export default function PokemonStats () {
  const { state } = usePokemon()

  if (!state.selectedPokemon) return <></>

  return (
    <div className="grid grid-cols-3">
      {state.selectedPokemon.stats.map(stat => (
        <PokemonStatsItem statsName={stat.stat.name} value={stat.base_stat} key={stat.stat.name}/>
      ))}
    </div>
  )
}