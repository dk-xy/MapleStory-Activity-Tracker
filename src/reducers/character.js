const characterReducer = (state = { Characters: {}, maxId: 0 }, action) => {
    switch (action.type) {
        case "CHARACTER_ADD":
            // Increment maxId and use it as the new character's ID
            const newMaxId = state.maxId + 1;
            const newCharacters = {
                ...state.Characters,
                [newMaxId]: {
                    characterInfo: action.payload,
                    progression: {
                        symbols: {
                            arcaneRiver: {
                                isActive: false,
                                regions: {
                                    oblivion: {
                                        key: "oblivion",
                                        name: "Oblivion",
                                        class: "oblivion",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    chuChu: {
                                        key: "chuChu",
                                        name: "Chu Chu",
                                        class: "chuchu",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    lachelein: {
                                        key: "lachelein",
                                        name: "Lachelein",
                                        class: "lachelein",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    arcana: {
                                        key: "arcana",
                                        name: "Arcana",
                                        class: "arcana",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    morass: {
                                        key: "morass",
                                        name: "Morass",
                                        class: "morass",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    esfera: {
                                        key: "esfera",
                                        name: "Esfera",
                                        class: "esfera",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                },
                            },
                            grandis: {
                                isActive: false,
                                regions: {
                                    cernium: {
                                        key: "cernium",
                                        name: "Cernium",
                                        class: "cernium",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                        },
                                    },
                                    arcus: {
                                        key: "arcus",
                                        name: "Arcus",
                                        class: "arcus",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                        },
                                    },
                                    odium: {
                                        key: "odium",
                                        name: "Odium",
                                        class: "odium",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                        },
                                    },
                                    shangriLa: {
                                        key: "shangriLa",
                                        name: "Shangri La",
                                        class: "shangrila",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                        },
                                    },
                                    arteria: {
                                        key: "arteria",
                                        name: "Arteria",
                                        class: "arteria",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                        },
                                    },
                                    carcion: {
                                        key: "carcion",
                                        name: "Carcion",
                                        class: "carcion",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                        },
                                    },
                                
                                },
                            },
                        },
                    },
                },
            };
            return { Characters: newCharacters, maxId: newMaxId };
        case 'LOAD_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
            };
        case 'CHARACTER_RESET':
            return { characters: {}, maxId: 0 };
        default:
            return state;
            case 'TOGGLE_REGION': {
                const { id, regionName } = action.payload;
                const character = state.Characters[id];
                let region;
                let place;
                // Check if region exists in arcaneRiver
                if (character.progression.symbols.arcaneRiver.regions[regionName]) {
                    place = character.progression.symbols.arcaneRiver
                    region = character.progression.symbols.arcaneRiver.regions[regionName];
                }
                // If not found, check if region exists in grandis
                else if (character.progression.symbols.grandis.regions[regionName]) {
                    place = character.progression.symbols.grandis
                    region = character.progression.symbols.grandis.regions[regionName];
                }
            
                // If region is found, toggle its isActive property
                if (region) {
                    region.isActive = !region.isActive;
                    place.isActive = Object.values(place.regions).some(region => region.isActive);
                    
                } else {
                    console.error(`Region ${regionName} not found for character ${id}`);
                }
            
                return { ...state };
            }
        // case 'TOGGLE_REGION_ARCANE': 
        //     const { id, regionName } = action.payload;
        //     const character = state.Characters[id];
        //     const region = character.progression.symbols.arcaneRiver.regions[regionName];
        //     region.isActive = !region.isActive;
        //     character.progression.symbols.arcaneRiver.isActive = region.isActive || character.progression.symbols.arcaneRiver.regions.oblivion.isActive || character.progression.symbols.arcaneRiver.regions.chuChu.isActive;
        //     return { ...state };

        //     case 'TOGGLE_REGION_GRANDIS': 
        //     const { idG, regionNameG } = action.payload;
        //     const characterG = state.Characters[idG];
        //     const regionG = characterG.progression.symbols.arcaneRiver.regions[regionNameG];
        //     region.isActive = !regionG.isActive;
        //     character.progression.symbols.arcaneRiver.isActive = region.isActive || character.progression.symbols.arcaneRiver.regions.oblivion.isActive || character.progression.symbols.arcaneRiver.regions.chuChu.isActive;
        //     return { ...state };

        case 'TOGGLE_COMPLETION': 
        const { characterId, regionNameC, completionType } = action.payload;
        const characterC = state.Characters[characterId];
        let regionC;
        let placeC;
    
        // Check if region exists in arcaneRiver
        if (characterC.progression.symbols.arcaneRiver.regions[regionNameC]) {
            placeC = characterC.progression.symbols.arcaneRiver;
            regionC = characterC.progression.symbols.arcaneRiver.regions[regionNameC];
        }
        // If not found, check if region exists in grandis
        else if (characterC.progression.symbols.grandis.regions[regionNameC]) {
            placeC = characterC.progression.symbols.grandis;
            regionC = characterC.progression.symbols.grandis.regions[regionNameC];
        }
    
        // If region is found, toggle its completion property
        if (regionC) {
            regionC.completion[completionType] = !regionC.completion[completionType];
    
            // Check if at least one region is active
            placeC.isActive = Object.values(placeC.regions).some(region => region.isActive);
        } else {
            console.error(`Region ${regionNameC} not found for character ${characterId}`);
        }
    
        return { ...state };
            
        // HANDLE RESETS HERE @@@@!!
        case 'RESET_COMPLETION_STATUSES':
            // Get the last reset time from localStorage
            let lastReset = localStorage.getItem('lastReset');
            if (lastReset) {
                lastReset = new Date(lastReset);
            } else {
                // If there's no last reset time, set it to now
                lastReset = new Date();
                localStorage.setItem('lastReset', lastReset.toISOString());
            }

            // Get the current date and time
            const now = new Date();

            // Calculate the difference in days
            const diffInDays = Math.floor((now - lastReset) / (1000 * 60 * 60 * 24));

            // If it's been at least one day since the last reset, reset daily.isCompleted
            if (diffInDays >= 1) {
                // Reset daily.isCompleted for all regions
                for (const character of Object.values(state.Legion.Characters)) {
                    for (const region of Object.values(character.progression.symbols.arcaneRiver.regions)) {
                        region.completion.daily = false;
                    }
                    for (const region of Object.values(character.progression.symbols.grandis.regions)) {
                        region.completion.daily = false;
                    }
                }

                // Update the last reset time
                localStorage.setItem('lastReset', now.toISOString());
            }

            // Calculate the difference in weeks
            const diffInWeeks = Math.floor(diffInDays / 7);

            // If it's been at least one week since the last reset, reset weekly.isCompleted
            if (diffInWeeks >= 1) {
                // Reset weekly.isCompleted for all regions
                for (const character of Object.values(state.Legion.Characters)) {
                    for (const region of Object.values(character.progression.symbols.arcaneRiver.regions)) {
                        region.completion.weekly = false;
                    }
                }

                // Update the last reset time
                localStorage.setItem('lastReset', now.toISOString());
            }

            return { ...state };

    }
};

export default characterReducer;