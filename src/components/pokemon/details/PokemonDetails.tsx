'use client'

import { Pokemon } from '@/src/types/pokemon'
import { usePokemon } from '@/src/context/PokemonContext'
import { useEffect } from 'react'
import PokemonImage from '@/src/components/pokemon//image/PokemonImage'
import PokemonType from '@/src/components/pokemon/types/PokemonType'
import PokemonAbility from '@/src/components/pokemon/ability/PokemonAbility'
import PokemonStats from '@/src/components/pokemon//stats/PokemonStats'
interface PokemonDetailsProps {
  pokemon: Pokemon
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const { dispatch } = usePokemon()

  useEffect(() => {
    dispatch({ type: "SELECT_POKEMON", payload: pokemon })
  }, [])

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold capitalize">
        #{pokemon.id} {pokemon.name}
      </h2>

      <PokemonImage
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />

      <PokemonType />
      <PokemonAbility />
      <PokemonStats />
    </section>
  )
}