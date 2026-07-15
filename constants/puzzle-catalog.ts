import { CATALOG_PUZZLES_PER_DIFFICULTY } from '../types/game';
import type { Difficulty, Puzzle } from '../types/game';

const CATALOG_PUZZLES: Record<Difficulty, readonly Puzzle[]> = {
  "easy": [
    {
      "seed": 101,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "F",
          "K",
          "H",
          "N",
          "H",
          "O",
          "E",
          "Q",
          "Q",
          "A"
        ],
        [
          "H",
          "M",
          "I",
          "J",
          "X",
          "M",
          "S",
          "D",
          "M",
          "P"
        ],
        [
          "L",
          "R",
          "P",
          "U",
          "Z",
          "Z",
          "L",
          "E",
          "D",
          "T"
        ],
        [
          "L",
          "U",
          "C",
          "A",
          "N",
          "Y",
          "O",
          "N",
          "R",
          "U"
        ],
        [
          "I",
          "J",
          "X",
          "E",
          "N",
          "O",
          "N",
          "H",
          "A",
          "F"
        ],
        [
          "B",
          "M",
          "P",
          "Z",
          "E",
          "B",
          "R",
          "A",
          "G",
          "K"
        ],
        [
          "R",
          "F",
          "D",
          "E",
          "S",
          "E",
          "R",
          "T",
          "O",
          "T"
        ],
        [
          "A",
          "H",
          "R",
          "O",
          "C",
          "K",
          "E",
          "T",
          "N",
          "G"
        ],
        [
          "R",
          "A",
          "B",
          "B",
          "I",
          "T",
          "H",
          "X",
          "E",
          "K"
        ],
        [
          "Y",
          "K",
          "O",
          "R",
          "B",
          "I",
          "T",
          "B",
          "G",
          "L"
        ]
      ],
      "words": [
        {
          "text": "CANYON",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 3,
            "col": 7
          },
          "cells": [
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 6,
            "col": 2
          },
          "end": {
            "row": 6,
            "col": 7
          },
          "cells": [
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 2,
            "col": 8
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "LIBRARY",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 0
          },
          "cells": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "ORBIT",
          "start": {
            "row": 9,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "cells": [
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "PUZZLE",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 2,
            "col": 7
          },
          "cells": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "RABBIT",
          "start": {
            "row": 8,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 5
          },
          "cells": [
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "cells": [
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 4,
            "col": 6
          },
          "cells": [
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 5,
            "col": 3
          },
          "end": {
            "row": 5,
            "col": 7
          },
          "cells": [
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 102,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "K",
          "D",
          "T",
          "O",
          "P",
          "A",
          "Z",
          "D",
          "M",
          "G"
        ],
        [
          "T",
          "R",
          "P",
          "C",
          "A",
          "S",
          "T",
          "L",
          "E",
          "A"
        ],
        [
          "C",
          "A",
          "I",
          "K",
          "E",
          "Y",
          "E",
          "S",
          "C",
          "M"
        ],
        [
          "T",
          "G",
          "C",
          "A",
          "Y",
          "H",
          "S",
          "U",
          "R",
          "C"
        ],
        [
          "H",
          "O",
          "N",
          "G",
          "S",
          "F",
          "O",
          "B",
          "A",
          "C"
        ],
        [
          "U",
          "N",
          "I",
          "Z",
          "A",
          "V",
          "R",
          "A",
          "T",
          "A"
        ],
        [
          "N",
          "N",
          "C",
          "P",
          "L",
          "L",
          "O",
          "N",
          "E",
          "N"
        ],
        [
          "D",
          "J",
          "M",
          "O",
          "R",
          "C",
          "H",
          "A",
          "R",
          "D"
        ],
        [
          "E",
          "S",
          "D",
          "Y",
          "I",
          "B",
          "H",
          "N",
          "G",
          "L"
        ],
        [
          "R",
          "R",
          "Q",
          "U",
          "E",
          "S",
          "T",
          "A",
          "G",
          "E"
        ]
      ],
      "words": [
        {
          "text": "BANANA",
          "start": {
            "row": 4,
            "col": 7
          },
          "end": {
            "row": 9,
            "col": 7
          },
          "cells": [
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "CANDLE",
          "start": {
            "row": 4,
            "col": 9
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "cells": [
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "CASTLE",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 1,
            "col": 8
          },
          "cells": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 2,
            "col": 8
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 5,
            "col": 1
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 6,
            "col": 2
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 9,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "cells": [
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "THUNDER",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 0
          },
          "cells": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "TOPAZ",
          "start": {
            "row": 0,
            "col": 2
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 103,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "E",
          "K",
          "U",
          "C",
          "A",
          "S",
          "T",
          "L",
          "E",
          "W"
        ],
        [
          "R",
          "O",
          "C",
          "K",
          "E",
          "T",
          "L",
          "E",
          "W",
          "F"
        ],
        [
          "L",
          "C",
          "K",
          "H",
          "O",
          "P",
          "U",
          "B",
          "H",
          "Y"
        ],
        [
          "G",
          "K",
          "R",
          "C",
          "R",
          "U",
          "A",
          "R",
          "A",
          "M"
        ],
        [
          "A",
          "X",
          "J",
          "M",
          "C",
          "Z",
          "Q",
          "I",
          "L",
          "A"
        ],
        [
          "L",
          "H",
          "K",
          "F",
          "H",
          "Z",
          "U",
          "D",
          "E",
          "R"
        ],
        [
          "A",
          "T",
          "K",
          "I",
          "A",
          "L",
          "A",
          "G",
          "P",
          "B"
        ],
        [
          "X",
          "E",
          "I",
          "W",
          "R",
          "E",
          "R",
          "E",
          "T",
          "L"
        ],
        [
          "Y",
          "F",
          "W",
          "G",
          "D",
          "U",
          "T",
          "U",
          "R",
          "E"
        ],
        [
          "T",
          "M",
          "I",
          "P",
          "U",
          "M",
          "Z",
          "P",
          "U",
          "G"
        ]
      ],
      "words": [
        {
          "text": "BRIDGE",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "cells": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "CASTLE",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 0,
            "col": 8
          },
          "cells": [
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "GALAXY",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 0
          },
          "cells": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "KIWI",
          "start": {
            "row": 6,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 2
          },
          "cells": [
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 3,
            "col": 9
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "cells": [
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 8,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 2,
            "col": 4
          },
          "end": {
            "row": 8,
            "col": 4
          },
          "cells": [
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "PUZZLE",
          "start": {
            "row": 2,
            "col": 5
          },
          "end": {
            "row": 7,
            "col": 5
          },
          "cells": [
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 4,
            "col": 6
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "cells": [
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 1,
            "col": 5
          },
          "cells": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "WHALE",
          "start": {
            "row": 1,
            "col": 8
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "cells": [
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 104,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "Q",
          "F",
          "O",
          "R",
          "E",
          "S",
          "T",
          "L",
          "G",
          "H"
        ],
        [
          "V",
          "D",
          "O",
          "L",
          "P",
          "H",
          "I",
          "N",
          "H",
          "A"
        ],
        [
          "A",
          "X",
          "C",
          "B",
          "K",
          "S",
          "N",
          "P",
          "E",
          "R"
        ],
        [
          "L",
          "J",
          "K",
          "V",
          "X",
          "F",
          "S",
          "A",
          "X",
          "B"
        ],
        [
          "L",
          "V",
          "V",
          "T",
          "C",
          "A",
          "P",
          "N",
          "B",
          "O"
        ],
        [
          "E",
          "N",
          "O",
          "O",
          "A",
          "W",
          "I",
          "D",
          "B",
          "R"
        ],
        [
          "Y",
          "D",
          "Y",
          "P",
          "S",
          "V",
          "R",
          "A",
          "G",
          "Y"
        ],
        [
          "L",
          "G",
          "A",
          "A",
          "T",
          "V",
          "E",
          "B",
          "I",
          "J"
        ],
        [
          "J",
          "G",
          "G",
          "Z",
          "L",
          "V",
          "J",
          "B",
          "F",
          "D"
        ],
        [
          "C",
          "T",
          "E",
          "S",
          "E",
          "Z",
          "E",
          "B",
          "R",
          "A"
        ]
      ],
      "words": [
        {
          "text": "CASTLE",
          "start": {
            "row": 4,
            "col": 4
          },
          "end": {
            "row": 9,
            "col": 4
          },
          "cells": [
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 1,
            "col": 1
          },
          "end": {
            "row": 1,
            "col": 7
          },
          "cells": [
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "FOREST",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 0,
            "col": 9
          },
          "end": {
            "row": 5,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 1,
            "col": 6
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "PANDA",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 6,
            "col": 7
          },
          "cells": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "TOPAZ",
          "start": {
            "row": 4,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 3
          },
          "cells": [
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 8,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "VALLEY",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "cells": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 2
          },
          "cells": [
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 9,
            "col": 5
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "cells": [
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 105,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "P",
          "O",
          "M",
          "R",
          "A",
          "U",
          "T",
          "U",
          "M",
          "N"
        ],
        [
          "S",
          "R",
          "D",
          "C",
          "S",
          "Q",
          "Q",
          "I",
          "L",
          "X"
        ],
        [
          "U",
          "B",
          "I",
          "A",
          "P",
          "V",
          "H",
          "N",
          "B",
          "Z"
        ],
        [
          "M",
          "I",
          "A",
          "S",
          "R",
          "Z",
          "A",
          "S",
          "R",
          "P"
        ],
        [
          "M",
          "T",
          "M",
          "T",
          "I",
          "S",
          "R",
          "P",
          "E",
          "Y"
        ],
        [
          "E",
          "D",
          "O",
          "L",
          "N",
          "J",
          "B",
          "I",
          "E",
          "B"
        ],
        [
          "R",
          "E",
          "N",
          "E",
          "G",
          "K",
          "O",
          "R",
          "Z",
          "F"
        ],
        [
          "J",
          "I",
          "D",
          "R",
          "A",
          "P",
          "R",
          "E",
          "E",
          "R"
        ],
        [
          "W",
          "L",
          "M",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M"
        ],
        [
          "J",
          "T",
          "L",
          "F",
          "F",
          "N",
          "Q",
          "F",
          "G",
          "H"
        ]
      ],
      "words": [
        {
          "text": "AUTUMN",
          "start": {
            "row": 0,
            "col": 4
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "BREEZE",
          "start": {
            "row": 2,
            "col": 8
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "CASTLE",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 6,
            "col": 3
          },
          "cells": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 7,
            "col": 2
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 8,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "cells": [
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 2,
            "col": 6
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 1,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "cells": [
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "ORBIT",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 4,
            "col": 1
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 1,
            "col": 4
          },
          "end": {
            "row": 6,
            "col": 4
          },
          "cells": [
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "SUMMER",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "cells": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 106,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "H",
          "F",
          "B",
          "L",
          "X",
          "X",
          "E",
          "N",
          "O",
          "N"
        ],
        [
          "E",
          "T",
          "H",
          "U",
          "N",
          "D",
          "E",
          "R",
          "I",
          "C"
        ],
        [
          "M",
          "U",
          "K",
          "Y",
          "D",
          "R",
          "A",
          "G",
          "O",
          "N"
        ],
        [
          "E",
          "S",
          "P",
          "R",
          "I",
          "N",
          "G",
          "O",
          "I",
          "U"
        ],
        [
          "R",
          "K",
          "C",
          "C",
          "C",
          "H",
          "E",
          "R",
          "R",
          "Y"
        ],
        [
          "A",
          "N",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M",
          "X"
        ],
        [
          "L",
          "I",
          "B",
          "R",
          "A",
          "R",
          "Y",
          "C",
          "T",
          "E"
        ],
        [
          "D",
          "V",
          "R",
          "M",
          "O",
          "N",
          "S",
          "O",
          "O",
          "N"
        ],
        [
          "Y",
          "Z",
          "U",
          "T",
          "Z",
          "K",
          "F",
          "T",
          "E",
          "X"
        ],
        [
          "F",
          "P",
          "U",
          "A",
          "P",
          "I",
          "C",
          "N",
          "I",
          "C"
        ]
      ],
      "words": [
        {
          "text": "CHERRY",
          "start": {
            "row": 4,
            "col": 4
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "cells": [
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 2,
            "col": 4
          },
          "end": {
            "row": 2,
            "col": 9
          },
          "cells": [
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "EMERALD",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 7,
            "col": 0
          },
          "cells": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 5,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "cells": [
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "LIBRARY",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 6
          },
          "cells": [
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "MONSOON",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "cells": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 3,
            "col": 1
          },
          "end": {
            "row": 3,
            "col": 6
          },
          "cells": [
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "THUNDER",
          "start": {
            "row": 1,
            "col": 1
          },
          "end": {
            "row": 1,
            "col": 7
          },
          "cells": [
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 0,
            "col": 5
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 107,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "Y",
          "X",
          "S",
          "D",
          "T",
          "I",
          "G",
          "E",
          "R",
          "S"
        ],
        [
          "E",
          "Z",
          "L",
          "E",
          "M",
          "O",
          "N",
          "W",
          "H",
          "A"
        ],
        [
          "R",
          "M",
          "E",
          "S",
          "R",
          "R",
          "B",
          "J",
          "G",
          "P"
        ],
        [
          "T",
          "B",
          "R",
          "E",
          "A",
          "O",
          "A",
          "R",
          "A",
          "I"
        ],
        [
          "K",
          "K",
          "A",
          "R",
          "H",
          "I",
          "N",
          "I",
          "L",
          "C"
        ],
        [
          "M",
          "I",
          "I",
          "T",
          "T",
          "E",
          "A",
          "S",
          "A",
          "N"
        ],
        [
          "K",
          "T",
          "N",
          "E",
          "H",
          "N",
          "N",
          "L",
          "X",
          "I"
        ],
        [
          "C",
          "T",
          "B",
          "H",
          "N",
          "O",
          "A",
          "A",
          "Y",
          "C"
        ],
        [
          "S",
          "E",
          "O",
          "R",
          "R",
          "X",
          "E",
          "N",
          "O",
          "N"
        ],
        [
          "V",
          "N",
          "W",
          "Y",
          "S",
          "Y",
          "D",
          "D",
          "I",
          "Z"
        ]
      ],
      "words": [
        {
          "text": "BANANA",
          "start": {
            "row": 2,
            "col": 6
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 5,
            "col": 3
          },
          "cells": [
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "GALAXY",
          "start": {
            "row": 2,
            "col": 8
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ISLAND",
          "start": {
            "row": 4,
            "col": 7
          },
          "end": {
            "row": 9,
            "col": 7
          },
          "cells": [
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 4,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 1
          },
          "cells": [
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 1,
            "col": 6
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 2,
            "col": 9
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "RAINBOW",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 2
          },
          "cells": [
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "TIGER",
          "start": {
            "row": 0,
            "col": 4
          },
          "end": {
            "row": 0,
            "col": 8
          },
          "cells": [
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 8,
            "col": 5
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "cells": [
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 108,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "E",
          "I",
          "H",
          "W",
          "W",
          "Z",
          "Q",
          "R",
          "P",
          "C"
        ],
        [
          "L",
          "G",
          "L",
          "B",
          "H",
          "P",
          "M",
          "F",
          "A",
          "E"
        ],
        [
          "E",
          "O",
          "I",
          "R",
          "A",
          "U",
          "S",
          "U",
          "U",
          "E"
        ],
        [
          "M",
          "O",
          "O",
          "I",
          "L",
          "Z",
          "X",
          "S",
          "T",
          "S"
        ],
        [
          "E",
          "R",
          "N",
          "D",
          "E",
          "Z",
          "J",
          "U",
          "U",
          "G"
        ],
        [
          "N",
          "C",
          "O",
          "G",
          "G",
          "L",
          "O",
          "K",
          "M",
          "C"
        ],
        [
          "T",
          "H",
          "D",
          "E",
          "P",
          "E",
          "F",
          "Y",
          "N",
          "R"
        ],
        [
          "A",
          "A",
          "Z",
          "E",
          "P",
          "H",
          "Y",
          "R",
          "S",
          "I"
        ],
        [
          "X",
          "R",
          "S",
          "N",
          "S",
          "H",
          "A",
          "D",
          "O",
          "W"
        ],
        [
          "D",
          "D",
          "M",
          "L",
          "O",
          "R",
          "A",
          "N",
          "G",
          "E"
        ]
      ],
      "words": [
        {
          "text": "AUTUMN",
          "start": {
            "row": 1,
            "col": 8
          },
          "end": {
            "row": 6,
            "col": 8
          },
          "cells": [
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "BRIDGE",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 6,
            "col": 3
          },
          "cells": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "ELEMENT",
          "start": {
            "row": 0,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "cells": [
            {
              "row": 0,
              "col": 0
            },
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "LION",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 4,
            "col": 2
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "cells": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 3,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 1
          },
          "cells": [
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "PUZZLE",
          "start": {
            "row": 1,
            "col": 5
          },
          "end": {
            "row": 6,
            "col": 5
          },
          "cells": [
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "SHADOW",
          "start": {
            "row": 8,
            "col": 4
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "cells": [
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "WHALE",
          "start": {
            "row": 0,
            "col": 4
          },
          "end": {
            "row": 4,
            "col": 4
          },
          "cells": [
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "cells": [
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 109,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "Z",
          "H",
          "A",
          "R",
          "B",
          "O",
          "R",
          "V",
          "V",
          "O"
        ],
        [
          "B",
          "P",
          "U",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M"
        ],
        [
          "O",
          "R",
          "C",
          "H",
          "A",
          "R",
          "D",
          "G",
          "X",
          "U"
        ],
        [
          "Q",
          "I",
          "N",
          "S",
          "P",
          "I",
          "R",
          "E",
          "I",
          "P"
        ],
        [
          "P",
          "A",
          "P",
          "A",
          "Y",
          "A",
          "W",
          "M",
          "R",
          "E"
        ],
        [
          "U",
          "V",
          "U",
          "T",
          "W",
          "R",
          "Q",
          "E",
          "K",
          "A"
        ],
        [
          "P",
          "U",
          "Z",
          "Z",
          "L",
          "E",
          "E",
          "R",
          "Z",
          "C"
        ],
        [
          "Z",
          "Y",
          "E",
          "L",
          "L",
          "O",
          "W",
          "A",
          "V",
          "H"
        ],
        [
          "O",
          "R",
          "A",
          "N",
          "G",
          "E",
          "B",
          "L",
          "M",
          "K"
        ],
        [
          "K",
          "T",
          "C",
          "U",
          "D",
          "E",
          "H",
          "D",
          "I",
          "I"
        ]
      ],
      "words": [
        {
          "text": "EMERALD",
          "start": {
            "row": 3,
            "col": 7
          },
          "end": {
            "row": 9,
            "col": 7
          },
          "cells": [
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 1,
            "col": 9
          },
          "cells": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 1,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 3,
            "col": 1
          },
          "end": {
            "row": 3,
            "col": 7
          },
          "cells": [
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 8,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 5
          },
          "cells": [
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 2,
            "col": 6
          },
          "cells": [
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "PAPAYA",
          "start": {
            "row": 4,
            "col": 0
          },
          "end": {
            "row": 4,
            "col": 5
          },
          "cells": [
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 3,
            "col": 9
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PUZZLE",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 5
          },
          "cells": [
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "YELLOW",
          "start": {
            "row": 7,
            "col": 1
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 110,
      "difficulty": "easy",
      "size": 10,
      "grid": [
        [
          "M",
          "Z",
          "C",
          "L",
          "O",
          "U",
          "D",
          "V",
          "V",
          "Y"
        ],
        [
          "N",
          "I",
          "O",
          "R",
          "C",
          "H",
          "I",
          "D",
          "S",
          "H"
        ],
        [
          "L",
          "O",
          "O",
          "O",
          "S",
          "G",
          "I",
          "W",
          "B",
          "M"
        ],
        [
          "P",
          "R",
          "F",
          "S",
          "U",
          "M",
          "M",
          "E",
          "R",
          "Y"
        ],
        [
          "A",
          "C",
          "Q",
          "B",
          "A",
          "L",
          "A",
          "N",
          "C",
          "E"
        ],
        [
          "S",
          "H",
          "B",
          "W",
          "I",
          "N",
          "T",
          "E",
          "R",
          "S"
        ],
        [
          "S",
          "A",
          "A",
          "A",
          "R",
          "Z",
          "C",
          "W",
          "V",
          "Y"
        ],
        [
          "I",
          "R",
          "O",
          "G",
          "M",
          "A",
          "N",
          "G",
          "O",
          "N"
        ],
        [
          "O",
          "D",
          "R",
          "A",
          "I",
          "N",
          "B",
          "O",
          "W",
          "E"
        ],
        [
          "N",
          "V",
          "F",
          "E",
          "M",
          "E",
          "R",
          "A",
          "L",
          "D"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 4,
            "col": 3
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "cells": [
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "CLOUD",
          "start": {
            "row": 0,
            "col": 2
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "EMERALD",
          "start": {
            "row": 9,
            "col": 3
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "cells": [
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "MANGO",
          "start": {
            "row": 7,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 2,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 1
          },
          "cells": [
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "ORCHID",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 1,
            "col": 7
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "PASSION",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 0
          },
          "cells": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "RAINBOW",
          "start": {
            "row": 8,
            "col": 2
          },
          "end": {
            "row": 8,
            "col": 8
          },
          "cells": [
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "SUMMER",
          "start": {
            "row": 3,
            "col": 3
          },
          "end": {
            "row": 3,
            "col": 8
          },
          "cells": [
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "WINTER",
          "start": {
            "row": 5,
            "col": 3
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "cells": [
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            }
          ],
          "found": false
        }
      ]
    }
  ],
  "medium": [
    {
      "seed": 201,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "Y",
          "O",
          "R",
          "C",
          "H",
          "A",
          "R",
          "D",
          "I",
          "H",
          "E",
          "M",
          "E",
          "A"
        ],
        [
          "C",
          "A",
          "P",
          "H",
          "B",
          "T",
          "C",
          "F",
          "Z",
          "C",
          "M",
          "L",
          "L",
          "A"
        ],
        [
          "L",
          "J",
          "L",
          "W",
          "C",
          "B",
          "F",
          "C",
          "R",
          "T",
          "G",
          "U",
          "O",
          "W"
        ],
        [
          "S",
          "E",
          "L",
          "M",
          "O",
          "S",
          "T",
          "E",
          "L",
          "A",
          "B",
          "W",
          "O",
          "C"
        ],
        [
          "M",
          "I",
          "I",
          "S",
          "S",
          "S",
          "D",
          "H",
          "E",
          "E",
          "O",
          "D",
          "Z",
          "C"
        ],
        [
          "I",
          "P",
          "Q",
          "S",
          "E",
          "N",
          "Q",
          "H",
          "N",
          "R",
          "A",
          "V",
          "E",
          "Q"
        ],
        [
          "Y",
          "S",
          "H",
          "U",
          "U",
          "H",
          "M",
          "D",
          "R",
          "H",
          "A",
          "Q",
          "C",
          "X"
        ],
        [
          "M",
          "T",
          "Q",
          "H",
          "G",
          "F",
          "T",
          "A",
          "S",
          "Z",
          "S",
          "I",
          "J",
          "I"
        ],
        [
          "V",
          "Y",
          "T",
          "T",
          "J",
          "R",
          "P",
          "P",
          "A",
          "W",
          "E",
          "J",
          "D",
          "Y"
        ],
        [
          "V",
          "N",
          "F",
          "K",
          "X",
          "S",
          "V",
          "A",
          "E",
          "W",
          "Y",
          "B",
          "A",
          "L"
        ],
        [
          "V",
          "F",
          "S",
          "F",
          "X",
          "E",
          "N",
          "O",
          "N",
          "A",
          "K",
          "M",
          "R",
          "H"
        ],
        [
          "B",
          "N",
          "D",
          "C",
          "E",
          "P",
          "Q",
          "F",
          "P",
          "R",
          "R",
          "N",
          "Q",
          "A"
        ],
        [
          "L",
          "A",
          "N",
          "D",
          "M",
          "A",
          "R",
          "K",
          "C",
          "L",
          "L",
          "D",
          "J",
          "E"
        ],
        [
          "Y",
          "J",
          "T",
          "A",
          "B",
          "A",
          "L",
          "A",
          "N",
          "C",
          "E",
          "F",
          "U",
          "K"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 13,
            "col": 4
          },
          "end": {
            "row": 13,
            "col": 10
          },
          "cells": [
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "EAGLE",
          "start": {
            "row": 4,
            "col": 8
          },
          "end": {
            "row": 0,
            "col": 12
          },
          "cells": [
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 0,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "LANDMARK",
          "start": {
            "row": 12,
            "col": 0
          },
          "end": {
            "row": 12,
            "col": 7
          },
          "cells": [
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "NEBULA",
          "start": {
            "row": 5,
            "col": 8
          },
          "end": {
            "row": 0,
            "col": 13
          },
          "cells": [
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 2,
              "col": 11
            },
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 7
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "PEAR",
          "start": {
            "row": 8,
            "col": 7
          },
          "end": {
            "row": 11,
            "col": 10
          },
          "cells": [
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 3,
            "col": 6
          },
          "cells": [
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "SHADOW",
          "start": {
            "row": 7,
            "col": 8
          },
          "end": {
            "row": 2,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 9,
            "col": 5
          },
          "end": {
            "row": 3,
            "col": 11
          },
          "cells": [
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 3,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "THUNDER",
          "start": {
            "row": 8,
            "col": 2
          },
          "end": {
            "row": 2,
            "col": 8
          },
          "cells": [
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 8
          },
          "cells": [
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 7,
            "col": 9
          },
          "end": {
            "row": 11,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 13
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 202,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "S",
          "S",
          "I",
          "C",
          "D",
          "O",
          "H",
          "T",
          "E",
          "J",
          "V",
          "L",
          "S",
          "Y"
        ],
        [
          "D",
          "U",
          "W",
          "Y",
          "B",
          "A",
          "L",
          "A",
          "N",
          "C",
          "E",
          "Z",
          "A",
          "R"
        ],
        [
          "A",
          "T",
          "T",
          "H",
          "U",
          "N",
          "D",
          "E",
          "R",
          "X",
          "C",
          "B",
          "P",
          "O"
        ],
        [
          "E",
          "G",
          "A",
          "J",
          "V",
          "E",
          "D",
          "J",
          "W",
          "H",
          "W",
          "X",
          "P",
          "X"
        ],
        [
          "O",
          "H",
          "S",
          "B",
          "Q",
          "A",
          "N",
          "I",
          "A",
          "W",
          "R",
          "E",
          "H",
          "A"
        ],
        [
          "W",
          "P",
          "R",
          "Z",
          "P",
          "R",
          "K",
          "E",
          "N",
          "C",
          "S",
          "I",
          "I",
          "X"
        ],
        [
          "F",
          "P",
          "E",
          "A",
          "C",
          "H",
          "I",
          "K",
          "Z",
          "S",
          "L",
          "G",
          "R",
          "P"
        ],
        [
          "C",
          "U",
          "R",
          "W",
          "F",
          "K",
          "T",
          "O",
          "B",
          "P",
          "P",
          "O",
          "E",
          "N"
        ],
        [
          "P",
          "L",
          "E",
          "M",
          "O",
          "N",
          "C",
          "F",
          "R",
          "V",
          "J",
          "I",
          "U",
          "H"
        ],
        [
          "X",
          "X",
          "C",
          "S",
          "A",
          "X",
          "H",
          "K",
          "A",
          "C",
          "D",
          "T",
          "R",
          "D"
        ],
        [
          "P",
          "A",
          "P",
          "A",
          "Y",
          "A",
          "E",
          "O",
          "U",
          "U",
          "H",
          "F",
          "C",
          "E"
        ],
        [
          "R",
          "V",
          "G",
          "X",
          "A",
          "Q",
          "N",
          "Y",
          "H",
          "B",
          "G",
          "A",
          "R",
          "X"
        ],
        [
          "Z",
          "V",
          "C",
          "D",
          "K",
          "O",
          "M",
          "A",
          "R",
          "B",
          "L",
          "E",
          "R",
          "K"
        ],
        [
          "F",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M",
          "P",
          "W",
          "Q",
          "O",
          "T",
          "D"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 1,
            "col": 4
          },
          "end": {
            "row": 1,
            "col": 10
          },
          "cells": [
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "CLOUD",
          "start": {
            "row": 5,
            "col": 9
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 13,
            "col": 1
          },
          "end": {
            "row": 13,
            "col": 7
          },
          "cells": [
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 4,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 13
          },
          "cells": [
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "KITCHEN",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 6
          },
          "cells": [
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 11,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 5
          },
          "cells": [
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 12,
            "col": 11
          },
          "cells": [
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 7,
            "col": 7
          },
          "end": {
            "row": 13,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "PAPAYA",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 10,
            "col": 5
          },
          "cells": [
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 6,
            "col": 5
          },
          "cells": [
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "SAPPHIRE",
          "start": {
            "row": 0,
            "col": 12
          },
          "end": {
            "row": 7,
            "col": 12
          },
          "cells": [
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "THUNDER",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 2,
            "col": 8
          },
          "cells": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 203,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "L",
          "M",
          "C",
          "C",
          "A",
          "X",
          "D",
          "E",
          "S",
          "B",
          "E",
          "R",
          "R",
          "Y"
        ],
        [
          "V",
          "P",
          "J",
          "X",
          "E",
          "N",
          "O",
          "N",
          "J",
          "K",
          "Z",
          "U",
          "M",
          "V"
        ],
        [
          "O",
          "E",
          "M",
          "T",
          "I",
          "Z",
          "C",
          "Z",
          "Y",
          "G",
          "P",
          "F",
          "C",
          "R"
        ],
        [
          "Y",
          "A",
          "K",
          "Z",
          "Y",
          "I",
          "N",
          "M",
          "O",
          "X",
          "I",
          "E",
          "E",
          "I"
        ],
        [
          "A",
          "C",
          "M",
          "T",
          "D",
          "Z",
          "A",
          "G",
          "F",
          "Q",
          "H",
          "V",
          "J",
          "O"
        ],
        [
          "G",
          "H",
          "N",
          "F",
          "L",
          "E",
          "M",
          "O",
          "N",
          "F",
          "L",
          "P",
          "J",
          "M"
        ],
        [
          "E",
          "O",
          "T",
          "S",
          "A",
          "Z",
          "I",
          "N",
          "Z",
          "I",
          "I",
          "A",
          "D",
          "D"
        ],
        [
          "W",
          "Z",
          "V",
          "J",
          "S",
          "D",
          "X",
          "Y",
          "S",
          "R",
          "O",
          "N",
          "C",
          "P"
        ],
        [
          "L",
          "B",
          "E",
          "E",
          "T",
          "A",
          "E",
          "F",
          "Y",
          "B",
          "N",
          "P",
          "S",
          "B"
        ],
        [
          "S",
          "V",
          "J",
          "B",
          "E",
          "N",
          "Q",
          "O",
          "G",
          "R",
          "K",
          "Y",
          "A",
          "O"
        ],
        [
          "O",
          "Y",
          "P",
          "P",
          "R",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M",
          "S",
          "L"
        ],
        [
          "P",
          "X",
          "S",
          "I",
          "O",
          "A",
          "B",
          "P",
          "U",
          "X",
          "N",
          "W",
          "H",
          "K"
        ],
        [
          "M",
          "I",
          "A",
          "L",
          "I",
          "M",
          "E",
          "Z",
          "G",
          "E",
          "C",
          "T",
          "Z",
          "S"
        ],
        [
          "Z",
          "U",
          "E",
          "K",
          "D",
          "F",
          "O",
          "C",
          "E",
          "A",
          "N",
          "N",
          "B",
          "L"
        ]
      ],
      "words": [
        {
          "text": "ASTEROID",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 13,
            "col": 4
          },
          "cells": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 13,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "BERRY",
          "start": {
            "row": 0,
            "col": 9
          },
          "end": {
            "row": 0,
            "col": 13
          },
          "cells": [
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 10,
            "col": 5
          },
          "end": {
            "row": 10,
            "col": 11
          },
          "cells": [
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 10,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 5,
            "col": 4
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "cells": [
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "LIME",
          "start": {
            "row": 12,
            "col": 3
          },
          "end": {
            "row": 12,
            "col": 6
          },
          "cells": [
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "OCEAN",
          "start": {
            "row": 13,
            "col": 6
          },
          "end": {
            "row": 13,
            "col": 10
          },
          "cells": [
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "OPAL",
          "start": {
            "row": 7,
            "col": 10
          },
          "end": {
            "row": 10,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 1,
            "col": 1
          },
          "end": {
            "row": 5,
            "col": 1
          },
          "cells": [
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 7,
            "col": 8
          },
          "end": {
            "row": 2,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "cells": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 1,
            "col": 7
          },
          "cells": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 7,
            "col": 1
          },
          "end": {
            "row": 11,
            "col": 5
          },
          "cells": [
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 204,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "K",
          "J",
          "S",
          "S",
          "Y",
          "T",
          "Y",
          "H",
          "T",
          "A",
          "J",
          "G",
          "S",
          "H"
        ],
        [
          "W",
          "M",
          "E",
          "F",
          "R",
          "K",
          "E",
          "W",
          "L",
          "L",
          "E",
          "U",
          "M",
          "T"
        ],
        [
          "C",
          "Z",
          "O",
          "E",
          "Z",
          "G",
          "L",
          "L",
          "U",
          "Q",
          "V",
          "A",
          "S",
          "J"
        ],
        [
          "J",
          "O",
          "S",
          "U",
          "N",
          "U",
          "E",
          "I",
          "U",
          "A",
          "R",
          "J",
          "A",
          "W"
        ],
        [
          "D",
          "E",
          "M",
          "A",
          "N",
          "R",
          "R",
          "P",
          "S",
          "B",
          "U",
          "S",
          "T",
          "L"
        ],
        [
          "D",
          "B",
          "R",
          "P",
          "B",
          "T",
          "E",
          "D",
          "E",
          "L",
          "B",
          "I",
          "W",
          "X"
        ],
        [
          "X",
          "O",
          "E",
          "M",
          "A",
          "H",
          "A",
          "Z",
          "Y",
          "X",
          "A",
          "U",
          "Z",
          "E"
        ],
        [
          "G",
          "N",
          "U",
          "R",
          "B",
          "S",
          "T",
          "I",
          "I",
          "L",
          "X",
          "N",
          "U",
          "Z"
        ],
        [
          "O",
          "E",
          "I",
          "R",
          "R",
          "G",
          "S",
          "R",
          "N",
          "T",
          "X",
          "Q",
          "D",
          "I"
        ],
        [
          "Q",
          "U",
          "T",
          "W",
          "E",
          "Y",
          "P",
          "S",
          "C",
          "G",
          "Y",
          "K",
          "G",
          "F"
        ],
        [
          "F",
          "T",
          "S",
          "L",
          "C",
          "R",
          "A",
          "T",
          "E",
          "R",
          "B",
          "H",
          "D",
          "D"
        ],
        [
          "D",
          "M",
          "I",
          "D",
          "P",
          "S",
          "M",
          "E",
          "L",
          "O",
          "N",
          "X",
          "P",
          "O"
        ],
        [
          "L",
          "R",
          "O",
          "R",
          "A",
          "B",
          "B",
          "I",
          "T",
          "W",
          "U",
          "F",
          "Q",
          "X"
        ],
        [
          "R",
          "D",
          "R",
          "J",
          "T",
          "H",
          "U",
          "N",
          "D",
          "E",
          "R",
          "J",
          "C",
          "N"
        ]
      ],
      "words": [
        {
          "text": "BERRY",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "cells": [
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "cells": [
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 9
          },
          "cells": [
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 5,
            "col": 0
          },
          "end": {
            "row": 0,
            "col": 5
          },
          "cells": [
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ISLAND",
          "start": {
            "row": 3,
            "col": 7
          },
          "end": {
            "row": 8,
            "col": 12
          },
          "cells": [
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "MELON",
          "start": {
            "row": 11,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 10
          },
          "cells": [
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "MOUNTAIN",
          "start": {
            "row": 1,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 8
          },
          "cells": [
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 1,
            "col": 6
          },
          "cells": [
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "RABBIT",
          "start": {
            "row": 12,
            "col": 3
          },
          "end": {
            "row": 12,
            "col": 8
          },
          "cells": [
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "THUNDER",
          "start": {
            "row": 13,
            "col": 4
          },
          "end": {
            "row": 13,
            "col": 10
          },
          "cells": [
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "UMBRELLA",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "cells": [
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 6,
            "col": 7
          },
          "end": {
            "row": 2,
            "col": 11
          },
          "cells": [
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 2,
              "col": 11
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 205,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "Y",
          "D",
          "O",
          "L",
          "P",
          "H",
          "I",
          "N",
          "U",
          "V",
          "R",
          "B",
          "K",
          "B"
        ],
        [
          "Q",
          "M",
          "M",
          "Z",
          "G",
          "U",
          "A",
          "S",
          "K",
          "R",
          "R",
          "W",
          "Z",
          "F"
        ],
        [
          "R",
          "V",
          "T",
          "Q",
          "B",
          "Z",
          "R",
          "P",
          "E",
          "A",
          "R",
          "D",
          "O",
          "Q"
        ],
        [
          "H",
          "Q",
          "D",
          "L",
          "J",
          "E",
          "W",
          "M",
          "T",
          "B",
          "Y",
          "S",
          "Y",
          "G"
        ],
        [
          "W",
          "T",
          "I",
          "X",
          "Z",
          "H",
          "P",
          "V",
          "I",
          "B",
          "M",
          "G",
          "J",
          "N"
        ],
        [
          "B",
          "T",
          "A",
          "Q",
          "D",
          "N",
          "Y",
          "L",
          "G",
          "I",
          "V",
          "L",
          "X",
          "T"
        ],
        [
          "M",
          "X",
          "M",
          "O",
          "S",
          "C",
          "C",
          "B",
          "E",
          "T",
          "T",
          "K",
          "V",
          "N"
        ],
        [
          "B",
          "T",
          "O",
          "E",
          "F",
          "R",
          "A",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M"
        ],
        [
          "Z",
          "I",
          "N",
          "I",
          "Y",
          "A",
          "N",
          "K",
          "F",
          "W",
          "W",
          "W",
          "X",
          "M"
        ],
        [
          "E",
          "J",
          "D",
          "T",
          "K",
          "T",
          "Y",
          "E",
          "Y",
          "E",
          "L",
          "L",
          "O",
          "W"
        ],
        [
          "P",
          "O",
          "C",
          "K",
          "Y",
          "E",
          "O",
          "S",
          "I",
          "L",
          "V",
          "E",
          "R",
          "K"
        ],
        [
          "H",
          "O",
          "W",
          "C",
          "T",
          "R",
          "N",
          "J",
          "V",
          "M",
          "G",
          "G",
          "X",
          "G"
        ],
        [
          "Y",
          "G",
          "I",
          "X",
          "R",
          "C",
          "Q",
          "C",
          "H",
          "E",
          "R",
          "R",
          "Y",
          "I"
        ],
        [
          "R",
          "I",
          "O",
          "R",
          "I",
          "I",
          "Y",
          "A",
          "M",
          "Q",
          "Y",
          "N",
          "I",
          "P"
        ]
      ],
      "words": [
        {
          "text": "CANYON",
          "start": {
            "row": 6,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 6
          },
          "cells": [
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 11,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "CHERRY",
          "start": {
            "row": 12,
            "col": 7
          },
          "end": {
            "row": 12,
            "col": 12
          },
          "cells": [
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 12,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 6,
            "col": 5
          },
          "end": {
            "row": 11,
            "col": 5
          },
          "cells": [
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 11,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 2
          },
          "cells": [
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 7
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 7,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 7,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "PEAR",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 2,
            "col": 10
          },
          "cells": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 2,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "RABBIT",
          "start": {
            "row": 1,
            "col": 9
          },
          "end": {
            "row": 6,
            "col": 9
          },
          "cells": [
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 12
          },
          "cells": [
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 10,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "TIGER",
          "start": {
            "row": 3,
            "col": 8
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "YELLOW",
          "start": {
            "row": 9,
            "col": 8
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 8,
            "col": 0
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "cells": [
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 13,
              "col": 0
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 206,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "S",
          "X",
          "R",
          "A",
          "O",
          "P",
          "A",
          "N",
          "D",
          "A",
          "E",
          "Q",
          "P",
          "G"
        ],
        [
          "H",
          "M",
          "K",
          "Q",
          "P",
          "V",
          "P",
          "S",
          "K",
          "X",
          "Y",
          "S",
          "A",
          "K"
        ],
        [
          "R",
          "S",
          "I",
          "T",
          "F",
          "U",
          "A",
          "P",
          "D",
          "E",
          "M",
          "G",
          "Y",
          "U"
        ],
        [
          "O",
          "H",
          "T",
          "I",
          "M",
          "F",
          "C",
          "V",
          "N",
          "Y",
          "G",
          "E",
          "G",
          "U"
        ],
        [
          "B",
          "P",
          "T",
          "O",
          "M",
          "O",
          "T",
          "R",
          "B",
          "N",
          "B",
          "L",
          "O",
          "N"
        ],
        [
          "O",
          "D",
          "E",
          "M",
          "S",
          "O",
          "U",
          "N",
          "N",
          "Y",
          "X",
          "G",
          "L",
          "O"
        ],
        [
          "T",
          "A",
          "N",
          "V",
          "J",
          "O",
          "N",
          "S",
          "B",
          "M",
          "E",
          "L",
          "D",
          "U"
        ],
        [
          "R",
          "A",
          "F",
          "O",
          "J",
          "A",
          "H",
          "S",
          "E",
          "X",
          "K",
          "T",
          "E",
          "U"
        ],
        [
          "N",
          "H",
          "U",
          "W",
          "R",
          "V",
          "H",
          "Z",
          "O",
          "R",
          "N",
          "I",
          "N",
          "D"
        ],
        [
          "C",
          "T",
          "X",
          "A",
          "V",
          "W",
          "I",
          "I",
          "K",
          "O",
          "J",
          "Y",
          "W",
          "H"
        ],
        [
          "B",
          "K",
          "E",
          "O",
          "Q",
          "K",
          "I",
          "A",
          "L",
          "L",
          "N",
          "C",
          "H",
          "I"
        ],
        [
          "X",
          "P",
          "B",
          "L",
          "A",
          "S",
          "B",
          "E",
          "N",
          "R",
          "Q",
          "A",
          "D",
          "Y"
        ],
        [
          "L",
          "L",
          "X",
          "H",
          "T",
          "I",
          "M",
          "B",
          "E",
          "R",
          "Y",
          "U",
          "S",
          "J"
        ],
        [
          "Q",
          "G",
          "P",
          "E",
          "A",
          "C",
          "H",
          "O",
          "N",
          "T",
          "O",
          "B",
          "E",
          "J"
        ]
      ],
      "words": [
        {
          "text": "GOLDEN",
          "start": {
            "row": 3,
            "col": 12
          },
          "end": {
            "row": 8,
            "col": 12
          },
          "cells": [
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 8,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "JOURNEY",
          "start": {
            "row": 7,
            "col": 4
          },
          "end": {
            "row": 1,
            "col": 10
          },
          "cells": [
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 6,
            "col": 2
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "KIWI",
          "start": {
            "row": 7,
            "col": 10
          },
          "end": {
            "row": 10,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "MELON",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "cells": [
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "MONSOON",
          "start": {
            "row": 4,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 10
          },
          "cells": [
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 10,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "MOUSE",
          "start": {
            "row": 3,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "PANDA",
          "start": {
            "row": 0,
            "col": 5
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 13,
            "col": 2
          },
          "end": {
            "row": 13,
            "col": 6
          },
          "cells": [
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "PEAR",
          "start": {
            "row": 11,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 4
          },
          "cells": [
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "ROBOT",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "cells": [
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "TIMBER",
          "start": {
            "row": 12,
            "col": 4
          },
          "end": {
            "row": 12,
            "col": 9
          },
          "cells": [
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 12,
              "col": 9
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 207,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "E",
          "V",
          "H",
          "G",
          "G",
          "T",
          "O",
          "P",
          "A",
          "Z",
          "N",
          "G",
          "R",
          "G"
        ],
        [
          "P",
          "V",
          "C",
          "O",
          "E",
          "G",
          "C",
          "X",
          "Q",
          "O",
          "P",
          "F",
          "Y",
          "I"
        ],
        [
          "P",
          "I",
          "F",
          "O",
          "N",
          "E",
          "W",
          "P",
          "L",
          "M",
          "M",
          "E",
          "W",
          "M"
        ],
        [
          "D",
          "F",
          "C",
          "I",
          "M",
          "F",
          "U",
          "W",
          "Z",
          "I",
          "G",
          "Z",
          "A",
          "G"
        ],
        [
          "F",
          "B",
          "R",
          "N",
          "R",
          "E",
          "H",
          "I",
          "B",
          "P",
          "O",
          "P",
          "E",
          "H"
        ],
        [
          "P",
          "P",
          "B",
          "E",
          "I",
          "F",
          "T",
          "O",
          "Y",
          "M",
          "B",
          "R",
          "K",
          "A"
        ],
        [
          "S",
          "K",
          "O",
          "F",
          "H",
          "C",
          "S",
          "D",
          "T",
          "W",
          "E",
          "V",
          "N",
          "I"
        ],
        [
          "P",
          "X",
          "G",
          "I",
          "V",
          "L",
          "F",
          "M",
          "P",
          "V",
          "Y",
          "A",
          "X",
          "O"
        ],
        [
          "H",
          "P",
          "U",
          "Z",
          "Z",
          "L",
          "E",
          "X",
          "L",
          "E",
          "N",
          "N",
          "X",
          "V"
        ],
        [
          "O",
          "H",
          "I",
          "F",
          "E",
          "T",
          "Z",
          "I",
          "N",
          "A",
          "F",
          "F",
          "Z",
          "G"
        ],
        [
          "P",
          "I",
          "K",
          "S",
          "S",
          "T",
          "S",
          "R",
          "B",
          "Z",
          "C",
          "I",
          "E",
          "S"
        ],
        [
          "N",
          "E",
          "U",
          "E",
          "L",
          "W",
          "U",
          "Z",
          "D",
          "Q",
          "C",
          "I",
          "B",
          "A"
        ],
        [
          "V",
          "O",
          "U",
          "L",
          "K",
          "O",
          "O",
          "D",
          "I",
          "L",
          "U",
          "S",
          "R",
          "M"
        ],
        [
          "M",
          "Q",
          "T",
          "Q",
          "J",
          "X",
          "R",
          "I",
          "E",
          "A",
          "Y",
          "N",
          "A",
          "P"
        ]
      ],
      "words": [
        {
          "text": "BANANA",
          "start": {
            "row": 10,
            "col": 8
          },
          "end": {
            "row": 5,
            "col": 13
          },
          "cells": [
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 5,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "COMET",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 6
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "JOURNEY",
          "start": {
            "row": 13,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 10
          },
          "cells": [
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "MOUSE",
          "start": {
            "row": 13,
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 4
          },
          "cells": [
            {
              "row": 13,
              "col": 0
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 5
          },
          "cells": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "PUZZLE",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "cells": [
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 13,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "cells": [
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 10,
            "col": 6
          },
          "end": {
            "row": 5,
            "col": 11
          },
          "cells": [
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 5,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 1,
            "col": 5
          },
          "cells": [
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "TOPAZ",
          "start": {
            "row": 0,
            "col": 5
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 9,
            "col": 12
          },
          "end": {
            "row": 13,
            "col": 12
          },
          "cells": [
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "ZIGZAG",
          "start": {
            "row": 3,
            "col": 8
          },
          "end": {
            "row": 3,
            "col": 13
          },
          "cells": [
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 3,
              "col": 11
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 3,
              "col": 13
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 208,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "Q",
          "D",
          "L",
          "M",
          "J",
          "J",
          "I",
          "C",
          "U",
          "Q",
          "F",
          "D",
          "K",
          "R"
        ],
        [
          "U",
          "W",
          "I",
          "Y",
          "R",
          "A",
          "K",
          "M",
          "K",
          "E",
          "B",
          "Y",
          "E",
          "O"
        ],
        [
          "A",
          "Z",
          "Z",
          "A",
          "Z",
          "Y",
          "X",
          "C",
          "S",
          "R",
          "G",
          "X",
          "B",
          "C"
        ],
        [
          "R",
          "R",
          "D",
          "U",
          "M",
          "S",
          "W",
          "C",
          "J",
          "R",
          "R",
          "Q",
          "H",
          "K"
        ],
        [
          "T",
          "I",
          "E",
          "D",
          "P",
          "O",
          "X",
          "I",
          "A",
          "O",
          "K",
          "S",
          "I",
          "E"
        ],
        [
          "Z",
          "T",
          "S",
          "I",
          "T",
          "G",
          "N",
          "N",
          "B",
          "J",
          "X",
          "E",
          "N",
          "T"
        ],
        [
          "O",
          "F",
          "E",
          "O",
          "Y",
          "T",
          "I",
          "D",
          "T",
          "Q",
          "C",
          "M",
          "S",
          "C"
        ],
        [
          "U",
          "X",
          "R",
          "Z",
          "R",
          "H",
          "Q",
          "I",
          "Q",
          "N",
          "Z",
          "A",
          "P",
          "M"
        ],
        [
          "C",
          "P",
          "T",
          "M",
          "P",
          "C",
          "K",
          "T",
          "A",
          "Z",
          "N",
          "K",
          "I",
          "W"
        ],
        [
          "A",
          "X",
          "B",
          "L",
          "G",
          "G",
          "H",
          "L",
          "Q",
          "A",
          "N",
          "Z",
          "R",
          "A"
        ],
        [
          "N",
          "A",
          "O",
          "L",
          "L",
          "R",
          "A",
          "A",
          "N",
          "Q",
          "J",
          "H",
          "E",
          "W"
        ],
        [
          "Y",
          "D",
          "D",
          "A",
          "A",
          "B",
          "A",
          "A",
          "R",
          "F",
          "V",
          "C",
          "I",
          "F"
        ],
        [
          "O",
          "H",
          "P",
          "Z",
          "M",
          "M",
          "B",
          "T",
          "Z",
          "D",
          "H",
          "R",
          "Z",
          "X"
        ],
        [
          "N",
          "O",
          "U",
          "A",
          "C",
          "V",
          "I",
          "C",
          "T",
          "O",
          "R",
          "Y",
          "M",
          "R"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 11,
            "col": 5
          },
          "end": {
            "row": 5,
            "col": 11
          },
          "cells": [
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 5,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "BANANA",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 7,
            "col": 11
          },
          "cells": [
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "CANYON",
          "start": {
            "row": 8,
            "col": 0
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "cells": [
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 13,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 8,
            "col": 2
          },
          "cells": [
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 6,
            "col": 7
          },
          "cells": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 11,
            "col": 1
          },
          "end": {
            "row": 5,
            "col": 7
          },
          "cells": [
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 4,
            "col": 12
          },
          "end": {
            "row": 10,
            "col": 12
          },
          "cells": [
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "OPAL",
          "start": {
            "row": 13,
            "col": 1
          },
          "end": {
            "row": 10,
            "col": 4
          },
          "cells": [
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 6,
            "col": 3
          },
          "end": {
            "row": 12,
            "col": 9
          },
          "cells": [
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 0,
            "col": 0
          },
          "end": {
            "row": 5,
            "col": 0
          },
          "cells": [
            {
              "row": 0,
              "col": 0
            },
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 0,
            "col": 13
          },
          "end": {
            "row": 5,
            "col": 13
          },
          "cells": [
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 1,
              "col": 13
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 5,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "VICTORY",
          "start": {
            "row": 13,
            "col": 5
          },
          "end": {
            "row": 13,
            "col": 11
          },
          "cells": [
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 13,
              "col": 11
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 209,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "B",
          "I",
          "X",
          "C",
          "E",
          "Y",
          "C",
          "U",
          "P",
          "C",
          "G",
          "A",
          "Z",
          "O"
        ],
        [
          "F",
          "J",
          "Z",
          "C",
          "Z",
          "F",
          "A",
          "D",
          "K",
          "P",
          "V",
          "Q",
          "C",
          "I"
        ],
        [
          "H",
          "I",
          "Z",
          "L",
          "V",
          "W",
          "Q",
          "C",
          "I",
          "N",
          "F",
          "B",
          "J",
          "E"
        ],
        [
          "V",
          "W",
          "K",
          "U",
          "H",
          "B",
          "B",
          "W",
          "H",
          "A",
          "K",
          "W",
          "G",
          "T"
        ],
        [
          "O",
          "S",
          "M",
          "G",
          "J",
          "A",
          "Y",
          "X",
          "P",
          "T",
          "M",
          "N",
          "J",
          "W"
        ],
        [
          "Y",
          "H",
          "I",
          "D",
          "O",
          "L",
          "P",
          "H",
          "I",
          "N",
          "A",
          "O",
          "Z",
          "C"
        ],
        [
          "A",
          "G",
          "W",
          "B",
          "R",
          "A",
          "H",
          "L",
          "D",
          "R",
          "S",
          "W",
          "N",
          "H"
        ],
        [
          "G",
          "B",
          "A",
          "N",
          "A",
          "N",
          "A",
          "O",
          "O",
          "P",
          "R",
          "P",
          "V",
          "D"
        ],
        [
          "E",
          "V",
          "H",
          "F",
          "W",
          "C",
          "T",
          "Q",
          "M",
          "C",
          "L",
          "L",
          "X",
          "V"
        ],
        [
          "D",
          "T",
          "Z",
          "T",
          "V",
          "E",
          "Q",
          "H",
          "U",
          "R",
          "F",
          "G",
          "L",
          "P"
        ],
        [
          "P",
          "Q",
          "T",
          "U",
          "J",
          "M",
          "L",
          "R",
          "D",
          "A",
          "K",
          "F",
          "W",
          "O"
        ],
        [
          "K",
          "D",
          "R",
          "A",
          "B",
          "B",
          "I",
          "T",
          "R",
          "T",
          "R",
          "I",
          "F",
          "J"
        ],
        [
          "I",
          "C",
          "Q",
          "E",
          "X",
          "A",
          "Y",
          "I",
          "S",
          "E",
          "L",
          "T",
          "W",
          "J"
        ],
        [
          "D",
          "Q",
          "F",
          "R",
          "E",
          "E",
          "D",
          "O",
          "M",
          "R",
          "I",
          "R",
          "Z",
          "I"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 3,
            "col": 5
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "cells": [
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "BANANA",
          "start": {
            "row": 7,
            "col": 1
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 13,
            "col": 9
          },
          "cells": [
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 1,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 13
          },
          "cells": [
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 5,
            "col": 3
          },
          "end": {
            "row": 5,
            "col": 9
          },
          "cells": [
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 13,
            "col": 2
          },
          "end": {
            "row": 13,
            "col": 8
          },
          "cells": [
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "KIWI",
          "start": {
            "row": 10,
            "col": 10
          },
          "end": {
            "row": 13,
            "col": 13
          },
          "cells": [
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 7,
            "col": 8
          },
          "end": {
            "row": 2,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 8,
            "col": 7
          },
          "end": {
            "row": 13,
            "col": 12
          },
          "cells": [
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 13,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "RABBIT",
          "start": {
            "row": 11,
            "col": 2
          },
          "end": {
            "row": 11,
            "col": 7
          },
          "cells": [
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 0
          },
          "cells": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "YACHT",
          "start": {
            "row": 0,
            "col": 5
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 210,
      "difficulty": "medium",
      "size": 14,
      "grid": [
        [
          "Z",
          "I",
          "M",
          "O",
          "R",
          "A",
          "N",
          "G",
          "E",
          "M",
          "X",
          "D",
          "G",
          "W"
        ],
        [
          "P",
          "R",
          "P",
          "T",
          "B",
          "G",
          "E",
          "Q",
          "A",
          "Y",
          "I",
          "E",
          "T",
          "K"
        ],
        [
          "K",
          "M",
          "L",
          "E",
          "H",
          "O",
          "W",
          "G",
          "V",
          "H",
          "P",
          "Z",
          "W",
          "D"
        ],
        [
          "Y",
          "W",
          "Y",
          "E",
          "S",
          "U",
          "M",
          "T",
          "C",
          "T",
          "G",
          "X",
          "O",
          "Z"
        ],
        [
          "C",
          "Y",
          "G",
          "E",
          "M",
          "O",
          "N",
          "R",
          "K",
          "B",
          "R",
          "J",
          "X",
          "M"
        ],
        [
          "B",
          "R",
          "I",
          "H",
          "K",
          "O",
          "O",
          "D",
          "V",
          "A",
          "L",
          "L",
          "E",
          "Y"
        ],
        [
          "W",
          "R",
          "A",
          "B",
          "P",
          "I",
          "N",
          "T",
          "E",
          "Q",
          "R",
          "R",
          "O",
          "P"
        ],
        [
          "K",
          "A",
          "M",
          "T",
          "P",
          "A",
          "P",
          "N",
          "O",
          "R",
          "I",
          "L",
          "Q",
          "A"
        ],
        [
          "E",
          "I",
          "Z",
          "P",
          "E",
          "H",
          "N",
          "T",
          "O",
          "H",
          "L",
          "E",
          "J",
          "B"
        ],
        [
          "J",
          "N",
          "W",
          "S",
          "G",
          "R",
          "E",
          "D",
          "P",
          "I",
          "T",
          "M",
          "B",
          "R"
        ],
        [
          "O",
          "B",
          "G",
          "I",
          "A",
          "N",
          "U",
          "P",
          "A",
          "U",
          "S",
          "N",
          "O",
          "C"
        ],
        [
          "P",
          "O",
          "J",
          "I",
          "A",
          "V",
          "A",
          "T",
          "L",
          "B",
          "H",
          "N",
          "M",
          "P"
        ],
        [
          "A",
          "W",
          "L",
          "L",
          "V",
          "S",
          "C",
          "H",
          "C",
          "G",
          "G",
          "C",
          "N",
          "A"
        ],
        [
          "L",
          "I",
          "P",
          "A",
          "M",
          "U",
          "E",
          "H",
          "G",
          "G",
          "Z",
          "N",
          "X",
          "K"
        ]
      ],
      "words": [
        {
          "text": "CRATER",
          "start": {
            "row": 4,
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "cells": [
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "KIWI",
          "start": {
            "row": 7,
            "col": 0
          },
          "end": {
            "row": 10,
            "col": 3
          },
          "cells": [
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 6,
            "col": 6
          },
          "cells": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "OPAL",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "cells": [
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 13,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 0,
            "col": 8
          },
          "cells": [
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ORCHID",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 0,
            "col": 11
          },
          "cells": [
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "PANDA",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 8
          },
          "cells": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "PLANET",
          "start": {
            "row": 13,
            "col": 2
          },
          "end": {
            "row": 8,
            "col": 7
          },
          "cells": [
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "RAINBOW",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 12,
            "col": 1
          },
          "cells": [
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 12,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "SAPPHIRE",
          "start": {
            "row": 12,
            "col": 5
          },
          "end": {
            "row": 5,
            "col": 12
          },
          "cells": [
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 5,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "THUNDER",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "VALLEY",
          "start": {
            "row": 5,
            "col": 8
          },
          "end": {
            "row": 5,
            "col": 13
          },
          "cells": [
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 5,
              "col": 13
            }
          ],
          "found": false
        }
      ]
    }
  ],
  "hard": [
    {
      "seed": 301,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "Q",
          "G",
          "L",
          "A",
          "Z",
          "O",
          "K",
          "K",
          "I",
          "S",
          "Z",
          "K",
          "T",
          "B",
          "B",
          "L",
          "S",
          "Z"
        ],
        [
          "V",
          "B",
          "E",
          "R",
          "Z",
          "P",
          "J",
          "D",
          "Z",
          "R",
          "P",
          "I",
          "O",
          "S",
          "Q",
          "T",
          "L",
          "O"
        ],
        [
          "L",
          "E",
          "H",
          "O",
          "C",
          "T",
          "C",
          "O",
          "E",
          "T",
          "O",
          "R",
          "W",
          "N",
          "A",
          "G",
          "U",
          "J"
        ],
        [
          "O",
          "C",
          "O",
          "N",
          "I",
          "P",
          "P",
          "V",
          "R",
          "Y",
          "Y",
          "V",
          "I",
          "J",
          "S",
          "G",
          "M",
          "F"
        ],
        [
          "N",
          "N",
          "M",
          "F",
          "R",
          "A",
          "L",
          "J",
          "B",
          "Y",
          "H",
          "C",
          "N",
          "N",
          "N",
          "L",
          "Z",
          "D"
        ],
        [
          "N",
          "A",
          "Q",
          "I",
          "L",
          "I",
          "Y",
          "Z",
          "K",
          "N",
          "X",
          "M",
          "I",
          "W",
          "G",
          "M",
          "U",
          "P"
        ],
        [
          "S",
          "L",
          "V",
          "Q",
          "S",
          "C",
          "O",
          "R",
          "L",
          "I",
          "B",
          "R",
          "A",
          "R",
          "Y",
          "E",
          "Y",
          "C"
        ],
        [
          "Y",
          "A",
          "H",
          "Z",
          "W",
          "V",
          "O",
          "Q",
          "E",
          "W",
          "P",
          "Y",
          "Z",
          "J",
          "O",
          "N",
          "U",
          "A"
        ],
        [
          "W",
          "B",
          "S",
          "I",
          "X",
          "C",
          "H",
          "S",
          "V",
          "P",
          "L",
          "F",
          "K",
          "D",
          "T",
          "T",
          "W",
          "N"
        ],
        [
          "A",
          "D",
          "B",
          "U",
          "K",
          "P",
          "R",
          "T",
          "Z",
          "F",
          "E",
          "I",
          "C",
          "Z",
          "X",
          "J",
          "O",
          "W"
        ],
        [
          "X",
          "L",
          "I",
          "E",
          "T",
          "E",
          "G",
          "R",
          "G",
          "L",
          "D",
          "R",
          "X",
          "X",
          "G",
          "C",
          "A",
          "Z"
        ],
        [
          "O",
          "U",
          "T",
          "N",
          "V",
          "R",
          "I",
          "V",
          "E",
          "R",
          "X",
          "B",
          "Q",
          "E",
          "Q",
          "T",
          "F",
          "T"
        ],
        [
          "C",
          "T",
          "B",
          "I",
          "E",
          "A",
          "H",
          "N",
          "T",
          "F",
          "U",
          "U",
          "W",
          "J",
          "E",
          "E",
          "K",
          "G"
        ],
        [
          "E",
          "Z",
          "N",
          "Z",
          "U",
          "O",
          "O",
          "I",
          "Q",
          "E",
          "A",
          "K",
          "M",
          "R",
          "S",
          "L",
          "C",
          "A"
        ],
        [
          "A",
          "U",
          "W",
          "Y",
          "F",
          "G",
          "M",
          "U",
          "D",
          "R",
          "J",
          "T",
          "F",
          "H",
          "D",
          "E",
          "G",
          "Z"
        ],
        [
          "N",
          "Q",
          "B",
          "C",
          "A",
          "B",
          "A",
          "E",
          "T",
          "A",
          "W",
          "A",
          "Q",
          "E",
          "Q",
          "M",
          "Q",
          "G"
        ],
        [
          "M",
          "N",
          "V",
          "R",
          "E",
          "B",
          "J",
          "Z",
          "K",
          "E",
          "L",
          "Y",
          "Z",
          "Z",
          "J",
          "O",
          "Y",
          "I"
        ],
        [
          "H",
          "Y",
          "D",
          "R",
          "D",
          "S",
          "Q",
          "V",
          "Y",
          "L",
          "J",
          "O",
          "G",
          "H",
          "N",
          "N",
          "X",
          "Z"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 2,
            "col": 1
          },
          "cells": [
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 2,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 17,
            "col": 2
          },
          "end": {
            "row": 12,
            "col": 7
          },
          "cells": [
            {
              "row": 17,
              "col": 2
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 13,
            "col": 15
          },
          "end": {
            "row": 17,
            "col": 15
          },
          "cells": [
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 17,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "LIBRARY",
          "start": {
            "row": 6,
            "col": 8
          },
          "end": {
            "row": 6,
            "col": 14
          },
          "cells": [
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 6,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "OCEAN",
          "start": {
            "row": 11,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 0
          },
          "cells": [
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 13,
              "col": 0
            },
            {
              "row": 14,
              "col": 0
            },
            {
              "row": 15,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "OPAL",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 5,
            "col": 4
          },
          "cells": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 11,
            "col": 12
          },
          "end": {
            "row": 16,
            "col": 7
          },
          "cells": [
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 16,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "RIVER",
          "start": {
            "row": 11,
            "col": 5
          },
          "end": {
            "row": 11,
            "col": 9
          },
          "cells": [
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 11,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 6,
            "col": 7
          },
          "end": {
            "row": 11,
            "col": 2
          },
          "cells": [
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 1,
            "col": 9
          },
          "cells": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 1,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 0,
            "col": 9
          },
          "end": {
            "row": 5,
            "col": 14
          },
          "cells": [
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 2,
              "col": 11
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 5,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "TIMBER",
          "start": {
            "row": 12,
            "col": 8
          },
          "end": {
            "row": 17,
            "col": 3
          },
          "cells": [
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 5
            },
            {
              "row": 16,
              "col": 4
            },
            {
              "row": 17,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "UNIVERSE",
          "start": {
            "row": 14,
            "col": 1
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "WATERFALL",
          "start": {
            "row": 9,
            "col": 17
          },
          "end": {
            "row": 17,
            "col": 9
          },
          "cells": [
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 12,
              "col": 14
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 17,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "ZIGZAG",
          "start": {
            "row": 17,
            "col": 17
          },
          "end": {
            "row": 12,
            "col": 17
          },
          "cells": [
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 16,
              "col": 17
            },
            {
              "row": 15,
              "col": 17
            },
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 17
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 302,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "V",
          "F",
          "K",
          "E",
          "M",
          "Y",
          "T",
          "O",
          "P",
          "A",
          "Z",
          "Y",
          "C",
          "H",
          "E",
          "R",
          "R",
          "Y"
        ],
        [
          "K",
          "L",
          "A",
          "O",
          "E",
          "G",
          "U",
          "D",
          "Z",
          "S",
          "U",
          "D",
          "E",
          "S",
          "U",
          "T",
          "I",
          "P"
        ],
        [
          "V",
          "Y",
          "Q",
          "P",
          "G",
          "W",
          "Z",
          "P",
          "Y",
          "S",
          "S",
          "U",
          "P",
          "C",
          "H",
          "O",
          "T",
          "K"
        ],
        [
          "E",
          "Q",
          "N",
          "D",
          "O",
          "Q",
          "Y",
          "U",
          "K",
          "A",
          "A",
          "U",
          "H",
          "A",
          "R",
          "V",
          "T",
          "B"
        ],
        [
          "B",
          "Z",
          "G",
          "N",
          "R",
          "S",
          "L",
          "U",
          "T",
          "P",
          "I",
          "S",
          "X",
          "B",
          "O",
          "B",
          "E",
          "C"
        ],
        [
          "S",
          "F",
          "Q",
          "O",
          "I",
          "R",
          "I",
          "B",
          "R",
          "M",
          "G",
          "F",
          "L",
          "Y",
          "G",
          "A",
          "C",
          "J"
        ],
        [
          "Z",
          "W",
          "N",
          "M",
          "X",
          "B",
          "H",
          "D",
          "G",
          "O",
          "A",
          "L",
          "A",
          "D",
          "G",
          "Z",
          "G",
          "N"
        ],
        [
          "R",
          "S",
          "B",
          "A",
          "W",
          "A",
          "R",
          "X",
          "V",
          "C",
          "S",
          "G",
          "Q",
          "L",
          "S",
          "D",
          "K",
          "C"
        ],
        [
          "M",
          "H",
          "O",
          "I",
          "G",
          "A",
          "S",
          "F",
          "B",
          "H",
          "E",
          "P",
          "E",
          "A",
          "S",
          "O",
          "S",
          "B"
        ],
        [
          "C",
          "B",
          "W",
          "D",
          "G",
          "O",
          "K",
          "T",
          "E",
          "S",
          "W",
          "A",
          "Q",
          "E",
          "C",
          "P",
          "P",
          "D"
        ],
        [
          "M",
          "T",
          "F",
          "O",
          "G",
          "A",
          "X",
          "M",
          "E",
          "O",
          "R",
          "U",
          "M",
          "L",
          "N",
          "K",
          "R",
          "I"
        ],
        [
          "F",
          "Q",
          "N",
          "N",
          "D",
          "N",
          "C",
          "A",
          "D",
          "R",
          "A",
          "L",
          "E",
          "H",
          "D",
          "J",
          "I",
          "P"
        ],
        [
          "W",
          "R",
          "A",
          "T",
          "P",
          "K",
          "K",
          "A",
          "R",
          "R",
          "O",
          "Q",
          "Q",
          "G",
          "F",
          "U",
          "N",
          "E"
        ],
        [
          "I",
          "M",
          "E",
          "T",
          "I",
          "L",
          "H",
          "L",
          "T",
          "E",
          "X",
          "I",
          "R",
          "O",
          "H",
          "G",
          "G",
          "A"
        ],
        [
          "D",
          "Q",
          "K",
          "T",
          "S",
          "S",
          "G",
          "Z",
          "K",
          "V",
          "T",
          "W",
          "D",
          "M",
          "U",
          "O",
          "G",
          "E"
        ],
        [
          "S",
          "G",
          "T",
          "I",
          "T",
          "Z",
          "Q",
          "A",
          "Y",
          "B",
          "U",
          "A",
          "H",
          "R",
          "Z",
          "A",
          "P",
          "R"
        ],
        [
          "W",
          "E",
          "I",
          "I",
          "N",
          "E",
          "D",
          "L",
          "O",
          "G",
          "J",
          "F",
          "R",
          "Y",
          "S",
          "Y",
          "G",
          "D"
        ],
        [
          "N",
          "N",
          "K",
          "E",
          "X",
          "C",
          "X",
          "M",
          "I",
          "U",
          "K",
          "V",
          "T",
          "C",
          "O",
          "W",
          "R",
          "W"
        ]
      ],
      "words": [
        {
          "text": "ASTEROID",
          "start": {
            "row": 7,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 12
          },
          "cells": [
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 14,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "CHERRY",
          "start": {
            "row": 0,
            "col": 12
          },
          "end": {
            "row": 0,
            "col": 17
          },
          "cells": [
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 0,
              "col": 14
            },
            {
              "row": 0,
              "col": 15
            },
            {
              "row": 0,
              "col": 16
            },
            {
              "row": 0,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 7,
            "col": 9
          },
          "end": {
            "row": 1,
            "col": 9
          },
          "cells": [
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 17,
            "col": 13
          },
          "end": {
            "row": 12,
            "col": 8
          },
          "cells": [
            {
              "row": 17,
              "col": 13
            },
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 12,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 9,
            "col": 3
          },
          "end": {
            "row": 3,
            "col": 3
          },
          "cells": [
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 3,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 6,
            "col": 7
          },
          "end": {
            "row": 11,
            "col": 2
          },
          "cells": [
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "EAGLE",
          "start": {
            "row": 4,
            "col": 16
          },
          "end": {
            "row": 8,
            "col": 12
          },
          "cells": [
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 8,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "GOLDEN",
          "start": {
            "row": 16,
            "col": 9
          },
          "end": {
            "row": 16,
            "col": 4
          },
          "cells": [
            {
              "row": 16,
              "col": 9
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 16,
              "col": 5
            },
            {
              "row": 16,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 12,
            "col": 5
          },
          "end": {
            "row": 17,
            "col": 0
          },
          "cells": [
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 1
            },
            {
              "row": 17,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "MANGO",
          "start": {
            "row": 13,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "cells": [
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 9,
            "col": 12
          },
          "end": {
            "row": 14,
            "col": 7
          },
          "cells": [
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "SHADOW",
          "start": {
            "row": 14,
            "col": 5
          },
          "end": {
            "row": 9,
            "col": 10
          },
          "cells": [
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 9,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 8,
            "col": 16
          },
          "end": {
            "row": 13,
            "col": 16
          },
          "cells": [
            {
              "row": 8,
              "col": 16
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 13,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "TOPAZ",
          "start": {
            "row": 0,
            "col": 6
          },
          "end": {
            "row": 0,
            "col": 10
          },
          "cells": [
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 3,
            "col": 15
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "cells": [
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 303,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "N",
          "P",
          "E",
          "F",
          "A",
          "B",
          "S",
          "R",
          "R",
          "K",
          "M",
          "V",
          "V",
          "N",
          "O",
          "O",
          "E",
          "Y"
        ],
        [
          "V",
          "V",
          "E",
          "L",
          "Q",
          "Q",
          "E",
          "Q",
          "O",
          "D",
          "C",
          "G",
          "Y",
          "Q",
          "X",
          "Z",
          "S",
          "M"
        ],
        [
          "J",
          "G",
          "K",
          "O",
          "C",
          "E",
          "G",
          "R",
          "M",
          "C",
          "E",
          "R",
          "O",
          "Y",
          "E",
          "U",
          "T",
          "E"
        ],
        [
          "E",
          "M",
          "F",
          "P",
          "D",
          "K",
          "L",
          "I",
          "R",
          "Q",
          "K",
          "E",
          "C",
          "E",
          "K",
          "M",
          "P",
          "I"
        ],
        [
          "Z",
          "I",
          "M",
          "D",
          "U",
          "A",
          "S",
          "B",
          "Y",
          "Y",
          "B",
          "E",
          "R",
          "B",
          "D",
          "L",
          "W",
          "B"
        ],
        [
          "S",
          "V",
          "Z",
          "W",
          "H",
          "Z",
          "Y",
          "D",
          "I",
          "P",
          "V",
          "B",
          "T",
          "A",
          "A",
          "A",
          "K",
          "A"
        ],
        [
          "G",
          "E",
          "D",
          "B",
          "B",
          "O",
          "Z",
          "A",
          "P",
          "K",
          "J",
          "A",
          "L",
          "N",
          "P",
          "I",
          "N",
          "E"
        ],
        [
          "L",
          "L",
          "B",
          "G",
          "R",
          "H",
          "R",
          "L",
          "P",
          "W",
          "X",
          "L",
          "E",
          "Z",
          "M",
          "Q",
          "R",
          "Q"
        ],
        [
          "V",
          "U",
          "S",
          "T",
          "X",
          "I",
          "K",
          "I",
          "E",
          "A",
          "E",
          "T",
          "F",
          "C",
          "P",
          "H",
          "W",
          "S"
        ],
        [
          "E",
          "R",
          "A",
          "B",
          "B",
          "I",
          "T",
          "C",
          "Z",
          "R",
          "P",
          "W",
          "E",
          "E",
          "Y",
          "W",
          "R",
          "T"
        ],
        [
          "Z",
          "P",
          "G",
          "C",
          "L",
          "W",
          "A",
          "G",
          "B",
          "O",
          "U",
          "D",
          "E",
          "R",
          "O",
          "W",
          "R",
          "E"
        ],
        [
          "X",
          "L",
          "Z",
          "A",
          "U",
          "S",
          "L",
          "M",
          "E",
          "T",
          "N",
          "P",
          "F",
          "I",
          "U",
          "E",
          "P",
          "Z"
        ],
        [
          "V",
          "T",
          "V",
          "L",
          "T",
          "B",
          "U",
          "L",
          "J",
          "K",
          "E",
          "K",
          "Y",
          "P",
          "A",
          "K",
          "S",
          "M"
        ],
        [
          "I",
          "C",
          "P",
          "L",
          "D",
          "L",
          "Q",
          "Y",
          "M",
          "Z",
          "O",
          "Z",
          "H",
          "S",
          "Y",
          "R",
          "E",
          "K"
        ],
        [
          "L",
          "F",
          "E",
          "X",
          "V",
          "K",
          "F",
          "R",
          "W",
          "P",
          "A",
          "Q",
          "U",
          "N",
          "M",
          "Z",
          "T",
          "Y"
        ],
        [
          "I",
          "S",
          "A",
          "P",
          "P",
          "H",
          "I",
          "R",
          "E",
          "Y",
          "X",
          "R",
          "X",
          "I",
          "S",
          "K",
          "U",
          "C"
        ],
        [
          "O",
          "U",
          "K",
          "Z",
          "O",
          "I",
          "A",
          "U",
          "C",
          "X",
          "E",
          "E",
          "T",
          "I",
          "B",
          "R",
          "O",
          "B"
        ],
        [
          "N",
          "Z",
          "C",
          "T",
          "V",
          "F",
          "R",
          "U",
          "X",
          "A",
          "W",
          "H",
          "X",
          "W",
          "W",
          "J",
          "B",
          "D"
        ]
      ],
      "words": [
        {
          "text": "BERRY",
          "start": {
            "row": 0,
            "col": 5
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "cells": [
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "BREEZE",
          "start": {
            "row": 5,
            "col": 11
          },
          "end": {
            "row": 0,
            "col": 16
          },
          "cells": [
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 1,
              "col": 15
            },
            {
              "row": 0,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "CASTLE",
          "start": {
            "row": 9,
            "col": 7
          },
          "end": {
            "row": 14,
            "col": 2
          },
          "cells": [
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 14,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "HORIZON",
          "start": {
            "row": 5,
            "col": 4
          },
          "end": {
            "row": 11,
            "col": 10
          },
          "cells": [
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 15,
            "col": 13
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "LION",
          "start": {
            "row": 14,
            "col": 0
          },
          "end": {
            "row": 17,
            "col": 0
          },
          "cells": [
            {
              "row": 14,
              "col": 0
            },
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 16,
              "col": 0
            },
            {
              "row": 17,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "ORBIT",
          "start": {
            "row": 16,
            "col": 16
          },
          "end": {
            "row": 16,
            "col": 12
          },
          "cells": [
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 16,
              "col": 13
            },
            {
              "row": 16,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "PAPAYA",
          "start": {
            "row": 9,
            "col": 10
          },
          "end": {
            "row": 4,
            "col": 5
          },
          "cells": [
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "PLANET",
          "start": {
            "row": 3,
            "col": 16
          },
          "end": {
            "row": 8,
            "col": 11
          },
          "cells": [
            {
              "row": 3,
              "col": 16
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 8,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "PUZZLE",
          "start": {
            "row": 3,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 8
          },
          "cells": [
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "RABBIT",
          "start": {
            "row": 9,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "cells": [
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 0,
            "col": 7
          },
          "end": {
            "row": 5,
            "col": 12
          },
          "cells": [
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 5,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "SAPPHIRE",
          "start": {
            "row": 15,
            "col": 1
          },
          "end": {
            "row": 15,
            "col": 8
          },
          "cells": [
            {
              "row": 15,
              "col": 1
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 15,
              "col": 5
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 15,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "TREASURE",
          "start": {
            "row": 9,
            "col": 17
          },
          "end": {
            "row": 16,
            "col": 10
          },
          "cells": [
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 12,
              "col": 14
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 16,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "UMBRELLA",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 5,
            "col": 13
          },
          "cells": [
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 5,
              "col": 13
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 304,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "N",
          "N",
          "R",
          "E",
          "Z",
          "V",
          "O",
          "H",
          "J",
          "U",
          "P",
          "I",
          "T",
          "E",
          "R",
          "V",
          "E",
          "K"
        ],
        [
          "R",
          "J",
          "J",
          "O",
          "M",
          "O",
          "D",
          "E",
          "E",
          "R",
          "F",
          "L",
          "F",
          "J",
          "B",
          "K",
          "V",
          "H"
        ],
        [
          "Z",
          "N",
          "V",
          "S",
          "U",
          "P",
          "V",
          "X",
          "V",
          "D",
          "G",
          "A",
          "R",
          "D",
          "E",
          "N",
          "H",
          "W"
        ],
        [
          "R",
          "Y",
          "Q",
          "Q",
          "P",
          "I",
          "C",
          "N",
          "I",
          "C",
          "J",
          "Y",
          "L",
          "F",
          "M",
          "Z",
          "U",
          "A"
        ],
        [
          "P",
          "Z",
          "O",
          "R",
          "C",
          "H",
          "I",
          "D",
          "N",
          "O",
          "G",
          "A",
          "R",
          "D",
          "X",
          "M",
          "B",
          "C"
        ],
        [
          "M",
          "N",
          "V",
          "R",
          "G",
          "Q",
          "Z",
          "J",
          "Q",
          "A",
          "H",
          "B",
          "V",
          "M",
          "U",
          "P",
          "F",
          "D"
        ],
        [
          "L",
          "X",
          "B",
          "X",
          "U",
          "B",
          "E",
          "P",
          "Q",
          "D",
          "Z",
          "B",
          "W",
          "A",
          "A",
          "W",
          "B",
          "S"
        ],
        [
          "Q",
          "L",
          "P",
          "X",
          "M",
          "U",
          "R",
          "P",
          "F",
          "M",
          "I",
          "E",
          "I",
          "B",
          "N",
          "Z",
          "S",
          "H"
        ],
        [
          "U",
          "D",
          "D",
          "X",
          "P",
          "G",
          "K",
          "N",
          "G",
          "Z",
          "H",
          "D",
          "B",
          "Y",
          "M",
          "Y",
          "Y",
          "L"
        ],
        [
          "A",
          "F",
          "T",
          "D",
          "W",
          "U",
          "R",
          "Q",
          "H",
          "T",
          "R",
          "O",
          "R",
          "R",
          "E",
          "U",
          "L",
          "H"
        ],
        [
          "G",
          "H",
          "H",
          "I",
          "F",
          "B",
          "Q",
          "D",
          "V",
          "Z",
          "V",
          "K",
          "S",
          "N",
          "A",
          "N",
          "T",
          "J"
        ],
        [
          "U",
          "L",
          "P",
          "O",
          "K",
          "A",
          "I",
          "G",
          "I",
          "E",
          "T",
          "Z",
          "R",
          "J",
          "O",
          "J",
          "X",
          "O"
        ],
        [
          "Z",
          "E",
          "H",
          "M",
          "I",
          "S",
          "P",
          "X",
          "G",
          "X",
          "W",
          "U",
          "H",
          "Y",
          "K",
          "T",
          "V",
          "B"
        ],
        [
          "V",
          "M",
          "Z",
          "A",
          "T",
          "O",
          "V",
          "P",
          "J",
          "U",
          "O",
          "Q",
          "U",
          "H",
          "W",
          "E",
          "Z",
          "W"
        ],
        [
          "P",
          "O",
          "I",
          "N",
          "C",
          "C",
          "G",
          "Q",
          "L",
          "J",
          "U",
          "D",
          "U",
          "Z",
          "R",
          "M",
          "K",
          "E"
        ],
        [
          "Q",
          "N",
          "Z",
          "G",
          "H",
          "M",
          "C",
          "H",
          "K",
          "E",
          "P",
          "Y",
          "Z",
          "O",
          "R",
          "O",
          "Q",
          "X"
        ],
        [
          "C",
          "B",
          "S",
          "O",
          "E",
          "K",
          "H",
          "T",
          "S",
          "V",
          "J",
          "F",
          "A",
          "F",
          "N",
          "C",
          "V",
          "Y"
        ],
        [
          "R",
          "E",
          "K",
          "Z",
          "N",
          "G",
          "A",
          "T",
          "S",
          "K",
          "E",
          "R",
          "N",
          "E",
          "B",
          "U",
          "L",
          "A"
        ]
      ],
      "words": [
        {
          "text": "APPLE",
          "start": {
            "row": 11,
            "col": 5
          },
          "end": {
            "row": 15,
            "col": 9
          },
          "cells": [
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 15,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "COMET",
          "start": {
            "row": 16,
            "col": 15
          },
          "end": {
            "row": 12,
            "col": 15
          },
          "cells": [
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 12,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 4,
            "col": 13
          },
          "end": {
            "row": 4,
            "col": 8
          },
          "cells": [
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 4,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 1,
            "col": 10
          },
          "end": {
            "row": 1,
            "col": 4
          },
          "cells": [
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "GARDEN",
          "start": {
            "row": 2,
            "col": 10
          },
          "end": {
            "row": 2,
            "col": 15
          },
          "cells": [
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 2,
              "col": 11
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 2,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "JOURNEY",
          "start": {
            "row": 14,
            "col": 9
          },
          "end": {
            "row": 8,
            "col": 15
          },
          "cells": [
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 9,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "JUPITER",
          "start": {
            "row": 0,
            "col": 8
          },
          "end": {
            "row": 0,
            "col": 14
          },
          "cells": [
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 0,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "KITCHEN",
          "start": {
            "row": 11,
            "col": 4
          },
          "end": {
            "row": 17,
            "col": 4
          },
          "cells": [
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 16,
              "col": 4
            },
            {
              "row": 17,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 11,
            "col": 1
          },
          "end": {
            "row": 15,
            "col": 1
          },
          "cells": [
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 15,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "MANGO",
          "start": {
            "row": 12,
            "col": 3
          },
          "end": {
            "row": 16,
            "col": 3
          },
          "cells": [
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 16,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "NEBULA",
          "start": {
            "row": 17,
            "col": 12
          },
          "end": {
            "row": 17,
            "col": 17
          },
          "cells": [
            {
              "row": 17,
              "col": 12
            },
            {
              "row": 17,
              "col": 13
            },
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 17,
              "col": 16
            },
            {
              "row": 17,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "ORCHID",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 4,
            "col": 7
          },
          "cells": [
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 3,
            "col": 4
          },
          "end": {
            "row": 3,
            "col": 9
          },
          "cells": [
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 3,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 13,
            "col": 11
          },
          "end": {
            "row": 17,
            "col": 7
          },
          "cells": [
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 15,
              "col": 9
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 17,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 6,
            "col": 10
          },
          "end": {
            "row": 10,
            "col": 14
          },
          "cells": [
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 10,
              "col": 14
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 305,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "H",
          "Y",
          "S",
          "Q",
          "Z",
          "T",
          "A",
          "I",
          "K",
          "D",
          "V",
          "I",
          "P",
          "I",
          "R",
          "I",
          "E",
          "H"
        ],
        [
          "S",
          "V",
          "S",
          "F",
          "T",
          "Q",
          "J",
          "X",
          "W",
          "E",
          "Z",
          "X",
          "Z",
          "T",
          "A",
          "Z",
          "V",
          "L"
        ],
        [
          "I",
          "A",
          "A",
          "X",
          "I",
          "Y",
          "R",
          "O",
          "O",
          "F",
          "Q",
          "B",
          "P",
          "E",
          "P",
          "B",
          "F",
          "H"
        ],
        [
          "H",
          "Z",
          "Q",
          "S",
          "P",
          "Z",
          "R",
          "E",
          "L",
          "W",
          "X",
          "Y",
          "Z",
          "I",
          "B",
          "N",
          "S",
          "C"
        ],
        [
          "E",
          "B",
          "M",
          "L",
          "T",
          "R",
          "Q",
          "I",
          "L",
          "I",
          "O",
          "N",
          "C",
          "K",
          "X",
          "R",
          "M",
          "X"
        ],
        [
          "G",
          "P",
          "M",
          "H",
          "A",
          "E",
          "A",
          "O",
          "E",
          "D",
          "E",
          "N",
          "P",
          "P",
          "C",
          "Z",
          "A",
          "A"
        ],
        [
          "N",
          "F",
          "R",
          "P",
          "N",
          "S",
          "R",
          "M",
          "J",
          "I",
          "I",
          "K",
          "D",
          "L",
          "K",
          "O",
          "J",
          "U"
        ],
        [
          "A",
          "E",
          "S",
          "C",
          "R",
          "W",
          "H",
          "O",
          "K",
          "C",
          "K",
          "K",
          "E",
          "M",
          "P",
          "V",
          "Q",
          "C"
        ],
        [
          "R",
          "K",
          "S",
          "A",
          "O",
          "E",
          "R",
          "N",
          "I",
          "X",
          "W",
          "X",
          "N",
          "E",
          "D",
          "D",
          "Z",
          "U"
        ],
        [
          "O",
          "T",
          "V",
          "L",
          "D",
          "Y",
          "T",
          "J",
          "M",
          "D",
          "S",
          "C",
          "E",
          "Q",
          "X",
          "T",
          "R",
          "K"
        ],
        [
          "Z",
          "L",
          "L",
          "J",
          "H",
          "N",
          "D",
          "N",
          "K",
          "V",
          "T",
          "E",
          "D",
          "Q",
          "A",
          "J",
          "R",
          "N"
        ],
        [
          "P",
          "E",
          "N",
          "P",
          "F",
          "E",
          "A",
          "O",
          "I",
          "L",
          "L",
          "P",
          "L",
          "C",
          "M",
          "W",
          "O",
          "B"
        ],
        [
          "Y",
          "U",
          "E",
          "G",
          "R",
          "B",
          "Q",
          "P",
          "V",
          "W",
          "O",
          "W",
          "O",
          "J",
          "T",
          "G",
          "Z",
          "B"
        ],
        [
          "U",
          "Z",
          "Q",
          "U",
          "E",
          "V",
          "D",
          "T",
          "V",
          "Y",
          "G",
          "Q",
          "G",
          "A",
          "A",
          "M",
          "E",
          "R"
        ],
        [
          "S",
          "O",
          "Q",
          "E",
          "T",
          "K",
          "Y",
          "M",
          "E",
          "P",
          "C",
          "L",
          "J",
          "R",
          "P",
          "O",
          "A",
          "I"
        ],
        [
          "E",
          "X",
          "P",
          "Q",
          "A",
          "Z",
          "P",
          "Y",
          "I",
          "M",
          "L",
          "Q",
          "D",
          "N",
          "H",
          "M",
          "H",
          "D"
        ],
        [
          "P",
          "V",
          "R",
          "G",
          "R",
          "L",
          "X",
          "Q",
          "G",
          "C",
          "O",
          "J",
          "U",
          "V",
          "X",
          "P",
          "B",
          "G"
        ],
        [
          "F",
          "K",
          "M",
          "H",
          "C",
          "D",
          "K",
          "U",
          "W",
          "T",
          "I",
          "C",
          "J",
          "B",
          "G",
          "B",
          "C",
          "E"
        ]
      ],
      "words": [
        {
          "text": "ASTEROID",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "cells": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "BRIDGE",
          "start": {
            "row": 12,
            "col": 17
          },
          "end": {
            "row": 17,
            "col": 17
          },
          "cells": [
            {
              "row": 12,
              "col": 17
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 15,
              "col": 17
            },
            {
              "row": 16,
              "col": 17
            },
            {
              "row": 17,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "COMET",
          "start": {
            "row": 17,
            "col": 11
          },
          "end": {
            "row": 13,
            "col": 7
          },
          "cells": [
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 15,
              "col": 9
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 13,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 17,
            "col": 4
          },
          "end": {
            "row": 12,
            "col": 4
          },
          "cells": [
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 16,
              "col": 4
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 12,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 15,
            "col": 12
          },
          "end": {
            "row": 10,
            "col": 17
          },
          "cells": [
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 13,
              "col": 14
            },
            {
              "row": 12,
              "col": 15
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 10,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "GOLDEN",
          "start": {
            "row": 13,
            "col": 12
          },
          "end": {
            "row": 8,
            "col": 12
          },
          "cells": [
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 8,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "LION",
          "start": {
            "row": 4,
            "col": 8
          },
          "end": {
            "row": 4,
            "col": 11
          },
          "cells": [
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 9,
            "col": 0
          },
          "end": {
            "row": 4,
            "col": 0
          },
          "cells": [
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "PANDA",
          "start": {
            "row": 12,
            "col": 7
          },
          "end": {
            "row": 8,
            "col": 3
          },
          "cells": [
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 8,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 2,
            "col": 14
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 1,
            "col": 8
          },
          "cells": [
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "WINTER",
          "start": {
            "row": 12,
            "col": 9
          },
          "end": {
            "row": 7,
            "col": 4
          },
          "cells": [
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 7,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "YELLOW",
          "start": {
            "row": 12,
            "col": 0
          },
          "end": {
            "row": 7,
            "col": 5
          },
          "cells": [
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 1,
            "col": 12
          },
          "end": {
            "row": 5,
            "col": 16
          },
          "cells": [
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 5,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 13,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "cells": [
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 306,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "S",
          "S",
          "V",
          "X",
          "Q",
          "P",
          "A",
          "Y",
          "L",
          "N",
          "F",
          "T",
          "W",
          "B",
          "V",
          "D",
          "F",
          "E"
        ],
        [
          "L",
          "C",
          "M",
          "Q",
          "R",
          "W",
          "O",
          "B",
          "N",
          "I",
          "A",
          "R",
          "G",
          "A",
          "A",
          "S",
          "N",
          "H"
        ],
        [
          "F",
          "N",
          "L",
          "K",
          "C",
          "Y",
          "V",
          "X",
          "Z",
          "A",
          "P",
          "R",
          "U",
          "M",
          "L",
          "U",
          "L",
          "C"
        ],
        [
          "G",
          "M",
          "Y",
          "U",
          "W",
          "E",
          "Z",
          "O",
          "Z",
          "H",
          "K",
          "R",
          "R",
          "P",
          "L",
          "N",
          "U",
          "I"
        ],
        [
          "L",
          "U",
          "T",
          "E",
          "P",
          "A",
          "P",
          "A",
          "Y",
          "A",
          "C",
          "W",
          "H",
          "H",
          "E",
          "V",
          "O",
          "N"
        ],
        [
          "P",
          "T",
          "N",
          "O",
          "Z",
          "I",
          "R",
          "O",
          "H",
          "A",
          "W",
          "D",
          "U",
          "C",
          "Y",
          "Q",
          "F",
          "C"
        ],
        [
          "Z",
          "U",
          "G",
          "C",
          "B",
          "E",
          "J",
          "N",
          "B",
          "Q",
          "G",
          "N",
          "R",
          "E",
          "K",
          "V",
          "E",
          "I"
        ],
        [
          "T",
          "A",
          "C",
          "H",
          "D",
          "Y",
          "X",
          "J",
          "A",
          "K",
          "N",
          "E",
          "B",
          "D",
          "E",
          "Z",
          "J",
          "P"
        ],
        [
          "B",
          "E",
          "B",
          "A",
          "S",
          "G",
          "Q",
          "O",
          "N",
          "W",
          "O",
          "D",
          "A",
          "E",
          "M",
          "Y",
          "G",
          "K"
        ],
        [
          "V",
          "Y",
          "P",
          "Y",
          "G",
          "T",
          "S",
          "X",
          "A",
          "T",
          "L",
          "V",
          "P",
          "E",
          "A",
          "R",
          "C",
          "U"
        ],
        [
          "Q",
          "J",
          "D",
          "A",
          "B",
          "H",
          "Y",
          "M",
          "N",
          "T",
          "S",
          "O",
          "Y",
          "T",
          "M",
          "W",
          "V",
          "A"
        ],
        [
          "N",
          "T",
          "N",
          "E",
          "M",
          "E",
          "L",
          "E",
          "A",
          "G",
          "H",
          "C",
          "F",
          "R",
          "E",
          "W",
          "G",
          "Q"
        ],
        [
          "R",
          "A",
          "V",
          "G",
          "F",
          "X",
          "U",
          "O",
          "C",
          "Q",
          "N",
          "A",
          "W",
          "L",
          "B",
          "K",
          "Y",
          "B"
        ],
        [
          "J",
          "W",
          "C",
          "Z",
          "O",
          "G",
          "N",
          "D",
          "A",
          "H",
          "M",
          "I",
          "R",
          "N",
          "H",
          "O",
          "W",
          "Q"
        ],
        [
          "O",
          "M",
          "S",
          "W",
          "P",
          "T",
          "O",
          "O",
          "S",
          "P",
          "X",
          "D",
          "R",
          "I",
          "K",
          "G",
          "Q",
          "J"
        ],
        [
          "G",
          "I",
          "L",
          "I",
          "P",
          "S",
          "I",
          "O",
          "T",
          "Y",
          "N",
          "W",
          "G",
          "P",
          "V",
          "M",
          "Z",
          "C"
        ],
        [
          "L",
          "A",
          "H",
          "H",
          "H",
          "M",
          "L",
          "J",
          "L",
          "X",
          "O",
          "T",
          "A",
          "N",
          "S",
          "E",
          "N",
          "X"
        ],
        [
          "C",
          "A",
          "S",
          "Y",
          "I",
          "Z",
          "R",
          "W",
          "E",
          "W",
          "O",
          "D",
          "E",
          "J",
          "O",
          "V",
          "R",
          "T"
        ]
      ],
      "words": [
        {
          "text": "AUTUMN",
          "start": {
            "row": 7,
            "col": 1
          },
          "end": {
            "row": 2,
            "col": 1
          },
          "cells": [
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 2,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "BANANA",
          "start": {
            "row": 6,
            "col": 8
          },
          "end": {
            "row": 11,
            "col": 8
          },
          "cells": [
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 11,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "CASTLE",
          "start": {
            "row": 12,
            "col": 8
          },
          "end": {
            "row": 17,
            "col": 8
          },
          "cells": [
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 17,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ELEMENT",
          "start": {
            "row": 11,
            "col": 7
          },
          "end": {
            "row": 11,
            "col": 1
          },
          "cells": [
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 11,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "HORIZON",
          "start": {
            "row": 5,
            "col": 8
          },
          "end": {
            "row": 5,
            "col": 2
          },
          "cells": [
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "LION",
          "start": {
            "row": 16,
            "col": 6
          },
          "end": {
            "row": 13,
            "col": 6
          },
          "cells": [
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 13,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "MEADOW",
          "start": {
            "row": 8,
            "col": 14
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "cells": [
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 8,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PAPAYA",
          "start": {
            "row": 4,
            "col": 4
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "cells": [
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PEAR",
          "start": {
            "row": 9,
            "col": 12
          },
          "end": {
            "row": 9,
            "col": 15
          },
          "cells": [
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 9,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 7,
            "col": 17
          },
          "end": {
            "row": 2,
            "col": 17
          },
          "cells": [
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 6,
              "col": 17
            },
            {
              "row": 5,
              "col": 17
            },
            {
              "row": 4,
              "col": 17
            },
            {
              "row": 3,
              "col": 17
            },
            {
              "row": 2,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "RAINBOW",
          "start": {
            "row": 1,
            "col": 11
          },
          "end": {
            "row": 1,
            "col": 5
          },
          "cells": [
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "RIVER",
          "start": {
            "row": 13,
            "col": 12
          },
          "end": {
            "row": 17,
            "col": 16
          },
          "cells": [
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 15,
              "col": 14
            },
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 17,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 16,
            "col": 14
          },
          "end": {
            "row": 11,
            "col": 9
          },
          "cells": [
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "VALLEY",
          "start": {
            "row": 0,
            "col": 14
          },
          "end": {
            "row": 5,
            "col": 14
          },
          "cells": [
            {
              "row": 0,
              "col": 14
            },
            {
              "row": 1,
              "col": 14
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 2,
            "col": 6
          },
          "end": {
            "row": 7,
            "col": 11
          },
          "cells": [
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 307,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "X",
          "Q",
          "A",
          "U",
          "O",
          "P",
          "W",
          "O",
          "D",
          "A",
          "E",
          "M",
          "B",
          "G",
          "H",
          "M",
          "A",
          "L"
        ],
        [
          "M",
          "I",
          "Q",
          "F",
          "N",
          "X",
          "S",
          "M",
          "O",
          "D",
          "A",
          "O",
          "I",
          "D",
          "B",
          "U",
          "J",
          "I"
        ],
        [
          "F",
          "X",
          "W",
          "I",
          "K",
          "V",
          "W",
          "B",
          "A",
          "U",
          "V",
          "Z",
          "U",
          "T",
          "U",
          "U",
          "M",
          "F"
        ],
        [
          "T",
          "L",
          "J",
          "V",
          "G",
          "R",
          "Q",
          "T",
          "T",
          "G",
          "A",
          "W",
          "N",
          "F",
          "V",
          "X",
          "Z",
          "F"
        ],
        [
          "N",
          "P",
          "T",
          "I",
          "G",
          "E",
          "R",
          "I",
          "P",
          "G",
          "N",
          "B",
          "I",
          "W",
          "C",
          "K",
          "D",
          "L"
        ],
        [
          "Y",
          "F",
          "V",
          "Y",
          "T",
          "D",
          "M",
          "U",
          "P",
          "O",
          "F",
          "G",
          "V",
          "A",
          "C",
          "W",
          "V",
          "E"
        ],
        [
          "M",
          "R",
          "M",
          "V",
          "G",
          "J",
          "A",
          "G",
          "F",
          "E",
          "L",
          "N",
          "E",
          "N",
          "Z",
          "F",
          "L",
          "L"
        ],
        [
          "B",
          "G",
          "O",
          "K",
          "F",
          "Q",
          "R",
          "O",
          "I",
          "U",
          "Z",
          "O",
          "R",
          "A",
          "J",
          "D",
          "P",
          "G"
        ],
        [
          "M",
          "O",
          "G",
          "T",
          "O",
          "O",
          "B",
          "X",
          "B",
          "T",
          "X",
          "F",
          "S",
          "N",
          "P",
          "I",
          "R",
          "A"
        ],
        [
          "U",
          "M",
          "Y",
          "R",
          "C",
          "D",
          "L",
          "R",
          "V",
          "E",
          "Z",
          "O",
          "E",
          "A",
          "U",
          "O",
          "C",
          "E"
        ],
        [
          "I",
          "K",
          "B",
          "U",
          "H",
          "I",
          "E",
          "G",
          "E",
          "Q",
          "L",
          "D",
          "U",
          "B",
          "V",
          "R",
          "U",
          "I"
        ],
        [
          "C",
          "I",
          "Q",
          "B",
          "L",
          "Z",
          "V",
          "P",
          "C",
          "T",
          "X",
          "U",
          "T",
          "B",
          "M",
          "E",
          "O",
          "K"
        ],
        [
          "T",
          "A",
          "M",
          "L",
          "A",
          "L",
          "S",
          "H",
          "C",
          "X",
          "N",
          "D",
          "N",
          "D",
          "K",
          "T",
          "E",
          "B"
        ],
        [
          "X",
          "A",
          "Q",
          "W",
          "B",
          "J",
          "E",
          "L",
          "Y",
          "J",
          "I",
          "I",
          "G",
          "S",
          "N",
          "S",
          "M",
          "L"
        ],
        [
          "Y",
          "Z",
          "T",
          "R",
          "Y",
          "R",
          "I",
          "V",
          "E",
          "R",
          "L",
          "R",
          "W",
          "V",
          "A",
          "A",
          "H",
          "V"
        ],
        [
          "Z",
          "B",
          "F",
          "M",
          "R",
          "E",
          "L",
          "D",
          "N",
          "A",
          "C",
          "M",
          "L",
          "H",
          "V",
          "T",
          "Z",
          "U"
        ],
        [
          "I",
          "S",
          "P",
          "Y",
          "L",
          "F",
          "P",
          "E",
          "A",
          "C",
          "H",
          "J",
          "K",
          "G",
          "N",
          "N",
          "B",
          "A"
        ],
        [
          "N",
          "A",
          "Y",
          "L",
          "V",
          "A",
          "M",
          "L",
          "I",
          "T",
          "Z",
          "U",
          "R",
          "O",
          "B",
          "R",
          "A",
          "H"
        ]
      ],
      "words": [
        {
          "text": "ASTEROID",
          "start": {
            "row": 14,
            "col": 15
          },
          "end": {
            "row": 7,
            "col": 15
          },
          "cells": [
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 12,
              "col": 15
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 7,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "BANANA",
          "start": {
            "row": 10,
            "col": 13
          },
          "end": {
            "row": 5,
            "col": 13
          },
          "cells": [
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 5,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "CANDLE",
          "start": {
            "row": 15,
            "col": 10
          },
          "end": {
            "row": 15,
            "col": 5
          },
          "cells": [
            {
              "row": 15,
              "col": 10
            },
            {
              "row": 15,
              "col": 9
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 15,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "CHERRY",
          "start": {
            "row": 11,
            "col": 8
          },
          "end": {
            "row": 16,
            "col": 3
          },
          "cells": [
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 16,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "EAGLE",
          "start": {
            "row": 9,
            "col": 17
          },
          "end": {
            "row": 5,
            "col": 17
          },
          "cells": [
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 6,
              "col": 17
            },
            {
              "row": 5,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 17,
            "col": 17
          },
          "end": {
            "row": 17,
            "col": 12
          },
          "cells": [
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 17,
              "col": 16
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 17,
              "col": 13
            },
            {
              "row": 17,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 10,
            "col": 6
          },
          "cells": [
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "MEADOW",
          "start": {
            "row": 0,
            "col": 11
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 0,
              "col": 10
            },
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "ORBIT",
          "start": {
            "row": 8,
            "col": 4
          },
          "end": {
            "row": 12,
            "col": 0
          },
          "cells": [
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 12,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 16,
            "col": 6
          },
          "end": {
            "row": 16,
            "col": 10
          },
          "cells": [
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 16,
              "col": 9
            },
            {
              "row": 16,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "RIVER",
          "start": {
            "row": 14,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 9
          },
          "cells": [
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "TIGER",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 4,
            "col": 6
          },
          "cells": [
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "UNIVERSE",
          "start": {
            "row": 2,
            "col": 12
          },
          "end": {
            "row": 9,
            "col": 12
          },
          "cells": [
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "VICTORY",
          "start": {
            "row": 11,
            "col": 6
          },
          "end": {
            "row": 5,
            "col": 0
          },
          "cells": [
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "WINTER",
          "start": {
            "row": 14,
            "col": 12
          },
          "end": {
            "row": 9,
            "col": 7
          },
          "cells": [
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 7
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 308,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "N",
          "B",
          "T",
          "Z",
          "V",
          "T",
          "T",
          "G",
          "S",
          "F",
          "T",
          "A",
          "F",
          "Q",
          "B",
          "I",
          "J",
          "C"
        ],
        [
          "E",
          "Q",
          "E",
          "A",
          "H",
          "B",
          "M",
          "S",
          "P",
          "I",
          "N",
          "D",
          "M",
          "W",
          "C",
          "P",
          "S",
          "Z"
        ],
        [
          "H",
          "N",
          "F",
          "X",
          "Q",
          "M",
          "H",
          "N",
          "E",
          "A",
          "M",
          "R",
          "O",
          "B",
          "R",
          "A",
          "H",
          "E"
        ],
        [
          "U",
          "Y",
          "C",
          "S",
          "C",
          "T",
          "Z",
          "A",
          "N",
          "R",
          "L",
          "B",
          "U",
          "X",
          "F",
          "T",
          "D",
          "B"
        ],
        [
          "W",
          "K",
          "U",
          "K",
          "P",
          "J",
          "T",
          "A",
          "W",
          "S",
          "O",
          "G",
          "K",
          "L",
          "E",
          "Y",
          "U",
          "R"
        ],
        [
          "A",
          "I",
          "Q",
          "I",
          "R",
          "W",
          "B",
          "P",
          "A",
          "U",
          "L",
          "F",
          "Z",
          "N",
          "E",
          "T",
          "W",
          "A"
        ],
        [
          "C",
          "Y",
          "K",
          "T",
          "E",
          "B",
          "Y",
          "P",
          "Y",
          "C",
          "N",
          "I",
          "U",
          "L",
          "U",
          "R",
          "E",
          "S"
        ],
        [
          "P",
          "H",
          "M",
          "T",
          "V",
          "B",
          "P",
          "Y",
          "T",
          "U",
          "V",
          "B",
          "L",
          "T",
          "Q",
          "E",
          "D",
          "G"
        ],
        [
          "E",
          "E",
          "C",
          "E",
          "L",
          "H",
          "G",
          "E",
          "B",
          "C",
          "R",
          "A",
          "N",
          "N",
          "Q",
          "A",
          "N",
          "Q"
        ],
        [
          "S",
          "L",
          "Q",
          "N",
          "I",
          "O",
          "K",
          "Q",
          "H",
          "J",
          "V",
          "L",
          "J",
          "S",
          "M",
          "S",
          "S",
          "U"
        ],
        [
          "U",
          "G",
          "W",
          "R",
          "S",
          "C",
          "Z",
          "E",
          "Q",
          "N",
          "R",
          "C",
          "N",
          "A",
          "Y",
          "U",
          "U",
          "B"
        ],
        [
          "O",
          "X",
          "E",
          "Y",
          "O",
          "C",
          "R",
          "D",
          "X",
          "W",
          "A",
          "I",
          "Q",
          "X",
          "U",
          "R",
          "O",
          "B"
        ],
        [
          "M",
          "W",
          "Z",
          "R",
          "Y",
          "R",
          "N",
          "E",
          "G",
          "Z",
          "Y",
          "S",
          "L",
          "E",
          "K",
          "E",
          "O",
          "J"
        ],
        [
          "H",
          "D",
          "A",
          "V",
          "Y",
          "T",
          "H",
          "P",
          "E",
          "V",
          "C",
          "L",
          "Z",
          "F",
          "E",
          "G",
          "I",
          "T"
        ],
        [
          "T",
          "O",
          "R",
          "A",
          "B",
          "P",
          "G",
          "P",
          "P",
          "I",
          "V",
          "A",
          "Z",
          "U",
          "O",
          "K",
          "Z",
          "M"
        ],
        [
          "E",
          "S",
          "T",
          "N",
          "P",
          "X",
          "H",
          "V",
          "T",
          "F",
          "M",
          "N",
          "H",
          "G",
          "P",
          "R",
          "Z",
          "S"
        ],
        [
          "E",
          "L",
          "R",
          "Z",
          "Q",
          "Y",
          "Z",
          "V",
          "A",
          "S",
          "R",
          "D",
          "H",
          "S",
          "P",
          "N",
          "O",
          "L"
        ],
        [
          "W",
          "E",
          "E",
          "D",
          "R",
          "R",
          "A",
          "E",
          "P",
          "C",
          "O",
          "J",
          "W",
          "Z",
          "L",
          "E",
          "J",
          "B"
        ]
      ],
      "words": [
        {
          "text": "BANANA",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 0,
            "col": 11
          },
          "cells": [
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "CHERRY",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 13,
            "col": 4
          },
          "cells": [
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 13,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "FOREST",
          "start": {
            "row": 5,
            "col": 11
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 2,
            "col": 16
          },
          "end": {
            "row": 2,
            "col": 11
          },
          "cells": [
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 2,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "ISLAND",
          "start": {
            "row": 11,
            "col": 11
          },
          "end": {
            "row": 16,
            "col": 11
          },
          "cells": [
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 16,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 4,
            "col": 3
          },
          "end": {
            "row": 9,
            "col": 3
          },
          "cells": [
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 9,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "MOUSE",
          "start": {
            "row": 12,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 0
          },
          "cells": [
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "PEAR",
          "start": {
            "row": 17,
            "col": 8
          },
          "end": {
            "row": 17,
            "col": 5
          },
          "cells": [
            {
              "row": 17,
              "col": 8
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 17,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 12,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "SAPPHIRE",
          "start": {
            "row": 4,
            "col": 9
          },
          "end": {
            "row": 11,
            "col": 2
          },
          "cells": [
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 5,
            "col": 4
          },
          "cells": [
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "TREASURE",
          "start": {
            "row": 5,
            "col": 15
          },
          "end": {
            "row": 12,
            "col": 15
          },
          "cells": [
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 15
            },
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 12,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "VALLEY",
          "start": {
            "row": 9,
            "col": 10
          },
          "end": {
            "row": 4,
            "col": 15
          },
          "cells": [
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 4,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 1,
            "col": 17
          },
          "end": {
            "row": 5,
            "col": 17
          },
          "cells": [
            {
              "row": 1,
              "col": 17
            },
            {
              "row": 2,
              "col": 17
            },
            {
              "row": 3,
              "col": 17
            },
            {
              "row": 4,
              "col": 17
            },
            {
              "row": 5,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 12,
            "col": 9
          },
          "end": {
            "row": 17,
            "col": 4
          },
          "cells": [
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 16,
              "col": 5
            },
            {
              "row": 17,
              "col": 4
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 309,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "P",
          "O",
          "O",
          "V",
          "N",
          "T",
          "M",
          "U",
          "N",
          "D",
          "D",
          "K",
          "X",
          "Z",
          "D",
          "E",
          "A",
          "K"
        ],
        [
          "O",
          "P",
          "D",
          "A",
          "O",
          "W",
          "E",
          "A",
          "C",
          "F",
          "X",
          "Q",
          "W",
          "E",
          "C",
          "T",
          "C",
          "N"
        ],
        [
          "H",
          "Q",
          "A",
          "N",
          "A",
          "N",
          "A",
          "B",
          "I",
          "A",
          "T",
          "F",
          "J",
          "N",
          "N",
          "M",
          "J",
          "V"
        ],
        [
          "Y",
          "B",
          "R",
          "R",
          "U",
          "O",
          "B",
          "F",
          "Z",
          "X",
          "P",
          "S",
          "O",
          "S",
          "O",
          "O",
          "U",
          "B"
        ],
        [
          "A",
          "O",
          "A",
          "A",
          "A",
          "P",
          "C",
          "M",
          "D",
          "U",
          "L",
          "N",
          "E",
          "D",
          "J",
          "U",
          "N",
          "Q"
        ],
        [
          "A",
          "E",
          "M",
          "E",
          "R",
          "A",
          "L",
          "D",
          "O",
          "T",
          "Z",
          "S",
          "C",
          "R",
          "P",
          "S",
          "U",
          "E"
        ],
        [
          "U",
          "G",
          "N",
          "N",
          "G",
          "O",
          "G",
          "H",
          "I",
          "N",
          "Q",
          "N",
          "H",
          "B",
          "O",
          "E",
          "E",
          "A"
        ],
        [
          "C",
          "R",
          "I",
          "H",
          "Q",
          "K",
          "L",
          "S",
          "F",
          "T",
          "S",
          "V",
          "D",
          "E",
          "T",
          "F",
          "B",
          "K"
        ],
        [
          "A",
          "O",
          "M",
          "O",
          "A",
          "F",
          "L",
          "R",
          "L",
          "K",
          "A",
          "O",
          "X",
          "O",
          "O",
          "Q",
          "T",
          "T"
        ],
        [
          "P",
          "K",
          "M",
          "K",
          "S",
          "A",
          "S",
          "J",
          "R",
          "E",
          "I",
          "W",
          "O",
          "A",
          "F",
          "K",
          "I",
          "N"
        ],
        [
          "B",
          "P",
          "O",
          "P",
          "N",
          "F",
          "G",
          "Z",
          "T",
          "B",
          "M",
          "N",
          "I",
          "N",
          "V",
          "G",
          "C",
          "N"
        ],
        [
          "Z",
          "I",
          "D",
          "D",
          "A",
          "Q",
          "M",
          "Z",
          "C",
          "Z",
          "B",
          "J",
          "A",
          "N",
          "E",
          "A",
          "Q",
          "P"
        ],
        [
          "O",
          "W",
          "E",
          "X",
          "N",
          "S",
          "V",
          "E",
          "W",
          "E",
          "W",
          "M",
          "A",
          "R",
          "T",
          "W",
          "U",
          "D"
        ],
        [
          "L",
          "I",
          "M",
          "N",
          "Q",
          "R",
          "S",
          "L",
          "L",
          "P",
          "C",
          "A",
          "D",
          "W",
          "K",
          "E",
          "L",
          "G"
        ],
        [
          "M",
          "K",
          "K",
          "C",
          "N",
          "F",
          "U",
          "L",
          "Z",
          "O",
          "Z",
          "R",
          "X",
          "W",
          "F",
          "T",
          "R",
          "M"
        ],
        [
          "D",
          "P",
          "M",
          "D",
          "P",
          "G",
          "V",
          "H",
          "A",
          "X",
          "N",
          "B",
          "F",
          "T",
          "E",
          "X",
          "L",
          "N"
        ],
        [
          "I",
          "N",
          "V",
          "A",
          "L",
          "L",
          "E",
          "Y",
          "O",
          "N",
          "B",
          "L",
          "J",
          "G",
          "T",
          "S",
          "O",
          "X"
        ],
        [
          "H",
          "V",
          "Z",
          "J",
          "A",
          "D",
          "Y",
          "C",
          "H",
          "A",
          "P",
          "E",
          "W",
          "H",
          "G",
          "I",
          "K",
          "X"
        ]
      ],
      "words": [
        {
          "text": "BANANA",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 2,
            "col": 2
          },
          "cells": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 7,
            "col": 0
          },
          "end": {
            "row": 13,
            "col": 6
          },
          "cells": [
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "EMERALD",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 5,
            "col": 7
          },
          "cells": [
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "FOREST",
          "start": {
            "row": 7,
            "col": 15
          },
          "end": {
            "row": 2,
            "col": 10
          },
          "cells": [
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 3,
              "col": 11
            },
            {
              "row": 2,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "GUAVA",
          "start": {
            "row": 13,
            "col": 17
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "ISLAND",
          "start": {
            "row": 6,
            "col": 8
          },
          "end": {
            "row": 11,
            "col": 3
          },
          "cells": [
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "KIWI",
          "start": {
            "row": 14,
            "col": 1
          },
          "end": {
            "row": 11,
            "col": 1
          },
          "cells": [
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 11,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 12,
            "col": 11
          },
          "end": {
            "row": 17,
            "col": 11
          },
          "cells": [
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 17,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "MELON",
          "start": {
            "row": 11,
            "col": 6
          },
          "end": {
            "row": 15,
            "col": 10
          },
          "cells": [
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 15,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "MONSOON",
          "start": {
            "row": 4,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 13
          },
          "cells": [
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "MOUSE",
          "start": {
            "row": 2,
            "col": 15
          },
          "end": {
            "row": 6,
            "col": 15
          },
          "cells": [
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "TIGER",
          "start": {
            "row": 8,
            "col": 17
          },
          "end": {
            "row": 12,
            "col": 13
          },
          "cells": [
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 12,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "VALLEY",
          "start": {
            "row": 16,
            "col": 2
          },
          "end": {
            "row": 16,
            "col": 7
          },
          "cells": [
            {
              "row": 16,
              "col": 2
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 16,
              "col": 4
            },
            {
              "row": 16,
              "col": 5
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 16,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "WINTER",
          "start": {
            "row": 9,
            "col": 11
          },
          "end": {
            "row": 14,
            "col": 16
          },
          "cells": [
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 12,
              "col": 14
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 14,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 0,
            "col": 12
          },
          "end": {
            "row": 4,
            "col": 16
          },
          "cells": [
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 1,
              "col": 13
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 4,
              "col": 16
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 310,
      "difficulty": "hard",
      "size": 18,
      "grid": [
        [
          "M",
          "A",
          "L",
          "E",
          "U",
          "P",
          "N",
          "F",
          "W",
          "W",
          "J",
          "A",
          "N",
          "C",
          "N",
          "W",
          "M",
          "E"
        ],
        [
          "Y",
          "I",
          "E",
          "D",
          "A",
          "V",
          "P",
          "F",
          "S",
          "E",
          "M",
          "A",
          "T",
          "B",
          "C",
          "C",
          "F",
          "W"
        ],
        [
          "L",
          "A",
          "N",
          "D",
          "M",
          "A",
          "R",
          "K",
          "K",
          "Q",
          "D",
          "T",
          "D",
          "M",
          "K",
          "W",
          "H",
          "Z"
        ],
        [
          "Q",
          "Z",
          "O",
          "R",
          "E",
          "T",
          "I",
          "P",
          "U",
          "J",
          "L",
          "U",
          "J",
          "E",
          "T",
          "C",
          "D",
          "K"
        ],
        [
          "H",
          "J",
          "Q",
          "F",
          "D",
          "Q",
          "T",
          "J",
          "R",
          "N",
          "W",
          "N",
          "A",
          "A",
          "O",
          "Z",
          "R",
          "C"
        ],
        [
          "X",
          "M",
          "A",
          "R",
          "B",
          "L",
          "E",
          "S",
          "E",
          "P",
          "A",
          "O",
          "Z",
          "D",
          "N",
          "B",
          "I",
          "C"
        ],
        [
          "J",
          "C",
          "S",
          "D",
          "B",
          "M",
          "Y",
          "M",
          "V",
          "I",
          "Q",
          "Z",
          "P",
          "O",
          "Z",
          "N",
          "U",
          "R"
        ],
        [
          "K",
          "R",
          "J",
          "X",
          "O",
          "Q",
          "V",
          "O",
          "I",
          "F",
          "Z",
          "I",
          "K",
          "W",
          "C",
          "G",
          "F",
          "A"
        ],
        [
          "H",
          "O",
          "E",
          "S",
          "S",
          "L",
          "B",
          "X",
          "R",
          "Z",
          "S",
          "R",
          "K",
          "I",
          "C",
          "R",
          "P",
          "T"
        ],
        [
          "R",
          "C",
          "L",
          "Q",
          "Z",
          "D",
          "P",
          "W",
          "N",
          "O",
          "P",
          "O",
          "P",
          "B",
          "V",
          "K",
          "S",
          "E"
        ],
        [
          "Q",
          "I",
          "C",
          "I",
          "D",
          "A",
          "F",
          "H",
          "S",
          "X",
          "M",
          "H",
          "F",
          "B",
          "Q",
          "D",
          "A",
          "R"
        ],
        [
          "V",
          "I",
          "J",
          "J",
          "G",
          "I",
          "P",
          "M",
          "I",
          "T",
          "K",
          "X",
          "L",
          "W",
          "U",
          "P",
          "K",
          "K"
        ],
        [
          "C",
          "A",
          "K",
          "E",
          "Z",
          "H",
          "A",
          "O",
          "W",
          "N",
          "Q",
          "P",
          "M",
          "X",
          "H",
          "E",
          "I",
          "Y"
        ],
        [
          "D",
          "X",
          "M",
          "F",
          "H",
          "W",
          "T",
          "M",
          "T",
          "S",
          "G",
          "A",
          "K",
          "C",
          "J",
          "G",
          "B",
          "I"
        ],
        [
          "K",
          "I",
          "A",
          "Q",
          "Y",
          "A",
          "D",
          "N",
          "O",
          "A",
          "G",
          "A",
          "J",
          "K",
          "P",
          "D",
          "M",
          "F"
        ],
        [
          "L",
          "F",
          "H",
          "X",
          "D",
          "K",
          "W",
          "B",
          "I",
          "N",
          "D",
          "U",
          "Q",
          "U",
          "U",
          "I",
          "Q",
          "B"
        ],
        [
          "P",
          "S",
          "S",
          "Z",
          "H",
          "Q",
          "Y",
          "X",
          "W",
          "N",
          "D",
          "R",
          "D",
          "H",
          "P",
          "R",
          "Y",
          "K"
        ],
        [
          "E",
          "T",
          "D",
          "K",
          "I",
          "T",
          "C",
          "H",
          "E",
          "N",
          "G",
          "D",
          "B",
          "W",
          "E",
          "B",
          "H",
          "S"
        ]
      ],
      "words": [
        {
          "text": "BRIDGE",
          "start": {
            "row": 17,
            "col": 15
          },
          "end": {
            "row": 12,
            "col": 15
          },
          "cells": [
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 12,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 5,
            "col": 17
          },
          "end": {
            "row": 10,
            "col": 17
          },
          "cells": [
            {
              "row": 5,
              "col": 17
            },
            {
              "row": 6,
              "col": 17
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 10,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 16,
            "col": 10
          },
          "cells": [
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 15,
              "col": 9
            },
            {
              "row": 16,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 6,
            "col": 3
          },
          "end": {
            "row": 12,
            "col": 9
          },
          "cells": [
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "HORIZON",
          "start": {
            "row": 10,
            "col": 11
          },
          "end": {
            "row": 4,
            "col": 11
          },
          "cells": [
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 4,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "JUPITER",
          "start": {
            "row": 3,
            "col": 9
          },
          "end": {
            "row": 3,
            "col": 3
          },
          "cells": [
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "KITCHEN",
          "start": {
            "row": 17,
            "col": 3
          },
          "end": {
            "row": 17,
            "col": 9
          },
          "cells": [
            {
              "row": 17,
              "col": 3
            },
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 17,
              "col": 8
            },
            {
              "row": 17,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "LANDMARK",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 2,
            "col": 7
          },
          "cells": [
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "LIGHTNING",
          "start": {
            "row": 9,
            "col": 2
          },
          "end": {
            "row": 17,
            "col": 10
          },
          "cells": [
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 16,
              "col": 9
            },
            {
              "row": 17,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "LIME",
          "start": {
            "row": 15,
            "col": 0
          },
          "end": {
            "row": 12,
            "col": 3
          },
          "cells": [
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 12,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 5,
            "col": 6
          },
          "cells": [
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "MEADOW",
          "start": {
            "row": 2,
            "col": 13
          },
          "end": {
            "row": 7,
            "col": 13
          },
          "cells": [
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 9,
            "col": 12
          },
          "end": {
            "row": 4,
            "col": 17
          },
          "cells": [
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 6,
              "col": 15
            },
            {
              "row": 5,
              "col": 16
            },
            {
              "row": 4,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "RIVER",
          "start": {
            "row": 8,
            "col": 8
          },
          "end": {
            "row": 4,
            "col": 8
          },
          "cells": [
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "TOPAZ",
          "start": {
            "row": 13,
            "col": 8
          },
          "end": {
            "row": 9,
            "col": 4
          },
          "cells": [
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            }
          ],
          "found": false
        }
      ]
    }
  ],
  "expert": [
    {
      "seed": 401,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "U",
          "D",
          "E",
          "U",
          "T",
          "R",
          "F",
          "O",
          "F",
          "G",
          "C",
          "U",
          "O",
          "R",
          "B",
          "I",
          "T",
          "F",
          "E",
          "D",
          "W",
          "K"
        ],
        [
          "C",
          "D",
          "O",
          "I",
          "K",
          "P",
          "E",
          "M",
          "U",
          "E",
          "L",
          "X",
          "L",
          "P",
          "Y",
          "W",
          "T",
          "V",
          "E",
          "H",
          "Z",
          "J"
        ],
        [
          "K",
          "M",
          "P",
          "R",
          "A",
          "L",
          "B",
          "D",
          "W",
          "H",
          "P",
          "I",
          "V",
          "Z",
          "C",
          "I",
          "B",
          "W",
          "L",
          "G",
          "C",
          "K"
        ],
        [
          "N",
          "T",
          "P",
          "P",
          "C",
          "S",
          "Y",
          "E",
          "D",
          "N",
          "O",
          "M",
          "A",
          "I",
          "D",
          "T",
          "Y",
          "O",
          "B",
          "C",
          "K",
          "O"
        ],
        [
          "U",
          "S",
          "W",
          "S",
          "W",
          "H",
          "T",
          "S",
          "O",
          "C",
          "W",
          "C",
          "H",
          "O",
          "R",
          "W",
          "S",
          "X",
          "R",
          "B",
          "H",
          "C"
        ],
        [
          "T",
          "J",
          "A",
          "K",
          "V",
          "O",
          "A",
          "E",
          "I",
          "V",
          "G",
          "S",
          "F",
          "V",
          "Q",
          "U",
          "O",
          "L",
          "A",
          "O",
          "D",
          "E"
        ],
        [
          "Q",
          "B",
          "B",
          "C",
          "J",
          "G",
          "W",
          "R",
          "R",
          "H",
          "Z",
          "R",
          "I",
          "W",
          "Z",
          "I",
          "S",
          "R",
          "M",
          "B",
          "T",
          "A"
        ],
        [
          "E",
          "F",
          "U",
          "N",
          "T",
          "I",
          "U",
          "T",
          "D",
          "O",
          "E",
          "R",
          "O",
          "B",
          "R",
          "A",
          "H",
          "B",
          "R",
          "S",
          "C",
          "N"
        ],
        [
          "O",
          "C",
          "Q",
          "R",
          "X",
          "V",
          "Z",
          "H",
          "Y",
          "E",
          "I",
          "Z",
          "M",
          "B",
          "X",
          "C",
          "I",
          "Y",
          "P",
          "A",
          "X",
          "N"
        ],
        [
          "Z",
          "M",
          "J",
          "Q",
          "V",
          "P",
          "R",
          "L",
          "D",
          "Y",
          "P",
          "D",
          "Q",
          "D",
          "V",
          "V",
          "E",
          "T",
          "F",
          "R",
          "P",
          "J"
        ],
        [
          "X",
          "X",
          "A",
          "M",
          "L",
          "D",
          "M",
          "O",
          "Q",
          "F",
          "P",
          "Y",
          "E",
          "R",
          "U",
          "T",
          "N",
          "E",
          "V",
          "D",
          "A",
          "S"
        ],
        [
          "S",
          "Q",
          "T",
          "L",
          "P",
          "O",
          "M",
          "C",
          "D",
          "O",
          "J",
          "U",
          "N",
          "I",
          "A",
          "T",
          "N",
          "U",
          "O",
          "M",
          "J",
          "K"
        ],
        [
          "S",
          "O",
          "C",
          "B",
          "L",
          "K",
          "N",
          "R",
          "K",
          "U",
          "X",
          "H",
          "F",
          "V",
          "U",
          "D",
          "W",
          "Q",
          "J",
          "N",
          "Z",
          "W"
        ],
        [
          "Z",
          "J",
          "K",
          "X",
          "S",
          "E",
          "P",
          "E",
          "P",
          "S",
          "L",
          "V",
          "Z",
          "R",
          "D",
          "L",
          "L",
          "T",
          "K",
          "I",
          "L",
          "O"
        ],
        [
          "I",
          "Y",
          "I",
          "U",
          "K",
          "A",
          "R",
          "I",
          "Y",
          "U",
          "D",
          "D",
          "Y",
          "R",
          "E",
          "L",
          "U",
          "Z",
          "P",
          "R",
          "Q",
          "L"
        ],
        [
          "D",
          "R",
          "T",
          "X",
          "E",
          "J",
          "T",
          "B",
          "W",
          "M",
          "H",
          "Y",
          "Y",
          "Y",
          "I",
          "T",
          "P",
          "H",
          "C",
          "V",
          "J",
          "X"
        ],
        [
          "U",
          "T",
          "T",
          "C",
          "B",
          "E",
          "Z",
          "K",
          "M",
          "S",
          "A",
          "H",
          "A",
          "E",
          "E",
          "F",
          "A",
          "Z",
          "Y",
          "W",
          "W",
          "J"
        ],
        [
          "B",
          "S",
          "E",
          "B",
          "R",
          "O",
          "B",
          "F",
          "E",
          "U",
          "P",
          "F",
          "D",
          "N",
          "I",
          "L",
          "Z",
          "R",
          "P",
          "E",
          "B",
          "Z"
        ],
        [
          "T",
          "E",
          "N",
          "M",
          "J",
          "R",
          "Q",
          "J",
          "C",
          "E",
          "L",
          "P",
          "M",
          "K",
          "S",
          "V",
          "S",
          "D",
          "C",
          "M",
          "S",
          "E"
        ],
        [
          "H",
          "U",
          "D",
          "X",
          "H",
          "Y",
          "P",
          "S",
          "Z",
          "F",
          "F",
          "N",
          "U",
          "Y",
          "R",
          "P",
          "S",
          "A",
          "C",
          "B",
          "Q",
          "N"
        ],
        [
          "E",
          "Q",
          "B",
          "E",
          "O",
          "P",
          "C",
          "X",
          "Z",
          "J",
          "L",
          "F",
          "H",
          "Z",
          "H",
          "D",
          "T",
          "K",
          "O",
          "J",
          "G",
          "Q"
        ],
        [
          "L",
          "E",
          "R",
          "Q",
          "O",
          "O",
          "H",
          "T",
          "N",
          "F",
          "S",
          "P",
          "C",
          "I",
          "M",
          "I",
          "P",
          "L",
          "I",
          "U",
          "U",
          "X"
        ]
      ],
      "words": [
        {
          "text": "ADVENTURE",
          "start": {
            "row": 10,
            "col": 20
          },
          "end": {
            "row": 10,
            "col": 12
          },
          "cells": [
            {
              "row": 10,
              "col": 20
            },
            {
              "row": 10,
              "col": 19
            },
            {
              "row": 10,
              "col": 18
            },
            {
              "row": 10,
              "col": 17
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 10,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "ASTEROID",
          "start": {
            "row": 2,
            "col": 4
          },
          "end": {
            "row": 9,
            "col": 11
          },
          "cells": [
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 9,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 18,
            "col": 18
          },
          "end": {
            "row": 13,
            "col": 13
          },
          "cells": [
            {
              "row": 18,
              "col": 18
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 13,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "cells": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 3,
            "col": 14
          },
          "end": {
            "row": 3,
            "col": 8
          },
          "cells": [
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 3,
              "col": 11
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 3,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 5,
            "col": 12
          },
          "end": {
            "row": 11,
            "col": 6
          },
          "cells": [
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 7,
            "col": 16
          },
          "end": {
            "row": 7,
            "col": 11
          },
          "cells": [
            {
              "row": 7,
              "col": 16
            },
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 7,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "JUPITER",
          "start": {
            "row": 11,
            "col": 10
          },
          "end": {
            "row": 17,
            "col": 4
          },
          "cells": [
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 16,
              "col": 5
            },
            {
              "row": 17,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 13,
            "col": 2
          },
          "end": {
            "row": 18,
            "col": 2
          },
          "cells": [
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 2
            },
            {
              "row": 17,
              "col": 2
            },
            {
              "row": 18,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 6,
            "col": 18
          },
          "end": {
            "row": 1,
            "col": 18
          },
          "cells": [
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 5,
              "col": 18
            },
            {
              "row": 4,
              "col": 18
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 2,
              "col": 18
            },
            {
              "row": 1,
              "col": 18
            }
          ],
          "found": false
        },
        {
          "text": "MOUNTAIN",
          "start": {
            "row": 11,
            "col": 19
          },
          "end": {
            "row": 11,
            "col": 12
          },
          "cells": [
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 11,
              "col": 18
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 11,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "OCEAN",
          "start": {
            "row": 3,
            "col": 21
          },
          "end": {
            "row": 7,
            "col": 21
          },
          "cells": [
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 4,
              "col": 21
            },
            {
              "row": 5,
              "col": 21
            },
            {
              "row": 6,
              "col": 21
            },
            {
              "row": 7,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "ORBIT",
          "start": {
            "row": 0,
            "col": 12
          },
          "end": {
            "row": 0,
            "col": 16
          },
          "cells": [
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 0,
              "col": 14
            },
            {
              "row": 0,
              "col": 15
            },
            {
              "row": 0,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 20,
            "col": 1
          },
          "end": {
            "row": 16,
            "col": 1
          },
          "cells": [
            {
              "row": 20,
              "col": 1
            },
            {
              "row": 19,
              "col": 1
            },
            {
              "row": 18,
              "col": 1
            },
            {
              "row": 17,
              "col": 1
            },
            {
              "row": 16,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 10,
            "col": 21
          },
          "end": {
            "row": 4,
            "col": 15
          },
          "cells": [
            {
              "row": 10,
              "col": 21
            },
            {
              "row": 9,
              "col": 20
            },
            {
              "row": 8,
              "col": 19
            },
            {
              "row": 7,
              "col": 18
            },
            {
              "row": 6,
              "col": 17
            },
            {
              "row": 5,
              "col": 16
            },
            {
              "row": 4,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "UMBRELLA",
          "start": {
            "row": 17,
            "col": 9
          },
          "end": {
            "row": 10,
            "col": 2
          },
          "cells": [
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 19,
            "col": 8
          },
          "end": {
            "row": 14,
            "col": 13
          },
          "cells": [
            {
              "row": 19,
              "col": 8
            },
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 402,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "M",
          "I",
          "S",
          "U",
          "B",
          "K",
          "W",
          "C",
          "T",
          "B",
          "J",
          "S",
          "S",
          "T",
          "W",
          "H",
          "A",
          "L",
          "E",
          "X",
          "I",
          "V"
        ],
        [
          "J",
          "G",
          "V",
          "F",
          "E",
          "Z",
          "L",
          "U",
          "L",
          "O",
          "O",
          "B",
          "Z",
          "X",
          "K",
          "Q",
          "Q",
          "J",
          "T",
          "H",
          "F",
          "C"
        ],
        [
          "S",
          "Y",
          "Z",
          "V",
          "E",
          "A",
          "W",
          "I",
          "D",
          "A",
          "O",
          "F",
          "Y",
          "M",
          "G",
          "V",
          "M",
          "G",
          "R",
          "L",
          "W",
          "A"
        ],
        [
          "N",
          "J",
          "U",
          "M",
          "V",
          "V",
          "R",
          "W",
          "T",
          "H",
          "V",
          "E",
          "L",
          "D",
          "N",
          "A",
          "C",
          "O",
          "Z",
          "E",
          "L",
          "N"
        ],
        [
          "I",
          "E",
          "V",
          "P",
          "A",
          "K",
          "C",
          "B",
          "Y",
          "K",
          "Y",
          "Q",
          "G",
          "R",
          "P",
          "G",
          "B",
          "A",
          "H",
          "V",
          "H",
          "Y"
        ],
        [
          "Q",
          "F",
          "U",
          "E",
          "K",
          "V",
          "K",
          "A",
          "E",
          "X",
          "Q",
          "A",
          "R",
          "O",
          "B",
          "O",
          "T",
          "R",
          "E",
          "O",
          "G",
          "O"
        ],
        [
          "A",
          "X",
          "A",
          "N",
          "T",
          "B",
          "W",
          "T",
          "B",
          "Z",
          "H",
          "S",
          "E",
          "S",
          "N",
          "I",
          "H",
          "P",
          "L",
          "O",
          "D",
          "N"
        ],
        [
          "C",
          "C",
          "E",
          "O",
          "W",
          "I",
          "L",
          "D",
          "F",
          "L",
          "O",
          "W",
          "E",
          "R",
          "B",
          "U",
          "X",
          "U",
          "H",
          "I",
          "U",
          "V"
        ],
        [
          "S",
          "M",
          "O",
          "N",
          "R",
          "H",
          "A",
          "H",
          "T",
          "Y",
          "O",
          "L",
          "T",
          "I",
          "Y",
          "F",
          "I",
          "C",
          "Z",
          "B",
          "Y",
          "Z"
        ],
        [
          "Z",
          "N",
          "E",
          "P",
          "O",
          "K",
          "O",
          "R",
          "E",
          "J",
          "I",
          "K",
          "I",
          "T",
          "C",
          "H",
          "E",
          "N",
          "Y",
          "W",
          "W",
          "K"
        ],
        [
          "F",
          "E",
          "H",
          "A",
          "U",
          "N",
          "E",
          "R",
          "J",
          "D",
          "M",
          "T",
          "D",
          "A",
          "F",
          "H",
          "M",
          "E",
          "Q",
          "J",
          "D",
          "Y"
        ],
        [
          "W",
          "D",
          "S",
          "Y",
          "D",
          "S",
          "Y",
          "F",
          "H",
          "K",
          "R",
          "A",
          "M",
          "D",
          "N",
          "A",
          "L",
          "D",
          "T",
          "R",
          "Q",
          "R"
        ],
        [
          "G",
          "E",
          "F",
          "F",
          "E",
          "O",
          "Y",
          "S",
          "O",
          "K",
          "H",
          "G",
          "L",
          "U",
          "E",
          "T",
          "C",
          "U",
          "Z",
          "H",
          "J",
          "R"
        ],
        [
          "F",
          "Y",
          "S",
          "D",
          "C",
          "R",
          "W",
          "D",
          "D",
          "Q",
          "D",
          "E",
          "Z",
          "F",
          "Y",
          "O",
          "Y",
          "E",
          "L",
          "I",
          "L",
          "E"
        ],
        [
          "L",
          "X",
          "W",
          "E",
          "R",
          "P",
          "W",
          "G",
          "H",
          "H",
          "C",
          "V",
          "K",
          "D",
          "M",
          "G",
          "D",
          "K",
          "S",
          "R",
          "F",
          "B"
        ],
        [
          "M",
          "B",
          "K",
          "E",
          "L",
          "M",
          "E",
          "U",
          "S",
          "J",
          "B",
          "G",
          "U",
          "P",
          "L",
          "L",
          "U",
          "N",
          "T",
          "R",
          "G",
          "A"
        ],
        [
          "Z",
          "B",
          "H",
          "A",
          "P",
          "W",
          "N",
          "N",
          "X",
          "Y",
          "A",
          "O",
          "A",
          "A",
          "H",
          "R",
          "G",
          "M",
          "C",
          "M",
          "H",
          "Z"
        ],
        [
          "U",
          "C",
          "M",
          "V",
          "K",
          "O",
          "Q",
          "E",
          "J",
          "O",
          "L",
          "S",
          "R",
          "Z",
          "O",
          "N",
          "F",
          "B",
          "H",
          "S",
          "P",
          "A"
        ],
        [
          "R",
          "W",
          "A",
          "F",
          "X",
          "A",
          "C",
          "T",
          "E",
          "C",
          "S",
          "C",
          "N",
          "Y",
          "I",
          "U",
          "W",
          "B",
          "Q",
          "Q",
          "E",
          "D"
        ],
        [
          "A",
          "X",
          "Q",
          "Z",
          "L",
          "S",
          "A",
          "T",
          "U",
          "N",
          "Z",
          "C",
          "W",
          "R",
          "S",
          "X",
          "Y",
          "S",
          "G",
          "K",
          "S",
          "F"
        ],
        [
          "L",
          "N",
          "V",
          "P",
          "U",
          "Q",
          "W",
          "I",
          "H",
          "B",
          "E",
          "L",
          "P",
          "Y",
          "D",
          "Q",
          "B",
          "T",
          "E",
          "P",
          "W",
          "U"
        ],
        [
          "Q",
          "P",
          "R",
          "I",
          "J",
          "D",
          "U",
          "K",
          "U",
          "A",
          "G",
          "S",
          "X",
          "L",
          "A",
          "Z",
          "O",
          "A",
          "U",
          "Z",
          "O",
          "O"
        ]
      ],
      "words": [
        {
          "text": "BERRY",
          "start": {
            "row": 14,
            "col": 21
          },
          "end": {
            "row": 10,
            "col": 21
          },
          "cells": [
            {
              "row": 14,
              "col": 21
            },
            {
              "row": 13,
              "col": 21
            },
            {
              "row": 12,
              "col": 21
            },
            {
              "row": 11,
              "col": 21
            },
            {
              "row": 10,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "CANDLE",
          "start": {
            "row": 3,
            "col": 16
          },
          "end": {
            "row": 3,
            "col": 11
          },
          "cells": [
            {
              "row": 3,
              "col": 16
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 3,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "CANYON",
          "start": {
            "row": 1,
            "col": 21
          },
          "end": {
            "row": 6,
            "col": 21
          },
          "cells": [
            {
              "row": 1,
              "col": 21
            },
            {
              "row": 2,
              "col": 21
            },
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 4,
              "col": 21
            },
            {
              "row": 5,
              "col": 21
            },
            {
              "row": 6,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "CHERRY",
          "start": {
            "row": 17,
            "col": 1
          },
          "end": {
            "row": 12,
            "col": 6
          },
          "cells": [
            {
              "row": 17,
              "col": 1
            },
            {
              "row": 16,
              "col": 2
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "CLOUD",
          "start": {
            "row": 18,
            "col": 9
          },
          "end": {
            "row": 14,
            "col": 13
          },
          "cells": [
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 12,
            "col": 16
          },
          "end": {
            "row": 18,
            "col": 10
          },
          "cells": [
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 18,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 13,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 8
          },
          "cells": [
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 6,
            "col": 20
          },
          "end": {
            "row": 6,
            "col": 14
          },
          "cells": [
            {
              "row": 6,
              "col": 20
            },
            {
              "row": 6,
              "col": 19
            },
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 6,
              "col": 17
            },
            {
              "row": 6,
              "col": 16
            },
            {
              "row": 6,
              "col": 15
            },
            {
              "row": 6,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "KITCHEN",
          "start": {
            "row": 9,
            "col": 11
          },
          "end": {
            "row": 9,
            "col": 17
          },
          "cells": [
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 9,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 9,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 21,
            "col": 7
          },
          "end": {
            "row": 16,
            "col": 7
          },
          "cells": [
            {
              "row": 21,
              "col": 7
            },
            {
              "row": 20,
              "col": 7
            },
            {
              "row": 19,
              "col": 7
            },
            {
              "row": 18,
              "col": 7
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 16,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "LANDMARK",
          "start": {
            "row": 11,
            "col": 16
          },
          "end": {
            "row": 11,
            "col": 9
          },
          "cells": [
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "MEADOW",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 13,
            "col": 6
          },
          "cells": [
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "ROBOT",
          "start": {
            "row": 5,
            "col": 12
          },
          "end": {
            "row": 5,
            "col": 16
          },
          "cells": [
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 5,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 21,
            "col": 11
          },
          "end": {
            "row": 16,
            "col": 16
          },
          "cells": [
            {
              "row": 21,
              "col": 11
            },
            {
              "row": 20,
              "col": 12
            },
            {
              "row": 19,
              "col": 13
            },
            {
              "row": 18,
              "col": 14
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 16,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "WHALE",
          "start": {
            "row": 0,
            "col": 14
          },
          "end": {
            "row": 0,
            "col": 18
          },
          "cells": [
            {
              "row": 0,
              "col": 14
            },
            {
              "row": 0,
              "col": 15
            },
            {
              "row": 0,
              "col": 16
            },
            {
              "row": 0,
              "col": 17
            },
            {
              "row": 0,
              "col": 18
            }
          ],
          "found": false
        },
        {
          "text": "WILDFLOWER",
          "start": {
            "row": 7,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 7,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 10,
            "col": 5
          },
          "cells": [
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 6,
            "col": 9
          },
          "end": {
            "row": 2,
            "col": 5
          },
          "cells": [
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 5
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 403,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "B",
          "N",
          "I",
          "L",
          "Y",
          "J",
          "E",
          "R",
          "U",
          "T",
          "A",
          "N",
          "S",
          "W",
          "Y",
          "A",
          "H",
          "N",
          "G",
          "S",
          "P",
          "L"
        ],
        [
          "Y",
          "P",
          "T",
          "F",
          "E",
          "L",
          "S",
          "Z",
          "B",
          "K",
          "A",
          "M",
          "E",
          "L",
          "O",
          "D",
          "O",
          "H",
          "B",
          "Y",
          "O",
          "T"
        ],
        [
          "R",
          "P",
          "O",
          "D",
          "N",
          "H",
          "A",
          "B",
          "B",
          "P",
          "C",
          "I",
          "N",
          "W",
          "H",
          "L",
          "K",
          "C",
          "W",
          "S",
          "J",
          "J"
        ],
        [
          "R",
          "A",
          "P",
          "X",
          "R",
          "X",
          "H",
          "T",
          "Z",
          "O",
          "O",
          "G",
          "S",
          "Q",
          "E",
          "I",
          "M",
          "O",
          "G",
          "I",
          "T",
          "O"
        ],
        [
          "E",
          "H",
          "A",
          "J",
          "U",
          "B",
          "G",
          "M",
          "Z",
          "N",
          "M",
          "Q",
          "B",
          "M",
          "H",
          "C",
          "Z",
          "M",
          "Y",
          "W",
          "D",
          "Z"
        ],
        [
          "H",
          "O",
          "Z",
          "S",
          "O",
          "A",
          "X",
          "T",
          "Q",
          "O",
          "P",
          "Z",
          "Z",
          "E",
          "E",
          "T",
          "V",
          "T",
          "P",
          "O",
          "C",
          "N"
        ],
        [
          "C",
          "D",
          "W",
          "A",
          "J",
          "N",
          "N",
          "I",
          "O",
          "C",
          "A",
          "F",
          "X",
          "F",
          "N",
          "D",
          "E",
          "Z",
          "U",
          "D",
          "A",
          "X"
        ],
        [
          "C",
          "M",
          "R",
          "Z",
          "Q",
          "D",
          "E",
          "L",
          "M",
          "T",
          "S",
          "F",
          "B",
          "Z",
          "P",
          "A",
          "Q",
          "H",
          "Y",
          "A",
          "J",
          "K"
        ],
        [
          "T",
          "E",
          "E",
          "R",
          "E",
          "L",
          "A",
          "B",
          "C",
          "G",
          "S",
          "S",
          "K",
          "E",
          "V",
          "X",
          "Y",
          "V",
          "Y",
          "E",
          "C",
          "O"
        ],
        [
          "P",
          "E",
          "A",
          "L",
          "Q",
          "A",
          "R",
          "O",
          "U",
          "E",
          "G",
          "I",
          "C",
          "T",
          "E",
          "A",
          "O",
          "S",
          "R",
          "M",
          "R",
          "T"
        ],
        [
          "Z",
          "J",
          "W",
          "F",
          "B",
          "R",
          "T",
          "D",
          "R",
          "L",
          "M",
          "K",
          "P",
          "K",
          "S",
          "Y",
          "V",
          "U",
          "I",
          "T",
          "E",
          "W"
        ],
        [
          "Y",
          "E",
          "Q",
          "V",
          "A",
          "E",
          "W",
          "N",
          "C",
          "G",
          "A",
          "H",
          "T",
          "H",
          "A",
          "E",
          "C",
          "X",
          "O",
          "K",
          "R",
          "S"
        ],
        [
          "D",
          "P",
          "T",
          "O",
          "C",
          "M",
          "M",
          "L",
          "X",
          "H",
          "Z",
          "L",
          "U",
          "G",
          "N",
          "N",
          "R",
          "B",
          "C",
          "I",
          "P",
          "Z"
        ],
        [
          "S",
          "O",
          "C",
          "S",
          "W",
          "E",
          "M",
          "K",
          "A",
          "N",
          "Q",
          "J",
          "E",
          "J",
          "X",
          "V",
          "O",
          "O",
          "I",
          "C",
          "B",
          "Z"
        ],
        [
          "R",
          "U",
          "J",
          "D",
          "U",
          "D",
          "B",
          "K",
          "G",
          "W",
          "U",
          "C",
          "Z",
          "T",
          "Q",
          "R",
          "R",
          "I",
          "F",
          "N",
          "F",
          "J"
        ],
        [
          "O",
          "G",
          "C",
          "S",
          "H",
          "D",
          "E",
          "X",
          "C",
          "V",
          "A",
          "A",
          "W",
          "P",
          "Q",
          "H",
          "I",
          "F",
          "N",
          "Y",
          "Z",
          "A"
        ],
        [
          "R",
          "W",
          "S",
          "A",
          "M",
          "J",
          "R",
          "A",
          "H",
          "D",
          "R",
          "M",
          "A",
          "F",
          "X",
          "R",
          "A",
          "U",
          "K",
          "T",
          "V",
          "N"
        ],
        [
          "N",
          "U",
          "H",
          "Q",
          "S",
          "J",
          "R",
          "A",
          "Y",
          "D",
          "T",
          "R",
          "G",
          "T",
          "D",
          "N",
          "P",
          "R",
          "X",
          "G",
          "S",
          "J"
        ],
        [
          "W",
          "L",
          "R",
          "N",
          "G",
          "T",
          "Y",
          "Z",
          "T",
          "E",
          "Z",
          "O",
          "V",
          "D",
          "N",
          "S",
          "V",
          "X",
          "B",
          "Q",
          "X",
          "C"
        ],
        [
          "Y",
          "Y",
          "O",
          "W",
          "P",
          "D",
          "L",
          "G",
          "P",
          "S",
          "K",
          "B",
          "Y",
          "Y",
          "H",
          "J",
          "C",
          "X",
          "P",
          "O",
          "F",
          "A"
        ],
        [
          "M",
          "L",
          "Z",
          "I",
          "U",
          "Y",
          "A",
          "E",
          "R",
          "L",
          "I",
          "N",
          "P",
          "H",
          "K",
          "R",
          "Q",
          "Q",
          "P",
          "N",
          "R",
          "P"
        ],
        [
          "J",
          "U",
          "Z",
          "X",
          "C",
          "Z",
          "L",
          "J",
          "X",
          "S",
          "W",
          "Y",
          "N",
          "Y",
          "N",
          "T",
          "L",
          "V",
          "P",
          "O",
          "V",
          "T"
        ]
      ],
      "words": [
        {
          "text": "BERRY",
          "start": {
            "row": 14,
            "col": 6
          },
          "end": {
            "row": 18,
            "col": 6
          },
          "cells": [
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 18,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "CASTLE",
          "start": {
            "row": 15,
            "col": 2
          },
          "end": {
            "row": 20,
            "col": 7
          },
          "cells": [
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 18,
              "col": 5
            },
            {
              "row": 19,
              "col": 6
            },
            {
              "row": 20,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "CHERRY",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 1,
            "col": 0
          },
          "cells": [
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 1,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 2,
            "col": 10
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "cells": [
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "EMERALD",
          "start": {
            "row": 13,
            "col": 5
          },
          "end": {
            "row": 7,
            "col": 5
          },
          "cells": [
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 7,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "FOREST",
          "start": {
            "row": 14,
            "col": 18
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 14,
              "col": 18
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 15,
            "col": 15
          },
          "end": {
            "row": 20,
            "col": 20
          },
          "cells": [
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 18,
              "col": 18
            },
            {
              "row": 19,
              "col": 19
            },
            {
              "row": 20,
              "col": 20
            }
          ],
          "found": false
        },
        {
          "text": "JOURNEY",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 0,
            "col": 4
          },
          "cells": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 0,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "MEADOW",
          "start": {
            "row": 9,
            "col": 19
          },
          "end": {
            "row": 4,
            "col": 19
          },
          "cells": [
            {
              "row": 9,
              "col": 19
            },
            {
              "row": 8,
              "col": 19
            },
            {
              "row": 7,
              "col": 19
            },
            {
              "row": 6,
              "col": 19
            },
            {
              "row": 5,
              "col": 19
            },
            {
              "row": 4,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "MELON",
          "start": {
            "row": 4,
            "col": 13
          },
          "end": {
            "row": 0,
            "col": 17
          },
          "cells": [
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 1,
              "col": 16
            },
            {
              "row": 0,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "NATURE",
          "start": {
            "row": 0,
            "col": 11
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 0,
              "col": 10
            },
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "NEBULA",
          "start": {
            "row": 6,
            "col": 5
          },
          "end": {
            "row": 11,
            "col": 10
          },
          "cells": [
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 13,
            "col": 10
          },
          "end": {
            "row": 18,
            "col": 10
          },
          "cells": [
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 15,
              "col": 10
            },
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 18,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "ROBOT",
          "start": {
            "row": 14,
            "col": 15
          },
          "end": {
            "row": 10,
            "col": 19
          },
          "cells": [
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 12,
              "col": 17
            },
            {
              "row": 11,
              "col": 18
            },
            {
              "row": 10,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 14,
            "col": 16
          },
          "end": {
            "row": 9,
            "col": 21
          },
          "cells": [
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 18
            },
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 10,
              "col": 20
            },
            {
              "row": 9,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "STARDUST",
          "start": {
            "row": 19,
            "col": 9
          },
          "end": {
            "row": 12,
            "col": 2
          },
          "cells": [
            {
              "row": 19,
              "col": 9
            },
            {
              "row": 18,
              "col": 8
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 15,
              "col": 5
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 12,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "TOPAZ",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 2
          },
          "cells": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 8,
            "col": 17
          },
          "end": {
            "row": 13,
            "col": 12
          },
          "cells": [
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 13,
              "col": 12
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 404,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "D",
          "F",
          "J",
          "M",
          "D",
          "T",
          "T",
          "S",
          "T",
          "A",
          "R",
          "D",
          "U",
          "S",
          "T",
          "L",
          "N",
          "I",
          "F",
          "M",
          "U",
          "J"
        ],
        [
          "U",
          "P",
          "I",
          "Z",
          "R",
          "O",
          "Y",
          "I",
          "B",
          "Z",
          "V",
          "D",
          "F",
          "B",
          "K",
          "X",
          "C",
          "O",
          "S",
          "Q",
          "R",
          "T"
        ],
        [
          "D",
          "O",
          "C",
          "H",
          "P",
          "T",
          "L",
          "I",
          "S",
          "N",
          "E",
          "G",
          "N",
          "G",
          "P",
          "M",
          "C",
          "E",
          "X",
          "B",
          "H",
          "S"
        ],
        [
          "J",
          "D",
          "A",
          "T",
          "T",
          "S",
          "T",
          "C",
          "T",
          "H",
          "D",
          "K",
          "M",
          "K",
          "T",
          "Y",
          "Y",
          "M",
          "L",
          "X",
          "J",
          "E"
        ],
        [
          "Y",
          "J",
          "N",
          "A",
          "H",
          "P",
          "M",
          "X",
          "J",
          "Y",
          "T",
          "U",
          "W",
          "O",
          "R",
          "J",
          "Z",
          "N",
          "O",
          "A",
          "H",
          "U"
        ],
        [
          "R",
          "D",
          "Y",
          "P",
          "Q",
          "I",
          "S",
          "U",
          "L",
          "W",
          "L",
          "T",
          "O",
          "W",
          "W",
          "U",
          "P",
          "T",
          "I",
          "L",
          "H",
          "Q"
        ],
        [
          "Z",
          "E",
          "O",
          "I",
          "K",
          "R",
          "N",
          "D",
          "D",
          "J",
          "T",
          "U",
          "R",
          "B",
          "P",
          "R",
          "C",
          "N",
          "L",
          "V",
          "I",
          "W"
        ],
        [
          "E",
          "W",
          "N",
          "L",
          "E",
          "U",
          "H",
          "O",
          "A",
          "Y",
          "M",
          "B",
          "R",
          "J",
          "E",
          "S",
          "M",
          "A",
          "J",
          "G",
          "T",
          "S"
        ],
        [
          "B",
          "R",
          "K",
          "T",
          "H",
          "F",
          "C",
          "Y",
          "M",
          "L",
          "W",
          "P",
          "A",
          "L",
          "A",
          "R",
          "F",
          "S",
          "G",
          "T",
          "S",
          "W"
        ],
        [
          "W",
          "E",
          "V",
          "X",
          "E",
          "B",
          "N",
          "H",
          "Z",
          "E",
          "V",
          "J",
          "P",
          "M",
          "R",
          "R",
          "R",
          "R",
          "T",
          "A",
          "N",
          "V"
        ],
        [
          "A",
          "B",
          "B",
          "E",
          "C",
          "J",
          "H",
          "C",
          "R",
          "H",
          "L",
          "O",
          "S",
          "H",
          "E",
          "W",
          "Y",
          "Y",
          "P",
          "X",
          "S",
          "G"
        ],
        [
          "W",
          "M",
          "F",
          "W",
          "N",
          "Z",
          "D",
          "P",
          "W",
          "Z",
          "W",
          "Z",
          "M",
          "T",
          "I",
          "Y",
          "P",
          "M",
          "C",
          "K",
          "F",
          "Z"
        ],
        [
          "E",
          "I",
          "P",
          "G",
          "A",
          "T",
          "Y",
          "Q",
          "F",
          "C",
          "L",
          "K",
          "A",
          "N",
          "J",
          "T",
          "O",
          "Z",
          "D",
          "E",
          "V",
          "R"
        ],
        [
          "E",
          "T",
          "E",
          "J",
          "L",
          "K",
          "Y",
          "A",
          "X",
          "U",
          "P",
          "W",
          "T",
          "D",
          "E",
          "C",
          "U",
          "W",
          "X",
          "T",
          "E",
          "O"
        ],
        [
          "A",
          "C",
          "S",
          "P",
          "A",
          "C",
          "S",
          "X",
          "U",
          "E",
          "G",
          "E",
          "Y",
          "B",
          "R",
          "D",
          "O",
          "Q",
          "J",
          "W",
          "G",
          "X"
        ],
        [
          "F",
          "B",
          "R",
          "U",
          "B",
          "D",
          "B",
          "P",
          "A",
          "L",
          "R",
          "H",
          "A",
          "Y",
          "Z",
          "D",
          "S",
          "V",
          "O",
          "J",
          "J",
          "U"
        ],
        [
          "X",
          "C",
          "E",
          "Z",
          "Y",
          "B",
          "S",
          "V",
          "R",
          "L",
          "D",
          "G",
          "A",
          "T",
          "A",
          "A",
          "O",
          "L",
          "P",
          "U",
          "I",
          "M"
        ],
        [
          "F",
          "B",
          "V",
          "J",
          "G",
          "L",
          "P",
          "J",
          "N",
          "I",
          "A",
          "E",
          "F",
          "H",
          "I",
          "Y",
          "F",
          "X",
          "O",
          "C",
          "T",
          "N"
        ],
        [
          "N",
          "N",
          "I",
          "U",
          "W",
          "M",
          "D",
          "Z",
          "W",
          "Q",
          "N",
          "G",
          "S",
          "E",
          "A",
          "D",
          "X",
          "N",
          "V",
          "J",
          "U",
          "O"
        ],
        [
          "E",
          "D",
          "N",
          "U",
          "C",
          "O",
          "M",
          "J",
          "J",
          "D",
          "Z",
          "G",
          "V",
          "G",
          "L",
          "I",
          "H",
          "O",
          "E",
          "Q",
          "H",
          "Z"
        ],
        [
          "W",
          "P",
          "U",
          "W",
          "N",
          "P",
          "D",
          "V",
          "G",
          "Y",
          "V",
          "X",
          "E",
          "I",
          "E",
          "I",
          "W",
          "K",
          "N",
          "J",
          "L",
          "L"
        ],
        [
          "I",
          "Z",
          "X",
          "K",
          "F",
          "M",
          "W",
          "F",
          "I",
          "J",
          "C",
          "E",
          "W",
          "Q",
          "I",
          "V",
          "W",
          "F",
          "I",
          "Z",
          "D",
          "E"
        ]
      ],
      "words": [
        {
          "text": "BALANCE",
          "start": {
            "row": 15,
            "col": 4
          },
          "end": {
            "row": 9,
            "col": 4
          },
          "cells": [
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "BERRY",
          "start": {
            "row": 6,
            "col": 13
          },
          "end": {
            "row": 10,
            "col": 17
          },
          "cells": [
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "CANYON",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 7,
            "col": 2
          },
          "cells": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 13,
            "col": 15
          },
          "end": {
            "row": 7,
            "col": 21
          },
          "cells": [
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 10,
              "col": 18
            },
            {
              "row": 9,
              "col": 19
            },
            {
              "row": 8,
              "col": 20
            },
            {
              "row": 7,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "GALAXY",
          "start": {
            "row": 18,
            "col": 11
          },
          "end": {
            "row": 13,
            "col": 6
          },
          "cells": [
            {
              "row": 18,
              "col": 11
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 16,
              "col": 9
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 13,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 10,
            "col": 10
          },
          "end": {
            "row": 6,
            "col": 6
          },
          "cells": [
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 6,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 5,
            "col": 21
          },
          "end": {
            "row": 1,
            "col": 21
          },
          "cells": [
            {
              "row": 5,
              "col": 21
            },
            {
              "row": 4,
              "col": 21
            },
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 2,
              "col": 21
            },
            {
              "row": 1,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "SHADOW",
          "start": {
            "row": 18,
            "col": 12
          },
          "end": {
            "row": 13,
            "col": 17
          },
          "cells": [
            {
              "row": 18,
              "col": 12
            },
            {
              "row": 17,
              "col": 13
            },
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 13,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 10,
            "col": 12
          },
          "end": {
            "row": 4,
            "col": 12
          },
          "cells": [
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 4,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 14,
            "col": 6
          },
          "end": {
            "row": 19,
            "col": 11
          },
          "cells": [
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 18,
              "col": 10
            },
            {
              "row": 19,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "STARDUST",
          "start": {
            "row": 0,
            "col": 7
          },
          "end": {
            "row": 0,
            "col": 14
          },
          "cells": [
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 0,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "TIMBER",
          "start": {
            "row": 13,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 1
          },
          "cells": [
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "UNIVERSE",
          "start": {
            "row": 20,
            "col": 2
          },
          "end": {
            "row": 13,
            "col": 2
          },
          "cells": [
            {
              "row": 20,
              "col": 2
            },
            {
              "row": 19,
              "col": 2
            },
            {
              "row": 18,
              "col": 2
            },
            {
              "row": 17,
              "col": 2
            },
            {
              "row": 16,
              "col": 2
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 13,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "VOYAGE",
          "start": {
            "row": 15,
            "col": 17
          },
          "end": {
            "row": 20,
            "col": 12
          },
          "cells": [
            {
              "row": 15,
              "col": 17
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 18,
              "col": 14
            },
            {
              "row": 19,
              "col": 13
            },
            {
              "row": 20,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "WATERFALL",
          "start": {
            "row": 13,
            "col": 11
          },
          "end": {
            "row": 5,
            "col": 19
          },
          "cells": [
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 8,
              "col": 16
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 5,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "WHALE",
          "start": {
            "row": 6,
            "col": 21
          },
          "end": {
            "row": 2,
            "col": 17
          },
          "cells": [
            {
              "row": 6,
              "col": 21
            },
            {
              "row": 5,
              "col": 20
            },
            {
              "row": 4,
              "col": 19
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 2,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "WILDFLOWER",
          "start": {
            "row": 21,
            "col": 12
          },
          "end": {
            "row": 12,
            "col": 21
          },
          "cells": [
            {
              "row": 21,
              "col": 12
            },
            {
              "row": 20,
              "col": 13
            },
            {
              "row": 19,
              "col": 14
            },
            {
              "row": 18,
              "col": 15
            },
            {
              "row": 17,
              "col": 16
            },
            {
              "row": 16,
              "col": 17
            },
            {
              "row": 15,
              "col": 18
            },
            {
              "row": 14,
              "col": 19
            },
            {
              "row": 13,
              "col": 20
            },
            {
              "row": 12,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "WINTER",
          "start": {
            "row": 10,
            "col": 15
          },
          "end": {
            "row": 15,
            "col": 10
          },
          "cells": [
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 15,
              "col": 10
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 405,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "H",
          "F",
          "O",
          "H",
          "X",
          "Q",
          "S",
          "H",
          "C",
          "I",
          "B",
          "D",
          "M",
          "C",
          "P",
          "U",
          "M",
          "D",
          "M",
          "M",
          "C",
          "K"
        ],
        [
          "X",
          "D",
          "S",
          "D",
          "L",
          "V",
          "V",
          "M",
          "M",
          "L",
          "W",
          "W",
          "L",
          "R",
          "O",
          "Q",
          "V",
          "X",
          "W",
          "Y",
          "D",
          "I"
        ],
        [
          "I",
          "R",
          "U",
          "H",
          "M",
          "R",
          "P",
          "E",
          "J",
          "W",
          "X",
          "S",
          "W",
          "P",
          "D",
          "L",
          "H",
          "V",
          "O",
          "T",
          "P",
          "T"
        ],
        [
          "P",
          "Z",
          "X",
          "K",
          "R",
          "Q",
          "L",
          "X",
          "G",
          "J",
          "W",
          "U",
          "F",
          "Y",
          "X",
          "O",
          "N",
          "R",
          "N",
          "W",
          "M",
          "T"
        ],
        [
          "N",
          "G",
          "A",
          "L",
          "A",
          "X",
          "Y",
          "A",
          "X",
          "S",
          "L",
          "X",
          "C",
          "H",
          "R",
          "S",
          "A",
          "C",
          "U",
          "P",
          "D",
          "E"
        ],
        [
          "A",
          "G",
          "P",
          "H",
          "O",
          "T",
          "J",
          "Z",
          "S",
          "P",
          "U",
          "W",
          "V",
          "I",
          "M",
          "I",
          "J",
          "Q",
          "N",
          "W",
          "J",
          "N"
        ],
        [
          "L",
          "K",
          "G",
          "P",
          "O",
          "A",
          "I",
          "K",
          "A",
          "V",
          "F",
          "V",
          "Z",
          "X",
          "N",
          "B",
          "P",
          "D",
          "U",
          "X",
          "T",
          "R"
        ],
        [
          "I",
          "V",
          "Q",
          "A",
          "P",
          "G",
          "D",
          "D",
          "D",
          "U",
          "Z",
          "O",
          "W",
          "B",
          "C",
          "O",
          "G",
          "P",
          "Z",
          "Q",
          "G",
          "F"
        ],
        [
          "N",
          "R",
          "Q",
          "T",
          "E",
          "R",
          "N",
          "N",
          "N",
          "Y",
          "N",
          "O",
          "O",
          "V",
          "A",
          "O",
          "T",
          "V",
          "O",
          "Y",
          "Z",
          "D"
        ],
        [
          "R",
          "K",
          "I",
          "R",
          "A",
          "N",
          "E",
          "D",
          "L",
          "O",
          "G",
          "W",
          "N",
          "R",
          "O",
          "M",
          "M",
          "V",
          "M",
          "M",
          "N",
          "X"
        ],
        [
          "E",
          "F",
          "P",
          "H",
          "C",
          "Y",
          "X",
          "G",
          "O",
          "V",
          "B",
          "F",
          "U",
          "N",
          "E",
          "N",
          "N",
          "E",
          "I",
          "A",
          "F",
          "T"
        ],
        [
          "K",
          "P",
          "C",
          "I",
          "H",
          "E",
          "E",
          "E",
          "N",
          "L",
          "B",
          "A",
          "E",
          "E",
          "I",
          "T",
          "I",
          "D",
          "T",
          "R",
          "R",
          "R"
        ],
        [
          "J",
          "R",
          "D",
          "O",
          "N",
          "W",
          "M",
          "L",
          "K",
          "I",
          "P",
          "S",
          "B",
          "E",
          "R",
          "R",
          "I",
          "B",
          "E",
          "B",
          "P",
          "E"
        ],
        [
          "O",
          "T",
          "D",
          "I",
          "V",
          "M",
          "I",
          "X",
          "L",
          "M",
          "N",
          "H",
          "L",
          "O",
          "J",
          "O",
          "R",
          "P",
          "E",
          "L",
          "V",
          "C"
        ],
        [
          "C",
          "S",
          "A",
          "R",
          "H",
          "L",
          "S",
          "U",
          "M",
          "O",
          "R",
          "T",
          "I",
          "B",
          "N",
          "V",
          "C",
          "F",
          "U",
          "E",
          "B",
          "Q"
        ],
        [
          "S",
          "I",
          "U",
          "O",
          "A",
          "A",
          "L",
          "J",
          "L",
          "X",
          "W",
          "S",
          "H",
          "N",
          "W",
          "P",
          "F",
          "F",
          "X",
          "J",
          "G",
          "P"
        ],
        [
          "E",
          "D",
          "O",
          "A",
          "G",
          "Y",
          "A",
          "K",
          "X",
          "U",
          "L",
          "J",
          "U",
          "G",
          "Q",
          "T",
          "R",
          "K",
          "T",
          "T",
          "A",
          "S"
        ],
        [
          "K",
          "W",
          "X",
          "S",
          "A",
          "Y",
          "N",
          "C",
          "E",
          "S",
          "U",
          "O",
          "M",
          "F",
          "I",
          "L",
          "R",
          "E",
          "V",
          "L",
          "I",
          "S"
        ],
        [
          "N",
          "H",
          "S",
          "U",
          "Z",
          "N",
          "D",
          "O",
          "X",
          "L",
          "Z",
          "D",
          "W",
          "A",
          "U",
          "L",
          "I",
          "J",
          "W",
          "I",
          "S",
          "V"
        ],
        [
          "E",
          "A",
          "I",
          "Q",
          "G",
          "F",
          "S",
          "H",
          "J",
          "A",
          "F",
          "M",
          "X",
          "W",
          "J",
          "T",
          "C",
          "M",
          "C",
          "Z",
          "O",
          "J"
        ],
        [
          "X",
          "L",
          "O",
          "R",
          "I",
          "Q",
          "H",
          "N",
          "M",
          "Z",
          "G",
          "T",
          "O",
          "T",
          "A",
          "Z",
          "X",
          "U",
          "C",
          "Q",
          "B",
          "S"
        ],
        [
          "G",
          "E",
          "E",
          "M",
          "Z",
          "X",
          "G",
          "E",
          "C",
          "Y",
          "B",
          "S",
          "U",
          "D",
          "M",
          "A",
          "E",
          "B",
          "C",
          "C",
          "S",
          "A"
        ]
      ],
      "words": [
        {
          "text": "COMET",
          "start": {
            "row": 7,
            "col": 14
          },
          "end": {
            "row": 11,
            "col": 18
          },
          "cells": [
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 17
            },
            {
              "row": 11,
              "col": 18
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 9,
            "col": 7
          },
          "end": {
            "row": 15,
            "col": 13
          },
          "cells": [
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 15,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "GALAXY",
          "start": {
            "row": 4,
            "col": 1
          },
          "end": {
            "row": 4,
            "col": 6
          },
          "cells": [
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "GOLDEN",
          "start": {
            "row": 9,
            "col": 10
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "cells": [
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 9,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "HORIZON",
          "start": {
            "row": 2,
            "col": 16
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "cells": [
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "ISLAND",
          "start": {
            "row": 13,
            "col": 6
          },
          "end": {
            "row": 18,
            "col": 6
          },
          "cells": [
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 18,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "JUPITER",
          "start": {
            "row": 15,
            "col": 19
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 15,
              "col": 19
            },
            {
              "row": 14,
              "col": 18
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "KITTEN",
          "start": {
            "row": 0,
            "col": 21
          },
          "end": {
            "row": 5,
            "col": 21
          },
          "cells": [
            {
              "row": 0,
              "col": 21
            },
            {
              "row": 1,
              "col": 21
            },
            {
              "row": 2,
              "col": 21
            },
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 4,
              "col": 21
            },
            {
              "row": 5,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "LIGHTNING",
          "start": {
            "row": 18,
            "col": 15
          },
          "end": {
            "row": 10,
            "col": 7
          },
          "cells": [
            {
              "row": 18,
              "col": 15
            },
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 16,
              "col": 13
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 10,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 9,
            "col": 19
          },
          "end": {
            "row": 14,
            "col": 19
          },
          "cells": [
            {
              "row": 9,
              "col": 19
            },
            {
              "row": 10,
              "col": 19
            },
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 12,
              "col": 19
            },
            {
              "row": 13,
              "col": 19
            },
            {
              "row": 14,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "MOUSE",
          "start": {
            "row": 17,
            "col": 12
          },
          "end": {
            "row": 17,
            "col": 8
          },
          "cells": [
            {
              "row": 17,
              "col": 12
            },
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 17,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 13,
            "col": 0
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 13,
              "col": 0
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 7,
            "col": 4
          },
          "end": {
            "row": 11,
            "col": 4
          },
          "cells": [
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "RAINBOW",
          "start": {
            "row": 3,
            "col": 17
          },
          "end": {
            "row": 9,
            "col": 11
          },
          "cells": [
            {
              "row": 3,
              "col": 17
            },
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 17,
            "col": 21
          },
          "end": {
            "row": 17,
            "col": 16
          },
          "cells": [
            {
              "row": 17,
              "col": 21
            },
            {
              "row": 17,
              "col": 20
            },
            {
              "row": 17,
              "col": 19
            },
            {
              "row": 17,
              "col": 18
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 17,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "WHALE",
          "start": {
            "row": 17,
            "col": 1
          },
          "end": {
            "row": 21,
            "col": 1
          },
          "cells": [
            {
              "row": 17,
              "col": 1
            },
            {
              "row": 18,
              "col": 1
            },
            {
              "row": 19,
              "col": 1
            },
            {
              "row": 20,
              "col": 1
            },
            {
              "row": 21,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "YELLOW",
          "start": {
            "row": 10,
            "col": 5
          },
          "end": {
            "row": 15,
            "col": 10
          },
          "cells": [
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 15,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "ZIGZAG",
          "start": {
            "row": 21,
            "col": 4
          },
          "end": {
            "row": 16,
            "col": 4
          },
          "cells": [
            {
              "row": 21,
              "col": 4
            },
            {
              "row": 20,
              "col": 4
            },
            {
              "row": 19,
              "col": 4
            },
            {
              "row": 18,
              "col": 4
            },
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 16,
              "col": 4
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 406,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "X",
          "I",
          "R",
          "H",
          "H",
          "C",
          "A",
          "E",
          "P",
          "X",
          "O",
          "P",
          "W",
          "K",
          "X",
          "O",
          "U",
          "K",
          "K",
          "I",
          "V",
          "S"
        ],
        [
          "A",
          "U",
          "H",
          "G",
          "V",
          "P",
          "O",
          "D",
          "R",
          "N",
          "A",
          "R",
          "Q",
          "M",
          "D",
          "N",
          "F",
          "W",
          "C",
          "A",
          "H",
          "L"
        ],
        [
          "N",
          "E",
          "A",
          "B",
          "M",
          "U",
          "D",
          "C",
          "O",
          "N",
          "A",
          "S",
          "I",
          "J",
          "T",
          "C",
          "E",
          "K",
          "A",
          "E",
          "M",
          "M"
        ],
        [
          "A",
          "S",
          "R",
          "H",
          "V",
          "V",
          "M",
          "O",
          "D",
          "M",
          "R",
          "U",
          "P",
          "V",
          "T",
          "R",
          "K",
          "R",
          "P",
          "C",
          "S",
          "W"
        ],
        [
          "N",
          "E",
          "S",
          "U",
          "C",
          "R",
          "S",
          "A",
          "Z",
          "S",
          "P",
          "F",
          "J",
          "P",
          "H",
          "W",
          "E",
          "H",
          "M",
          "S",
          "A",
          "C"
        ],
        [
          "A",
          "P",
          "A",
          "E",
          "T",
          "N",
          "H",
          "E",
          "Y",
          "V",
          "O",
          "V",
          "Q",
          "Y",
          "O",
          "D",
          "W",
          "S",
          "K",
          "T",
          "J",
          "X"
        ],
        [
          "B",
          "F",
          "C",
          "Y",
          "O",
          "N",
          "F",
          "Q",
          "D",
          "R",
          "A",
          "G",
          "O",
          "N",
          "G",
          "E",
          "V",
          "I",
          "E",
          "B",
          "Q",
          "F"
        ],
        [
          "C",
          "Y",
          "I",
          "M",
          "T",
          "Z",
          "E",
          "I",
          "E",
          "J",
          "R",
          "B",
          "R",
          "J",
          "B",
          "S",
          "Q",
          "R",
          "Q",
          "D",
          "O",
          "V"
        ],
        [
          "Y",
          "R",
          "C",
          "O",
          "P",
          "O",
          "K",
          "V",
          "J",
          "U",
          "X",
          "Q",
          "N",
          "Z",
          "H",
          "D",
          "F",
          "B",
          "N",
          "J",
          "Z",
          "G"
        ],
        [
          "Z",
          "Z",
          "X",
          "L",
          "G",
          "J",
          "B",
          "J",
          "D",
          "T",
          "E",
          "M",
          "E",
          "W",
          "K",
          "A",
          "L",
          "B",
          "R",
          "T",
          "E",
          "N"
        ],
        [
          "Z",
          "U",
          "G",
          "Q",
          "A",
          "T",
          "R",
          "B",
          "E",
          "A",
          "S",
          "Y",
          "B",
          "H",
          "L",
          "L",
          "R",
          "Z",
          "U",
          "G",
          "V",
          "T"
        ],
        [
          "Z",
          "R",
          "I",
          "U",
          "R",
          "S",
          "T",
          "L",
          "V",
          "Z",
          "R",
          "B",
          "U",
          "L",
          "E",
          "A",
          "W",
          "B",
          "N",
          "P",
          "L",
          "K"
        ],
        [
          "N",
          "P",
          "U",
          "N",
          "D",
          "T",
          "A",
          "N",
          "K",
          "N",
          "E",
          "S",
          "L",
          "T",
          "I",
          "G",
          "Y",
          "A",
          "O",
          "S",
          "N",
          "A"
        ],
        [
          "E",
          "Y",
          "C",
          "V",
          "M",
          "H",
          "Q",
          "M",
          "R",
          "N",
          "V",
          "Y",
          "A",
          "S",
          "E",
          "M",
          "R",
          "A",
          "H",
          "R",
          "H",
          "W"
        ],
        [
          "P",
          "R",
          "O",
          "C",
          "W",
          "R",
          "F",
          "A",
          "W",
          "T",
          "I",
          "C",
          "I",
          "M",
          "B",
          "O",
          "R",
          "A",
          "P",
          "J",
          "M",
          "A"
        ],
        [
          "W",
          "H",
          "U",
          "M",
          "T",
          "I",
          "N",
          "J",
          "C",
          "U",
          "N",
          "L",
          "R",
          "S",
          "W",
          "R",
          "D",
          "S",
          "O",
          "A",
          "R",
          "D"
        ],
        [
          "B",
          "F",
          "N",
          "S",
          "Q",
          "X",
          "H",
          "Z",
          "M",
          "G",
          "U",
          "U",
          "Z",
          "O",
          "Q",
          "O",
          "Y",
          "O",
          "I",
          "V",
          "P",
          "W"
        ],
        [
          "F",
          "L",
          "F",
          "G",
          "A",
          "F",
          "B",
          "S",
          "W",
          "R",
          "R",
          "B",
          "N",
          "J",
          "W",
          "A",
          "Y",
          "W",
          "X",
          "X",
          "P",
          "S"
        ],
        [
          "G",
          "R",
          "D",
          "R",
          "G",
          "E",
          "E",
          "X",
          "E",
          "B",
          "P",
          "N",
          "A",
          "Z",
          "B",
          "F",
          "I",
          "X",
          "M",
          "L",
          "D",
          "L"
        ],
        [
          "Z",
          "N",
          "J",
          "V",
          "L",
          "O",
          "R",
          "A",
          "C",
          "J",
          "V",
          "R",
          "P",
          "P",
          "M",
          "T",
          "D",
          "U",
          "X",
          "L",
          "M",
          "C"
        ],
        [
          "H",
          "Q",
          "U",
          "D",
          "J",
          "A",
          "Y",
          "T",
          "E",
          "P",
          "N",
          "A",
          "T",
          "U",
          "R",
          "E",
          "T",
          "C",
          "T",
          "I",
          "C",
          "B"
        ],
        [
          "O",
          "N",
          "Z",
          "E",
          "B",
          "Z",
          "X",
          "P",
          "M",
          "A",
          "R",
          "B",
          "E",
          "Z",
          "A",
          "L",
          "Z",
          "Q",
          "V",
          "F",
          "P",
          "U"
        ]
      ],
      "words": [
        {
          "text": "ADVENTURE",
          "start": {
            "row": 10,
            "col": 9
          },
          "end": {
            "row": 2,
            "col": 1
          },
          "cells": [
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 2,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "BANANA",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 1,
            "col": 0
          },
          "cells": [
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 1,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 7,
            "col": 19
          },
          "end": {
            "row": 2,
            "col": 14
          },
          "cells": [
            {
              "row": 7,
              "col": 19
            },
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 5,
              "col": 17
            },
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 2,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 6,
            "col": 8
          },
          "end": {
            "row": 6,
            "col": 13
          },
          "cells": [
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 6,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 8,
            "col": 14
          },
          "end": {
            "row": 13,
            "col": 19
          },
          "cells": [
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 12,
              "col": 18
            },
            {
              "row": 13,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "MONSOON",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 1,
            "col": 9
          },
          "cells": [
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 1,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "NATURE",
          "start": {
            "row": 20,
            "col": 10
          },
          "end": {
            "row": 20,
            "col": 15
          },
          "cells": [
            {
              "row": 20,
              "col": 10
            },
            {
              "row": 20,
              "col": 11
            },
            {
              "row": 20,
              "col": 12
            },
            {
              "row": 20,
              "col": 13
            },
            {
              "row": 20,
              "col": 14
            },
            {
              "row": 20,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "NEBULA",
          "start": {
            "row": 8,
            "col": 12
          },
          "end": {
            "row": 13,
            "col": 12
          },
          "cells": [
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "ORANGE",
          "start": {
            "row": 14,
            "col": 15
          },
          "end": {
            "row": 9,
            "col": 20
          },
          "cells": [
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 12,
              "col": 17
            },
            {
              "row": 11,
              "col": 18
            },
            {
              "row": 10,
              "col": 19
            },
            {
              "row": 9,
              "col": 20
            }
          ],
          "found": false
        },
        {
          "text": "PANDA",
          "start": {
            "row": 0,
            "col": 11
          },
          "end": {
            "row": 4,
            "col": 7
          },
          "cells": [
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "PAPAYA",
          "start": {
            "row": 16,
            "col": 20
          },
          "end": {
            "row": 11,
            "col": 15
          },
          "cells": [
            {
              "row": 16,
              "col": 20
            },
            {
              "row": 15,
              "col": 19
            },
            {
              "row": 14,
              "col": 18
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "PEACH",
          "start": {
            "row": 0,
            "col": 8
          },
          "end": {
            "row": 0,
            "col": 4
          },
          "cells": [
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "SHADOW",
          "start": {
            "row": 12,
            "col": 19
          },
          "end": {
            "row": 17,
            "col": 14
          },
          "cells": [
            {
              "row": 12,
              "col": 19
            },
            {
              "row": 13,
              "col": 18
            },
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 15,
              "col": 16
            },
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 17,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "TREASURE",
          "start": {
            "row": 20,
            "col": 7
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "cells": [
            {
              "row": 20,
              "col": 7
            },
            {
              "row": 19,
              "col": 6
            },
            {
              "row": 18,
              "col": 5
            },
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 13,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "UNIVERSE",
          "start": {
            "row": 16,
            "col": 10
          },
          "end": {
            "row": 9,
            "col": 10
          },
          "cells": [
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 15,
              "col": 10
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 9,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "WATERFALL",
          "start": {
            "row": 3,
            "col": 21
          },
          "end": {
            "row": 11,
            "col": 13
          },
          "cells": [
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 4,
              "col": 20
            },
            {
              "row": 5,
              "col": 19
            },
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 8,
              "col": 16
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 11,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "WHALE",
          "start": {
            "row": 14,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 8
          },
          "cells": [
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 21,
            "col": 13
          },
          "end": {
            "row": 21,
            "col": 9
          },
          "cells": [
            {
              "row": 21,
              "col": 13
            },
            {
              "row": 21,
              "col": 12
            },
            {
              "row": 21,
              "col": 11
            },
            {
              "row": 21,
              "col": 10
            },
            {
              "row": 21,
              "col": 9
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 407,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "J",
          "O",
          "U",
          "R",
          "N",
          "E",
          "Y",
          "U",
          "D",
          "J",
          "D",
          "B",
          "U",
          "E",
          "Y",
          "C",
          "F",
          "X",
          "Y",
          "M",
          "A",
          "N"
        ],
        [
          "H",
          "G",
          "X",
          "U",
          "L",
          "Y",
          "D",
          "S",
          "X",
          "R",
          "K",
          "J",
          "Q",
          "D",
          "V",
          "P",
          "Z",
          "N",
          "U",
          "Y",
          "A",
          "I"
        ],
        [
          "C",
          "H",
          "U",
          "T",
          "A",
          "O",
          "E",
          "B",
          "R",
          "I",
          "E",
          "J",
          "Q",
          "H",
          "R",
          "Q",
          "I",
          "J",
          "P",
          "E",
          "R",
          "U"
        ],
        [
          "T",
          "N",
          "T",
          "W",
          "K",
          "A",
          "U",
          "W",
          "P",
          "E",
          "P",
          "R",
          "T",
          "E",
          "B",
          "R",
          "W",
          "W",
          "C",
          "B",
          "K",
          "C"
        ],
        [
          "E",
          "C",
          "U",
          "E",
          "W",
          "D",
          "Z",
          "C",
          "K",
          "H",
          "O",
          "D",
          "U",
          "F",
          "B",
          "O",
          "P",
          "O",
          "H",
          "R",
          "B",
          "E"
        ],
        [
          "B",
          "K",
          "L",
          "K",
          "M",
          "V",
          "M",
          "D",
          "M",
          "Y",
          "I",
          "Q",
          "C",
          "S",
          "V",
          "R",
          "U",
          "N",
          "S",
          "N",
          "Y",
          "H"
        ],
        [
          "N",
          "L",
          "N",
          "F",
          "O",
          "O",
          "M",
          "Z",
          "E",
          "E",
          "S",
          "T",
          "O",
          "A",
          "A",
          "C",
          "R",
          "R",
          "V",
          "Y",
          "A",
          "M"
        ],
        [
          "B",
          "F",
          "I",
          "P",
          "U",
          "Y",
          "C",
          "L",
          "S",
          "D",
          "L",
          "V",
          "Z",
          "B",
          "C",
          "E",
          "D",
          "N",
          "V",
          "R",
          "A",
          "E"
        ],
        [
          "B",
          "F",
          "N",
          "F",
          "Q",
          "H",
          "G",
          "C",
          "R",
          "C",
          "D",
          "O",
          "J",
          "K",
          "M",
          "O",
          "R",
          "H",
          "S",
          "R",
          "W",
          "H"
        ],
        [
          "J",
          "R",
          "O",
          "Z",
          "H",
          "A",
          "Z",
          "A",
          "M",
          "F",
          "F",
          "G",
          "N",
          "B",
          "D",
          "P",
          "A",
          "T",
          "J",
          "E",
          "Y",
          "O"
        ],
        [
          "I",
          "E",
          "X",
          "O",
          "E",
          "N",
          "H",
          "L",
          "B",
          "X",
          "H",
          "I",
          "Z",
          "C",
          "S",
          "C",
          "V",
          "U",
          "A",
          "H",
          "P",
          "M"
        ],
        [
          "P",
          "E",
          "Z",
          "Z",
          "C",
          "C",
          "G",
          "H",
          "J",
          "N",
          "I",
          "A",
          "T",
          "N",
          "U",
          "O",
          "M",
          "P",
          "L",
          "C",
          "S",
          "L"
        ],
        [
          "U",
          "D",
          "E",
          "Z",
          "R",
          "T",
          "Y",
          "G",
          "T",
          "R",
          "R",
          "G",
          "W",
          "K",
          "R",
          "Q",
          "T",
          "O",
          "Q",
          "K",
          "O",
          "T"
        ],
        [
          "V",
          "O",
          "P",
          "O",
          "D",
          "F",
          "L",
          "I",
          "V",
          "U",
          "O",
          "B",
          "S",
          "J",
          "L",
          "E",
          "S",
          "A",
          "G",
          "E",
          "P",
          "N"
        ],
        [
          "H",
          "M",
          "H",
          "R",
          "M",
          "N",
          "N",
          "U",
          "Z",
          "C",
          "B",
          "A",
          "U",
          "I",
          "R",
          "B",
          "F",
          "H",
          "T",
          "N",
          "W",
          "E"
        ],
        [
          "M",
          "S",
          "Y",
          "I",
          "P",
          "C",
          "A",
          "Y",
          "O",
          "F",
          "R",
          "D",
          "I",
          "U",
          "B",
          "N",
          "J",
          "E",
          "E",
          "V",
          "I",
          "M"
        ],
        [
          "C",
          "S",
          "R",
          "S",
          "X",
          "K",
          "O",
          "L",
          "Q",
          "F",
          "A",
          "I",
          "T",
          "J",
          "W",
          "I",
          "O",
          "D",
          "J",
          "J",
          "R",
          "E"
        ],
        [
          "S",
          "A",
          "M",
          "K",
          "H",
          "E",
          "F",
          "M",
          "S",
          "F",
          "H",
          "A",
          "D",
          "S",
          "N",
          "J",
          "K",
          "G",
          "J",
          "U",
          "P",
          "L"
        ],
        [
          "R",
          "N",
          "S",
          "D",
          "T",
          "M",
          "Q",
          "C",
          "P",
          "I",
          "N",
          "X",
          "J",
          "O",
          "L",
          "F",
          "X",
          "H",
          "A",
          "D",
          "L",
          "E"
        ],
        [
          "C",
          "Z",
          "F",
          "H",
          "Y",
          "Y",
          "D",
          "N",
          "M",
          "A",
          "E",
          "H",
          "M",
          "T",
          "N",
          "X",
          "T",
          "T",
          "U",
          "R",
          "B",
          "Q"
        ],
        [
          "S",
          "T",
          "T",
          "Q",
          "W",
          "Z",
          "V",
          "R",
          "B",
          "R",
          "S",
          "E",
          "H",
          "G",
          "B",
          "Y",
          "L",
          "Y",
          "H",
          "K",
          "D",
          "U"
        ],
        [
          "D",
          "J",
          "X",
          "P",
          "Z",
          "D",
          "D",
          "H",
          "L",
          "V",
          "L",
          "S",
          "C",
          "Z",
          "O",
          "S",
          "D",
          "F",
          "K",
          "N",
          "M",
          "K"
        ]
      ],
      "words": [
        {
          "text": "CHERRY",
          "start": {
            "row": 11,
            "col": 19
          },
          "end": {
            "row": 6,
            "col": 19
          },
          "cells": [
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 10,
              "col": 19
            },
            {
              "row": 9,
              "col": 19
            },
            {
              "row": 8,
              "col": 19
            },
            {
              "row": 7,
              "col": 19
            },
            {
              "row": 6,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "COMET",
          "start": {
            "row": 7,
            "col": 6
          },
          "end": {
            "row": 3,
            "col": 2
          },
          "cells": [
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 3,
              "col": 2
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 15,
            "col": 5
          },
          "end": {
            "row": 21,
            "col": 11
          },
          "cells": [
            {
              "row": 15,
              "col": 5
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 18,
              "col": 8
            },
            {
              "row": 19,
              "col": 9
            },
            {
              "row": 20,
              "col": 10
            },
            {
              "row": 21,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "DRAGON",
          "start": {
            "row": 20,
            "col": 20
          },
          "end": {
            "row": 15,
            "col": 15
          },
          "cells": [
            {
              "row": 20,
              "col": 20
            },
            {
              "row": 19,
              "col": 19
            },
            {
              "row": 18,
              "col": 18
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 15,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "EAGLE",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 6,
            "col": 8
          },
          "cells": [
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "ELEMENT",
          "start": {
            "row": 18,
            "col": 21
          },
          "end": {
            "row": 12,
            "col": 21
          },
          "cells": [
            {
              "row": 18,
              "col": 21
            },
            {
              "row": 17,
              "col": 21
            },
            {
              "row": 16,
              "col": 21
            },
            {
              "row": 15,
              "col": 21
            },
            {
              "row": 14,
              "col": 21
            },
            {
              "row": 13,
              "col": 21
            },
            {
              "row": 12,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "FREEDOM",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 14,
            "col": 1
          },
          "cells": [
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 14,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 17,
            "col": 10
          },
          "end": {
            "row": 12,
            "col": 10
          },
          "cells": [
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 15,
              "col": 10
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 12,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "ISLAND",
          "start": {
            "row": 18,
            "col": 9
          },
          "end": {
            "row": 13,
            "col": 4
          },
          "cells": [
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 17,
              "col": 8
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 13,
              "col": 4
            }
          ],
          "found": false
        },
        {
          "text": "JOURNEY",
          "start": {
            "row": 0,
            "col": 0
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "cells": [
            {
              "row": 0,
              "col": 0
            },
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "LEMON",
          "start": {
            "row": 21,
            "col": 10
          },
          "end": {
            "row": 17,
            "col": 14
          },
          "cells": [
            {
              "row": 21,
              "col": 10
            },
            {
              "row": 20,
              "col": 11
            },
            {
              "row": 19,
              "col": 12
            },
            {
              "row": 18,
              "col": 13
            },
            {
              "row": 17,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "MELON",
          "start": {
            "row": 5,
            "col": 8
          },
          "end": {
            "row": 9,
            "col": 12
          },
          "cells": [
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "MOUNTAIN",
          "start": {
            "row": 11,
            "col": 16
          },
          "end": {
            "row": 11,
            "col": 9
          },
          "cells": [
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "NATURE",
          "start": {
            "row": 18,
            "col": 10
          },
          "end": {
            "row": 13,
            "col": 15
          },
          "cells": [
            {
              "row": 18,
              "col": 10
            },
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 13,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "OCEAN",
          "start": {
            "row": 4,
            "col": 17
          },
          "end": {
            "row": 0,
            "col": 21
          },
          "cells": [
            {
              "row": 4,
              "col": 17
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 2,
              "col": 19
            },
            {
              "row": 1,
              "col": 20
            },
            {
              "row": 0,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "ORCHARD",
          "start": {
            "row": 13,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "cells": [
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "TREASURE",
          "start": {
            "row": 9,
            "col": 17
          },
          "end": {
            "row": 2,
            "col": 10
          },
          "cells": [
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 8,
              "col": 16
            },
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 3,
              "col": 11
            },
            {
              "row": 2,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 11,
            "col": 2
          },
          "end": {
            "row": 16,
            "col": 2
          },
          "cells": [
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 2
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 408,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "D",
          "A",
          "O",
          "D",
          "A",
          "H",
          "O",
          "C",
          "S",
          "P",
          "A",
          "R",
          "R",
          "O",
          "W",
          "E",
          "G",
          "B",
          "L",
          "M",
          "G",
          "Z"
        ],
        [
          "W",
          "N",
          "Z",
          "A",
          "N",
          "R",
          "D",
          "O",
          "R",
          "D",
          "G",
          "I",
          "A",
          "H",
          "B",
          "N",
          "M",
          "T",
          "X",
          "L",
          "T",
          "Y"
        ],
        [
          "J",
          "R",
          "Y",
          "R",
          "C",
          "S",
          "R",
          "K",
          "Y",
          "L",
          "L",
          "S",
          "V",
          "U",
          "Z",
          "E",
          "F",
          "I",
          "V",
          "R",
          "Y",
          "A"
        ],
        [
          "P",
          "V",
          "A",
          "H",
          "B",
          "H",
          "A",
          "K",
          "B",
          "S",
          "J",
          "I",
          "N",
          "S",
          "T",
          "B",
          "Q",
          "L",
          "A",
          "J",
          "G",
          "C"
        ],
        [
          "G",
          "M",
          "I",
          "N",
          "E",
          "J",
          "O",
          "V",
          "O",
          "N",
          "Q",
          "X",
          "B",
          "C",
          "V",
          "U",
          "Y",
          "U",
          "V",
          "P",
          "Y",
          "H"
        ],
        [
          "B",
          "D",
          "O",
          "Q",
          "Q",
          "K",
          "B",
          "K",
          "R",
          "Q",
          "L",
          "K",
          "P",
          "R",
          "N",
          "L",
          "Q",
          "B",
          "D",
          "E",
          "F",
          "T"
        ],
        [
          "X",
          "R",
          "W",
          "Y",
          "L",
          "I",
          "Y",
          "F",
          "W",
          "E",
          "I",
          "N",
          "H",
          "N",
          "A",
          "A",
          "K",
          "D",
          "C",
          "T",
          "R",
          "X"
        ],
        [
          "H",
          "U",
          "C",
          "G",
          "U",
          "P",
          "E",
          "A",
          "F",
          "B",
          "V",
          "F",
          "H",
          "A",
          "L",
          "R",
          "H",
          "S",
          "S",
          "P",
          "Q",
          "L"
        ],
        [
          "Y",
          "W",
          "E",
          "C",
          "P",
          "I",
          "K",
          "D",
          "B",
          "P",
          "V",
          "L",
          "M",
          "J",
          "D",
          "W",
          "Y",
          "D",
          "A",
          "W",
          "K",
          "T"
        ],
        [
          "X",
          "Z",
          "C",
          "X",
          "D",
          "K",
          "G",
          "Q",
          "B",
          "L",
          "T",
          "L",
          "I",
          "R",
          "A",
          "V",
          "A",
          "P",
          "T",
          "V",
          "K",
          "R"
        ],
        [
          "O",
          "S",
          "S",
          "A",
          "P",
          "M",
          "O",
          "C",
          "R",
          "F",
          "S",
          "N",
          "E",
          "S",
          "G",
          "S",
          "E",
          "L",
          "M",
          "T",
          "E",
          "E"
        ],
        [
          "S",
          "I",
          "S",
          "Y",
          "Q",
          "K",
          "K",
          "O",
          "S",
          "P",
          "T",
          "W",
          "G",
          "C",
          "W",
          "D",
          "T",
          "N",
          "R",
          "U",
          "K",
          "M"
        ],
        [
          "B",
          "Y",
          "X",
          "W",
          "F",
          "R",
          "A",
          "O",
          "M",
          "Y",
          "O",
          "W",
          "N",
          "B",
          "V",
          "C",
          "A",
          "Z",
          "T",
          "E",
          "I",
          "M"
        ],
        [
          "I",
          "B",
          "M",
          "P",
          "P",
          "T",
          "W",
          "X",
          "P",
          "L",
          "F",
          "S",
          "I",
          "C",
          "E",
          "E",
          "E",
          "D",
          "D",
          "U",
          "V",
          "U"
        ],
        [
          "F",
          "U",
          "X",
          "Z",
          "T",
          "E",
          "M",
          "T",
          "F",
          "Q",
          "A",
          "M",
          "R",
          "O",
          "R",
          "U",
          "J",
          "I",
          "A",
          "O",
          "R",
          "S"
        ],
        [
          "U",
          "X",
          "F",
          "F",
          "X",
          "C",
          "L",
          "D",
          "J",
          "H",
          "I",
          "V",
          "P",
          "V",
          "I",
          "E",
          "I",
          "D",
          "R",
          "S",
          "A",
          "E"
        ],
        [
          "B",
          "C",
          "M",
          "L",
          "J",
          "O",
          "L",
          "B",
          "T",
          "G",
          "G",
          "L",
          "S",
          "L",
          "H",
          "A",
          "B",
          "B",
          "A",
          "E",
          "O",
          "H"
        ],
        [
          "Q",
          "O",
          "O",
          "W",
          "R",
          "I",
          "N",
          "H",
          "R",
          "I",
          "G",
          "S",
          "J",
          "P",
          "P",
          "T",
          "V",
          "A",
          "R",
          "B",
          "E",
          "Z"
        ],
        [
          "U",
          "A",
          "R",
          "Y",
          "W",
          "F",
          "E",
          "K",
          "L",
          "A",
          "G",
          "C",
          "C",
          "S",
          "P",
          "G",
          "G",
          "X",
          "S",
          "I",
          "O",
          "Q"
        ],
        [
          "W",
          "C",
          "B",
          "B",
          "E",
          "E",
          "M",
          "F",
          "J",
          "Y",
          "M",
          "E",
          "V",
          "K",
          "A",
          "Q",
          "N",
          "X",
          "O",
          "R",
          "R",
          "B"
        ],
        [
          "A",
          "B",
          "L",
          "K",
          "I",
          "L",
          "Q",
          "A",
          "P",
          "O",
          "D",
          "A",
          "R",
          "X",
          "S",
          "O",
          "U",
          "N",
          "T",
          "A",
          "U",
          "T"
        ],
        [
          "P",
          "U",
          "P",
          "C",
          "A",
          "T",
          "H",
          "G",
          "Y",
          "K",
          "E",
          "O",
          "N",
          "B",
          "Y",
          "W",
          "Q",
          "R",
          "F",
          "R",
          "W",
          "B"
        ]
      ],
      "words": [
        {
          "text": "ADVENTURE",
          "start": {
            "row": 7,
            "col": 13
          },
          "end": {
            "row": 15,
            "col": 21
          },
          "cells": [
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 12,
              "col": 18
            },
            {
              "row": 13,
              "col": 19
            },
            {
              "row": 14,
              "col": 20
            },
            {
              "row": 15,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "COMPASS",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 1
          },
          "cells": [
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 10,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "KEYBOARD",
          "start": {
            "row": 8,
            "col": 6
          },
          "end": {
            "row": 1,
            "col": 6
          },
          "cells": [
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 1,
              "col": 6
            }
          ],
          "found": false
        },
        {
          "text": "LIBRARY",
          "start": {
            "row": 2,
            "col": 10
          },
          "end": {
            "row": 8,
            "col": 16
          },
          "cells": [
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 3,
              "col": 11
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 8,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "MARBLE",
          "start": {
            "row": 19,
            "col": 10
          },
          "end": {
            "row": 14,
            "col": 5
          },
          "cells": [
            {
              "row": 19,
              "col": 10
            },
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 17,
              "col": 8
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 14,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "NEBULA",
          "start": {
            "row": 1,
            "col": 15
          },
          "end": {
            "row": 6,
            "col": 15
          },
          "cells": [
            {
              "row": 1,
              "col": 15
            },
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 15
            }
          ],
          "found": false
        },
        {
          "text": "ORBIT",
          "start": {
            "row": 17,
            "col": 1
          },
          "end": {
            "row": 21,
            "col": 5
          },
          "cells": [
            {
              "row": 17,
              "col": 1
            },
            {
              "row": 18,
              "col": 2
            },
            {
              "row": 19,
              "col": 3
            },
            {
              "row": 20,
              "col": 4
            },
            {
              "row": 21,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ORCHID",
          "start": {
            "row": 0,
            "col": 6
          },
          "end": {
            "row": 5,
            "col": 1
          },
          "cells": [
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 5,
            "col": 16
          },
          "end": {
            "row": 0,
            "col": 21
          },
          "cells": [
            {
              "row": 5,
              "col": 16
            },
            {
              "row": 4,
              "col": 17
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 2,
              "col": 19
            },
            {
              "row": 1,
              "col": 20
            },
            {
              "row": 0,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "SAPPHIRE",
          "start": {
            "row": 20,
            "col": 14
          },
          "end": {
            "row": 13,
            "col": 14
          },
          "cells": [
            {
              "row": 20,
              "col": 14
            },
            {
              "row": 19,
              "col": 14
            },
            {
              "row": 18,
              "col": 14
            },
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 15,
              "col": 14
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 13,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "SILVER",
          "start": {
            "row": 10,
            "col": 13
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "cells": [
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 0,
            "col": 8
          },
          "end": {
            "row": 0,
            "col": 14
          },
          "cells": [
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            },
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 0,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "SPRING",
          "start": {
            "row": 16,
            "col": 12
          },
          "end": {
            "row": 11,
            "col": 12
          },
          "cells": [
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 11,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "SUMMER",
          "start": {
            "row": 14,
            "col": 21
          },
          "end": {
            "row": 9,
            "col": 21
          },
          "cells": [
            {
              "row": 14,
              "col": 21
            },
            {
              "row": 13,
              "col": 21
            },
            {
              "row": 12,
              "col": 21
            },
            {
              "row": 11,
              "col": 21
            },
            {
              "row": 10,
              "col": 21
            },
            {
              "row": 9,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "TIGER",
          "start": {
            "row": 16,
            "col": 8
          },
          "end": {
            "row": 20,
            "col": 12
          },
          "cells": [
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 18,
              "col": 10
            },
            {
              "row": 19,
              "col": 11
            },
            {
              "row": 20,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "WILDFLOWER",
          "start": {
            "row": 18,
            "col": 4
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "cells": [
            {
              "row": 18,
              "col": 4
            },
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "YACHT",
          "start": {
            "row": 1,
            "col": 21
          },
          "end": {
            "row": 5,
            "col": 21
          },
          "cells": [
            {
              "row": 1,
              "col": 21
            },
            {
              "row": 2,
              "col": 21
            },
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 4,
              "col": 21
            },
            {
              "row": 5,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 17,
            "col": 21
          },
          "end": {
            "row": 17,
            "col": 17
          },
          "cells": [
            {
              "row": 17,
              "col": 21
            },
            {
              "row": 17,
              "col": 20
            },
            {
              "row": 17,
              "col": 19
            },
            {
              "row": 17,
              "col": 18
            },
            {
              "row": 17,
              "col": 17
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 409,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "C",
          "D",
          "B",
          "J",
          "I",
          "S",
          "O",
          "B",
          "V",
          "P",
          "M",
          "N",
          "T",
          "P",
          "M",
          "B",
          "L",
          "V",
          "O",
          "A",
          "S",
          "X"
        ],
        [
          "K",
          "L",
          "Z",
          "R",
          "S",
          "P",
          "K",
          "H",
          "V",
          "A",
          "O",
          "X",
          "Z",
          "E",
          "E",
          "X",
          "M",
          "X",
          "J",
          "A",
          "E",
          "T"
        ],
        [
          "U",
          "L",
          "Z",
          "H",
          "A",
          "Y",
          "G",
          "B",
          "D",
          "L",
          "B",
          "H",
          "M",
          "I",
          "F",
          "S",
          "Y",
          "U",
          "X",
          "K",
          "B",
          "Y"
        ],
        [
          "D",
          "Q",
          "T",
          "N",
          "B",
          "K",
          "A",
          "H",
          "E",
          "R",
          "M",
          "X",
          "V",
          "B",
          "G",
          "R",
          "E",
          "F",
          "R",
          "F",
          "I",
          "B"
        ],
        [
          "O",
          "N",
          "P",
          "B",
          "O",
          "E",
          "E",
          "M",
          "P",
          "J",
          "Y",
          "X",
          "S",
          "L",
          "N",
          "Z",
          "O",
          "A",
          "M",
          "Q",
          "C",
          "F"
        ],
        [
          "L",
          "D",
          "Y",
          "H",
          "K",
          "Y",
          "S",
          "A",
          "E",
          "A",
          "Q",
          "C",
          "B",
          "P",
          "P",
          "G",
          "A",
          "R",
          "M",
          "T",
          "R",
          "H"
        ],
        [
          "A",
          "E",
          "R",
          "C",
          "B",
          "G",
          "N",
          "P",
          "I",
          "R",
          "W",
          "A",
          "R",
          "R",
          "P",
          "O",
          "S",
          "G",
          "P",
          "L",
          "L",
          "M"
        ],
        [
          "J",
          "S",
          "U",
          "E",
          "A",
          "E",
          "J",
          "A",
          "A",
          "C",
          "Q",
          "Y",
          "K",
          "L",
          "H",
          "F",
          "I",
          "K",
          "D",
          "A",
          "R",
          "D"
        ],
        [
          "T",
          "E",
          "U",
          "M",
          "T",
          "C",
          "R",
          "Y",
          "C",
          "R",
          "J",
          "G",
          "E",
          "A",
          "X",
          "Y",
          "Q",
          "N",
          "N",
          "A",
          "L",
          "Y"
        ],
        [
          "S",
          "R",
          "C",
          "M",
          "B",
          "N",
          "M",
          "R",
          "T",
          "Y",
          "R",
          "P",
          "J",
          "H",
          "P",
          "K",
          "O",
          "D",
          "D",
          "K",
          "D",
          "D"
        ],
        [
          "O",
          "T",
          "H",
          "X",
          "G",
          "A",
          "E",
          "A",
          "Y",
          "M",
          "Y",
          "O",
          "A",
          "S",
          "S",
          "M",
          "M",
          "U",
          "V",
          "D",
          "Z",
          "M"
        ],
        [
          "V",
          "W",
          "H",
          "Y",
          "J",
          "M",
          "N",
          "B",
          "U",
          "K",
          "A",
          "Y",
          "W",
          "R",
          "A",
          "A",
          "E",
          "B",
          "N",
          "N",
          "S",
          "H"
        ],
        [
          "R",
          "S",
          "J",
          "O",
          "A",
          "F",
          "J",
          "A",
          "U",
          "H",
          "U",
          "L",
          "D",
          "I",
          "R",
          "C",
          "E",
          "G",
          "A",
          "K",
          "E",
          "Q"
        ],
        [
          "E",
          "A",
          "B",
          "P",
          "S",
          "V",
          "K",
          "V",
          "N",
          "L",
          "D",
          "B",
          "D",
          "K",
          "O",
          "L",
          "L",
          "K",
          "Y",
          "J",
          "D",
          "P"
        ],
        [
          "B",
          "A",
          "K",
          "D",
          "M",
          "N",
          "A",
          "F",
          "N",
          "A",
          "A",
          "N",
          "D",
          "M",
          "H",
          "B",
          "G",
          "S",
          "H",
          "N",
          "U",
          "B"
        ],
        [
          "M",
          "N",
          "Y",
          "M",
          "O",
          "V",
          "D",
          "Z",
          "E",
          "B",
          "R",
          "A",
          "E",
          "L",
          "Q",
          "Y",
          "A",
          "D",
          "H",
          "G",
          "X",
          "V"
        ],
        [
          "I",
          "F",
          "X",
          "N",
          "F",
          "S",
          "H",
          "M",
          "G",
          "Z",
          "H",
          "T",
          "Z",
          "A",
          "F",
          "Y",
          "E",
          "N",
          "E",
          "F",
          "V",
          "M"
        ],
        [
          "T",
          "G",
          "E",
          "C",
          "K",
          "A",
          "X",
          "E",
          "R",
          "U",
          "S",
          "A",
          "E",
          "R",
          "T",
          "N",
          "F",
          "M",
          "L",
          "S",
          "S",
          "H"
        ],
        [
          "Y",
          "X",
          "O",
          "G",
          "T",
          "C",
          "R",
          "A",
          "T",
          "E",
          "R",
          "Y",
          "X",
          "H",
          "C",
          "Y",
          "Q",
          "J",
          "H",
          "C",
          "P",
          "P"
        ],
        [
          "E",
          "Z",
          "T",
          "C",
          "V",
          "R",
          "U",
          "Q",
          "S",
          "G",
          "X",
          "E",
          "K",
          "Q",
          "L",
          "G",
          "U",
          "A",
          "V",
          "A",
          "J",
          "R"
        ],
        [
          "V",
          "F",
          "M",
          "C",
          "F",
          "Q",
          "G",
          "J",
          "O",
          "P",
          "S",
          "K",
          "C",
          "A",
          "T",
          "I",
          "Q",
          "H",
          "V",
          "C",
          "R",
          "Q"
        ],
        [
          "N",
          "R",
          "J",
          "O",
          "D",
          "W",
          "B",
          "T",
          "O",
          "T",
          "D",
          "D",
          "A",
          "V",
          "D",
          "V",
          "E",
          "N",
          "W",
          "P",
          "J",
          "H"
        ]
      ],
      "words": [
        {
          "text": "BANANA",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 14,
            "col": 9
          },
          "cells": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "BERRY",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 8
          },
          "cells": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "CANYON",
          "start": {
            "row": 8,
            "col": 8
          },
          "end": {
            "row": 3,
            "col": 3
          },
          "cells": [
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 3,
              "col": 3
            }
          ],
          "found": false
        },
        {
          "text": "COMET",
          "start": {
            "row": 12,
            "col": 15
          },
          "end": {
            "row": 16,
            "col": 11
          },
          "cells": [
            {
              "row": 12,
              "col": 15
            },
            {
              "row": 13,
              "col": 14
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 16,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 18,
            "col": 5
          },
          "end": {
            "row": 18,
            "col": 10
          },
          "cells": [
            {
              "row": 18,
              "col": 5
            },
            {
              "row": 18,
              "col": 6
            },
            {
              "row": 18,
              "col": 7
            },
            {
              "row": 18,
              "col": 8
            },
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 18,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "DESERT",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 10,
            "col": 1
          },
          "cells": [
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 10,
              "col": 1
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 13,
            "col": 12
          },
          "end": {
            "row": 7,
            "col": 18
          },
          "cells": [
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 7,
              "col": 18
            }
          ],
          "found": false
        },
        {
          "text": "EAGLE",
          "start": {
            "row": 16,
            "col": 16
          },
          "end": {
            "row": 12,
            "col": 16
          },
          "cells": [
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 15,
              "col": 16
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 12,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "GUAVA",
          "start": {
            "row": 19,
            "col": 15
          },
          "end": {
            "row": 19,
            "col": 19
          },
          "cells": [
            {
              "row": 19,
              "col": 15
            },
            {
              "row": 19,
              "col": 16
            },
            {
              "row": 19,
              "col": 17
            },
            {
              "row": 19,
              "col": 18
            },
            {
              "row": 19,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "LANDMARK",
          "start": {
            "row": 6,
            "col": 20
          },
          "end": {
            "row": 13,
            "col": 13
          },
          "cells": [
            {
              "row": 6,
              "col": 20
            },
            {
              "row": 7,
              "col": 19
            },
            {
              "row": 8,
              "col": 18
            },
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 12,
              "col": 14
            },
            {
              "row": 13,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "MELON",
          "start": {
            "row": 4,
            "col": 7
          },
          "end": {
            "row": 0,
            "col": 11
          },
          "cells": [
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 0,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "NEBULA",
          "start": {
            "row": 9,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 10
          },
          "cells": [
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 14,
              "col": 10
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 12
          },
          "cells": [
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 11,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "TIMBER",
          "start": {
            "row": 17,
            "col": 0
          },
          "end": {
            "row": 12,
            "col": 0
          },
          "cells": [
            {
              "row": 17,
              "col": 0
            },
            {
              "row": 16,
              "col": 0
            },
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 14,
              "col": 0
            },
            {
              "row": 13,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            }
          ],
          "found": false
        },
        {
          "text": "TREASURE",
          "start": {
            "row": 17,
            "col": 14
          },
          "end": {
            "row": 17,
            "col": 7
          },
          "cells": [
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 17,
              "col": 13
            },
            {
              "row": 17,
              "col": 12
            },
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 17,
              "col": 8
            },
            {
              "row": 17,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "XENON",
          "start": {
            "row": 18,
            "col": 1
          },
          "end": {
            "row": 14,
            "col": 5
          },
          "cells": [
            {
              "row": 18,
              "col": 1
            },
            {
              "row": 17,
              "col": 2
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 14,
              "col": 5
            }
          ],
          "found": false
        },
        {
          "text": "ZEBRA",
          "start": {
            "row": 15,
            "col": 7
          },
          "end": {
            "row": 15,
            "col": 11
          },
          "cells": [
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 15,
              "col": 9
            },
            {
              "row": 15,
              "col": 10
            },
            {
              "row": 15,
              "col": 11
            }
          ],
          "found": false
        },
        {
          "text": "ZIGZAG",
          "start": {
            "row": 1,
            "col": 12
          },
          "end": {
            "row": 6,
            "col": 17
          },
          "cells": [
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 5,
              "col": 16
            },
            {
              "row": 6,
              "col": 17
            }
          ],
          "found": false
        }
      ]
    },
    {
      "seed": 410,
      "difficulty": "expert",
      "size": 22,
      "grid": [
        [
          "D",
          "N",
          "T",
          "Y",
          "O",
          "G",
          "D",
          "T",
          "J",
          "P",
          "W",
          "A",
          "A",
          "T",
          "R",
          "Y",
          "P",
          "L",
          "G",
          "U",
          "P",
          "N"
        ],
        [
          "S",
          "V",
          "B",
          "M",
          "P",
          "G",
          "W",
          "E",
          "Y",
          "F",
          "K",
          "Q",
          "I",
          "H",
          "C",
          "W",
          "L",
          "B",
          "J",
          "W",
          "C",
          "O"
        ],
        [
          "U",
          "Z",
          "X",
          "W",
          "R",
          "I",
          "S",
          "M",
          "Q",
          "P",
          "X",
          "T",
          "P",
          "W",
          "E",
          "X",
          "A",
          "T",
          "Z",
          "H",
          "D",
          "O"
        ],
        [
          "W",
          "S",
          "E",
          "W",
          "M",
          "O",
          "C",
          "D",
          "I",
          "W",
          "U",
          "M",
          "I",
          "N",
          "R",
          "T",
          "N",
          "X",
          "N",
          "W",
          "M",
          "S"
        ],
        [
          "H",
          "D",
          "V",
          "P",
          "U",
          "S",
          "I",
          "N",
          "I",
          "K",
          "X",
          "D",
          "F",
          "I",
          "I",
          "H",
          "E",
          "F",
          "Y",
          "O",
          "M",
          "N"
        ],
        [
          "R",
          "X",
          "H",
          "R",
          "H",
          "O",
          "L",
          "W",
          "I",
          "Z",
          "F",
          "V",
          "Z",
          "H",
          "P",
          "Y",
          "T",
          "W",
          "J",
          "O",
          "Z",
          "O"
        ],
        [
          "Y",
          "Y",
          "P",
          "W",
          "R",
          "Y",
          "R",
          "J",
          "W",
          "C",
          "B",
          "F",
          "Y",
          "P",
          "S",
          "Z",
          "L",
          "J",
          "W",
          "V",
          "O",
          "M"
        ],
        [
          "Q",
          "X",
          "Y",
          "E",
          "Z",
          "Y",
          "R",
          "W",
          "K",
          "W",
          "G",
          "T",
          "S",
          "L",
          "N",
          "A",
          "Z",
          "W",
          "B",
          "E",
          "R",
          "W"
        ],
        [
          "T",
          "Y",
          "T",
          "I",
          "P",
          "O",
          "D",
          "O",
          "Q",
          "N",
          "I",
          "R",
          "E",
          "O",
          "I",
          "W",
          "O",
          "A",
          "A",
          "E",
          "Y",
          "V"
        ],
        [
          "S",
          "S",
          "K",
          "G",
          "X",
          "V",
          "M",
          "C",
          "Y",
          "I",
          "Z",
          "P",
          "L",
          "D",
          "G",
          "Q",
          "N",
          "B",
          "T",
          "Q",
          "N",
          "C"
        ],
        [
          "A",
          "Y",
          "O",
          "U",
          "H",
          "U",
          "J",
          "Y",
          "E",
          "R",
          "M",
          "E",
          "R",
          "V",
          "A",
          "A",
          "M",
          "A",
          "R",
          "E",
          "V",
          "O"
        ],
        [
          "R",
          "X",
          "E",
          "K",
          "K",
          "L",
          "N",
          "B",
          "N",
          "Y",
          "F",
          "M",
          "I",
          "A",
          "N",
          "G",
          "R",
          "R",
          "X",
          "L",
          "I",
          "M"
        ],
        [
          "I",
          "D",
          "Z",
          "F",
          "T",
          "Z",
          "H",
          "U",
          "R",
          "T",
          "K",
          "D",
          "J",
          "A",
          "M",
          "C",
          "J",
          "J",
          "P",
          "G",
          "T",
          "P"
        ],
        [
          "M",
          "B",
          "A",
          "K",
          "Z",
          "X",
          "F",
          "P",
          "U",
          "T",
          "U",
          "L",
          "R",
          "O",
          "C",
          "K",
          "E",
          "T",
          "S",
          "A",
          "S",
          "Y"
        ],
        [
          "F",
          "J",
          "L",
          "Q",
          "Q",
          "P",
          "P",
          "L",
          "O",
          "X",
          "P",
          "C",
          "Z",
          "M",
          "M",
          "J",
          "Y",
          "T",
          "X",
          "E",
          "E",
          "N"
        ],
        [
          "Q",
          "L",
          "H",
          "X",
          "E",
          "U",
          "I",
          "H",
          "J",
          "Y",
          "I",
          "C",
          "B",
          "P",
          "L",
          "D",
          "B",
          "S",
          "G",
          "H",
          "U",
          "Q"
        ],
        [
          "W",
          "L",
          "C",
          "W",
          "D",
          "B",
          "N",
          "M",
          "S",
          "Q",
          "U",
          "A",
          "R",
          "T",
          "Z",
          "F",
          "X",
          "D",
          "P",
          "U",
          "Q",
          "V"
        ],
        [
          "J",
          "H",
          "Q",
          "A",
          "K",
          "E",
          "R",
          "H",
          "V",
          "N",
          "W",
          "H",
          "A",
          "R",
          "B",
          "O",
          "R",
          "S",
          "I",
          "Q",
          "X",
          "R"
        ],
        [
          "X",
          "K",
          "Y",
          "S",
          "V",
          "O",
          "H",
          "W",
          "P",
          "X",
          "H",
          "Z",
          "L",
          "D",
          "N",
          "O",
          "M",
          "A",
          "I",
          "D",
          "U",
          "V"
        ],
        [
          "D",
          "F",
          "D",
          "W",
          "J",
          "T",
          "R",
          "E",
          "A",
          "S",
          "U",
          "R",
          "E",
          "K",
          "L",
          "H",
          "E",
          "M",
          "M",
          "F",
          "P",
          "O"
        ],
        [
          "B",
          "I",
          "X",
          "X",
          "K",
          "Z",
          "C",
          "W",
          "G",
          "Z",
          "X",
          "L",
          "K",
          "L",
          "D",
          "U",
          "D",
          "R",
          "D",
          "Q",
          "K",
          "J"
        ],
        [
          "M",
          "N",
          "X",
          "T",
          "T",
          "V",
          "V",
          "Z",
          "T",
          "P",
          "O",
          "N",
          "L",
          "X",
          "S",
          "P",
          "A",
          "R",
          "R",
          "O",
          "W",
          "P"
        ]
      ],
      "words": [
        {
          "text": "ASTEROID",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 3,
            "col": 7
          },
          "cells": [
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            }
          ],
          "found": false
        },
        {
          "text": "BANANA",
          "start": {
            "row": 7,
            "col": 18
          },
          "end": {
            "row": 12,
            "col": 13
          },
          "cells": [
            {
              "row": 7,
              "col": 18
            },
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 12,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "CRATER",
          "start": {
            "row": 12,
            "col": 15
          },
          "end": {
            "row": 7,
            "col": 20
          },
          "cells": [
            {
              "row": 12,
              "col": 15
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 10,
              "col": 17
            },
            {
              "row": 9,
              "col": 18
            },
            {
              "row": 8,
              "col": 19
            },
            {
              "row": 7,
              "col": 20
            }
          ],
          "found": false
        },
        {
          "text": "DIAMOND",
          "start": {
            "row": 18,
            "col": 19
          },
          "end": {
            "row": 18,
            "col": 13
          },
          "cells": [
            {
              "row": 18,
              "col": 19
            },
            {
              "row": 18,
              "col": 18
            },
            {
              "row": 18,
              "col": 17
            },
            {
              "row": 18,
              "col": 16
            },
            {
              "row": 18,
              "col": 15
            },
            {
              "row": 18,
              "col": 14
            },
            {
              "row": 18,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "DOLPHIN",
          "start": {
            "row": 9,
            "col": 13
          },
          "end": {
            "row": 3,
            "col": 13
          },
          "cells": [
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 3,
              "col": 13
            }
          ],
          "found": false
        },
        {
          "text": "EAGLE",
          "start": {
            "row": 14,
            "col": 19
          },
          "end": {
            "row": 10,
            "col": 19
          },
          "cells": [
            {
              "row": 14,
              "col": 19
            },
            {
              "row": 13,
              "col": 19
            },
            {
              "row": 12,
              "col": 19
            },
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 10,
              "col": 19
            }
          ],
          "found": false
        },
        {
          "text": "HARBOR",
          "start": {
            "row": 17,
            "col": 11
          },
          "end": {
            "row": 17,
            "col": 16
          },
          "cells": [
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 17,
              "col": 12
            },
            {
              "row": 17,
              "col": 13
            },
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 17,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "INSPIRE",
          "start": {
            "row": 8,
            "col": 14
          },
          "end": {
            "row": 2,
            "col": 14
          },
          "cells": [
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 2,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "JOURNEY",
          "start": {
            "row": 15,
            "col": 8
          },
          "end": {
            "row": 9,
            "col": 8
          },
          "cells": [
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 8
            }
          ],
          "found": false
        },
        {
          "text": "MONSOON",
          "start": {
            "row": 6,
            "col": 21
          },
          "end": {
            "row": 0,
            "col": 21
          },
          "cells": [
            {
              "row": 6,
              "col": 21
            },
            {
              "row": 5,
              "col": 21
            },
            {
              "row": 4,
              "col": 21
            },
            {
              "row": 3,
              "col": 21
            },
            {
              "row": 2,
              "col": 21
            },
            {
              "row": 1,
              "col": 21
            },
            {
              "row": 0,
              "col": 21
            }
          ],
          "found": false
        },
        {
          "text": "PICNIC",
          "start": {
            "row": 1,
            "col": 4
          },
          "end": {
            "row": 6,
            "col": 9
          },
          "cells": [
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            }
          ],
          "found": false
        },
        {
          "text": "PLANET",
          "start": {
            "row": 0,
            "col": 16
          },
          "end": {
            "row": 5,
            "col": 16
          },
          "cells": [
            {
              "row": 0,
              "col": 16
            },
            {
              "row": 1,
              "col": 16
            },
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 3,
              "col": 16
            },
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 5,
              "col": 16
            }
          ],
          "found": false
        },
        {
          "text": "QUARTZ",
          "start": {
            "row": 16,
            "col": 9
          },
          "end": {
            "row": 16,
            "col": 14
          },
          "cells": [
            {
              "row": 16,
              "col": 9
            },
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 16,
              "col": 13
            },
            {
              "row": 16,
              "col": 14
            }
          ],
          "found": false
        },
        {
          "text": "QUEST",
          "start": {
            "row": 16,
            "col": 20
          },
          "end": {
            "row": 12,
            "col": 20
          },
          "cells": [
            {
              "row": 16,
              "col": 20
            },
            {
              "row": 15,
              "col": 20
            },
            {
              "row": 14,
              "col": 20
            },
            {
              "row": 13,
              "col": 20
            },
            {
              "row": 12,
              "col": 20
            }
          ],
          "found": false
        },
        {
          "text": "ROCKET",
          "start": {
            "row": 13,
            "col": 12
          },
          "end": {
            "row": 13,
            "col": 17
          },
          "cells": [
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 13,
              "col": 14
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 13,
              "col": 17
            }
          ],
          "found": false
        },
        {
          "text": "SPARROW",
          "start": {
            "row": 21,
            "col": 14
          },
          "end": {
            "row": 21,
            "col": 20
          },
          "cells": [
            {
              "row": 21,
              "col": 14
            },
            {
              "row": 21,
              "col": 15
            },
            {
              "row": 21,
              "col": 16
            },
            {
              "row": 21,
              "col": 17
            },
            {
              "row": 21,
              "col": 18
            },
            {
              "row": 21,
              "col": 19
            },
            {
              "row": 21,
              "col": 20
            }
          ],
          "found": false
        },
        {
          "text": "TREASURE",
          "start": {
            "row": 19,
            "col": 5
          },
          "end": {
            "row": 19,
            "col": 12
          },
          "cells": [
            {
              "row": 19,
              "col": 5
            },
            {
              "row": 19,
              "col": 6
            },
            {
              "row": 19,
              "col": 7
            },
            {
              "row": 19,
              "col": 8
            },
            {
              "row": 19,
              "col": 9
            },
            {
              "row": 19,
              "col": 10
            },
            {
              "row": 19,
              "col": 11
            },
            {
              "row": 19,
              "col": 12
            }
          ],
          "found": false
        },
        {
          "text": "ZEPHYR",
          "start": {
            "row": 2,
            "col": 1
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "cells": [
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            }
          ],
          "found": false
        }
      ]
    }
  ]
};

export function getCatalogPuzzle(difficulty: Difficulty, puzzleNumber: number): Puzzle {
  const puzzles = CATALOG_PUZZLES[difficulty];
  const clamped = Math.max(1, Math.min(CATALOG_PUZZLES_PER_DIFFICULTY, Math.floor(puzzleNumber)));

  return puzzles[clamped - 1];
}

export function getCatalogPuzzleCount(difficulty: Difficulty): number {
  return CATALOG_PUZZLES[difficulty].length;
}

export function getCatalogPuzzles(difficulty: Difficulty): readonly Puzzle[] {
  return CATALOG_PUZZLES[difficulty];
}
