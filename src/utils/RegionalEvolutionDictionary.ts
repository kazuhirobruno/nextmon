import { EvolutionChainLinkParsed } from "@/src/interfaces/pokemon";

const regionalEvolutionLines: EvolutionChainLinkParsed[] = [
  // Vulpix (#037)
  {
    first: [{ id: 37, name: "vulpix" }],
    second: [{ id: 38, name: "ninetales" }],
    third: [],
  },
  {
    first: [{ id: 37, name: "vulpix-alola" }],
    second: [{ id: 38, name: "ninetales-alola" }],
    third: [],
  },

  // Diglett (#050)
  {
    first: [{ id: 50, name: "diglett" }],
    second: [{ id: 51, name: "dugtrio" }],
    third: [],
  },
  {
    first: [{ id: 50, name: "diglett-alola" }],
    second: [{ id: 51, name: "dugtrio-alola" }],
    third: [],
  },

  // Meowth (#052)
  {
    first: [{ id: 52, name: "meowth" }],
    second: [{ id: 53, name: "persian" }],
    third: [],
  },
  {
    first: [{ id: 52, name: "meowth-alola" }],
    second: [{ id: 53, name: "persian-alola" }],
    third: [],
  },
  {
    first: [{ id: 52, name: "meowth-galar" }],
    second: [{ id: 863, name: "perrserker" }],
    third: [],
  },

  // Growlithe (#058)
  {
    first: [{ id: 58, name: "growlithe" }],
    second: [{ id: 59, name: "arcanine" }],
    third: [],
  },
  {
    first: [{ id: 58, name: "growlithe-hisui" }],
    second: [{ id: 59, name: "arcanine-hisui" }],
    third: [],
  },

  // Ponyta (#077)
  {
    first: [{ id: 77, name: "ponyta" }],
    second: [{ id: 78, name: "rapidash" }],
    third: [],
  },
  {
    first: [{ id: 77, name: "ponyta-galar" }],
    second: [{ id: 78, name: "rapidash-galar" }],
    third: [],
  },

  // Slowpoke (#079)
  {
    first: [{ id: 79, name: "slowpoke" }],
    second: [
      { id: 80, name: "slowbro" },
      { id: 199, name: "slowking" },
    ],
    third: [],
  },
  {
    first: [{ id: 79, name: "slowpoke-galar" }],
    second: [
      { id: 80, name: "slowbro-galar" },
      { id: 199, name: "slowking-galar" },
    ],
    third: [],
  },

  // Farfetch’d (#083)
  {
    first: [{ id: 83, name: "farfetchd" }],
    second: [],
    third: [],
  },
  {
    first: [{ id: 83, name: "farfetchd-galar" }],
    second: [{ id: 865, name: "sirfetchd" }],
    third: [],
  },

  // Voltorb (#100)
  {
    first: [{ id: 100, name: "voltorb" }],
    second: [{ id: 101, name: "electrode" }],
    third: [],
  },
  {
    first: [{ id: 100, name: "voltorb-hisui" }],
    second: [{ id: 101, name: "electrode-hisui" }],
    third: [],
  },

  // Mr. Mime (#122)
  {
    first: [{ id: 439, name: "mime-jr" }],
    second: [{ id: 122, name: "mr-mime" }],
    third: [],
  },
  {
    first: [{ id: 439, name: "mime-jr" }],
    second: [{ id: 122, name: "mr-mime-galar" }],
    third: [{ id: 866, name: "mr-rime" }],
  },

  // Qwilfish (#211)
  {
    first: [{ id: 211, name: "qwilfish" }],
    second: [],
    third: [],
  },
  {
    first: [{ id: 211, name: "qwilfish-hisui" }],
    second: [{ id: 904, name: "overqwil" }],
    third: [],
  },

  // Corsola (#222)
  {
    first: [{ id: 222, name: "corsola" }],
    second: [],
    third: [],
  },
  {
    first: [{ id: 222, name: "corsola-galar" }],
    second: [{ id: 864, name: "cursola" }],
    third: [],
  },

  // Sneasel (#215)
  {
    first: [{ id: 215, name: "sneasel" }],
    second: [{ id: 461, name: "weavile" }],
    third: [],
  },
  {
    first: [{ id: 215, name: "sneasel-hisui" }],
    second: [{ id: 903, name: "sneasler" }],
    third: [],
  },

  // Zigzagoon (#263)
  {
    first: [{ id: 263, name: "zigzagoon" }],
    second: [{ id: 264, name: "linoone" }],
    third: [],
  },
  {
    first: [{ id: 263, name: "zigzagoon-galar" }],
    second: [{ id: 264, name: "linoone-galar" }],
    third: [{ id: 862, name: "obstagoon" }],
  },

  // Darumaka (#554)
  {
    first: [{ id: 554, name: "darumaka" }],
    second: [{ id: 555, name: "darmanitan" }],
    third: [],
  },
  {
    first: [{ id: 554, name: "darumaka-galar" }],
    second: [{ id: 555, name: "darmanitan-galar" }],
    third: [],
  },

  // Yamask (#562)
  {
    first: [{ id: 562, name: "yamask" }],
    second: [{ id: 563, name: "cofagrigus" }],
    third: [],
  },
  {
    first: [{ id: 562, name: "yamask-galar" }],
    second: [{ id: 867, name: "runerigus" }],
    third: [],
  },

  // Basculin (#550)
  {
    first: [{ id: 550, name: "basculin" }],
    second: [],
    third: [],
  },
  {
    first: [{ id: 550, name: "basculin-hisui" }],
    second: [{ id: 902, name: "basculegion" }],
    third: [],
  },

  // Zorua (#570)
  {
    first: [{ id: 570, name: "zorua" }],
    second: [{ id: 571, name: "zoroark" }],
    third: [],
  },
  {
    first: [{ id: 570, name: "zorua-hisui" }],
    second: [{ id: 571, name: "zoroark-hisui" }],
    third: [],
  },
];

const lookup: Record<string, number> = {};

regionalEvolutionLines.forEach((linha, index) => {
  [...linha.first, ...linha.second, ...linha.third].forEach(pokemon => {
    lookup[pokemon.name.toLowerCase()] = index;
  });
});

export function getEvolutionLine(pokemonName: string): EvolutionChainLinkParsed | undefined {
  const index = lookup[pokemonName.toLowerCase()];
  if (index === undefined) return undefined;
  return regionalEvolutionLines[index];
}
