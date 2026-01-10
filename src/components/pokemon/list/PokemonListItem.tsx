'use client'
import { usePokemon } from '@/src/context/PokemonContext'
import { useRouter } from 'next/navigation'

interface PokemonListItemProps {
  id: number
  name: string
}

export default function PokemonListItem({ id, name }: PokemonListItemProps) {
  const router = useRouter()
  const { dispatch } = usePokemon()
  
  return (
    <li
      onClick={() => {
        dispatch({ type: "CLEAR_SELECTION" })
        router.push(`/${id}`)
      }}
      className="cursor-pointer p-2 hover:bg-gray-100"
    >
      #{id} <span className="capitalize">{name}</span>
    </li>
  )
}