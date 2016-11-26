const Pokemon = [
  {
    "id": 0,
    "name": "NONE",
    "type1": "NONE",
    "type2": "NONE",
    "stats": {
      "stamina": 0,
      "attack": 0,
      "defense": 0
    },
    "candy": 0,
    "family": "NONE"
  },
  {
    "id": 1,
    "name": "BULBASAUR",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 90,
      "attack": 126,
      "defense": 126
    },
    "candy": 25,
    "family": "FAMILY_BULBASAUR",
    "moves1": [
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      },
      {
        "Id": 214,
        "Name": "VINE_WHIP_FAST",
        "Power": 7,
        "DurationMs": 650,
        "Energy": 7,
        "DPS": 13.46153846153846
      }
    ],
    "moves2": [
      {
        "Id": 118,
        "Name": "POWER_WHIP",
        "Type": "GRASS",
        "Power": 70,
        "DurationMs": 2800,
        "Energy": -100,
        "DPS": 31.25
      },
      {
        "Id": 59,
        "Name": "SEED_BOMB",
        "Type": "GRASS",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 2,
    "name": "IVYSAUR",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 120,
      "attack": 156,
      "defense": 158
    },
    "candy": 100,
    "family": "FAMILY_BULBASAUR",
    "moves1": [
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      },
      {
        "Id": 214,
        "Name": "VINE_WHIP_FAST",
        "Power": 7,
        "DurationMs": 650,
        "Energy": 7,
        "DPS": 13.46153846153846
      }
    ],
    "moves2": [
      {
        "Id": 118,
        "Name": "POWER_WHIP",
        "Type": "GRASS",
        "Power": 70,
        "DurationMs": 2800,
        "Energy": -100,
        "DPS": 31.25
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      }
    ]
  },
  {
    "id": 3,
    "name": "VENUSAUR",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 160,
      "attack": 198,
      "defense": 200
    },
    "family": "FAMILY_BULBASAUR",
    "moves1": [
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      },
      {
        "Id": 214,
        "Name": "VINE_WHIP_FAST",
        "Power": 7,
        "DurationMs": 650,
        "Energy": 7,
        "DPS": 13.46153846153846
      }
    ],
    "moves2": [
      {
        "Id": 47,
        "Name": "PETAL_BLIZZARD",
        "Type": "GRASS",
        "Power": 65,
        "DurationMs": 3200,
        "Energy": -50,
        "DPS": 25.390625
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      }
    ]
  },
  {
    "id": 4,
    "name": "CHARMANDER",
    "type1": "FIRE",
    "stats": {
      "stamina": 78,
      "attack": 128,
      "defense": 108
    },
    "candy": 25,
    "family": "FAMILY_CHARMANDER",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 102,
        "Name": "FLAME_BURST",
        "Type": "FIRE",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -25,
        "DPS": 17.857142857142854
      },
      {
        "Id": 101,
        "Name": "FLAME_CHARGE",
        "Type": "FIRE",
        "Power": 20,
        "DurationMs": 3100,
        "Energy": -20,
        "DPS": 8.064516129032258
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 5,
    "name": "CHARMELEON",
    "type1": "FIRE",
    "stats": {
      "stamina": 116,
      "attack": 160,
      "defense": 140
    },
    "candy": 100,
    "family": "FAMILY_CHARMANDER",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 115,
        "Name": "FIRE_PUNCH",
        "Type": "FIRE",
        "Power": 40,
        "DurationMs": 2800,
        "Energy": -33,
        "DPS": 17.857142857142858
      },
      {
        "Id": 102,
        "Name": "FLAME_BURST",
        "Type": "FIRE",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -25,
        "DPS": 17.857142857142854
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 6,
    "name": "CHARIZARD",
    "type1": "FIRE",
    "type2": "FLYING",
    "stats": {
      "stamina": 156,
      "attack": 212,
      "defense": 182
    },
    "family": "FAMILY_CHARMANDER",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 210,
        "Name": "WING_ATTACK_FAST",
        "Power": 9,
        "DurationMs": 750,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 83,
        "Name": "DRAGON_CLAW",
        "Type": "DRAGON",
        "Power": 35,
        "DurationMs": 1500,
        "Energy": -50,
        "DPS": 23.333333333333332
      },
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 7,
    "name": "SQUIRTLE",
    "type1": "WATER",
    "stats": {
      "stamina": 88,
      "attack": 112,
      "defense": 142
    },
    "candy": 25,
    "family": "FAMILY_SQUIRTLE",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 57,
        "Name": "AQUA_JET",
        "Type": "WATER",
        "Power": 25,
        "DurationMs": 2350,
        "Energy": -20,
        "DPS": 13.297872340425531
      },
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 23.936170212765955
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 8,
    "name": "WARTORTLE",
    "type1": "WATER",
    "stats": {
      "stamina": 118,
      "attack": 144,
      "defense": 176
    },
    "candy": 100,
    "family": "FAMILY_SQUIRTLE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 57,
        "Name": "AQUA_JET",
        "Type": "WATER",
        "Power": 25,
        "DurationMs": 2350,
        "Energy": -20,
        "DPS": 13.297872340425531
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 39,
        "Name": "ICE_BEAM",
        "Type": "ICE",
        "Power": 65,
        "DurationMs": 3650,
        "Energy": -50,
        "DPS": 17.808219178082194
      }
    ]
  },
  {
    "id": 9,
    "name": "BLASTOISE",
    "type1": "WATER",
    "stats": {
      "stamina": 158,
      "attack": 186,
      "defense": 222
    },
    "family": "FAMILY_SQUIRTLE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 36,
        "Name": "FLASH_CANNON",
        "Type": "STEEL",
        "Power": 60,
        "DurationMs": 3900,
        "Energy": -33,
        "DPS": 15.384615384615385
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 39,
        "Name": "ICE_BEAM",
        "Type": "ICE",
        "Power": 65,
        "DurationMs": 3650,
        "Energy": -50,
        "DPS": 17.808219178082194
      }
    ]
  },
  {
    "id": 10,
    "name": "CATERPIE",
    "type1": "BUG",
    "stats": {
      "stamina": 90,
      "attack": 62,
      "defense": 66
    },
    "candy": 12,
    "family": "FAMILY_CATERPIE",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 133,
        "Name": "STRUGGLE",
        "Type": "NORMAL",
        "Power": 15,
        "DurationMs": 1695,
        "Energy": -20,
        "DPS": 8.849557522123893
      }
    ]
  },
  {
    "id": 11,
    "name": "METAPOD",
    "type1": "BUG",
    "stats": {
      "stamina": 100,
      "attack": 56,
      "defense": 86
    },
    "candy": 50,
    "family": "FAMILY_CATERPIE",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 133,
        "Name": "STRUGGLE",
        "Type": "NORMAL",
        "Power": 15,
        "DurationMs": 1695,
        "Energy": -20,
        "DPS": 8.849557522123893
      }
    ]
  },
  {
    "id": 12,
    "name": "BUTTERFREE",
    "type1": "BUG",
    "type2": "FLYING",
    "stats": {
      "stamina": 120,
      "attack": 144,
      "defense": 144
    },
    "family": "FAMILY_CATERPIE",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 9.933774834437086
      }
    ],
    "moves2": [
      {
        "Id": 49,
        "Name": "BUG_BUZZ",
        "Type": "BUG",
        "Power": 75,
        "DurationMs": 4250,
        "Energy": -50,
        "DPS": 22.058823529411768
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 19.642857142857142
      },
      {
        "Id": 99,
        "Name": "SIGNAL_BEAM",
        "Type": "BUG",
        "Power": 45,
        "DurationMs": 3100,
        "Energy": -33,
        "DPS": 18.14516129032258
      }
    ]
  },
  {
    "id": 13,
    "name": "WEEDLE",
    "type1": "BUG",
    "type2": "POISON",
    "stats": {
      "stamina": 80,
      "attack": 68,
      "defense": 64
    },
    "candy": 12,
    "family": "FAMILY_WEEDLE",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 133,
        "Name": "STRUGGLE",
        "Type": "NORMAL",
        "Power": 15,
        "DurationMs": 1695,
        "Energy": -20,
        "DPS": 8.849557522123893
      }
    ]
  },
  {
    "id": 14,
    "name": "KAKUNA",
    "type1": "BUG",
    "type2": "POISON",
    "stats": {
      "stamina": 90,
      "attack": 62,
      "defense": 82
    },
    "candy": 50,
    "family": "FAMILY_WEEDLE",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 133,
        "Name": "STRUGGLE",
        "Type": "NORMAL",
        "Power": 15,
        "DurationMs": 1695,
        "Energy": -20,
        "DPS": 8.849557522123893
      }
    ]
  },
  {
    "id": 15,
    "name": "BEEDRILL",
    "type1": "BUG",
    "type2": "POISON",
    "stats": {
      "stamina": 130,
      "attack": 144,
      "defense": 130
    },
    "family": "FAMILY_WEEDLE",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 17.857142857142854
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 10.344827586206897
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 100,
        "Name": "X_SCISSOR",
        "Type": "BUG",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 16,
    "name": "PIDGEY",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 80,
      "attack": 94,
      "defense": 90
    },
    "candy": 12,
    "family": "FAMILY_PIDGEY",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 13.636363636363635
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 80,
        "Name": "TWISTER",
        "Type": "DRAGON",
        "Power": 25,
        "DurationMs": 2700,
        "Energy": -20,
        "DPS": 9.25925925925926
      }
    ]
  },
  {
    "id": 17,
    "name": "PIDGEOTTO",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 126,
      "attack": 126,
      "defense": 122
    },
    "candy": 50,
    "family": "FAMILY_PIDGEY",
    "moves1": [
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      },
      {
        "Id": 210,
        "Name": "WING_ATTACK_FAST",
        "Power": 9,
        "DurationMs": 750,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 80,
        "Name": "TWISTER",
        "Type": "DRAGON",
        "Power": 25,
        "DurationMs": 2700,
        "Energy": -20,
        "DPS": 9.25925925925926
      }
    ]
  },
  {
    "id": 18,
    "name": "PIDGEOT",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 166,
      "attack": 170,
      "defense": 166
    },
    "family": "FAMILY_PIDGEY",
    "moves1": [
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      },
      {
        "Id": 210,
        "Name": "WING_ATTACK_FAST",
        "Power": 9,
        "DurationMs": 750,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 122,
        "Name": "HURRICANE",
        "Type": "FLYING",
        "Power": 80,
        "DurationMs": 3200,
        "Energy": -100,
        "DPS": 31.25
      }
    ]
  },
  {
    "id": 19,
    "name": "RATTATA",
    "type1": "NORMAL",
    "stats": {
      "stamina": 60,
      "attack": 92,
      "defense": 86
    },
    "candy": 25,
    "family": "FAMILY_RATTATA",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 13.636363636363635
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 32.05128205128205
      },
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 12.068965517241379
      },
      {
        "Id": 129,
        "Name": "HYPER_FANG",
        "Type": "NORMAL",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 20,
    "name": "RATICATE",
    "type1": "NORMAL",
    "stats": {
      "stamina": 110,
      "attack": 146,
      "defense": 150
    },
    "family": "FAMILY_RATTATA",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 12.068965517241379
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 30
      },
      {
        "Id": 129,
        "Name": "HYPER_FANG",
        "Type": "NORMAL",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 21,
    "name": "SPEAROW",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 80,
      "attack": 102,
      "defense": 78
    },
    "candy": 50,
    "family": "FAMILY_SPEAROW",
    "moves1": [
      {
        "Id": 211,
        "Name": "PECK_FAST",
        "Power": 10,
        "DurationMs": 1150,
        "Energy": 10,
        "DPS": 10.869565217391306
      },
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 38,
        "Name": "DRILL_PECK",
        "Type": "FLYING",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      },
      {
        "Id": 80,
        "Name": "TWISTER",
        "Type": "DRAGON",
        "Power": 25,
        "DurationMs": 2700,
        "Energy": -20,
        "DPS": 9.25925925925926
      }
    ]
  },
  {
    "id": 22,
    "name": "FEAROW",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 130,
      "attack": 168,
      "defense": 146
    },
    "family": "FAMILY_SPEAROW",
    "moves1": [
      {
        "Id": 211,
        "Name": "PECK_FAST",
        "Power": 10,
        "DurationMs": 1150,
        "Energy": 10,
        "DPS": 10.869565217391306
      },
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 46,
        "Name": "DRILL_RUN",
        "Type": "GROUND",
        "Power": 50,
        "DurationMs": 3400,
        "Energy": -33,
        "DPS": 14.705882352941178
      },
      {
        "Id": 80,
        "Name": "TWISTER",
        "Type": "DRAGON",
        "Power": 25,
        "DurationMs": 2700,
        "Energy": -20,
        "DPS": 9.25925925925926
      }
    ]
  },
  {
    "id": 23,
    "name": "EKANS",
    "type1": "POISON",
    "stats": {
      "stamina": 70,
      "attack": 112,
      "defense": 112
    },
    "candy": 50,
    "family": "FAMILY_EKANS",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 92,
        "Name": "GUNK_SHOT",
        "Type": "POISON",
        "Power": 65,
        "DurationMs": 3000,
        "Energy": -100,
        "DPS": 27.083333333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 13,
        "Name": "WRAP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 4000,
        "Energy": -20,
        "DPS": 6.25
      }
    ]
  },
  {
    "id": 24,
    "name": "ARBOK",
    "type1": "POISON",
    "stats": {
      "stamina": 120,
      "attack": 166,
      "defense": 166
    },
    "family": "FAMILY_EKANS",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 92,
        "Name": "GUNK_SHOT",
        "Type": "POISON",
        "Power": 65,
        "DurationMs": 3000,
        "Energy": -100,
        "DPS": 27.083333333333336
      },
      {
        "Id": 91,
        "Name": "SLUDGE_WAVE",
        "Type": "POISON",
        "Power": 70,
        "DurationMs": 3400,
        "Energy": -100,
        "DPS": 25.73529411764706
      }
    ]
  },
  {
    "id": 25,
    "name": "PIKACHU",
    "type1": "ELECTRIC",
    "stats": {
      "stamina": 70,
      "attack": 124,
      "defense": 108
    },
    "candy": 50,
    "family": "FAMILY_PIKACHU",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 7.518796992481203
      },
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 78,
        "Name": "THUNDER",
        "Type": "ELECTRIC",
        "Power": 100,
        "DurationMs": 4300,
        "Energy": -100,
        "DPS": 29.069767441860467
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 26,
    "name": "RAICHU",
    "type1": "ELECTRIC",
    "stats": {
      "stamina": 120,
      "attack": 200,
      "defense": 154
    },
    "family": "FAMILY_PIKACHU",
    "moves1": [
      {
        "Id": 206,
        "Name": "SPARK_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 12.5
      },
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 123,
        "Name": "BRICK_BREAK",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 1600,
        "Energy": -33,
        "DPS": 18.75
      },
      {
        "Id": 78,
        "Name": "THUNDER",
        "Type": "ELECTRIC",
        "Power": 100,
        "DurationMs": 4300,
        "Energy": -100,
        "DPS": 29.069767441860467
      },
      {
        "Id": 77,
        "Name": "THUNDER_PUNCH",
        "Type": "ELECTRIC",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      }
    ]
  },
  {
    "id": 27,
    "name": "SANDSHREW",
    "type1": "GROUND",
    "stats": {
      "stamina": 100,
      "attack": 90,
      "defense": 114
    },
    "candy": 50,
    "family": "FAMILY_SANDSHREW",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 13.636363636363635
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 15.086206896551724
      },
      {
        "Id": 64,
        "Name": "ROCK_SLIDE",
        "Type": "ROCK",
        "Power": 50,
        "DurationMs": 3200,
        "Energy": -33,
        "DPS": 15.625
      },
      {
        "Id": 63,
        "Name": "ROCK_TOMB",
        "Type": "ROCK",
        "Power": 30,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 8.823529411764707
      }
    ]
  },
  {
    "id": 28,
    "name": "SANDSLASH",
    "type1": "GROUND",
    "stats": {
      "stamina": 150,
      "attack": 150,
      "defense": 172
    },
    "family": "FAMILY_SANDSHREW",
    "moves1": [
      {
        "Id": 228,
        "Name": "METAL_CLAW_FAST",
        "Power": 8,
        "DurationMs": 630,
        "Energy": 7,
        "DPS": 12.698412698412698
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 13.636363636363635
      }
    ],
    "moves2": [
      {
        "Id": 95,
        "Name": "BULLDOZE",
        "Type": "GROUND",
        "Power": 35,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 12.86764705882353
      },
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      },
      {
        "Id": 63,
        "Name": "ROCK_TOMB",
        "Type": "ROCK",
        "Power": 30,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 8.823529411764707
      }
    ]
  },
  {
    "id": 29,
    "name": "NIDORAN_FEMALE",
    "type1": "POISON",
    "stats": {
      "stamina": 110,
      "attack": 100,
      "defense": 104
    },
    "candy": 25,
    "family": "FAMILY_NIDORAN_FEMALE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 25.64102564102564
      },
      {
        "Id": 50,
        "Name": "POISON_FANG",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 2400,
        "Energy": -20,
        "DPS": 13.020833333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 30,
    "name": "NIDORINA",
    "type1": "POISON",
    "stats": {
      "stamina": 140,
      "attack": 132,
      "defense": 136
    },
    "candy": 100,
    "family": "FAMILY_NIDORAN_FEMALE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 12.068965517241379
      },
      {
        "Id": 50,
        "Name": "POISON_FANG",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 2400,
        "Energy": -20,
        "DPS": 13.020833333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 31,
    "name": "NIDOQUEEN",
    "type1": "POISON",
    "type2": "GROUND",
    "stats": {
      "stamina": 180,
      "attack": 184,
      "defense": 190
    },
    "family": "FAMILY_NIDORAN_FEMALE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 17.857142857142854
      }
    ],
    "moves2": [
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      },
      {
        "Id": 91,
        "Name": "SLUDGE_WAVE",
        "Type": "POISON",
        "Power": 70,
        "DurationMs": 3400,
        "Energy": -100,
        "DPS": 25.73529411764706
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 25.806451612903224
      }
    ]
  },
  {
    "id": 32,
    "name": "NIDORAN_MALE",
    "type1": "POISON",
    "stats": {
      "stamina": 92,
      "attack": 110,
      "defense": 94
    },
    "candy": 25,
    "family": "FAMILY_NIDORAN_MALE",
    "moves1": [
      {
        "Id": 211,
        "Name": "PECK_FAST",
        "Power": 10,
        "DurationMs": 1150,
        "Energy": 10,
        "DPS": 8.695652173913045
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 25.64102564102564
      },
      {
        "Id": 126,
        "Name": "HORN_ATTACK",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2200,
        "Energy": -25,
        "DPS": 11.363636363636363
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 33,
    "name": "NIDORINO",
    "type1": "POISON",
    "stats": {
      "stamina": 122,
      "attack": 142,
      "defense": 128
    },
    "candy": 100,
    "family": "FAMILY_NIDORAN_MALE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 17.857142857142854
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 12.068965517241379
      },
      {
        "Id": 126,
        "Name": "HORN_ATTACK",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2200,
        "Energy": -25,
        "DPS": 11.363636363636363
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 34,
    "name": "NIDOKING",
    "type1": "POISON",
    "type2": "GROUND",
    "stats": {
      "stamina": 162,
      "attack": 204,
      "defense": 170
    },
    "family": "FAMILY_NIDORAN_MALE",
    "moves1": [
      {
        "Id": 200,
        "Name": "FURY_CUTTER_FAST",
        "Power": 3,
        "DurationMs": 400,
        "Energy": 12,
        "DPS": 7.5
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 17.857142857142854
      }
    ],
    "moves2": [
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      },
      {
        "Id": 22,
        "Name": "MEGAHORN",
        "Type": "BUG",
        "Power": 80,
        "DurationMs": 3200,
        "Energy": -100,
        "DPS": 25
      },
      {
        "Id": 91,
        "Name": "SLUDGE_WAVE",
        "Type": "POISON",
        "Power": 70,
        "DurationMs": 3400,
        "Energy": -100,
        "DPS": 25.73529411764706
      }
    ]
  },
  {
    "id": 35,
    "name": "CLEFAIRY",
    "type1": "FAIRY",
    "stats": {
      "stamina": 140,
      "attack": 116,
      "defense": 124
    },
    "candy": 50,
    "family": "FAMILY_CLEFAIRY",
    "moves1": [
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 12.962962962962962
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 25.64102564102564
      },
      {
        "Id": 84,
        "Name": "DISARMING_VOICE",
        "Type": "FAIRY",
        "Power": 25,
        "DurationMs": 3900,
        "Energy": -20,
        "DPS": 8.012820512820513
      },
      {
        "Id": 87,
        "Name": "MOONBLAST",
        "Type": "FAIRY",
        "Power": 85,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 25.914634146341466
      }
    ]
  },
  {
    "id": 36,
    "name": "CLEFABLE",
    "type1": "FAIRY",
    "stats": {
      "stamina": 190,
      "attack": 178,
      "defense": 178
    },
    "family": "FAMILY_CLEFAIRY",
    "moves1": [
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 12.962962962962962
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 86,
        "Name": "DAZZLING_GLEAM",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 4200,
        "Energy": -33,
        "DPS": 16.36904761904762
      },
      {
        "Id": 87,
        "Name": "MOONBLAST",
        "Type": "FAIRY",
        "Power": 85,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 25.914634146341466
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 19.642857142857142
      }
    ]
  },
  {
    "id": 37,
    "name": "VULPIX",
    "type1": "FIRE",
    "stats": {
      "stamina": 76,
      "attack": 106,
      "defense": 118
    },
    "candy": 50,
    "family": "FAMILY_VULPIX",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 7.518796992481203
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 25.64102564102564
      },
      {
        "Id": 101,
        "Name": "FLAME_CHARGE",
        "Type": "FIRE",
        "Power": 20,
        "DurationMs": 3100,
        "Energy": -20,
        "DPS": 8.064516129032258
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 38,
    "name": "NINETALES",
    "type1": "FIRE",
    "stats": {
      "stamina": 146,
      "attack": 176,
      "defense": 194
    },
    "family": "FAMILY_VULPIX",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 238,
        "Name": "FEINT_ATTACK_FAST",
        "Power": 12,
        "DurationMs": 1040,
        "Energy": 7,
        "DPS": 11.538461538461538
      }
    ],
    "moves2": [
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      },
      {
        "Id": 42,
        "Name": "HEAT_WAVE",
        "Type": "FIRE",
        "Power": 80,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 26.315789473684212
      }
    ]
  },
  {
    "id": 39,
    "name": "JIGGLYPUFF",
    "type1": "NORMAL",
    "type2": "FAIRY",
    "stats": {
      "stamina": 230,
      "attack": 98,
      "defense": 54
    },
    "candy": 50,
    "family": "FAMILY_JIGGLYPUFF",
    "moves1": [
      {
        "Id": 238,
        "Name": "FEINT_ATTACK_FAST",
        "Power": 12,
        "DurationMs": 1040,
        "Energy": 7,
        "DPS": 11.538461538461538
      },
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 16.203703703703702
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 32.05128205128205
      },
      {
        "Id": 84,
        "Name": "DISARMING_VOICE",
        "Type": "FAIRY",
        "Power": 25,
        "DurationMs": 3900,
        "Energy": -20,
        "DPS": 8.012820512820513
      },
      {
        "Id": 88,
        "Name": "PLAY_ROUGH",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 40,
    "name": "WIGGLYTUFF",
    "type1": "NORMAL",
    "type2": "FAIRY",
    "stats": {
      "stamina": 280,
      "attack": 168,
      "defense": 108
    },
    "family": "FAMILY_JIGGLYPUFF",
    "moves1": [
      {
        "Id": 238,
        "Name": "FEINT_ATTACK_FAST",
        "Power": 12,
        "DurationMs": 1040,
        "Energy": 7,
        "DPS": 11.538461538461538
      },
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 16.203703703703702
      }
    ],
    "moves2": [
      {
        "Id": 86,
        "Name": "DAZZLING_GLEAM",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 4200,
        "Energy": -33,
        "DPS": 16.36904761904762
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 30
      },
      {
        "Id": 88,
        "Name": "PLAY_ROUGH",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 41,
    "name": "ZUBAT",
    "type1": "POISON",
    "type2": "FLYING",
    "stats": {
      "stamina": 80,
      "attack": 88,
      "defense": 90
    },
    "candy": 50,
    "family": "FAMILY_ZUBAT",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 7.518796992481203
      }
    ],
    "moves2": [
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 50,
        "Name": "POISON_FANG",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 2400,
        "Energy": -20,
        "DPS": 13.020833333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 42,
    "name": "GOLBAT",
    "type1": "POISON",
    "type2": "FLYING",
    "stats": {
      "stamina": 150,
      "attack": 164,
      "defense": 164
    },
    "family": "FAMILY_ZUBAT",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 210,
        "Name": "WING_ATTACK_FAST",
        "Power": 9,
        "DurationMs": 750,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 69,
        "Name": "OMINOUS_WIND",
        "Type": "GHOST",
        "Power": 30,
        "DurationMs": 3100,
        "Energy": -25,
        "DPS": 9.67741935483871
      },
      {
        "Id": 50,
        "Name": "POISON_FANG",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 2400,
        "Energy": -20,
        "DPS": 13.020833333333336
      }
    ]
  },
  {
    "id": 43,
    "name": "ODDISH",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 90,
      "attack": 134,
      "defense": 130
    },
    "candy": 25,
    "family": "FAMILY_ODDISH",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      }
    ],
    "moves2": [
      {
        "Id": 87,
        "Name": "MOONBLAST",
        "Type": "FAIRY",
        "Power": 85,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 20.731707317073173
      },
      {
        "Id": 59,
        "Name": "SEED_BOMB",
        "Type": "GRASS",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 44,
    "name": "GLOOM",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 120,
      "attack": 162,
      "defense": 158
    },
    "candy": 100,
    "family": "FAMILY_ODDISH",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      }
    ],
    "moves2": [
      {
        "Id": 87,
        "Name": "MOONBLAST",
        "Type": "FAIRY",
        "Power": 85,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 20.731707317073173
      },
      {
        "Id": 47,
        "Name": "PETAL_BLIZZARD",
        "Type": "GRASS",
        "Power": 65,
        "DurationMs": 3200,
        "Energy": -50,
        "DPS": 25.390625
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 45,
    "name": "VILEPLUME",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 150,
      "attack": 202,
      "defense": 190
    },
    "family": "FAMILY_ODDISH",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      }
    ],
    "moves2": [
      {
        "Id": 87,
        "Name": "MOONBLAST",
        "Type": "FAIRY",
        "Power": 85,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 20.731707317073173
      },
      {
        "Id": 47,
        "Name": "PETAL_BLIZZARD",
        "Type": "GRASS",
        "Power": 65,
        "DurationMs": 3200,
        "Energy": -50,
        "DPS": 25.390625
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      }
    ]
  },
  {
    "id": 46,
    "name": "PARAS",
    "type1": "BUG",
    "type2": "GRASS",
    "stats": {
      "stamina": 70,
      "attack": 122,
      "defense": 120
    },
    "candy": 50,
    "family": "FAMILY_PARAS",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 89,
        "Name": "CROSS_POISON",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 1500,
        "Energy": -25,
        "DPS": 16.666666666666668
      },
      {
        "Id": 59,
        "Name": "SEED_BOMB",
        "Type": "GRASS",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      },
      {
        "Id": 100,
        "Name": "X_SCISSOR",
        "Type": "BUG",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 47,
    "name": "PARASECT",
    "type1": "BUG",
    "type2": "GRASS",
    "stats": {
      "stamina": 120,
      "attack": 162,
      "defense": 170
    },
    "family": "FAMILY_PARAS",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 200,
        "Name": "FURY_CUTTER_FAST",
        "Power": 3,
        "DurationMs": 400,
        "Energy": 12,
        "DPS": 9.375
      }
    ],
    "moves2": [
      {
        "Id": 89,
        "Name": "CROSS_POISON",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 1500,
        "Energy": -25,
        "DPS": 16.666666666666668
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      },
      {
        "Id": 100,
        "Name": "X_SCISSOR",
        "Type": "BUG",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 48,
    "name": "VENONAT",
    "type1": "BUG",
    "type2": "POISON",
    "stats": {
      "stamina": 120,
      "attack": 108,
      "defense": 118
    },
    "candy": 50,
    "family": "FAMILY_VENONAT",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 9.933774834437086
      }
    ],
    "moves2": [
      {
        "Id": 50,
        "Name": "POISON_FANG",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 2400,
        "Energy": -20,
        "DPS": 13.020833333333336
      },
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 10.526315789473685
      },
      {
        "Id": 99,
        "Name": "SIGNAL_BEAM",
        "Type": "BUG",
        "Power": 45,
        "DurationMs": 3100,
        "Energy": -33,
        "DPS": 18.14516129032258
      }
    ]
  },
  {
    "id": 49,
    "name": "VENOMOTH",
    "type1": "BUG",
    "type2": "POISON",
    "stats": {
      "stamina": 140,
      "attack": 172,
      "defense": 154
    },
    "family": "FAMILY_VENONAT",
    "moves1": [
      {
        "Id": 201,
        "Name": "BUG_BITE_FAST",
        "Power": 5,
        "DurationMs": 450,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 9.933774834437086
      }
    ],
    "moves2": [
      {
        "Id": 49,
        "Name": "BUG_BUZZ",
        "Type": "BUG",
        "Power": 75,
        "DurationMs": 4250,
        "Energy": -50,
        "DPS": 22.058823529411768
      },
      {
        "Id": 50,
        "Name": "POISON_FANG",
        "Type": "POISON",
        "Power": 25,
        "DurationMs": 2400,
        "Energy": -20,
        "DPS": 13.020833333333336
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 19.642857142857142
      }
    ]
  },
  {
    "id": 50,
    "name": "DIGLETT",
    "type1": "GROUND",
    "stats": {
      "stamina": 20,
      "attack": 108,
      "defense": 86
    },
    "candy": 50,
    "family": "FAMILY_DIGLETT",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 13.636363636363635
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 15.086206896551724
      },
      {
        "Id": 96,
        "Name": "MUD_BOMB",
        "Type": "GROUND",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 14.423076923076923
      },
      {
        "Id": 63,
        "Name": "ROCK_TOMB",
        "Type": "ROCK",
        "Power": 30,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 8.823529411764707
      }
    ]
  },
  {
    "id": 51,
    "name": "DUGTRIO",
    "type1": "GROUND",
    "stats": {
      "stamina": 70,
      "attack": 148,
      "defense": 140
    },
    "family": "FAMILY_DIGLETT",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 13.636363636363635
      },
      {
        "Id": 203,
        "Name": "SUCKER_PUNCH_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 10
      }
    ],
    "moves2": [
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      },
      {
        "Id": 96,
        "Name": "MUD_BOMB",
        "Type": "GROUND",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 14.423076923076923
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 25.806451612903224
      }
    ]
  },
  {
    "id": 52,
    "name": "MEOWTH",
    "type1": "NORMAL",
    "stats": {
      "stamina": 80,
      "attack": 104,
      "defense": 94
    },
    "candy": 50,
    "family": "FAMILY_MEOWTH",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 32.05128205128205
      },
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 51,
        "Name": "NIGHT_SLASH",
        "Type": "DARK",
        "Power": 30,
        "DurationMs": 2700,
        "Energy": -25,
        "DPS": 11.11111111111111
      }
    ]
  },
  {
    "id": 53,
    "name": "PERSIAN",
    "type1": "NORMAL",
    "stats": {
      "stamina": 130,
      "attack": 156,
      "defense": 146
    },
    "family": "FAMILY_MEOWTH",
    "moves1": [
      {
        "Id": 238,
        "Name": "FEINT_ATTACK_FAST",
        "Power": 12,
        "DurationMs": 1040,
        "Energy": 7,
        "DPS": 11.538461538461538
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 51,
        "Name": "NIGHT_SLASH",
        "Type": "DARK",
        "Power": 30,
        "DurationMs": 2700,
        "Energy": -25,
        "DPS": 11.11111111111111
      },
      {
        "Id": 88,
        "Name": "PLAY_ROUGH",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 18.96551724137931
      },
      {
        "Id": 65,
        "Name": "POWER_GEM",
        "Type": "ROCK",
        "Power": 40,
        "DurationMs": 2900,
        "Energy": -33,
        "DPS": 13.793103448275863
      }
    ]
  },
  {
    "id": 54,
    "name": "PSYDUCK",
    "type1": "WATER",
    "stats": {
      "stamina": 100,
      "attack": 132,
      "defense": 112
    },
    "candy": 50,
    "family": "FAMILY_PSYDUCK",
    "moves1": [
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 23.936170212765955
      },
      {
        "Id": 28,
        "Name": "CROSS_CHOP",
        "Type": "FIGHTING",
        "Power": 60,
        "DurationMs": 2000,
        "Energy": -100,
        "DPS": 30
      },
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 10.526315789473685
      }
    ]
  },
  {
    "id": 55,
    "name": "GOLDUCK",
    "type1": "WATER",
    "stats": {
      "stamina": 160,
      "attack": 194,
      "defense": 176
    },
    "family": "FAMILY_PSYDUCK",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 9.933774834437086
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 39,
        "Name": "ICE_BEAM",
        "Type": "ICE",
        "Power": 65,
        "DurationMs": 3650,
        "Energy": -50,
        "DPS": 17.808219178082194
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 19.642857142857142
      }
    ]
  },
  {
    "id": 56,
    "name": "MANKEY",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 80,
      "attack": 122,
      "defense": 96
    },
    "candy": 50,
    "family": "FAMILY_MANKEY",
    "moves1": [
      {
        "Id": 208,
        "Name": "KARATE_CHOP_FAST",
        "Power": 6,
        "DurationMs": 800,
        "Energy": 7,
        "DPS": 9.375
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 123,
        "Name": "BRICK_BREAK",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 1600,
        "Energy": -33,
        "DPS": 23.4375
      },
      {
        "Id": 28,
        "Name": "CROSS_CHOP",
        "Type": "FIGHTING",
        "Power": 60,
        "DurationMs": 2000,
        "Energy": -100,
        "DPS": 37.5
      },
      {
        "Id": 56,
        "Name": "LOW_SWEEP",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2250,
        "Energy": -25,
        "DPS": 16.666666666666668
      }
    ]
  },
  {
    "id": 57,
    "name": "PRIMEAPE",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 130,
      "attack": 178,
      "defense": 150
    },
    "family": "FAMILY_MANKEY",
    "moves1": [
      {
        "Id": 208,
        "Name": "KARATE_CHOP_FAST",
        "Power": 6,
        "DurationMs": 800,
        "Energy": 7,
        "DPS": 9.375
      },
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 28,
        "Name": "CROSS_CHOP",
        "Type": "FIGHTING",
        "Power": 60,
        "DurationMs": 2000,
        "Energy": -100,
        "DPS": 37.5
      },
      {
        "Id": 56,
        "Name": "LOW_SWEEP",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2250,
        "Energy": -25,
        "DPS": 16.666666666666668
      },
      {
        "Id": 51,
        "Name": "NIGHT_SLASH",
        "Type": "DARK",
        "Power": 30,
        "DurationMs": 2700,
        "Energy": -25,
        "DPS": 11.11111111111111
      }
    ]
  },
  {
    "id": 58,
    "name": "GROWLITHE",
    "type1": "FIRE",
    "stats": {
      "stamina": 110,
      "attack": 156,
      "defense": 110
    },
    "candy": 50,
    "family": "FAMILY_GROWLITHE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 25.64102564102564
      },
      {
        "Id": 21,
        "Name": "FLAME_WHEEL",
        "Type": "FIRE",
        "Power": 40,
        "DurationMs": 4600,
        "Energy": -25,
        "DPS": 10.869565217391306
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 59,
    "name": "ARCANINE",
    "type1": "FIRE",
    "stats": {
      "stamina": 180,
      "attack": 230,
      "defense": 180
    },
    "family": "FAMILY_GROWLITHE",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 240,
        "Name": "FIRE_FANG_FAST",
        "Power": 10,
        "DurationMs": 840,
        "Energy": 4,
        "DPS": 14.880952380952381
      }
    ],
    "moves2": [
      {
        "Id": 95,
        "Name": "BULLDOZE",
        "Type": "GROUND",
        "Power": 35,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 10.294117647058824
      },
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 60,
    "name": "POLIWAG",
    "type1": "WATER",
    "stats": {
      "stamina": 80,
      "attack": 108,
      "defense": 98
    },
    "candy": 25,
    "family": "FAMILY_POLIWAG",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 25.64102564102564
      },
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 96,
        "Name": "MUD_BOMB",
        "Type": "GROUND",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 11.538461538461538
      }
    ]
  },
  {
    "id": 61,
    "name": "POLIWHIRL",
    "type1": "WATER",
    "stats": {
      "stamina": 130,
      "attack": 132,
      "defense": 132
    },
    "candy": 100,
    "family": "FAMILY_POLIWAG",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 96,
        "Name": "MUD_BOMB",
        "Type": "GROUND",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 11.538461538461538
      },
      {
        "Id": 106,
        "Name": "SCALD",
        "Type": "WATER",
        "Power": 55,
        "DurationMs": 4000,
        "Energy": -33,
        "DPS": 17.1875
      }
    ]
  },
  {
    "id": 62,
    "name": "POLIWRATH",
    "type1": "WATER",
    "type2": "FIGHTING",
    "stats": {
      "stamina": 180,
      "attack": 180,
      "defense": 202
    },
    "family": "FAMILY_POLIWAG",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 33,
        "Name": "ICE_PUNCH",
        "Type": "ICE",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 54,
        "Name": "SUBMISSION",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 17.857142857142854
      }
    ]
  },
  {
    "id": 63,
    "name": "ABRA",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 50,
      "attack": 110,
      "defense": 76
    },
    "candy": 25,
    "family": "FAMILY_ABRA",
    "moves1": [
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 14.285714285714286
      }
    ],
    "moves2": [
      {
        "Id": 60,
        "Name": "PSYSHOCK",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      },
      {
        "Id": 99,
        "Name": "SIGNAL_BEAM",
        "Type": "BUG",
        "Power": 45,
        "DurationMs": 3100,
        "Energy": -33,
        "DPS": 14.516129032258064
      }
    ]
  },
  {
    "id": 64,
    "name": "KADABRA",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 80,
      "attack": 150,
      "defense": 112
    },
    "candy": 100,
    "family": "FAMILY_ABRA",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 226,
        "Name": "PSYCHO_CUT_FAST",
        "Power": 7,
        "DurationMs": 570,
        "Energy": 7,
        "DPS": 15.350877192982457
      }
    ],
    "moves2": [
      {
        "Id": 86,
        "Name": "DAZZLING_GLEAM",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 4200,
        "Energy": -33,
        "DPS": 13.095238095238095
      },
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 13.157894736842106
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      }
    ]
  },
  {
    "id": 65,
    "name": "ALAKAZAM",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 110,
      "attack": 186,
      "defense": 152
    },
    "family": "FAMILY_ABRA",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 226,
        "Name": "PSYCHO_CUT_FAST",
        "Power": 7,
        "DurationMs": 570,
        "Energy": 7,
        "DPS": 15.350877192982457
      }
    ],
    "moves2": [
      {
        "Id": 86,
        "Name": "DAZZLING_GLEAM",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 4200,
        "Energy": -33,
        "DPS": 13.095238095238095
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      }
    ]
  },
  {
    "id": 66,
    "name": "MACHOP",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 140,
      "attack": 118,
      "defense": 96
    },
    "candy": 25,
    "family": "FAMILY_MACHOP",
    "moves1": [
      {
        "Id": 208,
        "Name": "KARATE_CHOP_FAST",
        "Power": 6,
        "DurationMs": 800,
        "Energy": 7,
        "DPS": 9.375
      },
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 123,
        "Name": "BRICK_BREAK",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 1600,
        "Energy": -33,
        "DPS": 23.4375
      },
      {
        "Id": 28,
        "Name": "CROSS_CHOP",
        "Type": "FIGHTING",
        "Power": 60,
        "DurationMs": 2000,
        "Energy": -100,
        "DPS": 37.5
      },
      {
        "Id": 56,
        "Name": "LOW_SWEEP",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2250,
        "Energy": -25,
        "DPS": 16.666666666666668
      }
    ]
  },
  {
    "id": 67,
    "name": "MACHOKE",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 160,
      "attack": 154,
      "defense": 144
    },
    "candy": 100,
    "family": "FAMILY_MACHOP",
    "moves1": [
      {
        "Id": 208,
        "Name": "KARATE_CHOP_FAST",
        "Power": 6,
        "DurationMs": 800,
        "Energy": 7,
        "DPS": 9.375
      },
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 123,
        "Name": "BRICK_BREAK",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 1600,
        "Energy": -33,
        "DPS": 23.4375
      },
      {
        "Id": 28,
        "Name": "CROSS_CHOP",
        "Type": "FIGHTING",
        "Power": 60,
        "DurationMs": 2000,
        "Energy": -100,
        "DPS": 37.5
      },
      {
        "Id": 54,
        "Name": "SUBMISSION",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 17.857142857142854
      }
    ]
  },
  {
    "id": 68,
    "name": "MACHAMP",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 180,
      "attack": 198,
      "defense": 180
    },
    "family": "FAMILY_MACHOP",
    "moves1": [
      {
        "Id": 229,
        "Name": "BULLET_PUNCH_FAST",
        "Power": 10,
        "DurationMs": 1200,
        "Energy": 7,
        "DPS": 8.333333333333334
      },
      {
        "Id": 208,
        "Name": "KARATE_CHOP_FAST",
        "Power": 6,
        "DurationMs": 800,
        "Energy": 7,
        "DPS": 9.375
      }
    ],
    "moves2": [
      {
        "Id": 28,
        "Name": "CROSS_CHOP",
        "Type": "FIGHTING",
        "Power": 60,
        "DurationMs": 2000,
        "Energy": -100,
        "DPS": 37.5
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 25.806451612903224
      },
      {
        "Id": 54,
        "Name": "SUBMISSION",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 17.857142857142854
      }
    ]
  },
  {
    "id": 69,
    "name": "BELLSPROUT",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 100,
      "attack": 158,
      "defense": 78
    },
    "candy": 25,
    "family": "FAMILY_BELLSPROUT",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 214,
        "Name": "VINE_WHIP_FAST",
        "Power": 7,
        "DurationMs": 650,
        "Energy": 7,
        "DPS": 13.46153846153846
      }
    ],
    "moves2": [
      {
        "Id": 118,
        "Name": "POWER_WHIP",
        "Type": "GRASS",
        "Power": 70,
        "DurationMs": 2800,
        "Energy": -100,
        "DPS": 31.25
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 13,
        "Name": "WRAP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 4000,
        "Energy": -20,
        "DPS": 6.25
      }
    ]
  },
  {
    "id": 70,
    "name": "WEEPINBELL",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 130,
      "attack": 190,
      "defense": 110
    },
    "candy": 100,
    "family": "FAMILY_BELLSPROUT",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      }
    ],
    "moves2": [
      {
        "Id": 118,
        "Name": "POWER_WHIP",
        "Type": "GRASS",
        "Power": 70,
        "DurationMs": 2800,
        "Energy": -100,
        "DPS": 31.25
      },
      {
        "Id": 59,
        "Name": "SEED_BOMB",
        "Type": "GRASS",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 71,
    "name": "VICTREEBEL",
    "type1": "GRASS",
    "type2": "POISON",
    "stats": {
      "stamina": 160,
      "attack": 222,
      "defense": 152
    },
    "family": "FAMILY_BELLSPROUT",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 215,
        "Name": "RAZOR_LEAF_FAST",
        "Power": 15,
        "DurationMs": 1450,
        "Energy": 7,
        "DPS": 12.931034482758621
      }
    ],
    "moves2": [
      {
        "Id": 117,
        "Name": "LEAF_BLADE",
        "Type": "GRASS",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      }
    ]
  },
  {
    "id": 72,
    "name": "TENTACOOL",
    "type1": "WATER",
    "type2": "POISON",
    "stats": {
      "stamina": 80,
      "attack": 106,
      "defense": 136
    },
    "candy": 50,
    "family": "FAMILY_TENTACOOL",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 236,
        "Name": "POISON_STING_FAST",
        "Power": 6,
        "DurationMs": 575,
        "Energy": 4,
        "DPS": 13.043478260869566
      }
    ],
    "moves2": [
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      },
      {
        "Id": 13,
        "Name": "WRAP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 4000,
        "Energy": -20,
        "DPS": 6.25
      }
    ]
  },
  {
    "id": 73,
    "name": "TENTACRUEL",
    "type1": "WATER",
    "type2": "POISON",
    "stats": {
      "stamina": 160,
      "attack": 170,
      "defense": 196
    },
    "family": "FAMILY_TENTACOOL",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 17.857142857142854
      }
    ],
    "moves2": [
      {
        "Id": 40,
        "Name": "BLIZZARD",
        "Type": "ICE",
        "Power": 100,
        "DurationMs": 3900,
        "Energy": -100,
        "DPS": 25.641025641025642
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 91,
        "Name": "SLUDGE_WAVE",
        "Type": "POISON",
        "Power": 70,
        "DurationMs": 3400,
        "Energy": -100,
        "DPS": 25.73529411764706
      }
    ]
  },
  {
    "id": 74,
    "name": "GEODUDE",
    "type1": "ROCK",
    "type2": "GROUND",
    "stats": {
      "stamina": 80,
      "attack": 106,
      "defense": 118
    },
    "candy": 25,
    "family": "FAMILY_GEODUDE",
    "moves1": [
      {
        "Id": 227,
        "Name": "ROCK_THROW_FAST",
        "Power": 12,
        "DurationMs": 1360,
        "Energy": 7,
        "DPS": 11.02941176470588
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 15.086206896551724
      },
      {
        "Id": 64,
        "Name": "ROCK_SLIDE",
        "Type": "ROCK",
        "Power": 50,
        "DurationMs": 3200,
        "Energy": -33,
        "DPS": 19.53125
      },
      {
        "Id": 63,
        "Name": "ROCK_TOMB",
        "Type": "ROCK",
        "Power": 30,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 11.029411764705884
      }
    ]
  },
  {
    "id": 75,
    "name": "GRAVELER",
    "type1": "ROCK",
    "type2": "GROUND",
    "stats": {
      "stamina": 110,
      "attack": 142,
      "defense": 156
    },
    "candy": 100,
    "family": "FAMILY_GEODUDE",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 13.636363636363635
      },
      {
        "Id": 227,
        "Name": "ROCK_THROW_FAST",
        "Power": 12,
        "DurationMs": 1360,
        "Energy": 7,
        "DPS": 11.02941176470588
      }
    ],
    "moves2": [
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 15.086206896551724
      },
      {
        "Id": 64,
        "Name": "ROCK_SLIDE",
        "Type": "ROCK",
        "Power": 50,
        "DurationMs": 3200,
        "Energy": -33,
        "DPS": 19.53125
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 32.25806451612903
      }
    ]
  },
  {
    "id": 76,
    "name": "GOLEM",
    "type1": "ROCK",
    "type2": "GROUND",
    "stats": {
      "stamina": 160,
      "attack": 176,
      "defense": 198
    },
    "family": "FAMILY_GEODUDE",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 13.636363636363635
      },
      {
        "Id": 227,
        "Name": "ROCK_THROW_FAST",
        "Power": 12,
        "DurationMs": 1360,
        "Energy": 7,
        "DPS": 11.02941176470588
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 12.152777777777777
      },
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 32.25806451612903
      }
    ]
  },
  {
    "id": 77,
    "name": "PONYTA",
    "type1": "FIRE",
    "stats": {
      "stamina": 100,
      "attack": 168,
      "defense": 138
    },
    "candy": 50,
    "family": "FAMILY_PONYTA",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 101,
        "Name": "FLAME_CHARGE",
        "Type": "FIRE",
        "Power": 20,
        "DurationMs": 3100,
        "Energy": -20,
        "DPS": 8.064516129032258
      },
      {
        "Id": 21,
        "Name": "FLAME_WHEEL",
        "Type": "FIRE",
        "Power": 40,
        "DurationMs": 4600,
        "Energy": -25,
        "DPS": 10.869565217391306
      }
    ]
  },
  {
    "id": 78,
    "name": "RAPIDASH",
    "type1": "FIRE",
    "stats": {
      "stamina": 130,
      "attack": 200,
      "defense": 170
    },
    "family": "FAMILY_PONYTA",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 8.333333333333334
      }
    ],
    "moves2": [
      {
        "Id": 46,
        "Name": "DRILL_RUN",
        "Type": "GROUND",
        "Power": 50,
        "DurationMs": 3400,
        "Energy": -33,
        "DPS": 14.705882352941178
      },
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 42,
        "Name": "HEAT_WAVE",
        "Type": "FIRE",
        "Power": 80,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 26.315789473684212
      }
    ]
  },
  {
    "id": 79,
    "name": "SLOWPOKE",
    "type1": "WATER",
    "type2": "PSYCHIC",
    "stats": {
      "stamina": 180,
      "attack": 110,
      "defense": 110
    },
    "candy": 50,
    "family": "FAMILY_SLOWPOKE",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 60,
        "Name": "PSYSHOCK",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 80,
    "name": "SLOWBRO",
    "type1": "WATER",
    "type2": "PSYCHIC",
    "stats": {
      "stamina": 190,
      "attack": 184,
      "defense": 198
    },
    "family": "FAMILY_SLOWPOKE",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 39,
        "Name": "ICE_BEAM",
        "Type": "ICE",
        "Power": 65,
        "DurationMs": 3650,
        "Energy": -50,
        "DPS": 17.808219178082194
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 81,
    "name": "MAGNEMITE",
    "type1": "ELECTRIC",
    "type2": "STEEL",
    "stats": {
      "stamina": 50,
      "attack": 128,
      "defense": 138
    },
    "candy": 50,
    "family": "FAMILY_MAGNEMITE",
    "moves1": [
      {
        "Id": 206,
        "Name": "SPARK_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 12.5
      },
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 72,
        "Name": "MAGNET_BOMB",
        "Type": "STEEL",
        "Power": 30,
        "DurationMs": 2800,
        "Energy": -25,
        "DPS": 13.392857142857144
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 82,
    "name": "MAGNETON",
    "type1": "ELECTRIC",
    "type2": "STEEL",
    "stats": {
      "stamina": 100,
      "attack": 186,
      "defense": 180
    },
    "family": "FAMILY_MAGNEMITE",
    "moves1": [
      {
        "Id": 206,
        "Name": "SPARK_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 12.5
      },
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 36,
        "Name": "FLASH_CANNON",
        "Type": "STEEL",
        "Power": 60,
        "DurationMs": 3900,
        "Energy": -33,
        "DPS": 19.23076923076923
      },
      {
        "Id": 72,
        "Name": "MAGNET_BOMB",
        "Type": "STEEL",
        "Power": 30,
        "DurationMs": 2800,
        "Energy": -25,
        "DPS": 13.392857142857144
      }
    ]
  },
  {
    "id": 83,
    "name": "FARFETCHD",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 104,
      "attack": 138,
      "defense": 132
    },
    "family": "FAMILY_FARFETCHD",
    "moves1": [
      {
        "Id": 223,
        "Name": "CUT_FAST",
        "Power": 12,
        "DurationMs": 1130,
        "Energy": 7,
        "DPS": 13.274336283185841
      },
      {
        "Id": 200,
        "Name": "FURY_CUTTER_FAST",
        "Power": 3,
        "DurationMs": 400,
        "Energy": 12,
        "DPS": 7.5
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 117,
        "Name": "LEAF_BLADE",
        "Type": "GRASS",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 19.642857142857142
      }
    ]
  },
  {
    "id": 84,
    "name": "DODUO",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 70,
      "attack": 126,
      "defense": 96
    },
    "candy": 50,
    "family": "FAMILY_DODUO",
    "moves1": [
      {
        "Id": 211,
        "Name": "PECK_FAST",
        "Power": 10,
        "DurationMs": 1150,
        "Energy": 10,
        "DPS": 10.869565217391306
      },
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 38,
        "Name": "DRILL_PECK",
        "Type": "FLYING",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      },
      {
        "Id": 125,
        "Name": "SWIFT",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 3000,
        "Energy": -25,
        "DPS": 12.5
      }
    ]
  },
  {
    "id": 85,
    "name": "DODRIO",
    "type1": "NORMAL",
    "type2": "FLYING",
    "stats": {
      "stamina": 120,
      "attack": 182,
      "defense": 150
    },
    "family": "FAMILY_DODUO",
    "moves1": [
      {
        "Id": 238,
        "Name": "FEINT_ATTACK_FAST",
        "Power": 12,
        "DurationMs": 1040,
        "Energy": 7,
        "DPS": 11.538461538461538
      },
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      }
    ],
    "moves2": [
      {
        "Id": 45,
        "Name": "AERIAL_ACE",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 121,
        "Name": "AIR_CUTTER",
        "Type": "FLYING",
        "Power": 30,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 11.363636363636365
      },
      {
        "Id": 38,
        "Name": "DRILL_PECK",
        "Type": "FLYING",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      }
    ]
  },
  {
    "id": 86,
    "name": "SEEL",
    "type1": "WATER",
    "stats": {
      "stamina": 130,
      "attack": 104,
      "defense": 138
    },
    "candy": 50,
    "family": "FAMILY_SEEL",
    "moves1": [
      {
        "Id": 217,
        "Name": "ICE_SHARD_FAST",
        "Power": 15,
        "DurationMs": 1400,
        "Energy": 7,
        "DPS": 10.714285714285715
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 57,
        "Name": "AQUA_JET",
        "Type": "WATER",
        "Power": 25,
        "DurationMs": 2350,
        "Energy": -20,
        "DPS": 13.297872340425531
      },
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 23.936170212765955
      },
      {
        "Id": 111,
        "Name": "ICY_WIND",
        "Type": "ICE",
        "Power": 25,
        "DurationMs": 3800,
        "Energy": -20,
        "DPS": 6.578947368421053
      }
    ]
  },
  {
    "id": 87,
    "name": "DEWGONG",
    "type1": "WATER",
    "type2": "ICE",
    "stats": {
      "stamina": 180,
      "attack": 156,
      "defense": 192
    },
    "family": "FAMILY_SEEL",
    "moves1": [
      {
        "Id": 218,
        "Name": "FROST_BREATH_FAST",
        "Power": 9,
        "DurationMs": 810,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 217,
        "Name": "ICE_SHARD_FAST",
        "Power": 15,
        "DurationMs": 1400,
        "Energy": 7,
        "DPS": 13.392857142857144
      }
    ],
    "moves2": [
      {
        "Id": 57,
        "Name": "AQUA_JET",
        "Type": "WATER",
        "Power": 25,
        "DurationMs": 2350,
        "Energy": -20,
        "DPS": 13.297872340425531
      },
      {
        "Id": 40,
        "Name": "BLIZZARD",
        "Type": "ICE",
        "Power": 100,
        "DurationMs": 3900,
        "Energy": -100,
        "DPS": 32.05128205128205
      },
      {
        "Id": 111,
        "Name": "ICY_WIND",
        "Type": "ICE",
        "Power": 25,
        "DurationMs": 3800,
        "Energy": -20,
        "DPS": 8.223684210526317
      }
    ]
  },
  {
    "id": 88,
    "name": "GRIMER",
    "type1": "POISON",
    "stats": {
      "stamina": 160,
      "attack": 124,
      "defense": 110
    },
    "candy": 50,
    "family": "FAMILY_GRIMER",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 233,
        "Name": "MUD_SLAP_FAST",
        "Power": 15,
        "DurationMs": 1350,
        "Energy": 9,
        "DPS": 11.11111111111111
      }
    ],
    "moves2": [
      {
        "Id": 96,
        "Name": "MUD_BOMB",
        "Type": "GROUND",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 11.538461538461538
      },
      {
        "Id": 18,
        "Name": "SLUDGE",
        "Type": "POISON",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 14.423076923076923
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 89,
    "name": "MUK",
    "type1": "POISON",
    "stats": {
      "stamina": 210,
      "attack": 180,
      "defense": 188
    },
    "family": "FAMILY_GRIMER",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 17.857142857142854
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      },
      {
        "Id": 91,
        "Name": "SLUDGE_WAVE",
        "Type": "POISON",
        "Power": 70,
        "DurationMs": 3400,
        "Energy": -100,
        "DPS": 25.73529411764706
      }
    ]
  },
  {
    "id": 90,
    "name": "SHELLDER",
    "type1": "WATER",
    "stats": {
      "stamina": 60,
      "attack": 120,
      "defense": 112
    },
    "candy": 50,
    "family": "FAMILY_SHELLDER",
    "moves1": [
      {
        "Id": 217,
        "Name": "ICE_SHARD_FAST",
        "Power": 15,
        "DurationMs": 1400,
        "Energy": 7,
        "DPS": 10.714285714285715
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 111,
        "Name": "ICY_WIND",
        "Type": "ICE",
        "Power": 25,
        "DurationMs": 3800,
        "Energy": -20,
        "DPS": 6.578947368421053
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 91,
    "name": "CLOYSTER",
    "type1": "WATER",
    "type2": "ICE",
    "stats": {
      "stamina": 100,
      "attack": 196,
      "defense": 196
    },
    "family": "FAMILY_SHELLDER",
    "moves1": [
      {
        "Id": 218,
        "Name": "FROST_BREATH_FAST",
        "Power": 9,
        "DurationMs": 810,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 217,
        "Name": "ICE_SHARD_FAST",
        "Power": 15,
        "DurationMs": 1400,
        "Energy": 7,
        "DPS": 13.392857142857144
      }
    ],
    "moves2": [
      {
        "Id": 40,
        "Name": "BLIZZARD",
        "Type": "ICE",
        "Power": 100,
        "DurationMs": 3900,
        "Energy": -100,
        "DPS": 32.05128205128205
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 111,
        "Name": "ICY_WIND",
        "Type": "ICE",
        "Power": 25,
        "DurationMs": 3800,
        "Energy": -20,
        "DPS": 8.223684210526317
      }
    ]
  },
  {
    "id": 92,
    "name": "GASTLY",
    "type1": "GHOST",
    "type2": "POISON",
    "stats": {
      "stamina": 60,
      "attack": 136,
      "defense": 82
    },
    "candy": 25,
    "family": "FAMILY_GASTLY",
    "moves1": [
      {
        "Id": 212,
        "Name": "LICK_FAST",
        "Power": 5,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12.5
      },
      {
        "Id": 203,
        "Name": "SUCKER_PUNCH_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 10
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 69,
        "Name": "OMINOUS_WIND",
        "Type": "GHOST",
        "Power": 30,
        "DurationMs": 3100,
        "Energy": -25,
        "DPS": 12.096774193548388
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 93,
    "name": "HAUNTER",
    "type1": "GHOST",
    "type2": "POISON",
    "stats": {
      "stamina": 90,
      "attack": 172,
      "defense": 118
    },
    "candy": 100,
    "family": "FAMILY_GASTLY",
    "moves1": [
      {
        "Id": 212,
        "Name": "LICK_FAST",
        "Power": 5,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12.5
      },
      {
        "Id": 213,
        "Name": "SHADOW_CLAW_FAST",
        "Power": 11,
        "DurationMs": 950,
        "Energy": 7,
        "DPS": 14.473684210526317
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 18.26298701298701
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 94,
    "name": "GENGAR",
    "type1": "GHOST",
    "type2": "POISON",
    "stats": {
      "stamina": 120,
      "attack": 204,
      "defense": 156
    },
    "family": "FAMILY_GASTLY",
    "moves1": [
      {
        "Id": 213,
        "Name": "SHADOW_CLAW_FAST",
        "Power": 11,
        "DurationMs": 950,
        "Energy": 7,
        "DPS": 14.473684210526317
      },
      {
        "Id": 203,
        "Name": "SUCKER_PUNCH_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 10
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 18.26298701298701
      },
      {
        "Id": 91,
        "Name": "SLUDGE_WAVE",
        "Type": "POISON",
        "Power": 70,
        "DurationMs": 3400,
        "Energy": -100,
        "DPS": 25.73529411764706
      }
    ]
  },
  {
    "id": 95,
    "name": "ONIX",
    "type1": "ROCK",
    "type2": "GROUND",
    "stats": {
      "stamina": 70,
      "attack": 90,
      "defense": 186
    },
    "family": "FAMILY_ONIX",
    "moves1": [
      {
        "Id": 227,
        "Name": "ROCK_THROW_FAST",
        "Power": 12,
        "DurationMs": 1360,
        "Energy": 7,
        "DPS": 11.02941176470588
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 74,
        "Name": "IRON_HEAD",
        "Type": "STEEL",
        "Power": 30,
        "DurationMs": 2000,
        "Energy": -33,
        "DPS": 15
      },
      {
        "Id": 64,
        "Name": "ROCK_SLIDE",
        "Type": "ROCK",
        "Power": 50,
        "DurationMs": 3200,
        "Energy": -33,
        "DPS": 19.53125
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 32.25806451612903
      }
    ]
  },
  {
    "id": 96,
    "name": "DROWZEE",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 120,
      "attack": 104,
      "defense": 140
    },
    "candy": 50,
    "family": "FAMILY_DROWZEE",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 12.962962962962962
      }
    ],
    "moves2": [
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 13.157894736842106
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 60,
        "Name": "PSYSHOCK",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      }
    ]
  },
  {
    "id": 97,
    "name": "HYPNO",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 170,
      "attack": 162,
      "defense": 196
    },
    "family": "FAMILY_DROWZEE",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 14.285714285714286
      }
    ],
    "moves2": [
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 60,
        "Name": "PSYSHOCK",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      }
    ]
  },
  {
    "id": 98,
    "name": "KRABBY",
    "type1": "WATER",
    "stats": {
      "stamina": 60,
      "attack": 116,
      "defense": 110
    },
    "candy": 50,
    "family": "FAMILY_KRABBY",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 20,
        "Name": "VICE_GRIP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2100,
        "Energy": -20,
        "DPS": 11.904761904761905
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 99,
    "name": "KINGLER",
    "type1": "WATER",
    "stats": {
      "stamina": 110,
      "attack": 178,
      "defense": 168
    },
    "family": "FAMILY_KRABBY",
    "moves1": [
      {
        "Id": 228,
        "Name": "METAL_CLAW_FAST",
        "Power": 8,
        "DurationMs": 630,
        "Energy": 7,
        "DPS": 12.698412698412698
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 20,
        "Name": "VICE_GRIP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2100,
        "Energy": -20,
        "DPS": 11.904761904761905
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      },
      {
        "Id": 100,
        "Name": "X_SCISSOR",
        "Type": "BUG",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 16.666666666666664
      }
    ]
  },
  {
    "id": 100,
    "name": "VOLTORB",
    "type1": "ELECTRIC",
    "stats": {
      "stamina": 80,
      "attack": 102,
      "defense": 124
    },
    "candy": 50,
    "family": "FAMILY_VOLTORB",
    "moves1": [
      {
        "Id": 206,
        "Name": "SPARK_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 12.5
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 99,
        "Name": "SIGNAL_BEAM",
        "Type": "BUG",
        "Power": 45,
        "DurationMs": 3100,
        "Energy": -33,
        "DPS": 14.516129032258064
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 101,
    "name": "ELECTRODE",
    "type1": "ELECTRIC",
    "stats": {
      "stamina": 120,
      "attack": 150,
      "defense": 174
    },
    "family": "FAMILY_VOLTORB",
    "moves1": [
      {
        "Id": 206,
        "Name": "SPARK_FAST",
        "Power": 7,
        "DurationMs": 700,
        "Energy": 4,
        "DPS": 12.5
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 24
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 102,
    "name": "EXEGGCUTE",
    "type1": "GRASS",
    "type2": "PSYCHIC",
    "stats": {
      "stamina": 120,
      "attack": 110,
      "defense": 132
    },
    "candy": 50,
    "family": "FAMILY_EXEGGCUTE",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 9.722222222222221
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 59,
        "Name": "SEED_BOMB",
        "Type": "GRASS",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      }
    ]
  },
  {
    "id": 103,
    "name": "EXEGGUTOR",
    "type1": "GRASS",
    "type2": "PSYCHIC",
    "stats": {
      "stamina": 190,
      "attack": 232,
      "defense": 164
    },
    "family": "FAMILY_EXEGGCUTE",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 14.285714285714286
      }
    ],
    "moves2": [
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 59,
        "Name": "SEED_BOMB",
        "Type": "GRASS",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      }
    ]
  },
  {
    "id": 104,
    "name": "CUBONE",
    "type1": "GROUND",
    "stats": {
      "stamina": 100,
      "attack": 102,
      "defense": 150
    },
    "candy": 50,
    "family": "FAMILY_CUBONE",
    "moves1": [
      {
        "Id": 233,
        "Name": "MUD_SLAP_FAST",
        "Power": 15,
        "DurationMs": 1350,
        "Energy": 9,
        "DPS": 13.88888888888889
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 10.638297872340425
      }
    ],
    "moves2": [
      {
        "Id": 94,
        "Name": "BONE_CLUB",
        "Type": "GROUND",
        "Power": 25,
        "DurationMs": 1600,
        "Energy": -25,
        "DPS": 19.53125
      },
      {
        "Id": 95,
        "Name": "BULLDOZE",
        "Type": "GROUND",
        "Power": 35,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 12.86764705882353
      },
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 15.086206896551724
      }
    ]
  },
  {
    "id": 105,
    "name": "MAROWAK",
    "type1": "GROUND",
    "stats": {
      "stamina": 120,
      "attack": 140,
      "defense": 202
    },
    "family": "FAMILY_CUBONE",
    "moves1": [
      {
        "Id": 233,
        "Name": "MUD_SLAP_FAST",
        "Power": 15,
        "DurationMs": 1350,
        "Energy": 9,
        "DPS": 13.88888888888889
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 10.638297872340425
      }
    ],
    "moves2": [
      {
        "Id": 94,
        "Name": "BONE_CLUB",
        "Type": "GROUND",
        "Power": 25,
        "DurationMs": 1600,
        "Energy": -25,
        "DPS": 19.53125
      },
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 15.086206896551724
      },
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      }
    ]
  },
  {
    "id": 106,
    "name": "HITMONLEE",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 100,
      "attack": 148,
      "defense": 172
    },
    "family": "FAMILY_HITMONLEE",
    "moves1": [
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 13.297872340425531
      }
    ],
    "moves2": [
      {
        "Id": 56,
        "Name": "LOW_SWEEP",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2250,
        "Energy": -25,
        "DPS": 16.666666666666668
      },
      {
        "Id": 127,
        "Name": "STOMP",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -25,
        "DPS": 14.285714285714285
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 25.806451612903224
      }
    ]
  },
  {
    "id": 107,
    "name": "HITMONCHAN",
    "type1": "FIGHTING",
    "stats": {
      "stamina": 100,
      "attack": 138,
      "defense": 204
    },
    "family": "FAMILY_HITMONCHAN",
    "moves1": [
      {
        "Id": 229,
        "Name": "BULLET_PUNCH_FAST",
        "Power": 10,
        "DurationMs": 1200,
        "Energy": 7,
        "DPS": 8.333333333333334
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 13.297872340425531
      }
    ],
    "moves2": [
      {
        "Id": 123,
        "Name": "BRICK_BREAK",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 1600,
        "Energy": -33,
        "DPS": 23.4375
      },
      {
        "Id": 115,
        "Name": "FIRE_PUNCH",
        "Type": "FIRE",
        "Power": 40,
        "DurationMs": 2800,
        "Energy": -33,
        "DPS": 14.285714285714286
      },
      {
        "Id": 33,
        "Name": "ICE_PUNCH",
        "Type": "ICE",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 77,
        "Name": "THUNDER_PUNCH",
        "Type": "ELECTRIC",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 16.666666666666668
      }
    ]
  },
  {
    "id": 108,
    "name": "LICKITUNG",
    "type1": "NORMAL",
    "stats": {
      "stamina": 180,
      "attack": 126,
      "defense": 160
    },
    "family": "FAMILY_LICKITUNG",
    "moves1": [
      {
        "Id": 212,
        "Name": "LICK_FAST",
        "Power": 5,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 10
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 30
      },
      {
        "Id": 118,
        "Name": "POWER_WHIP",
        "Type": "GRASS",
        "Power": 70,
        "DurationMs": 2800,
        "Energy": -100,
        "DPS": 25
      },
      {
        "Id": 127,
        "Name": "STOMP",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -25,
        "DPS": 17.857142857142854
      }
    ]
  },
  {
    "id": 109,
    "name": "KOFFING",
    "type1": "POISON",
    "stats": {
      "stamina": 80,
      "attack": 136,
      "defense": 142
    },
    "candy": 50,
    "family": "FAMILY_KOFFING",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 18,
        "Name": "SLUDGE",
        "Type": "POISON",
        "Power": 30,
        "DurationMs": 2600,
        "Energy": -25,
        "DPS": 14.423076923076923
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 110,
    "name": "WEEZING",
    "type1": "POISON",
    "stats": {
      "stamina": 130,
      "attack": 190,
      "defense": 198
    },
    "family": "FAMILY_KOFFING",
    "moves1": [
      {
        "Id": 225,
        "Name": "ACID_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 16,
        "Name": "DARK_PULSE",
        "Type": "DARK",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 12.857142857142858
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 26.442307692307693
      }
    ]
  },
  {
    "id": 111,
    "name": "RHYHORN",
    "type1": "GROUND",
    "type2": "ROCK",
    "stats": {
      "stamina": 160,
      "attack": 110,
      "defense": 116
    },
    "candy": 50,
    "family": "FAMILY_RHYHORN",
    "moves1": [
      {
        "Id": 233,
        "Name": "MUD_SLAP_FAST",
        "Power": 15,
        "DurationMs": 1350,
        "Energy": 9,
        "DPS": 13.88888888888889
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 10.638297872340425
      }
    ],
    "moves2": [
      {
        "Id": 95,
        "Name": "BULLDOZE",
        "Type": "GROUND",
        "Power": 35,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 12.86764705882353
      },
      {
        "Id": 126,
        "Name": "HORN_ATTACK",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2200,
        "Energy": -25,
        "DPS": 11.363636363636363
      },
      {
        "Id": 127,
        "Name": "STOMP",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -25,
        "DPS": 14.285714285714285
      }
    ]
  },
  {
    "id": 112,
    "name": "RHYDON",
    "type1": "GROUND",
    "type2": "ROCK",
    "stats": {
      "stamina": 210,
      "attack": 166,
      "defense": 160
    },
    "family": "FAMILY_RHYHORN",
    "moves1": [
      {
        "Id": 233,
        "Name": "MUD_SLAP_FAST",
        "Power": 15,
        "DurationMs": 1350,
        "Energy": 9,
        "DPS": 13.88888888888889
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 10.638297872340425
      }
    ],
    "moves2": [
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 29.761904761904763
      },
      {
        "Id": 22,
        "Name": "MEGAHORN",
        "Type": "BUG",
        "Power": 80,
        "DurationMs": 3200,
        "Energy": -100,
        "DPS": 25
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 32.25806451612903
      }
    ]
  },
  {
    "id": 113,
    "name": "CHANSEY",
    "type1": "NORMAL",
    "stats": {
      "stamina": 500,
      "attack": 40,
      "defense": 60
    },
    "family": "FAMILY_CHANSEY",
    "moves1": [
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 16.203703703703702
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 86,
        "Name": "DAZZLING_GLEAM",
        "Type": "FAIRY",
        "Power": 55,
        "DurationMs": 4200,
        "Energy": -33,
        "DPS": 13.095238095238095
      },
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 10.526315789473685
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 19.642857142857142
      }
    ]
  },
  {
    "id": 114,
    "name": "TANGELA",
    "type1": "GRASS",
    "stats": {
      "stamina": 130,
      "attack": 164,
      "defense": 152
    },
    "family": "FAMILY_TANGELA",
    "moves1": [
      {
        "Id": 214,
        "Name": "VINE_WHIP_FAST",
        "Power": 7,
        "DurationMs": 650,
        "Energy": 7,
        "DPS": 13.46153846153846
      }
    ],
    "moves2": [
      {
        "Id": 118,
        "Name": "POWER_WHIP",
        "Type": "GRASS",
        "Power": 70,
        "DurationMs": 2800,
        "Energy": -100,
        "DPS": 31.25
      },
      {
        "Id": 90,
        "Name": "SLUDGE_BOMB",
        "Type": "POISON",
        "Power": 55,
        "DurationMs": 2600,
        "Energy": -50,
        "DPS": 21.153846153846153
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 30.612244897959183
      }
    ]
  },
  {
    "id": 115,
    "name": "KANGASKHAN",
    "type1": "NORMAL",
    "stats": {
      "stamina": 210,
      "attack": 142,
      "defense": 178
    },
    "family": "FAMILY_KANGASKHAN",
    "moves1": [
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 8.333333333333334
      },
      {
        "Id": 233,
        "Name": "MUD_SLAP_FAST",
        "Power": 15,
        "DurationMs": 1350,
        "Energy": 9,
        "DPS": 11.11111111111111
      }
    ],
    "moves2": [
      {
        "Id": 123,
        "Name": "BRICK_BREAK",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 1600,
        "Energy": -33,
        "DPS": 18.75
      },
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 23.80952380952381
      },
      {
        "Id": 127,
        "Name": "STOMP",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -25,
        "DPS": 17.857142857142854
      }
    ]
  },
  {
    "id": 116,
    "name": "HORSEA",
    "type1": "WATER",
    "stats": {
      "stamina": 60,
      "attack": 122,
      "defense": 100
    },
    "candy": 50,
    "family": "FAMILY_HORSEA",
    "moves1": [
      {
        "Id": 237,
        "Name": "BUBBLE_FAST",
        "Power": 25,
        "DurationMs": 2300,
        "Energy": 15,
        "DPS": 13.58695652173913
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 18.055555555555554
      },
      {
        "Id": 36,
        "Name": "FLASH_CANNON",
        "Type": "STEEL",
        "Power": 60,
        "DurationMs": 3900,
        "Energy": -33,
        "DPS": 15.384615384615385
      }
    ]
  },
  {
    "id": 117,
    "name": "SEADRA",
    "type1": "WATER",
    "stats": {
      "stamina": 110,
      "attack": 176,
      "defense": 150
    },
    "family": "FAMILY_HORSEA",
    "moves1": [
      {
        "Id": 204,
        "Name": "DRAGON_BREATH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 40,
        "Name": "BLIZZARD",
        "Type": "ICE",
        "Power": 100,
        "DurationMs": 3900,
        "Energy": -100,
        "DPS": 25.641025641025642
      },
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 18.055555555555554
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      }
    ]
  },
  {
    "id": 118,
    "name": "GOLDEEN",
    "type1": "WATER",
    "stats": {
      "stamina": 90,
      "attack": 112,
      "defense": 126
    },
    "candy": 50,
    "family": "FAMILY_GOLDEEN",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      },
      {
        "Id": 211,
        "Name": "PECK_FAST",
        "Power": 10,
        "DurationMs": 1150,
        "Energy": 10,
        "DPS": 8.695652173913045
      }
    ],
    "moves2": [
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 23.936170212765955
      },
      {
        "Id": 126,
        "Name": "HORN_ATTACK",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2200,
        "Energy": -25,
        "DPS": 11.363636363636363
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 119,
    "name": "SEAKING",
    "type1": "WATER",
    "stats": {
      "stamina": 160,
      "attack": 172,
      "defense": 160
    },
    "family": "FAMILY_GOLDEEN",
    "moves1": [
      {
        "Id": 211,
        "Name": "PECK_FAST",
        "Power": 10,
        "DurationMs": 1150,
        "Energy": 10,
        "DPS": 8.695652173913045
      },
      {
        "Id": 224,
        "Name": "POISON_JAB_FAST",
        "Power": 15,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 14.285714285714285
      }
    ],
    "moves2": [
      {
        "Id": 46,
        "Name": "DRILL_RUN",
        "Type": "GROUND",
        "Power": 50,
        "DurationMs": 3400,
        "Energy": -33,
        "DPS": 14.705882352941178
      },
      {
        "Id": 111,
        "Name": "ICY_WIND",
        "Type": "ICE",
        "Power": 25,
        "DurationMs": 3800,
        "Energy": -20,
        "DPS": 6.578947368421053
      },
      {
        "Id": 22,
        "Name": "MEGAHORN",
        "Type": "BUG",
        "Power": 80,
        "DurationMs": 3200,
        "Energy": -100,
        "DPS": 25
      }
    ]
  },
  {
    "id": 120,
    "name": "STARYU",
    "type1": "WATER",
    "stats": {
      "stamina": 60,
      "attack": 130,
      "defense": 128
    },
    "candy": 50,
    "family": "FAMILY_STARYU",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 7.518796992481203
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 53,
        "Name": "BUBBLE_BEAM",
        "Type": "WATER",
        "Power": 30,
        "DurationMs": 2900,
        "Energy": -25,
        "DPS": 12.931034482758621
      },
      {
        "Id": 65,
        "Name": "POWER_GEM",
        "Type": "ROCK",
        "Power": 40,
        "DurationMs": 2900,
        "Energy": -33,
        "DPS": 13.793103448275863
      },
      {
        "Id": 125,
        "Name": "SWIFT",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 3000,
        "Energy": -25,
        "DPS": 10
      }
    ]
  },
  {
    "id": 121,
    "name": "STARMIE",
    "type1": "WATER",
    "type2": "PSYCHIC",
    "stats": {
      "stamina": 120,
      "attack": 194,
      "defense": 192
    },
    "family": "FAMILY_STARYU",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 7.518796992481203
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 65,
        "Name": "POWER_GEM",
        "Type": "ROCK",
        "Power": 40,
        "DurationMs": 2900,
        "Energy": -33,
        "DPS": 13.793103448275863
      },
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 13.157894736842106
      }
    ]
  },
  {
    "id": 122,
    "name": "MR_MIME",
    "type1": "PSYCHIC",
    "type2": "FAIRY",
    "stats": {
      "stamina": 80,
      "attack": 154,
      "defense": 196
    },
    "family": "FAMILY_MR_MIME",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 14.285714285714286
      }
    ],
    "moves2": [
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 13.157894736842106
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      }
    ]
  },
  {
    "id": 123,
    "name": "SCYTHER",
    "type1": "BUG",
    "type2": "FLYING",
    "stats": {
      "stamina": 140,
      "attack": 176,
      "defense": 180
    },
    "family": "FAMILY_SCYTHER",
    "moves1": [
      {
        "Id": 200,
        "Name": "FURY_CUTTER_FAST",
        "Power": 3,
        "DurationMs": 400,
        "Energy": 12,
        "DPS": 9.375
      },
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      }
    ],
    "moves2": [
      {
        "Id": 49,
        "Name": "BUG_BUZZ",
        "Type": "BUG",
        "Power": 75,
        "DurationMs": 4250,
        "Energy": -50,
        "DPS": 22.058823529411768
      },
      {
        "Id": 51,
        "Name": "NIGHT_SLASH",
        "Type": "DARK",
        "Power": 30,
        "DurationMs": 2700,
        "Energy": -25,
        "DPS": 11.11111111111111
      },
      {
        "Id": 100,
        "Name": "X_SCISSOR",
        "Type": "BUG",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 124,
    "name": "JYNX",
    "type1": "ICE",
    "type2": "PSYCHIC",
    "stats": {
      "stamina": 130,
      "attack": 172,
      "defense": 134
    },
    "family": "FAMILY_JYNX",
    "moves1": [
      {
        "Id": 218,
        "Name": "FROST_BREATH_FAST",
        "Power": 9,
        "DurationMs": 810,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 12.962962962962962
      }
    ],
    "moves2": [
      {
        "Id": 85,
        "Name": "DRAINING_KISS",
        "Type": "FAIRY",
        "Power": 25,
        "DurationMs": 2800,
        "Energy": -20,
        "DPS": 8.928571428571429
      },
      {
        "Id": 33,
        "Name": "ICE_PUNCH",
        "Type": "ICE",
        "Power": 45,
        "DurationMs": 3500,
        "Energy": -33,
        "DPS": 16.071428571428573
      },
      {
        "Id": 60,
        "Name": "PSYSHOCK",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 2700,
        "Energy": -33,
        "DPS": 18.518518518518515
      }
    ]
  },
  {
    "id": 125,
    "name": "ELECTABUZZ",
    "type1": "ELECTRIC",
    "stats": {
      "stamina": 130,
      "attack": 198,
      "defense": 160
    },
    "family": "FAMILY_ELECTABUZZ",
    "moves1": [
      {
        "Id": 207,
        "Name": "LOW_KICK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 8.333333333333334
      },
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 78,
        "Name": "THUNDER",
        "Type": "ELECTRIC",
        "Power": 100,
        "DurationMs": 4300,
        "Energy": -100,
        "DPS": 29.069767441860467
      },
      {
        "Id": 77,
        "Name": "THUNDER_PUNCH",
        "Type": "ELECTRIC",
        "Power": 40,
        "DurationMs": 2400,
        "Energy": -33,
        "DPS": 20.833333333333336
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 126,
    "name": "MAGMAR",
    "type1": "FIRE",
    "stats": {
      "stamina": 130,
      "attack": 214,
      "defense": 158
    },
    "family": "FAMILY_MAGMAR",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      },
      {
        "Id": 208,
        "Name": "KARATE_CHOP_FAST",
        "Power": 6,
        "DurationMs": 800,
        "Energy": 7,
        "DPS": 7.5
      }
    ],
    "moves2": [
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 115,
        "Name": "FIRE_PUNCH",
        "Type": "FIRE",
        "Power": 40,
        "DurationMs": 2800,
        "Energy": -33,
        "DPS": 17.857142857142858
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      }
    ]
  },
  {
    "id": 127,
    "name": "PINSIR",
    "type1": "BUG",
    "stats": {
      "stamina": 130,
      "attack": 184,
      "defense": 186
    },
    "family": "FAMILY_PINSIR",
    "moves1": [
      {
        "Id": 200,
        "Name": "FURY_CUTTER_FAST",
        "Power": 3,
        "DurationMs": 400,
        "Energy": 12,
        "DPS": 9.375
      },
      {
        "Id": 241,
        "Name": "ROCK_SMASH_FAST",
        "Power": 15,
        "DurationMs": 1410,
        "Energy": 7,
        "DPS": 10.638297872340425
      }
    ],
    "moves2": [
      {
        "Id": 54,
        "Name": "SUBMISSION",
        "Type": "FIGHTING",
        "Power": 30,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 14.285714285714285
      },
      {
        "Id": 20,
        "Name": "VICE_GRIP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2100,
        "Energy": -20,
        "DPS": 11.904761904761905
      },
      {
        "Id": 100,
        "Name": "X_SCISSOR",
        "Type": "BUG",
        "Power": 35,
        "DurationMs": 2100,
        "Energy": -33,
        "DPS": 20.83333333333333
      }
    ]
  },
  {
    "id": 128,
    "name": "TAUROS",
    "type1": "NORMAL",
    "stats": {
      "stamina": 150,
      "attack": 148,
      "defense": 184
    },
    "family": "FAMILY_TAUROS",
    "moves1": [
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 13.636363636363635
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 23.80952380952381
      },
      {
        "Id": 126,
        "Name": "HORN_ATTACK",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 2200,
        "Energy": -25,
        "DPS": 14.204545454545453
      },
      {
        "Id": 74,
        "Name": "IRON_HEAD",
        "Type": "STEEL",
        "Power": 30,
        "DurationMs": 2000,
        "Energy": -33,
        "DPS": 15
      }
    ]
  },
  {
    "id": 129,
    "name": "MAGIKARP",
    "type1": "WATER",
    "stats": {
      "stamina": 40,
      "attack": 42,
      "defense": 84
    },
    "candy": 400,
    "family": "FAMILY_MAGIKARP",
    "moves1": [
      {
        "Id": 231,
        "Name": "SPLASH_FAST",
        "DurationMs": 1230,
        "Energy": 7,
        "DPS": null
      }
    ],
    "moves2": [
      {
        "Id": 133,
        "Name": "STRUGGLE",
        "Type": "NORMAL",
        "Power": 15,
        "DurationMs": 1695,
        "Energy": -20,
        "DPS": 8.849557522123893
      }
    ]
  },
  {
    "id": 130,
    "name": "GYARADOS",
    "type1": "WATER",
    "type2": "FLYING",
    "stats": {
      "stamina": 190,
      "attack": 192,
      "defense": 196
    },
    "family": "FAMILY_MAGIKARP",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 204,
        "Name": "DRAGON_BREATH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 18.055555555555554
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 80,
        "Name": "TWISTER",
        "Type": "DRAGON",
        "Power": 25,
        "DurationMs": 2700,
        "Energy": -20,
        "DPS": 9.25925925925926
      }
    ]
  },
  {
    "id": 131,
    "name": "LAPRAS",
    "type1": "WATER",
    "type2": "ICE",
    "stats": {
      "stamina": 260,
      "attack": 186,
      "defense": 190
    },
    "family": "FAMILY_LAPRAS",
    "moves1": [
      {
        "Id": 218,
        "Name": "FROST_BREATH_FAST",
        "Power": 9,
        "DurationMs": 810,
        "Energy": 7,
        "DPS": 13.88888888888889
      },
      {
        "Id": 217,
        "Name": "ICE_SHARD_FAST",
        "Power": 15,
        "DurationMs": 1400,
        "Energy": 7,
        "DPS": 13.392857142857144
      }
    ],
    "moves2": [
      {
        "Id": 40,
        "Name": "BLIZZARD",
        "Type": "ICE",
        "Power": 100,
        "DurationMs": 3900,
        "Energy": -100,
        "DPS": 32.05128205128205
      },
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 18.055555555555554
      },
      {
        "Id": 39,
        "Name": "ICE_BEAM",
        "Type": "ICE",
        "Power": 65,
        "DurationMs": 3650,
        "Energy": -50,
        "DPS": 22.260273972602743
      }
    ]
  },
  {
    "id": 132,
    "name": "DITTO",
    "type1": "NORMAL",
    "stats": {
      "stamina": 96,
      "attack": 110,
      "defense": 110
    },
    "family": "FAMILY_DITTO",
    "moves1": [
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 16.203703703703702
      }
    ],
    "moves2": [
      {
        "Id": 133,
        "Name": "STRUGGLE",
        "Type": "NORMAL",
        "Power": 15,
        "DurationMs": 1695,
        "Energy": -20,
        "DPS": 11.061946902654867
      }
    ]
  },
  {
    "id": 133,
    "name": "EEVEE",
    "type1": "NORMAL",
    "stats": {
      "stamina": 110,
      "attack": 114,
      "defense": 128
    },
    "candy": 25,
    "family": "FAMILY_EEVEE",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 13.636363636363635
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 32.05128205128205
      },
      {
        "Id": 26,
        "Name": "DIG",
        "Type": "GROUND",
        "Power": 70,
        "DurationMs": 5800,
        "Energy": -33,
        "DPS": 12.068965517241379
      },
      {
        "Id": 125,
        "Name": "SWIFT",
        "Type": "NORMAL",
        "Power": 30,
        "DurationMs": 3000,
        "Energy": -25,
        "DPS": 12.5
      }
    ]
  },
  {
    "id": 134,
    "name": "VAPOREON",
    "type1": "WATER",
    "stats": {
      "stamina": 260,
      "attack": 186,
      "defense": 168
    },
    "family": "FAMILY_EEVEE",
    "moves1": [
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 23.936170212765955
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 135,
    "name": "JOLTEON",
    "type1": "ELECTRIC",
    "stats": {
      "stamina": 130,
      "attack": 192,
      "defense": 174
    },
    "family": "FAMILY_EEVEE",
    "moves1": [
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 78,
        "Name": "THUNDER",
        "Type": "ELECTRIC",
        "Power": 100,
        "DurationMs": 4300,
        "Energy": -100,
        "DPS": 29.069767441860467
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 136,
    "name": "FLAREON",
    "type1": "FIRE",
    "stats": {
      "stamina": 130,
      "attack": 238,
      "defense": 178
    },
    "family": "FAMILY_EEVEE",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      }
    ],
    "moves2": [
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      },
      {
        "Id": 42,
        "Name": "HEAT_WAVE",
        "Type": "FIRE",
        "Power": 80,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 26.315789473684212
      }
    ]
  },
  {
    "id": 137,
    "name": "PORYGON",
    "type1": "NORMAL",
    "stats": {
      "stamina": 130,
      "attack": 156,
      "defense": 158
    },
    "family": "FAMILY_PORYGON",
    "moves1": [
      {
        "Id": 219,
        "Name": "QUICK_ATTACK_FAST",
        "Power": 10,
        "DurationMs": 1330,
        "Energy": 7,
        "DPS": 9.398496240601503
      },
      {
        "Id": 221,
        "Name": "TACKLE_FAST",
        "Power": 12,
        "DurationMs": 1100,
        "Energy": 7,
        "DPS": 13.636363636363635
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 14
      },
      {
        "Id": 30,
        "Name": "PSYBEAM",
        "Type": "PSYCHIC",
        "Power": 40,
        "DurationMs": 3800,
        "Energy": -25,
        "DPS": 10.526315789473685
      },
      {
        "Id": 99,
        "Name": "SIGNAL_BEAM",
        "Type": "BUG",
        "Power": 45,
        "DurationMs": 3100,
        "Energy": -33,
        "DPS": 14.516129032258064
      }
    ]
  },
  {
    "id": 138,
    "name": "OMANYTE",
    "type1": "ROCK",
    "type2": "WATER",
    "stats": {
      "stamina": 70,
      "attack": 132,
      "defense": 160
    },
    "candy": 50,
    "family": "FAMILY_OMANYTE",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 12.152777777777777
      },
      {
        "Id": 104,
        "Name": "BRINE",
        "Type": "WATER",
        "Power": 15,
        "DurationMs": 2400,
        "Energy": -25,
        "DPS": 7.8125
      },
      {
        "Id": 63,
        "Name": "ROCK_TOMB",
        "Type": "ROCK",
        "Power": 30,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 11.029411764705884
      }
    ]
  },
  {
    "id": 139,
    "name": "OMASTAR",
    "type1": "ROCK",
    "type2": "WATER",
    "stats": {
      "stamina": 140,
      "attack": 180,
      "defense": 202
    },
    "family": "FAMILY_OMANYTE",
    "moves1": [
      {
        "Id": 227,
        "Name": "ROCK_THROW_FAST",
        "Power": 12,
        "DurationMs": 1360,
        "Energy": 7,
        "DPS": 11.02941176470588
      },
      {
        "Id": 230,
        "Name": "WATER_GUN_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 12.152777777777777
      },
      {
        "Id": 107,
        "Name": "HYDRO_PUMP",
        "Type": "WATER",
        "Power": 90,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 29.60526315789474
      },
      {
        "Id": 64,
        "Name": "ROCK_SLIDE",
        "Type": "ROCK",
        "Power": 50,
        "DurationMs": 3200,
        "Energy": -33,
        "DPS": 19.53125
      }
    ]
  },
  {
    "id": 140,
    "name": "KABUTO",
    "type1": "ROCK",
    "type2": "WATER",
    "stats": {
      "stamina": 60,
      "attack": 148,
      "defense": 142
    },
    "candy": 50,
    "family": "FAMILY_KABUTO",
    "moves1": [
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      },
      {
        "Id": 220,
        "Name": "SCRATCH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 12.152777777777777
      },
      {
        "Id": 57,
        "Name": "AQUA_JET",
        "Type": "WATER",
        "Power": 25,
        "DurationMs": 2350,
        "Energy": -20,
        "DPS": 13.297872340425531
      },
      {
        "Id": 63,
        "Name": "ROCK_TOMB",
        "Type": "ROCK",
        "Power": 30,
        "DurationMs": 3400,
        "Energy": -25,
        "DPS": 11.029411764705884
      }
    ]
  },
  {
    "id": 141,
    "name": "KABUTOPS",
    "type1": "ROCK",
    "type2": "WATER",
    "stats": {
      "stamina": 120,
      "attack": 190,
      "defense": 190
    },
    "family": "FAMILY_KABUTO",
    "moves1": [
      {
        "Id": 200,
        "Name": "FURY_CUTTER_FAST",
        "Power": 3,
        "DurationMs": 400,
        "Energy": 12,
        "DPS": 7.5
      },
      {
        "Id": 216,
        "Name": "MUD_SHOT_FAST",
        "Power": 6,
        "DurationMs": 550,
        "Energy": 7,
        "DPS": 10.909090909090908
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 12.152777777777777
      },
      {
        "Id": 32,
        "Name": "STONE_EDGE",
        "Type": "ROCK",
        "Power": 80,
        "DurationMs": 3100,
        "Energy": -100,
        "DPS": 32.25806451612903
      },
      {
        "Id": 105,
        "Name": "WATER_PULSE",
        "Type": "WATER",
        "Power": 35,
        "DurationMs": 3300,
        "Energy": -25,
        "DPS": 13.25757575757576
      }
    ]
  },
  {
    "id": 142,
    "name": "AERODACTYL",
    "type1": "ROCK",
    "type2": "FLYING",
    "stats": {
      "stamina": 160,
      "attack": 182,
      "defense": 162
    },
    "family": "FAMILY_AERODACTYL",
    "moves1": [
      {
        "Id": 202,
        "Name": "BITE_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 12
      },
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      }
    ],
    "moves2": [
      {
        "Id": 62,
        "Name": "ANCIENT_POWER",
        "Type": "ROCK",
        "Power": 35,
        "DurationMs": 3600,
        "Energy": -25,
        "DPS": 12.152777777777777
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 24
      },
      {
        "Id": 74,
        "Name": "IRON_HEAD",
        "Type": "STEEL",
        "Power": 30,
        "DurationMs": 2000,
        "Energy": -33,
        "DPS": 15
      }
    ]
  },
  {
    "id": 143,
    "name": "SNORLAX",
    "type1": "NORMAL",
    "stats": {
      "stamina": 320,
      "attack": 180,
      "defense": 180
    },
    "family": "FAMILY_SNORLAX",
    "moves1": [
      {
        "Id": 212,
        "Name": "LICK_FAST",
        "Power": 5,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 10
      },
      {
        "Id": 234,
        "Name": "ZEN_HEADBUTT_FAST",
        "Power": 12,
        "DurationMs": 1050,
        "Energy": 4,
        "DPS": 11.428571428571429
      }
    ],
    "moves2": [
      {
        "Id": 131,
        "Name": "BODY_SLAM",
        "Type": "NORMAL",
        "Power": 40,
        "DurationMs": 1560,
        "Energy": -50,
        "DPS": 32.05128205128205
      },
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 23.80952380952381
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 30
      }
    ]
  },
  {
    "id": 144,
    "name": "ARTICUNO",
    "type1": "ICE",
    "type2": "FLYING",
    "stats": {
      "stamina": 180,
      "attack": 198,
      "defense": 242
    },
    "family": "FAMILY_ARTICUNO",
    "moves1": [
      {
        "Id": 218,
        "Name": "FROST_BREATH_FAST",
        "Power": 9,
        "DurationMs": 810,
        "Energy": 7,
        "DPS": 13.88888888888889
      }
    ],
    "moves2": [
      {
        "Id": 40,
        "Name": "BLIZZARD",
        "Type": "ICE",
        "Power": 100,
        "DurationMs": 3900,
        "Energy": -100,
        "DPS": 32.05128205128205
      },
      {
        "Id": 39,
        "Name": "ICE_BEAM",
        "Type": "ICE",
        "Power": 65,
        "DurationMs": 3650,
        "Energy": -50,
        "DPS": 22.260273972602743
      },
      {
        "Id": 111,
        "Name": "ICY_WIND",
        "Type": "ICE",
        "Power": 25,
        "DurationMs": 3800,
        "Energy": -20,
        "DPS": 8.223684210526317
      }
    ]
  },
  {
    "id": 145,
    "name": "ZAPDOS",
    "type1": "ELECTRIC",
    "type2": "FLYING",
    "stats": {
      "stamina": 180,
      "attack": 232,
      "defense": 194
    },
    "family": "FAMILY_ZAPDOS",
    "moves1": [
      {
        "Id": 205,
        "Name": "THUNDER_SHOCK_FAST",
        "Power": 5,
        "DurationMs": 600,
        "Energy": 7,
        "DPS": 10.416666666666668
      }
    ],
    "moves2": [
      {
        "Id": 35,
        "Name": "DISCHARGE",
        "Type": "ELECTRIC",
        "Power": 35,
        "DurationMs": 2500,
        "Energy": -33,
        "DPS": 17.5
      },
      {
        "Id": 78,
        "Name": "THUNDER",
        "Type": "ELECTRIC",
        "Power": 100,
        "DurationMs": 4300,
        "Energy": -100,
        "DPS": 29.069767441860467
      },
      {
        "Id": 79,
        "Name": "THUNDERBOLT",
        "Type": "ELECTRIC",
        "Power": 55,
        "DurationMs": 2700,
        "Energy": -50,
        "DPS": 25.462962962962962
      }
    ]
  },
  {
    "id": 146,
    "name": "MOLTRES",
    "type1": "FIRE",
    "type2": "FLYING",
    "stats": {
      "stamina": 180,
      "attack": 242,
      "defense": 194
    },
    "family": "FAMILY_MOLTRES",
    "moves1": [
      {
        "Id": 209,
        "Name": "EMBER_FAST",
        "Power": 10,
        "DurationMs": 1050,
        "Energy": 7,
        "DPS": 11.904761904761905
      }
    ],
    "moves2": [
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 30.48780487804878
      },
      {
        "Id": 24,
        "Name": "FLAMETHROWER",
        "Type": "FIRE",
        "Power": 55,
        "DurationMs": 2900,
        "Energy": -50,
        "DPS": 23.706896551724135
      },
      {
        "Id": 42,
        "Name": "HEAT_WAVE",
        "Type": "FIRE",
        "Power": 80,
        "DurationMs": 3800,
        "Energy": -100,
        "DPS": 26.315789473684212
      }
    ]
  },
  {
    "id": 147,
    "name": "DRATINI",
    "type1": "DRAGON",
    "stats": {
      "stamina": 82,
      "attack": 128,
      "defense": 110
    },
    "candy": 25,
    "family": "FAMILY_DRATINI",
    "moves1": [
      {
        "Id": 204,
        "Name": "DRAGON_BREATH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 19.148936170212764
      },
      {
        "Id": 80,
        "Name": "TWISTER",
        "Type": "DRAGON",
        "Power": 25,
        "DurationMs": 2700,
        "Energy": -20,
        "DPS": 11.574074074074074
      },
      {
        "Id": 13,
        "Name": "WRAP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 4000,
        "Energy": -20,
        "DPS": 6.25
      }
    ]
  },
  {
    "id": 148,
    "name": "DRAGONAIR",
    "type1": "DRAGON",
    "stats": {
      "stamina": 122,
      "attack": 170,
      "defense": 152
    },
    "candy": 100,
    "family": "FAMILY_DRATINI",
    "moves1": [
      {
        "Id": 204,
        "Name": "DRAGON_BREATH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      }
    ],
    "moves2": [
      {
        "Id": 58,
        "Name": "AQUA_TAIL",
        "Type": "WATER",
        "Power": 45,
        "DurationMs": 2350,
        "Energy": -50,
        "DPS": 19.148936170212764
      },
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 22.569444444444443
      },
      {
        "Id": 13,
        "Name": "WRAP",
        "Type": "NORMAL",
        "Power": 25,
        "DurationMs": 4000,
        "Energy": -20,
        "DPS": 6.25
      }
    ]
  },
  {
    "id": 149,
    "name": "DRAGONITE",
    "type1": "DRAGON",
    "type2": "FLYING",
    "stats": {
      "stamina": 182,
      "attack": 250,
      "defense": 212
    },
    "family": "FAMILY_DRATINI",
    "moves1": [
      {
        "Id": 204,
        "Name": "DRAGON_BREATH_FAST",
        "Power": 6,
        "DurationMs": 500,
        "Energy": 7,
        "DPS": 15
      },
      {
        "Id": 239,
        "Name": "STEEL_WING_FAST",
        "Power": 15,
        "DurationMs": 1330,
        "Energy": 4,
        "DPS": 11.278195488721805
      }
    ],
    "moves2": [
      {
        "Id": 83,
        "Name": "DRAGON_CLAW",
        "Type": "DRAGON",
        "Power": 35,
        "DurationMs": 1500,
        "Energy": -50,
        "DPS": 29.166666666666664
      },
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 22.569444444444443
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 24
      }
    ]
  },
  {
    "id": 150,
    "name": "MEWTWO",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 212,
      "attack": 284,
      "defense": 202
    },
    "family": "FAMILY_MEWTWO",
    "moves1": [
      {
        "Id": 235,
        "Name": "CONFUSION_FAST",
        "Power": 15,
        "DurationMs": 1510,
        "Energy": 7,
        "DPS": 12.417218543046358
      },
      {
        "Id": 226,
        "Name": "PSYCHO_CUT_FAST",
        "Power": 7,
        "DurationMs": 570,
        "Energy": 7,
        "DPS": 15.350877192982457
      }
    ],
    "moves2": [
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 24
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 70,
        "Name": "SHADOW_BALL",
        "Type": "GHOST",
        "Power": 45,
        "DurationMs": 3080,
        "Energy": -33,
        "DPS": 14.61038961038961
      }
    ]
  },
  {
    "id": 151,
    "name": "MEW",
    "type1": "PSYCHIC",
    "stats": {
      "stamina": 200,
      "attack": 220,
      "defense": 220
    },
    "family": "FAMILY_MEW",
    "moves1": [
      {
        "Id": 222,
        "Name": "POUND_FAST",
        "Power": 7,
        "DurationMs": 540,
        "Energy": 7,
        "DPS": 12.962962962962962
      }
    ],
    "moves2": [
      {
        "Id": 82,
        "Name": "DRAGON_PULSE",
        "Type": "DRAGON",
        "Power": 65,
        "DurationMs": 3600,
        "Energy": -50,
        "DPS": 18.055555555555554
      },
      {
        "Id": 31,
        "Name": "EARTHQUAKE",
        "Type": "GROUND",
        "Power": 100,
        "DurationMs": 4200,
        "Energy": -100,
        "DPS": 23.80952380952381
      },
      {
        "Id": 103,
        "Name": "FIRE_BLAST",
        "Type": "FIRE",
        "Power": 100,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 24.390243902439025
      },
      {
        "Id": 122,
        "Name": "HURRICANE",
        "Type": "FLYING",
        "Power": 80,
        "DurationMs": 3200,
        "Energy": -100,
        "DPS": 25
      },
      {
        "Id": 14,
        "Name": "HYPER_BEAM",
        "Type": "NORMAL",
        "Power": 120,
        "DurationMs": 5000,
        "Energy": -100,
        "DPS": 24
      },
      {
        "Id": 87,
        "Name": "MOONBLAST",
        "Type": "FAIRY",
        "Power": 85,
        "DurationMs": 4100,
        "Energy": -100,
        "DPS": 20.731707317073173
      },
      {
        "Id": 108,
        "Name": "PSYCHIC",
        "Type": "PSYCHIC",
        "Power": 55,
        "DurationMs": 2800,
        "Energy": -50,
        "DPS": 24.553571428571427
      },
      {
        "Id": 116,
        "Name": "SOLAR_BEAM",
        "Type": "GRASS",
        "Power": 120,
        "DurationMs": 4900,
        "Energy": -100,
        "DPS": 24.489795918367346
      },
      {
        "Id": 78,
        "Name": "THUNDER",
        "Type": "ELECTRIC",
        "Power": 100,
        "DurationMs": 4300,
        "Energy": -100,
        "DPS": 23.255813953488374
      }
    ]
  }
];