import { EvolutionChainLink, EvolutionChainLinkParsed } from "../types/pokemon";

export function parseEvolutionChain (chain: EvolutionChainLink): EvolutionChainLinkParsed[] {
  const evolutions: { name: string; preEvolution?: string, id: number }[] = []

  const traverse = (node: EvolutionChainLink, pre?: string) => {
    const matchResult = node.species.url.match(/\/(\d+)\/?$/);
    evolutions.push({
      name: node.species.name,
      preEvolution: pre,
      id: matchResult ? parseInt(matchResult[1], 10) : 0
    })

    node.evolves_to.forEach(evo => traverse(evo, node.species.name))
  }

  traverse(chain)
  return evolutions
}