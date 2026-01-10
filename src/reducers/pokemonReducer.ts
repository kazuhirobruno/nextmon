export interface PokemonState {
  version: string | null      // versão escolhida da API
  selectedPokemonId: number | null
}

export type PokemonAction =
  | { type: 'SET_VERSION'; payload: string }
  | { type: 'SELECT_POKEMON'; payload: number }
  | { type: 'CLEAR_SELECTION' }

export const initialState: PokemonState = {
  version: null,
  selectedPokemonId: null,
}

export function pokemonReducer(
  state: PokemonState,
  action: PokemonAction
): PokemonState {
  switch (action.type) {
    case 'SET_VERSION':
      return { ...state, version: action.payload }

    case 'SELECT_POKEMON':
      return { ...state, selectedPokemonId: action.payload }

    case 'CLEAR_SELECTION':
      return { ...state, selectedPokemonId: null }

    default:
      return state
  }
}