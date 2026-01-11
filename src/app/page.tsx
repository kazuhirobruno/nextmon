export const metadata = {
  title: 'NextMon - Pokédex',
  description: 'Listagem de Pokémon',
};

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-full text-gray-500">
      <p>Selecione um Pokémon à esquerda para ver os detalhes</p>
    </div>
  )
}