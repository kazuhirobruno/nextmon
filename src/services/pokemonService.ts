import { PokemonListItem, Pokemon } from '../types/pokemon'

const API_URL = 'https://pokeapi.co/api/v2'

export async function getAllPokemons(): Promise<PokemonListItem[]> {
  const response = await fetch(`${API_URL}/pokemon?limit=1024`)
  const data = await response.json()
  return data.results
}

export async function getPokemonById(id: number) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )

  if (!response.ok) {
    return null
  }

  return response.json()
}