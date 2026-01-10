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
  ]
}

export interface Ability {
  is_hidden: boolean,
  ability: {
    name: string,
    url: string,
  }
}
  