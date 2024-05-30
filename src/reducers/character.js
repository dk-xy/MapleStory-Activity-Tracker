import { RESET_DAILY_COMPLETION_STATUSES, RESET_WEEKLY_COMPLETION_STATUSES } from '../redux/actions/characters';



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
                                            dailyDate: null,
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    chuChu: {
                                        key: "chuChu",
                                        name: "Chu Chu",
                                        class: "chuchu",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                            weekly: false,
                                            weeklyDate: null,
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
                                            dailyDate: null,
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    morass: {
                                        key: "morass",
                                        name: "Morass",
                                        class: "morass",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    esfera: {
                                        key: "esfera",
                                        name: "Esfera",
                                        class: "esfera",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                            weekly: false,
                                            weeklyDate: null,
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
                                            dailyDate: null,
                                        },
                                    },
                                    arcus: {
                                        key: "arcus",
                                        name: "Arcus",
                                        class: "arcus",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    odium: {
                                        key: "odium",
                                        name: "Odium",
                                        class: "odium",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    shangriLa: {
                                        key: "shangriLa",
                                        name: "Shangri La",
                                        class: "shangrila",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    arteria: {
                                        key: "arteria",
                                        name: "Arteria",
                                        class: "arteria",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    carcion: {
                                        key: "carcion",
                                        name: "Carcion",
                                        class: "carcion",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },

                                },
                            },
                        },
                        dailies: {
                            isActive: false,
                            quests: {
                                monsterPark: {
                                    key: "monsterPark",
                                    questName: "Monster Park",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                monserParkExtreme: {
                                    key: "monsterParkExtreme",
                                    questName: "Monster Park Extreme",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                ursus: {
                                    key: "ursus",
                                    questName: "Ursus",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                gollux: {
                                    key: "gollux",
                                    questName: "Gollux",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },

                                },
                                mapleTour: {
                                    key: "mapleTour",
                                    questName: "Maple Tour",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                Commerci: {
                                    key: "commerci",
                                    questName: "Commerci",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                yuGarden: {
                                    key: "yuGarden",
                                    questName: "Yu Garden",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                phantomForest: {
                                    key: "phantomForest",
                                    questName: "Phantom Forest",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                            }
                        }
                    },
                },
            };
            return { Characters: newCharacters, maxId: newMaxId };
        // CHARACTER-----------------------------------------------------------------------
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

        // PROGRESSION---------------------------------------------------------------------

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
                // If the completion status is being set to true, also set the date
                if (regionC.completion[completionType]) {
                    if (completionType === 'daily') {
                        regionC.completion.dailyDate = new Date().toISOString();
                    } else if (completionType === 'weekly') {
                        regionC.completion.weeklyDate = new Date().toISOString();
                    }
                }

                // Check if at least one region is active
                placeC.isActive = Object.values(placeC.regions).some(region => region.isActive);
            } else {
                console.error(`Region ${regionNameC} not found for character ${characterId}`);
            }
            // If the completion status is being set to true, also set the date
            if (action.payload.completionStatus) {
                if (action.payload.completionType === 'daily') {
                    state.Legion.Characters[action.payload.characterId].progression.symbols[action.payload.symbolType].regions[action.payload.regionKey].completion.dailyDate = new Date().toISOString();
                } else if (action.payload.completionType === 'weekly') {
                    state.Legion.Characters[action.payload.characterId].progression.symbols[action.payload.symbolType].regions[action.payload.regionKey].completion.weeklyDate = new Date().toISOString();
                }
            }

            return { ...state };

        case 'TOGGLE_DAILY': {
            const characterId = action.payload.id;
            const questName = action.payload.questName;
            const questKey = action.payload.key;
            const character = state.Characters[characterId];
            console.log(character)
            const quest = character.progression.dailies.quests[questName];
            console.log(quest)
            // const quest = character.progression.dailies[questName];

            // If quest is found, toggle its isActive property
            if (quest) {
                quest.isActive = !quest.isActive;
            } else {
                console.error(`Quest ${questName} not found for character ${characterId}`);
            }

            return { ...state };
        }

        // HANDLE RESETS HERE @@@@!!


        case RESET_DAILY_COMPLETION_STATUSES:
            // Get the current date and convert to UTC
            const now = new Date();
            const nowUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));

            // Reset daily.isCompleted for all regions where the completion date is not today
            for (const character of Object.values(state.Characters)) {
                for (const region of Object.values(character.progression.symbols.arcaneRiver.regions)) {
                    const completionDate = new Date(region.completion.dailyDate);
                    if (completionDate.getUTCDate() !== nowUTC.getDate() || completionDate.getUTCMonth() !== nowUTC.getMonth() || completionDate.getUTCFullYear() !== nowUTC.getFullYear()) {
                        region.completion.daily = false;
                    }
                }
                for (const region of Object.values(character.progression.symbols.grandis.regions)) {
                    const completionDate = new Date(region.completion.dailyDate);
                    if (completionDate.getUTCDate() !== nowUTC.getDate() || completionDate.getUTCMonth() !== nowUTC.getMonth() || completionDate.getUTCFullYear() !== nowUTC.getFullYear()) {
                        region.completion.daily = false;
                    }
                }
            }

            return { ...state };
            // case RESET_DAILY_COMPLETION_STATUSES:

            //     // Get the current date and convert to UTC
            //     const now = new Date();
            //     const nowUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));

            //     // Reset daily.isCompleted for all regions where the completion date is not today
            //     for (const character of Object.values(state.Characters)) {
            //         for (const region of Object.values(character.progression.symbols.arcaneRiver.regions)) {
            //             const completionDate = new Date(region.completion.dailyDate);
            //             completionDate.setUTCMinutes(completionDate.getUTCMinutes() + 1); // Add 1 minute to completion date
            //             if (nowUTC >= completionDate) {
            //                 region.completion.daily = false;
            //             }
            //         }
            //         for (const region of Object.values(character.progression.symbols.grandis.regions)) {
            //             const completionDate = new Date(region.completion.dailyDate);
            //             completionDate.setUTCMinutes(completionDate.getUTCMinutes() + 1); // Add 1 minute to completion date
            //             if (nowUTC >= completionDate) {
            //                 region.completion.daily = false;
            //             }
            //         }
            //     }


            return { ...state };


        case RESET_WEEKLY_COMPLETION_STATUSES:
            // Get the current date and the date of last Sunday
            const nowWeekly = new Date();
            const lastSunday = new Date(Date.UTC(nowWeekly.getUTCFullYear(), nowWeekly.getUTCMonth(), nowWeekly.getUTCDate() - nowWeekly.getUTCDay()));

            // Reset weekly.isCompleted for all regions where the completion date is not in the last week
            for (const character of Object.values(state.Characters)) {
                for (const region of Object.values(character.progression.symbols.arcaneRiver.regions)) {
                    const completionDate = new Date(region.completion.weeklyDate);
                    if (completionDate < lastSunday) {
                        region.completion.weekly = false;
                    }
                }
                for (const region of Object.values(character.progression.symbols.grandis.regions)) {
                    const completionDate = new Date(region.completion.weeklyDate);
                    if (completionDate < lastSunday) {
                        region.completion.weekly = false;
                    }
                }
            }

            return { ...state };

    }
};

export default characterReducer;