'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PokemonImageProps {
  src: string
  alt: string
  size?: number
}

export default function PokemonImage({ src, alt, size = 150 }: PokemonImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div
      className="relative flex items-center justify-center rounded overflow-hidden"
      style={{ width: size, height: size }}
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
          src={src}
          alt={alt}
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
    </div>
  )
}