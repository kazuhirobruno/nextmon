import '@/src/styles/globals.css'
import { getAllPokemons } from '@/src/services/pokemonService'
import ResponsivePokemonLayout from '@/src/components/pokemon/ResponsivePokemonLayout'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pokemons = await getAllPokemons()

  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-lg p-0">
        <ResponsivePokemonLayout pokemons={pokemons}>
          {children}
        </ResponsivePokemonLayout>
        <SpeedInsights />
      </body>
    </html>
  )
}