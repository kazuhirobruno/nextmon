import { getEvolutionChain } from "@/src/services/pokemonService";
import { EvolutionChainResponse, Pokemon } from "@/src/interfaces/pokemon";
import { parseEvolutionChain } from "@/src/utils/ParseEvolutionChain";
import PokemonEvolutionLayout from "./PokemonEvolution.Layout";

interface PokemonEvolutionProps {
  selectedPokemon: Pokemon
}

export default async function PokemonEvolution({ selectedPokemon }: PokemonEvolutionProps) {
  const evolutionData: EvolutionChainResponse = await getEvolutionChain(selectedPokemon.species.url)
  const evolutionChain = parseEvolutionChain(evolutionData.chain)
  return <PokemonEvolutionLayout evolutionChain={evolutionChain} selectedPokemon={selectedPokemon} />
}