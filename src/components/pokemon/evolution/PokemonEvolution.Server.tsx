import { getEvolutionChain } from "@/src/services/pokemonService";
import { EvolutionChainResponse, Pokemon } from "@/src/interfaces/pokemon";
import { parseEvolutionChain } from "@/src/utils/ParseEvolutionChain";
import PokemonEvolutionLayout from "./PokemonEvolution.Layout";

interface PokemonEvolutionProps {
  selectedPokemon: Pokemon
}

export default async function PokemonEvolution({ selectedPokemon }: PokemonEvolutionProps) {
  const evolutionChain = await parseEvolutionChain(selectedPokemon)
  return <PokemonEvolutionLayout evolutionChain={evolutionChain} selectedPokemon={selectedPokemon} />
}