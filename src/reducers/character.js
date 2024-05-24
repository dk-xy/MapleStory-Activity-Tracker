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
                                        name: "Oblivion",
                                        class: "oblivion",
                                        isActive: false,
                                        completion: {
                                            daily: false,
                                            weekly: false,
                                        },
                                    },
                                    chuChu: {
                                        name: "Chu Chu",
                                        class: "chuchu",
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
    }
};

export default characterReducer;