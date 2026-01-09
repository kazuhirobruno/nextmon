import PokemonDetails from '@/src/components/pokemon/details/PokemonDetails'
import { getPokemonById } from '@/src/services/pokemonService'
import NotFoundPage from '../not-found'

interface Props {
  params: Promise<{ id: string }>
}

export default async function PokemonPage({ params }: Props) {
  const id = Number((await params).id)
  if (!Number.isInteger(id) || id <= 0) return <NotFoundPage />

  const pokemon = await getPokemonById(id)
  if (!pokemon) return <NotFoundPage />

  return <PokemonDetails pokemon={pokemon} />
}