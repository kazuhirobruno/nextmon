'use client'
import { useRouter } from 'next/navigation'

interface PokemonListItemProps {
  id: number
  name: string
}

export default function PokemonListItem({ id, name }: PokemonListItemProps) {
  const router = useRouter()
  
  return (
    <li
      onClick={() => {
        router.push(`/${id}`)
      }}
      className="cursor-pointer p-2 hover:bg-gray-100 hover:text-gray-900"
    >
      #{id} <span className="capitalize">{name}</span>
    </li>
  )
}