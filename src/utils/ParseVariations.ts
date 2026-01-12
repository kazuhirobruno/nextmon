import { Pokemon } from "../interfaces/pokemon";

export function parseVariations(variations: Pokemon[], specieEvolution: string[]): Pokemon {
  const variation = variations.filter(pokemonVariation => 
    specieEvolution.indexOf(pokemonVariation.name) !== -1
  )[0]

  return variation
}