'use client'

import { PokemonListItem as Pokemon } from '@/src/types/pokemon'
import CustomDropdown from './CustomDropdown'
import PokemonList from './PokemonList'

interface Props {
  pokemons: Pokemon[]
}

export default function ResponsivePokemonList({ pokemons }: Props) {
  return (
    <>
      {/* Dropdown somente no mobile */}
      <div className="block md:hidden p-2 bg-gray-900">
        <CustomDropdown pokemons={pokemons} />
      </div>

      {/* Aside somente no desktop */}
      <aside className="hidden md:block w-72 border-r overflow-y-auto bg-gray-900">
        <PokemonList pokemons={pokemons} />
      </aside>
    </>
  )
}