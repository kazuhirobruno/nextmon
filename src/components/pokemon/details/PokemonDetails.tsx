'use client'

import PokemonImage from '../image/PokemonImage'
import { Pokemon } from '@/src/types/pokemon'
import PokemonVersion from '../version/PokemonVersion'
import { usePokemon } from '@/src/context/PokemonContext'
import { useEffect } from 'react'
import PokemonType from '../types/PokemonType'
import PokemonAbility from '../ability/PokemonAbility'
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

      <PokemonType selectedPokemon={pokemon} />
      <PokemonAbility selectedPokemon={pokemon} />
      {/* <PokemonVersion selectedPokemon={pokemon} /> */}
    </section>
  )
}