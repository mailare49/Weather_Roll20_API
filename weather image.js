var Calendar = Calendar || {
    version: 1.2,
    lunarPhaseSize: 15,
    lunarPhasesImage: 'https://s3.amazonaws.com/files.d20.io/images/4277527/CJJWBbiHx3jHglPdccPx3A/max.png?1401939451',
    clearImage: 'https://s3.amazonaws.com/files.d20.io/images/4277467/iQYjFOsYC5JsuOPUCI9RGA/max.png?1401938659',
    seasonImage: 'https://s3.amazonaws.com/files.d20.io/images/15888656/ICJhf5iNk0wtC3GbK0Y6iQ/original.png?14544194835',
    seasonImageSize : 30,

    weatherImage : 'https://s3.amazonaws.com/files.d20.io/images/15894686/Zaby88WaMRSRO104_1eAug/original.png?14544320015',
    weatherImageSize : 30,
    weatherImageBorderHorizontal: 14.5,
    weatherImageVerticalBorder: 11,

    weathersIcons : {
    HOT: {hot: "Chaud", x: 0, y: 1},
    GOOD: {name: "Bon", x: 1, y: 1},
    COLDY: {name: "Froid", x: 2, y: 1},
    
    VERYHOT: {name: "Vague de chaleur", x: 3, y: 7},
    GLACIAL: {name: "Vague de froid", x: 4, y: 7},

    CALM: {name: "Calme", x: 0, y: 5},
    WIND: {name: "Venteux", x: 1, y: 5},
    STRONGWIND: {name: "Tempête", x: 2, y: 5},
    STORM: {name: "Ouragan", x: 3, y: 5},
    HURRICANE: {name: "Tornade", x: 3, y: 5},

    RAIN: {name: "Pluie", x: 6, y: 1},
    TORRENTIALRAIN: {name: "Pluie Torrentielle", x: 0, y: 2},
    THUNDER: {name: "Orage", x: 3, y: 2},

    SNOW: {name: "Neige", x: 5, y: 4},
    BIGSNOW: {name: "Tempête de neige", x: 8, y: 4},
    SNOWSTORM: {name: "Blizzard", x: 9, y: 4},
    
    SANDSTORM: {name: "Tempête de sable", x: 1, y: 4}
    }
}