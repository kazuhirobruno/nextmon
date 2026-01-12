import { EvolutionChainLink, EvolutionChainLinkParsed, EvolutionChainLinkParsedItem, EvolutionChainResponse, Pokemon } from "../interfaces/pokemon";
import { getEvolutionChain } from "../services/pokemonService";

export async function parseEvolutionChain (selectedPokemon: Pokemon): Promise<EvolutionChainLinkParsed> {
  const first: EvolutionChainLinkParsedItem[]|[] = [], 
    second:  EvolutionChainLinkParsedItem[]|[] = [], 
    third: EvolutionChainLinkParsedItem[]|[] = []

  const evolutionData: EvolutionChainResponse = await getEvolutionChain(selectedPokemon.species.url)

  const findTreeLevel = (index: number) => {
    return index === 1 
      ? first
      : index === 2
        ? second
        : third 
  }
  
  const traverse = (pokemon: EvolutionChainLink, index: number) => {
    const matchResult = pokemon.species.url.match(/\/(\d+)\/?$/);
    const evolution = {
      name: pokemon.species.name,
      id: matchResult ? parseInt(matchResult[1], 10) : 0
    }
    findTreeLevel(index).push(evolution)
    pokemon.evolves_to.forEach(evo => traverse(evo, index + 1))
  }

  traverse(evolutionData.chain, 1)
  return { first, second, third }
}