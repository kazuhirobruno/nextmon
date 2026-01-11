import { getColorByValue } from "@/src/utils/StatsColor"

interface PokemonStatsItemProps {
  statsName: "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed",
  value: number
}

const mapStatsName = {
  "hp": "Pontos de Vida",
  "attack": "Ataque",
  "defense": "Defesa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defesa Especial",
  "speed": "Velocidade"
}

export default function PokemonStatsItem ({ statsName, value }: PokemonStatsItemProps) {
  const { color, text } = getColorByValue(value);
  return (
    <>
      <span className="
        p-2 border-2 border-gray-600 dark:border-white
        text-gray-600 dark:text-white
        flex items-center justify-center text-center" 
      >{mapStatsName[statsName]}: </span>
      <span className="
        p-2 border-2 border-gray-600 dark:border-white
        text-gray-600 dark:text-white
        flex items-center justify-center text-center"
      >{value}</span>
      <span className={`p-2 border-2 border-gray-600 dark:border-white flex items-center justify-center`}>
        <div 
          className="rounded text-black py-1 px-2 font-bold"
          style={{ backgroundColor: color }}>{text}</div>
      </span>
    </>
  )
}