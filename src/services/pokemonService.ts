import { EvolutionChainResponse, PokemonListItem, PokemonSpecies } from '../types/pokemon'

const API_URL = 'https://pokeapi.co/api/v2'

export async function getAllPokemons(): Promise<PokemonListItem[]> {
  const response = await fetch(`${API_URL}/pokemon-species?limit=1024&offset=0`)
  const data = await response.json()
  return data.results
}

export async function getPokemonById(id: number) {
  const response = await fetch(`${API_URL}/pokemon/${id}`)
  if (!response.ok) return null
  return response.json()
}

export async function getVariants(id: number): Promise<PokemonSpecies> {
  const response = await fetch(`${API_URL}/pokemon-species/${id}`)
  const data = await response.json()
  return data
}

export async function getEvolutionChain(id: number): Promise<EvolutionChainResponse> {
  const response = await fetch(`${API_URL}/pokemon-species/${id}`)
  const data = await response.json()

  const evolutionResponse = await fetch(data.evolution_chain.url)
  const evolutionData = await evolutionResponse.json()

  return evolutionData
}
