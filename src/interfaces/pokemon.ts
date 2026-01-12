export interface PokemonListItem {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
        front_shiny: string
      }
    }
  },
  types: [
    {
      type: {
        name: string 
      }
    }
  ],
  abilities: [
   Ability
  ],
  stats: [
    Stats
  ],
  species: PokemonListItem
}

export interface Ability {
  is_hidden: boolean
  ability: {
    name: string
    url: string
  }
}

export interface Stats {
  base_stat: number,
  stat: {
    name: "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed";
  }
}
  
export interface StatColor {
  color: string
  text: string
}

export interface PokemonSpecies {
  evolution_chain: {
    url: string;
  };
  varieties: VaritiesItem[]
}

export interface VaritiesItem {
  is_default: boolean
  pokemon: PokemonListItem
}
export interface EvolutionChainResponse {
  chain: EvolutionChainLink;
}

export interface EvolutionChainLink {
  species: {
    name: string
    url: string
  };
  evolves_to: EvolutionChainLink[]
  evolution_details?: EvolutionDetail[]
}

export interface EvolutionDetail {
  min_level: number | null;
  trigger: {
    name: string
  };
  item: {
    name: string
  } | null;
}

export interface EvolutionChainLinkParsed {
  first: EvolutionChainLinkParsedItem[]
  second: EvolutionChainLinkParsedItem[]
  third: EvolutionChainLinkParsedItem[]
}

export interface EvolutionChainLinkParsedItem {
  name: string;
  id: number;
}

