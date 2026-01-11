const nameMap: Record<string, string> = {
  "nidoran-f": "nidoran-female",
  "nidoran-m": "nidoran-male",
  "farfetchd": "farfetchd",
  "mr-mime": "mr-mime",
  "mr-rime": "mr-rime",
  "type-null": "type-null",
  "jangmo-o": "jangmo-o",
  "hakamo-o": "hakamo-o",
  "kommo-o": "kommo-o",
  "tapu-koko": "tapu-koko",
  "tapu-lele": "tapu-lele",
  "tapu-bulu": "tapu-bulu",
  "tapu-fini": "tapu-fini",
  "mime-jr": "mime-jr",
  "flabebe": "flabebe",
  "porygon-z": "porygon-z",
  "ho-oh": "ho-oh"
};

/**
 * Gera a URL oficial do Pokémon no site Pokémon.com
 * @param name Nome do Pokémon vindo da PokéAPI
 */
export function getOfficialPokemonLink(name: string): string {
  const lower = name.toLowerCase();

  // Se tiver um mapeamento especial, use ele
  if (nameMap[lower]) return `https://www.pokemon.com/br/pokedex/${nameMap[lower]}`;

  // Normaliza nomes com caracteres especiais
  const normalized = lower
    .replace(/♀/g, "-female")
    .replace(/♂/g, "-male")
    .replace(/[.'’]/g, "") // remove apóstrofos
    .replace(/\s+/g, "-"); // substitui espaços por hífens

  return `https://www.pokemon.com/br/pokedex/${normalized}`;
}