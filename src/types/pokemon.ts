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
  ]
}

export interface Ability {
  is_hidden: boolean,
  ability: {
    name: string,
    url: string,
  }
}

export interface Stats {
  base_stat: number,
  stat: {
    name: "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed"
  }
}
  
export interface StatColor {
  color: string;
  text: string;
}