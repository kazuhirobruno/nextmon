import { EvolutionChainResponse, Pokemon, PokemonListItem, PokemonSpecies } from '../interfaces/pokemon'

const API_URL = 'https://pokeapi.co/api/v2'

export async function getAllPokemons(): Promise<PokemonListItem[]> {
  const response = await fetch(`${API_URL}/pokemon-species?limit=1024&offset=0`)
  const data = await response.json()
  return data.results
}

export async function getPokemonById(id: number): Promise<Pokemon> {
  const response = await fetch(`${API_URL}/pokemon/${id}`)
  return response.json()
}

export async function getEvolutionChain(url: string): Promise<EvolutionChainResponse> {
  const response = await fetch(url)
  const data = await response.json()

  const evolutionResponse = await fetch(data.evolution_chain.url)
  const evolutionData = await evolutionResponse.json()

  return evolutionData
}

export async function getPokemonSpecies(id: number): Promise<PokemonSpecies> {
  const response = await fetch(`${API_URL}/pokemon-species/${id}`, {
    next: { revalidate: 60 * 60 * 24 } // 24h
  }).then(res => res.json())
  return response
}

export async function getPokemonSpeciesUsingAbsoluteUrl(url: string): Promise<PokemonSpecies> {
  const response = await fetch(url)
  return response.json()
}

export async function getPokemonDataUsingAbsoluteUrl(url: string): Promise<Pokemon> {
  const response = await fetch(url)
  return response.json()
}