var Climate = {
    TEMPERATE : 0,
    DESERT : 1,
    JUNGLE : 2,
    COLD : 3
};
var Precip = {
    CLEAR : 0,
    OVERCAST : 1,
    RAIN : 2,
    SNOW : 3,
    THUNDER : 4
};
var tempDesc;
var temp;
var windOrigin;
var windSpeed;
var precipDesc;
var precipStr;
var season;
var humidity;
var icon;
var iconPrecip;
var iconWind;
var rollWindO=randomInteger(100);
var rollWindS=randomInteger(100);
var rollPrecip=randomInteger(100);
var rollPrecipStr = randomInteger(100);
var ordinal=state.Calendar.now.ordinal;

//Define season
if (ordinal>330 || ordinal<=75) {
    season="Hilveris";
} else if (ordinal<=170) {
    season="Floreas";
} else if (ordinal<=240) {
    season="Solarios";
} else if (ordinal<=330) {
    season="MorneVent";
}

//Temperate Climate
if (Climate == Climate.TEMPERATE){
    //Temperature
    if (rollWindO>=1 && rollWindO<=10){
        switch (season) {
            case 'Hilveris': 
                tempDesc="C'est une journée d'hiver glaciale. ";
                temp=randomInteger(5)-5;
                icon = weathersIcons.GLACIAL;
                break;
            case 'Floreas':
                tempDesc="C'est une froide journée de printemps. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.COLDY;
                break;
            case 'Solarios':
                tempDesc="C'est une fraîche journée d'été. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.COLDY;
                break;
            case 'MorneVent':
                tempDesc="C'est une froide journée d'automne. ";
                temp=randomInteger(5);
                icon = weathersIcons.COLDY;
                break;
        }
        windOrigin = 'Nord';
    } 
    else if (rollWindO>=11 && rollWindO<=30) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une froide journée d'hiver. ";
                temp=randomInteger(5);
                icon = weathersIcons.COLDY;
                break;
            case 'Floreas':
                tempDesc="C'est une douce journée de printemps. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.GOOD;
                break;
            case 'Solarios':
                tempDesc="C'est une agréable journée d'été. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.GOOD;
                break;
            case 'MorneVent':
                tempDesc="C'est une douce journée d'automne. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.GOOD;
                break;
        }
        windOrigin = 'Ouest';
    }
    else if (rollWindO>=31 && rollWindO<=95) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une journée d'hiver agréable. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.GOOD;
                break;
            case 'Floreas':
                tempDesc="C'est une chaude journée de printemps. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.HOT;
                break;
            case 'Solarios':
                tempDesc="C'est une très chaude journée d'été. ";
                temp=randomInteger(10)+20;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une chaude journée d'automne. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.HOT;
                break;
        }
        windOrigin = 'Est';
    }
    else {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une chaude journée d'hiver. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.HOT;
                break;
            case 'Floreas':
                tempDesc="C'est une très chaude journée de printemps. ";
                temp=randomInteger(10)+20;
                icon = weathersIcons.VERYHOT;
                break;
            case 'Solarios':
                tempDesc="C'est une journée d'été caniculaire. ";
                temp=randomInteger(10)+30;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une très chaude journée d'automne. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.VERYHOT;
                break;
        }
        windOrigin = 'Sud';
    }

    //Precipitations
    switch (season) {
        case 'Hilveris':
            if (rollPrecip>=1 && rollPrecip<=35) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=36 && rollPrecip<=95) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Floreas':
            if (rollPrecip>=1 && rollPrecip<=40) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=41 && rollPrecip<=93) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Solarios':
            if (rollPrecip>=1 && rollPrecip<=42) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=43 && rollPrecip<=88) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'MorneVent':
            if (rollPrecip>=1 && rollPrecip<=43) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=44 && rollPrecip<=96) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
    }

    //Humidity
    humidity = randomInteger(20)+40;
}

