import { notFound } from 'next/navigation'
import { getPokemonById } from '@/src/services/pokemonService'
import PokemonImage from '../image/PokemonImage'
import { Pokemon } from '@/src/types/pokemon'

interface PokemonDetailsProps {
  pokemon: Pokemon
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold capitalize">
        #{pokemon.id} {pokemon.name}
      </h2>

      <PokemonImage
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
    </section>
  )
}