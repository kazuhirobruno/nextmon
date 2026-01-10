'use client'

import { createContext, useContext, useReducer } from 'react'
import { pokemonReducer, initialState, PokemonState, PokemonAction } from '@/src/reducers/pokemonReducer'

interface PokemonContextType {
  state: PokemonState
  dispatch: React.Dispatch<PokemonAction>
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(pokemonReducer, initialState)

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  const context = useContext(PokemonContext)
  if (!context) throw new Error('usePokemon must be used within PokemonProvider')
  return context
}