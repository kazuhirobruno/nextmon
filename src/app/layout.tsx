import './globals.css'
import { getAllPokemons } from '@/src/services/pokemonService'
import ResponsivePokemonLayout from '@/src/components/pokemon/ResponsivePokemonLayout'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pokemons = await getAllPokemons()

  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <ResponsivePokemonLayout pokemons={pokemons}>
          {children}
        </ResponsivePokemonLayout>
      </body>
    </html>
  )
}