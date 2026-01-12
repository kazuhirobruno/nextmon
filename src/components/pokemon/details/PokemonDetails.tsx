import { Pokemon } from '@/src/interfaces/pokemon'
import PokemonImage from '@/src/components/pokemon//image/PokemonImage'
import PokemonType from '@/src/components/pokemon/types/PokemonType'
import PokemonAbility from '@/src/components/pokemon/ability/PokemonAbility'
import PokemonStats from '@/src/components/pokemon//stats/PokemonStats'
import PokemonEvolution from '../evolution/PokemonEvolution.Server'
import { extractIdFromUrl } from '@/src/utils/ExtractIdFromUrl'
interface PokemonDetailsProps {
  pokemon: Pokemon
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold capitalize">
        #{extractIdFromUrl(pokemon.species.url)} {pokemon.species.name}
      </h1>

      <PokemonImage selectedPokemon={pokemon} />

      <PokemonType selectedPokemon={pokemon} />
      <PokemonAbility selectedPokemon={pokemon} />
      <PokemonStats selectedPokemon={pokemon} />
      <PokemonEvolution selectedPokemon={pokemon} />
    </section>
  )
}