import { getPokemonById } from "@/src/services/pokemonService";
import { EvolutionChainLinkParsed, Pokemon } from "@/src/types/pokemon"
import Image from "next/image";
import Link from "next/link";

interface PokemonEvolutionLayoutProps {
  evolutionChain: EvolutionChainLinkParsed[],
  selectedPokemon: Pokemon
}

export default function PokemonEvolutionLayout({ evolutionChain, selectedPokemon }: PokemonEvolutionLayoutProps) {
  const createTree = () => {
    const first: EvolutionChainLinkParsed[] = [], 
      second: EvolutionChainLinkParsed[] = [], 
      last: EvolutionChainLinkParsed[] = [];
    evolutionChain.forEach(item => {
      if (!item.preEvolution) first.push(item)
      else if (item.preEvolution === first[0].name) second.push(item)
      else last.push(item)
    })

    return { first, second, last }
  }

  const { first, second, last } = createTree()

  const renderPokemonCard = (evolution:EvolutionChainLinkParsed[]) => {
    return (
      <div className="flex flex-row items-center justify-center gap-4 w-full flex-wrap mb-4">
        {evolution.map(item => renderPokemonLink(item))}
      </div>
    )
  }

  const renderPokemonLink = async (item: EvolutionChainLinkParsed) => {
    const getImage = await getPokemonById(item.id)
    return (
      <Link 
        href={`/${item.id}`}
        className={`
          ${item.name === selectedPokemon.name ? 'pointer-events-none' : '' }
          capitalize
          flex flex-col gap-2 justify-center items-center
        `}
        key={`evolution-${item.name}-${item.id}`}
      >
        <Image 
          height={48}
          width={48}
          src={getImage.sprites.other['official-artwork'].front_default}
          alt={getImage.name}
        />
        {item.name}
      </Link>
    )
  }

  return (
    <>
      {second.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="ww-full text-center font-bold text-lg mb-1">Linha evolutiva:</h2>
          {first.length ? renderPokemonCard(first) : <></>}
          {second.length ? 
            (<>
              <h6 className="w-full col-span-2 text-center font-bold mb-1 text-[16px]">Evolui para:</h6>
              {renderPokemonCard(second)} 
            </>): <></>}
          {last.length ? 
            (<>
              <h6 className="w-full col-span-2 text-center font-bold mb-1 text-[16px]">Evolui para:</h6>
              {renderPokemonCard(last)} 
            </>): <></>}
        </div>
      ) : (<></>)}
    </>
  )
}