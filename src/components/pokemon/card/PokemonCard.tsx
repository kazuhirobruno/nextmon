import { Pokemon } from "@/src/interfaces/pokemon"
import { normalizeName } from "@/src/utils/NormalizeName"
import Image from "next/image"
import Link from "next/link"

interface PokemonCardProps {
  selectedPokemon: Pokemon
  pokemon: Pokemon
  variationSection?: boolean
}

export default function PokemonCard({ pokemon, selectedPokemon, variationSection = false} : PokemonCardProps) {
  return (
    <Link 
      href={`/${pokemon.id}`}
      className={`
        ${pokemon.name === selectedPokemon.name ? 'pointer-events-none' : '' }
        capitalize
        flex flex-col gap-2 justify-center items-center
        basis-1/3 sm:basis-1/6
      `}
      
    >
      <>
        {
          pokemon.sprites.other['official-artwork'].front_default ? (
            <Image 
              height={56}
              width={56}
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={`${variationSection ? normalizeName(pokemon.name) : pokemon.species.name} - card`}
              fetchPriority="high"
              loading='lazy'
            />
          ) : (
            <span className="w-14 h-14 block text-gray-800 dark:text-white text-[12px] text-center ">
              Imagem não encontrada
            </span>
          )
        }
      </>
      {variationSection ? normalizeName(pokemon.name) : pokemon.species.name}
    </Link>
  )
}