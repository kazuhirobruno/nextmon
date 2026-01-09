'use client'

import { PokemonListItem as Pokemon } from '@/src/types/pokemon'
import PokemonList from './list/PokemonList'
import CustomDropdown from './list/CustomDropdown'

interface Props {
  pokemons: Pokemon[]
  children: React.ReactNode
}

export default function ResponsivePokemonLayout({ pokemons, children }: Props) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Mobile Dropdown */}
      <div className="block md:hidden bg-[#0a0a0a] text-white p-2">
        <CustomDropdown pokemons={pokemons} />
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 border-r border-gray-700 bg-[#0a0a0a] text-white overflow-y-auto">
        <PokemonList pokemons={pokemons} />
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-auto p-4 bg-[#0a0a0a] text-white">
        {children}
      </main>
    </div>
  )
}