import { Pokemon } from "@/src/interfaces/pokemon";
import PokemonVariantsLayout from "./PokemonVariants.Layout";

interface PokemonVariantsServerProps {
  selectedPokemon: Pokemon
}

export default async function PokemonVariantsServer({ selectedPokemon }: PokemonVariantsServerProps) {
  return <PokemonVariantsLayout selectedPokemon={selectedPokemon} />
}