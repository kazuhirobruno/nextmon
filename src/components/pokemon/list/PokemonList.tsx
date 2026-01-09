'use client'

import PokemonListItem from './PokemonListItem'
import { PokemonListItem as Pokemon } from '@/src/types/pokemon'

interface Props {
  pokemons: Pokemon[]
}

export default function PokemonList({ pokemons }: Props) {
  return (
    <ul className="border-r overflow-y-auto">
      {pokemons.map((pokemon, index) => (
        <PokemonListItem
          key={pokemon.name}
          id={index + 1}
          name={pokemon.name}
        />
      ))}
    </ul>
  )
}