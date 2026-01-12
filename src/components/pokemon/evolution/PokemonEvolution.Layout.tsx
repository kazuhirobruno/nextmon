import { EvolutionChainLinkParsed, Pokemon } from "@/src/interfaces/pokemon"
import PokemonEvolutionCard from "./PokemonEvolution.Card"

interface PokemonEvolutionLayoutProps {
  evolutionChain: EvolutionChainLinkParsed,
  selectedPokemon: Pokemon
}

export default function PokemonEvolutionLayout({ evolutionChain, selectedPokemon }: PokemonEvolutionLayoutProps) {
  const { first, second, third } = evolutionChain

  return (
    <>
      {second.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="ww-full text-center font-bold text-lg mb-1">Linha evolutiva:</h2>
          {first.length ? <PokemonEvolutionCard selectedPokemon={selectedPokemon} evolution={first} />: <></>}
          {second.length ? 
            (<>
              <h3 className="w-full col-span-2 text-center font-bold mb-1 text-[16px]">Evolui para:</h3>
              {<PokemonEvolutionCard selectedPokemon={selectedPokemon} evolution={second} />} 
            </>): <></>}
          {third.length ? 
            (<>
              <h3 className="w-full col-span-2 text-center font-bold mb-1 text-[16px]">Evolui para:</h3>
              {<PokemonEvolutionCard selectedPokemon={selectedPokemon} evolution={third} />} 
            </>): <></>}
        </div>
      ) : (<></>)}
    </>
  )
}