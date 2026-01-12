import { getPokemonDataUsingAbsoluteUrl, getPokemonSpeciesUsingAbsoluteUrl } from "../services/pokemonService";
import { Pokemon } from "../interfaces/pokemon";

const Regions = ['hisui', 'alola', 'galar', 'paldea']
const Excludes = '-cap'

export async function findVariations(pokemon: Pokemon, pokemonName: string, isVariant: boolean): Promise<Pokemon[]> {
  const pokemonSpeciesData = await getPokemonSpeciesUsingAbsoluteUrl(pokemon.species.url);
  const { varieties } = pokemonSpeciesData;
  const responsePokemonSpeciesData: Pokemon[] = [pokemon];
  
  const filteredVarieties = varieties
    .filter(item => Regions.some(region => item.pokemon.name.includes(region)))
    .filter(item => !item.pokemon.name.includes(Excludes))
  
  const promises = filteredVarieties.map(item => getPokemonDataUsingAbsoluteUrl(item.pokemon.url));
    
  const pokemonDataArray = await Promise.all(promises);

  responsePokemonSpeciesData.push(...pokemonDataArray);
  responsePokemonSpeciesData.filter(item => item.name === pokemonName && isVariant)
  
  if (isVariant) {
    return responsePokemonSpeciesData.filter(item => item.name === pokemonName && isVariant);
  }

  return responsePokemonSpeciesData
}