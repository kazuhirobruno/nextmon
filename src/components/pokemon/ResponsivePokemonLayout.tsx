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
      <div className="flex flex-col md:hidden">
        <div className="bg-white dark:bg-[#0a0a0a] text-white p-2">
          <CustomDropdown pokemons={pokemons} />
        </div>
        <main className="overflow-auto p-4">
        {children}
      </main>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-row w-full h-screen">
        <aside className=" w-72 border-r border-gray-700 bg-white text-black dark:bg-[#0a0a0a] dark:text-white overflow-y-auto">
          <PokemonList pokemons={pokemons} />
        </aside>
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}