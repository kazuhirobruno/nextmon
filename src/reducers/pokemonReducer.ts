import { Pokemon } from "../types/pokemon";

export interface PokemonState {
  version: string | null      // versão escolhida da API
  selectedPokemon: Pokemon | null
}

export type PokemonAction =
  | { type: 'SET_VERSION'; payload: string }
  | { type: 'SELECT_POKEMON'; payload: Pokemon }
  | { type: 'CLEAR_SELECTION' }

export const initialState: PokemonState = {
  version: null,
  selectedPokemon: null,
}

export function pokemonReducer(
  state: PokemonState,
  action: PokemonAction
): PokemonState {
  switch (action.type) {
    case 'SET_VERSION':
      return { ...state, version: action.payload }

    case 'SELECT_POKEMON':
      return { ...state, selectedPokemon: action.payload }

    case 'CLEAR_SELECTION':
      return { ...state, selectedPokemon: null }

    default:
      return state
  }
}