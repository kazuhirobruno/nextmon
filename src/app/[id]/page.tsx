import PokemonDetails from '@/src/components/pokemon/details/PokemonDetails'
import { getPokemonById } from '@/src/services/pokemonService'
import NotFoundPage from '../not-found'
import { Metadata } from 'next'
import { cssCapitalize } from '@/src/utils/Capitalize'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = Number((await params).id)
  const pokemon = await getPokemonById(id)

  if (Number.isInteger(id) && id > 0 && pokemon) {
    return { title: `#${id} - ${cssCapitalize(pokemon.name)} | NextMon - Pokédex`, } 
  }

  return { title: 'Pokémon não Encontrado | NextMon - Pokédex' };
}


export default async function PokemonPage({ params }: Props) {
  const id = Number((await params).id)
  if (!Number.isInteger(id) || id <= 0) return <NotFoundPage />

  const pokemon = await getPokemonById(id)
  if (!pokemon) return <NotFoundPage />

  return <PokemonDetails pokemon={pokemon} />
}