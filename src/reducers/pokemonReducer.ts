import { Pokemon } from "../types/pokemon";

export interface PokemonState {
  selectedPokemon: Pokemon | null
}

export type PokemonAction =
  | { type: 'SELECT_POKEMON'; payload: Pokemon }
  | { type: 'CLEAR_SELECTION' }

export const initialState: PokemonState = {
  selectedPokemon: null,
}

export function pokemonReducer(
  state: PokemonState,
  action: PokemonAction
): PokemonState {
  switch (action.type) {
    case 'SELECT_POKEMON':
      return { ...state, selectedPokemon: action.payload }

    case 'CLEAR_SELECTION':
      return { ...state, selectedPokemon: null }

    default:
      return state
  }
}