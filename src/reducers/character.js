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
                                        key: "Arcana",
                                        name: "Arcana",
                                        class: "arcana",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    morass: {
                                        key: "Morass",
                                        name: "Morass",
                                        class: "morass",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    esfera: {
                                        key: "Esfera",
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
        case 'TOGGLE_REGION': 
            const { id, regionName } = action.payload;
            const character = state.Characters[id];
            const region = character.progression.symbols.arcaneRiver.regions[regionName];
            region.isActive = !region.isActive;
            character.progression.symbols.arcaneRiver.isActive = region.isActive || character.progression.symbols.arcaneRiver.regions.oblivion.isActive || character.progression.symbols.arcaneRiver.regions.chuChu.isActive;
            return { ...state };

        case 'TOGGLE_COMPLETION': 
            const { characterId, regionNameC, completionType } = action.payload;
            const characterC = state.Characters[characterId];
            console.log(characterC);
            const regionC = characterC.progression.symbols.arcaneRiver.regions[regionNameC];
            regionC.completion[completionType] = !regionC.completion[completionType];
            return { ...state };
        

    }
};

export default characterReducer;