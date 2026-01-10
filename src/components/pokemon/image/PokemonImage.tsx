'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePokemon } from '@/src/context/PokemonContext'

interface PokemonImageProps {
  size?: number
}

export default function PokemonImage({ size = 150 }: PokemonImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { state } = usePokemon()
  const { selectedPokemon } = state
  const [isShiny, setIsShiny] = useState(false)
  
  if (!selectedPokemon) return <></>
  
  return (
    <div
      className="relative flex items-center justify-center rounded overflow-hidden flex-wrap max-w-37.5 gap-2"
    >
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center w[150px] h[150px]">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-red-500 border-r-red-500 rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Falha ao carregar
        </div>
      )}

      {!error && (
        <Image
          src={isShiny 
            ? selectedPokemon.sprites.other['official-artwork'].front_shiny
            : selectedPokemon.sprites.other['official-artwork'].front_default
          }
          alt={selectedPokemon.name}
          width={size}
          height={size}
          className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setLoading(false)
            setError(true)
          }}
        />
      )}

      <button 
        className="text-gray-900 dark:text-white font-bold" 
        onClick={() => setIsShiny(prev => !prev)}
      > {!isShiny ? "Versão Shiny" : "Versão Regular"}</button>
    </div>
  )
}