//Desert Climate
if (Climate == Climate.DESERT){
    //Temperature
    if (rollWindO>=1 && rollWindO<=5){
        switch (season) {
            case 'Hilveris': 
                tempDesc="C'est une journée d'hiver glaciale. ";
                temp=randomInteger(5)-5;
                icon = weathersIcons.GLACIAL;
                break;
            case 'Floreas':
                tempDesc="C'est une froide journée de printemps. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.COLDY;
                break;
            case 'Solarios':
                tempDesc="C'est une fraîche journée d'été. ";
                temp=randomInteger(5)+20;
                icon = weathersIcons.COLDY;
                break;
            case 'MorneVent':
                tempDesc="C'est une froide journée d'automne. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.COLDY;
                break;
        }
        windOrigin = 'Nord';
    } 
    else if (rollWindO>=6 && rollWindO<=15) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une froide journée d'hiver. ";
                temp=randomInteger(5);
                icon = weathersIcons.COLDY;
                break;
            case 'Floreas':
                tempDesc="C'est une douce journée de printemps. ";
                temp=randomInteger(5)+20;
                icon = weathersIcons.GOOD;
                break;
            case 'Solarios':
                tempDesc="C'est une agréable journée d'été. ";
                temp=randomInteger(10)+25;
                icon = weathersIcons.GOOD;
                break;
            case 'MorneVent':
                tempDesc="C'est une douce journée d'automne. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.GOOD;
                break;
        }
        windOrigin = 'Ouest';
    }
    else if (rollWindO>=16 && rollWindO<=35) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une journée d'hiver agréable. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.GOOD;
                break;
            case 'Floreas':
                tempDesc="C'est une chaude journée de printemps. ";
                temp=randomInteger(10)+25;
                icon = weathersIcons.HOT;
                break;
            case 'Solarios':
                tempDesc="C'est une très chaude journée d'été. ";
                temp=randomInteger(10)+35;
                icon = weathersIcons.HOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une chaude journée d'automne. ";
                temp=randomInteger(5)+20;
                icon = weathersIcons.HOT;
                break;
        }
        windOrigin = 'Est';
    }
    else {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une chaude journée d'hiver. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.HOT;
                break;
            case 'Floreas':
                tempDesc="C'est une très chaude journée de printemps. ";
                temp=randomInteger(10)+35;
                icon = weathersIcons.VERYHOT;
                break;
            case 'Solarios':
                tempDesc="C'est une journée d'été caniculaire. ";
                temp=randomInteger(10)+45;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une très chaude journée d'automne. ";
                temp=randomInteger(10)+25;
                icon = weathersIcons.VERYHOT;
                break;
        }
        windOrigin = 'Sud';
    }

    //Precipitations
    switch (season) {
        case 'Hilveris':
            if (rollPrecip>=1 && rollPrecip<=81) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=82 && rollPrecip<=99) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Floreas':
            if (rollPrecip>=1 && rollPrecip<=66) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=67 && rollPrecip<=80) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Solarios':
            if (rollPrecip>=1 && rollPrecip<=75) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            }
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'MorneVent':
            if (rollPrecip>=1 && rollPrecip<=73) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=74 && rollPrecip<=85) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
    }

    //Humidity
    humidity = randomInteger(10)+5;
}

//Jungle Climate
if (Climate == Climate.JUNGLE){
    //Temperature
    if (rollWindO>=1 && rollWindO<=5){
        switch (season) {
            case 'Hilveris': 
                tempDesc="C'est une journée d'hiver glaciale. ";
                temp=randomInteger(5);
                icon = weathersIcons.GLACIAL;
                break;
            case 'Floreas':
                tempDesc="C'est une froide journée de printemps. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.COLDY;
                break;
            case 'Solarios':
                tempDesc="C'est une fraîche journée d'été. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.COLDY;
                break;
            case 'MorneVent':
                tempDesc="C'est une froide journée d'automne. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.COLDY;
                break;
        }
        windOrigin = 'Nord';
    } 
    else if (rollWindO>=6 && rollWindO<=15) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une froide journée d'hiver. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.COLDY;
                break;
            case 'Floreas':
                tempDesc="C'est une douce journée de printemps. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.GOOD;
                break;
            case 'Solarios':
                tempDesc="C'est une agréable journée d'été. ";
                temp=randomInteger(10)+20;
                icon = weathersIcons.GOOD;
                break;
            case 'MorneVent':
                tempDesc="C'est une douce journée d'automne. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.GOOD;
                break;
        }
        windOrigin = 'Ouest';
    }
    else if (rollWindO>=16 && rollWindO<=80) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une journée d'hiver agréable. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.GOOD;
                break;
            case 'Floreas':
                tempDesc="C'est une chaude journée de printemps. ";
                temp=randomInteger(10)+20;
                icon = weathersIcons.HOT;
                break;
            case 'Solarios':
                tempDesc="C'est une très chaude journée d'été. ";
                temp=randomInteger(10)+30;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une chaude journée d'automne. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.HOT;
                break;
        }
        windOrigin = 'Est';
    }
    else {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une chaude journée d'hiver. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.HOT;
                break;
            case 'Floreas':
                tempDesc="C'est une très chaude journée de printemps. ";
                temp=randomInteger(10)+30;
                icon = weathersIcons.VERYHOT;
                break;
            case 'Solarios':
                tempDesc="C'est une journée d'été caniculaire. ";
                temp=randomInteger(10)+40;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une très chaude journée d'automne. ";
                temp=randomInteger(10)+20;
                icon = weathersIcons.VERYHOT;
                break;
        }
        windOrigin = 'Sud';
    }

    //Precipitations
    switch (season) {
        case 'Hilveris':
            if (rollPrecip>=1 && rollPrecip<=15) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=16 && rollPrecip<=34) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Floreas':
            if (rollPrecip>=1 && rollPrecip<=21) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=22 && rollPrecip<=73) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Solarios':
            if (rollPrecip>=1 && rollPrecip<=74) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=76 && rollPrecip<=90) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'MorneVent':
            if (rollPrecip>=1 && rollPrecip<=12) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=13 && rollPrecip<=56) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
    }

    //Humidity
    humidity = randomInteger(20)+70;
}

