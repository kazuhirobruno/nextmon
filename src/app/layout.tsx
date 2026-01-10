import '@/src/styles/globals.css'
import { getAllPokemons } from '@/src/services/pokemonService'
import ResponsivePokemonLayout from '@/src/components/pokemon/ResponsivePokemonLayout'
import { PokemonProvider } from '@/src/context/PokemonContext'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pokemons = await getAllPokemons()

  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white p-6 rounded-lg">
        <PokemonProvider>
          <ResponsivePokemonLayout pokemons={pokemons}>
            {children}
          </ResponsivePokemonLayout>
        </PokemonProvider>
      </body>
    </html>
  )
}