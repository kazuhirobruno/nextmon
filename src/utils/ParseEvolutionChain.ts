import { EvolutionChainLink, EvolutionChainLinkParsed, EvolutionChainLinkParsedItem } from "../interfaces/pokemon";



export function parseEvolutionChain (chain: EvolutionChainLink): EvolutionChainLinkParsed {
  const first: EvolutionChainLinkParsedItem[]|[] = [], 
    second:  EvolutionChainLinkParsedItem[]|[] = [], 
    third: EvolutionChainLinkParsedItem[]|[] = []

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

  traverse(chain, 1)
  return { first, second, third }
}