import { Pokemon } from "@/src/types/pokemon";
import PokemonStatsItem from "./PokemonStatItem";

interface PokemonStatsProps {
  selectedPokemon: Pokemon
}
export default function PokemonStats ({ selectedPokemon }: PokemonStatsProps) {

  return (
    <div className="grid grid-cols-3">
      <h2 className="ww-full col-span-3 text-center font-bold text-lg mb-1">Pontos de Habilidades:</h2>
      {selectedPokemon.stats.map(stat => (
        <PokemonStatsItem statsName={stat.stat.name} value={stat.base_stat} key={stat.stat.name}/>
      ))}
    </div>
  )
}