//Cold Climate
if (Climate == Climate.COLD){
    //Temperature
    if (rollWindO>=1 && rollWindO<=65){
        switch (season) {
            case 'Hilveris': 
                tempDesc="C'est une journée d'hiver glaciale. ";
                temp=randomInteger(10)-20;
                icon = weathersIcons.GLACIAL;
                break;
            case 'Floreas':
                tempDesc="C'est une froide journée de printemps. ";
                temp=randomInteger(5)-5;
                icon = weathersIcons.COLDY;
                break;
            case 'Solarios':
                tempDesc="C'est une fraîche journée d'été. ";
                temp=randomInteger(5);
                icon = weathersIcons.COLDY;
                break;
            case 'MorneVent':
                tempDesc="C'est une froide journée d'automne. ";
                temp=randomInteger(5)-10;
                icon = weathersIcons.COLDY;
                break;
        }
        windOrigin = 'Nord';
    } 
    else if (rollWindO>=66 && rollWindO<=85) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une froide journée d'hiver. ";
                temp=randomInteger(5)-10;
                icon = weathersIcons.COLDY;
                break;
            case 'Floreas':
                tempDesc="C'est une douce journée de printemps. ";
                temp=randomInteger(5);
                icon = weathersIcons.GOOD;
                break;
            case 'Solarios':
                tempDesc="C'est une agréable journée d'été. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.GOOD;
                break;
            case 'MorneVent':
                tempDesc="C'est une douce journée d'automne. ";
                temp=randomInteger(5)-5;
                icon = weathersIcons.GOOD;
                break;
        }
        windOrigin = 'Ouest';
    }
    else if (rollWindO>=86 && rollWindO<=95) {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une journée d'hiver agréable. ";
                temp=randomInteger(5)-5;
                icon = weathersIcons.GOOD;
                break;
            case 'Floreas':
                tempDesc="C'est une chaude journée de printemps. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.HOT;
                break;
            case 'Solarios':
                tempDesc="C'est une très chaude journée d'été. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une chaude journée d'automne. ";
                temp=randomInteger(5);
                icon = weathersIcons.HOT;
                break;
        }
        windOrigin = 'Est';
    }
    else {
        switch (season) {
            case 'Hilveris':
                tempDesc="C'est une chaude journée d'hiver. ";
                temp=randomInteger(5);
                icon = weathersIcons.HOT;
                break;
            case 'Floreas':
                tempDesc="C'est une très chaude journée de printemps. ";
                temp=randomInteger(5)+10;
                icon = weathersIcons.VERYHOT;
                break;
            case 'Solarios':
                tempDesc="C'est une journée d'été caniculaire. ";
                temp=randomInteger(5)+15;
                icon = weathersIcons.VERYHOT;
                break;
            case 'MorneVent':
                tempDesc="C'est une très chaude journée d'automne. ";
                temp=randomInteger(5)+5;
                icon = weathersIcons.VERYHOT;
                break;
        }
        windOrigin = 'Sud';
    }

    //Precipitations
    switch (season) {
        case 'Hilveris':
            if (rollPrecip>=1 && rollPrecip<=87) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=88 && rollPrecip<=99) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Floreas':
            if (rollPrecip>=1 && rollPrecip<=75) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=76 && rollPrecip<=97) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'Solarios':
            if (rollPrecip>=1 && rollPrecip<=44) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=45 && rollPrecip<=93) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
        case 'MorneVent':
            if (rollPrecip>=1 && rollPrecip<=35) {
                roll=randomInteger(2);
                if (roll==1) {
                    Precip = Precip.OVERCAST;
                    precipDesc="le ciel est couvert.";
                    break;
                } 
                else {
                    Precip = Precip.CLEAR;
                    precipDesc="le ciel est dégagé.";
                    break;
                }
            } 
            else if (rollPrecip>=36 && rollPrecip<=98) {
                if (temp <= 0) {
                    Precip = Precip.SNOW;
                    break;
                } 
                else {
                    Precip = Precip.RAIN;
                    break;
                }
            } 
            else {
                Precip = Precip.THUNDER;
                break;
            }
    }

    //Humidity
    humidity = randomInteger(20)+35;
}

