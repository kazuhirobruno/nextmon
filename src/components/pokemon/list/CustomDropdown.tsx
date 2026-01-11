import { useState, useRef } from "react"
import { PokemonListItem as Pokemon } from "@/src/types/pokemon"
import { useRouter, usePathname } from "next/navigation"

interface CustomDropdownProps {
  pokemons: Pokemon[]
}

export default function CustomDropdown({ pokemons }: CustomDropdownProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Derivar o selected e number diretamente
  const pathParts = pathname.split("/").filter(Boolean)
  const id = pathParts.length > 0 ? parseInt(pathParts[pathParts.length - 1], 10) : null
  const number = id && id > 0 && id <= pokemons.length ? id : null
  const selected = number ? pokemons[number - 1] : null

  const handleSelect = (pokemon: Pokemon, index: number) => {
    router.push(`/${index}`)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Botão principal */}
      <div  
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full p-3 bg-white text-black dark:bg-gray-900 dark:text-white rounded-md border border-gray-700
          flex justify-between items-center cursor-pointer
          hover:bg-gray-800 transition-colors capitalize
        "
      >
        {selected ? `#${number} ${selected.name}` : "Selecione um Pokémon"}
        <span className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 max-h-64 overflow-auto mt-auto w-full box-border bg-gray-600 dark:bg-gray-900 border border-gray-400  dark:border-gray-700 rounded-md shadow-lg">
          {pokemons.map((p, index) => (
            <li
              key={index + 1}
              onClick={() => handleSelect(p, index + 1)}
              className="
                px-3 py-2 hover:bg-gray-800 text-black dark:text-white cursor-pointer
                transition-colors capitalize bg-[#ededed] dark:bg-[#0a0a0a]
              "
            >
              #{index + 1} <span className="capitalize">{p.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}