//Wind Speed
if (rollWindS>=1 && rollWindS<=55) {
    windSpeed="Il y a une légère brise et ";
    iconWind = weathersIcons.CALM;
} else if (rollWindS>=56 && rollWindS<=80) {
    windSpeed="Il y a une bonne brise et ";
    iconWind = weathersIcons.WIND;
} else if (rollWindS>=81 && rollWindS<=92) {
    windSpeed="Il y a un vent fort et ";
    iconWind = weathersIcons.STRONGWIND;
} else if (rollWindS>=93 && rollWindS<=97) {
    windSpeed="Il y a une tempête et ";
    iconWind = weathersIcons.STORM;
} else if (rollWindS>=98 && rollWindS<=99) {
    windSpeed="Il y a une grosse tempête et ";
    iconWind = weathersIcons.STROM;
} else {
    windSpeed="Il y a un ouragan ";
    iconWind = weathersIcons.HURRICANE;
}

//Precip Strength
if (rollWindS>=93 && Climate == Climate.DESERT) {
    precipDesc = 'il y a une tempête de sable';
    iconPrecip = weathersIcons.SANDSTORM;
}

if (Precip == Precip.RAIN) {
    if (rollPrecipStr >= 1 && rollPrecipStr <=55){
        precipDesc = 'il pleut légèrement';
        iconPrecip = weathersIcons.RAIN;
    }
    else if (rollPrecipStr >= 56 && rollPrecipStr <=80){
        precipDesc = 'il pleut modérément';
        iconPrecip = weathersIcons.RAIN;
    }
    else if (rollPrecipStr >= 81 && rollPrecipStr <=96){
        precipDesc = 'il tombe une forte pluie';
        iconPrecip = weathersIcons.TORRENTIALRAIN;
    }
    else {
        precipDesc = 'il tombe une pluie torrentielle';
        iconPrecip = weathersIcons.TORRENTIALRAIN;
    }
}
else if (Precip == Precip.SNOW) {
    if (rollPrecipStr >= 1 && rollPrecipStr <=65){
        precipDesc = 'il neige à petits flocons';
        iconPrecip = weathersIcons.SNOW;
    }
    else if (rollPrecipStr >= 66 && rollPrecipStr <=90){
        precipDesc = 'il neige à gros flocons';
        iconPrecip = weathersIcons.BIGSNOW;
    }
    else {
        precipDesc = 'il y a une tempête de neige';
        iconPrecip = weathersIcons.SNOWSTORM;
    }
}
else if (Precip == Precip.THUNDER) {
    if (rollPrecipStr >= 1 && rollPrecipStr <=55){
        precipDesc = 'il y a un orage léger';
        iconPrecip = weathersIcons.THUNDER;
    }
    else if (rollPrecipStr >= 56 && rollPrecipStr <=80){
        precipDesc = 'il y a un orage modéré';
        iconPrecip = weathersIcons.THUNDER;
    }
    else if (rollPrecipStr >= 81 && rollPrecipStr <=96){
        precipDesc = 'il y a un gros orage';
        iconPrecip = weathersIcons.THUNDER;
    }
    else {
        precipDesc = 'il y a un orage violent';
        iconPrecip = weathersIcons.THUNDER;
    }
}