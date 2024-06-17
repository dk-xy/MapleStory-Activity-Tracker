import { RESET_DAILY_COMPLETION_STATUSES, RESET_WEEKLY_COMPLETION_STATUSES, RESET_DAILY_QUESTS_COMPLETION_STATUS } from '../redux/actions/characters';



const characterReducer = (state = { Characters: {}, maxId: 0 }, action) => {

    Date.prototype.getUTCWeekNumber = function() {
        const date = new Date(Date.UTC(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate()));
        const dayNum = date.getUTCDay() || 7;
        date.setUTCDate(date.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
        return Math.ceil((((date - yearStart) / 86400000) + 1)/7);
    };


    switch (action.type) {
        case "CHARACTER_ADD":
            // Increment maxId and use it as the new character's ID
            // eslint-disable-next-line no-case-declarations
            const newMaxId = state.maxId + 1;
            // eslint-disable-next-line no-case-declarations
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
                                monsterParkExtreme: {
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
                                commerci: {
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
                        },
                        weeklies: {
                            isActive: false,
                            quests: {
                                darkWorldTree: {
                                    key: "darkWorldTree",
                                    questName: "Dark World Tree",
                                    isActive: false,
                                    completion: {
                                        weekly: false,
                                        weeklyDate: null,
                                    },
                                },
                                haven: {
                                    key: "haven",
                                    questName: "Haven",
                                    isActive: false,
                                    completion: {
                                        weekly: false,
                                        weeklyDate: null,
                                    },
                                },
                                muLungDojo: {
                                    key: "muLungDojo",
                                    questName: "Mu Lung Dojo",
                                    isActive: false,
                                    completion: {
                                        weekly: false,
                                        weeklyDate: null,
                                    },
                                },
                            }
                        },
                        guild: {
                            isActive: false,
                            quests: {
                                culvert: {
                                    key: "culvert",
                                    questName: "Culvert",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                },
                                flagRace: {
                                    key: "flagRace",
                                    questName: "Flag Race",
                                    isActive: false,
                                    completion: {
                                        daily: false,
                                        dailyDate: null,
                                    },
                                }
                            }
                        }
                    },
                    bosses: {
                        mapleWorld: {
                            zakum: {
                                key: "zakum",
                                name: "Zakum",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            papulatus: {
                                key: "papulatus",
                                name: "Papulatus",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]

                            },
                            horntail: {
                                key: "horntail",
                                name: "Horntail",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            hilla: {
                                key: "hilla",
                                name: "Hilla",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            cygnus: {
                                key: "cygnus",
                                name: "Cygnus",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            arkarium: {
                                key: "arkarium",
                                name: "Arkarium",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            ranmaru: {
                                key: "ranmaru",
                                name: "Ranmaru",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            magnus: {
                                key: "magnus",
                                name: "Magnus",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            vonLeon: {
                                key: "vonLeon",
                                name: "Von Leon",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            pierre: {
                                key: "pierre",
                                name: "Pierre",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            queen: {
                                key: "queen",
                                name: "Queen",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            vonBon: {
                                key: "vonBon",
                                name: "Von Bon",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            vellum: {
                                key: "vellum",
                                name: "Vellum",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            omnicln: {
                                key: "omnicln",
                                name: "Omni-CLN",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                ]
                            },
                            pinkBean: {
                                key: "pinkBean",
                                name: "Pink Bean",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            lotus: {
                                key: "lotus",
                                name: "Lotus",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            damien: {
                                key: "damien",
                                name: "Damien",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "daily",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            guardianSlime: {
                                key: "guardianSlime",
                                name: "Guardian Slime",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                        },
                        arcaneRiver: {
                            lucid: {
                                key: "lucid",
                                name: "Lucid",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            will: {
                                key: "will",
                                name: "Will",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            gloom: {
                                key: "gloom",
                                name: "Gloom",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            darknell: {
                                key: "darknell",
                                name: "Darknell",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            verusHilla: {
                                key: "verusHilla",
                                name: "Verus Hilla",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            blackMage: {
                                key: "blackMage",
                                name: "Black Mage",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "Monthly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Extreme",
                                        isActive: false,
                                        type: "Monthly",
                                        completion: {
                                            monthly: false,
                                            monthlyDate: null,
                                        },
                                    },
                                ]
                            }
                        },
                        grandis: {
                            seren: {
                                key: "seren",
                                name: "Seren",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Extreme",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            kalos: {
                                key: "kalos",
                                name: "Kalos",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            daily: false,
                                            dailyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Chaos",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Extreme",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]
                            },
                            kaling: {
                                key: "kaling",
                                name: "Kaling",
                                isActive: false,
                                difficulty: [
                                    {
                                        name: "Easy",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Normal",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Hard",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                    {
                                        name: "Extreme",
                                        isActive: false,
                                        type: "weekly",
                                        completion: {
                                            weekly: false,
                                            weeklyDate: null,
                                        },
                                    },
                                ]


                            }
                        }

                    },
                }
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

        // TOGGLE PROGRESSION ITEMS ON TABS
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
        
                // Check if any quest is active
                const anyQuestActive = Object.values(character.progression.dailies.quests).some(quest => quest.isActive);
        
                // If any quest is active, set character.progression.dailies.isActive to true
                if (anyQuestActive) {
                    character.progression.dailies.isActive = true;
                } else {
                    character.progression.dailies.isActive = false;
                }
            } else {
                console.error(`Quest ${questName} not found for character ${characterId}`);
            }

            return { ...state };
        }


        case 'TOGGLE_WEEKLY_QUEST': {
            const { id, questNameW } = action.payload;
            const character = state.Characters[id];
        
            // Check if quest exists in weeklies.quests
            let questW = character.progression.weeklies.quests[questNameW];
        
            // If quest is found, toggle its isActive property
            if (questW) {
                questW.isActive = !questW.isActive;
        
                // Check if any quest is active
                const anyQuestActive = Object.values(character.progression.weeklies.quests).some(quest => quest.isActive);
        
                // If any quest is active, set character.progression.weeklies.isActive to true
                if (anyQuestActive) {
                    character.progression.weeklies.isActive = true;
                } else {
                    character.progression.weeklies.isActive = false;
                }
            } else {
                console.error(`Quest ${questNameW} not found for character ${id}`);
            }
        
            return { ...state };
        }

        // PROGRESSION COMPLETION---------------------------------------------------------------------

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
                        console.log(regionC.completion.dailyDate)
                    } else if (completionType === 'weekly') {
                        regionC.completion.weeklyDate = new Date().toISOString();
                        console.log(regionC.completion.weeklyDate)
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

        case 'TOGGLE_DAILY_COMPLETION':
            const { dailyId, questName, key } = action.payload;
            const characterD = state.Characters[dailyId];

            // Check if quest exists in dailies.quests
            let quest = characterD.progression.dailies.quests[key];

            // If quest is found, toggle its completion property
            if (quest) {
                quest.completion.daily = !quest.completion.daily;
                // If the completion status is being set to true, also set the date
                if (quest.completion.daily) {
                    quest.completion.dailyDate = new Date().toISOString();
                }
            } else {
                console.error(`Quest ${questName} not found for character ${dailyId}`);
            }

            return { ...state };

        case 'TOGGLE_WEEKLY_COMPLETION': {
            const { weeklyId, questName, key } = action.payload;

            // Find the character and the weekly quest
            const character = state.Characters[weeklyId];
            console.log(character)
            console.log(character.progression.weeklies.quests)
            console.log(key)
            const weekly = character.progression.weeklies.quests[key];

            // Toggle the completion status
            weekly.completion.weekly = !weekly.completion.weekly;

            // If the completion status is being set to true, also set the date
            if (weekly.completion) {
                weekly.weeklyDate = new Date().toISOString();
            }

            return { ...state };
        }

        // BOSSES--------------------------------------------------------------------------
        // BOSSES--------------------------------------------------------------------------

        case 'TOGGLE_BOSS_DIFFICULTY_ACTIVE': {
            const { bossId, bossKey, difficultyName } = action.payload;
        
            // Find the character
            const character = state.Characters[bossId];
        
            // Check if the boss exists in each key and select it
            let boss;
            if (character.bosses.mapleWorld && character.bosses.mapleWorld[bossKey]) {
                boss = character.bosses.mapleWorld[bossKey];
            } else if (character.bosses.grandis && character.bosses.grandis[bossKey]) {
                boss = character.bosses.grandis[bossKey];
            } else if (character.bosses.arcaneRiver && character.bosses.arcaneRiver[bossKey]) {
                boss = character.bosses.arcaneRiver[bossKey];
            }
        
            if (!boss) {
                console.error(`Boss with key ${bossKey} not found`);
                return { ...state };
            }
        
            // Find the difficulty
            const difficulty = boss.difficulty.find(diff => diff.name === difficultyName);
        
            // Toggle the active status
            difficulty.isActive = !difficulty.isActive;
        
            // Check if any difficulty is active
            const anyActive = boss.difficulty.some(diff => diff.isActive);
        
            // Toggle the boss active status
            boss.isActive = anyActive;
        
            return { ...state };
        }
        // case 'TOGGLE_BOSS_DIFFICULTY_ACTIVE': {
        //     const { bossId, bossKey, difficultyName } = action.payload;

        //     // Find the character and the boss
        //     const character = state.Characters[bossId];
        //     const boss = character.bosses.mapleWorld[bossKey];

        //     // Find the difficulty
        //     const difficulty = boss.difficulty.find(diff => diff.name === difficultyName);
        //     // Toggle the active status


        //     difficulty.isActive = !difficulty.isActive;

        //     // Check if any difficulty is active
        //     const anyActive = boss.difficulty.some(diff => diff.isActive);
        //     console.log(anyActive)
        //     // Toggle the boss active status
        //     if (anyActive) {
        //         boss.isActive = true;
        //         console.log("atLeastOneActive bossdiff")
        //     } else {
        //         boss.isActive = false;
        //     }
        //     return { ...state };


        // }
        case 'TOGGLE_BOSS_DIFFICULTY_COMPLETION': {
            const { bossId, bossKey, difficultyName, completionType } = action.payload;
        
            // Find the character
            const character = state.Characters[bossId];
        
            // Find the boss
            let boss;
            for (let region in character.bosses) {
                if (character.bosses[region][bossKey]) {
                    boss = character.bosses[region][bossKey];
                    break;
                }
            }
        
            // Find the difficulty
            const difficulty = boss.difficulty.find(diff => diff.name === difficultyName);
        
            // Toggle the completion status
            difficulty.completion[completionType] = !difficulty.completion[completionType];
        
            // Get the current date and convert to UTC
            const nowBoss = new Date();
            const nowBossUTC = new Date(Date.UTC(nowBoss.getFullYear(), nowBoss.getMonth(), nowBoss.getDate()));
        
            // Set the completion date
            if (completionType === 'daily') {
                difficulty.completion.dailyDate = nowBossUTC;
            } else if (completionType === 'weekly') {
                difficulty.completion.weeklyDate = nowBossUTC;
            }
        
            return { ...state };
        }
        // BOSS RESETS  ---------------------------------------------------------------------
        case 'RESET_BOSS_COMPLETION_STATUSES':
            const nowBossDaily = new Date(Date.now());
            nowBossDaily.setMinutes(nowBossDaily.getMinutes() - nowBossDaily.getTimezoneOffset());
        
            for (const character of Object.values(state.Characters)) {
                for (const world of Object.values(character.bosses)) {
                    for (const boss of Object.values(world)) {
                        if (boss.isActive) {
                            for (const difficulty of boss.difficulty) {
                                if (difficulty.type === 'daily') {
                                    if (difficulty.completion.daily) {
                                        const completionDate = new Date(difficulty.completion.dailyDate);
                                        if (completionDate.getUTCDate() !== nowBossDaily.getDate() || completionDate.getUTCMonth() !== nowBossDaily.getMonth() || completionDate.getUTCFullYear() !== nowBossDaily.getFullYear()) {
                                            difficulty.completion.daily = false;
                                            difficulty.completion.dailyDate = null;
                                        }
                                    }
                                }
        
                                if (difficulty.type === 'weekly') {
                                    if (difficulty.completion.weekly) {
                                        const completionDate = new Date(difficulty.completion.weeklyDate);
                                        const now = new Date();
                                        if (now.getUTCDay() === 4 && (completionDate.getUTCWeekNumber() !== now.getUTCWeekNumber() || completionDate.getUTCFullYear() !== now.getUTCFullYear())) {
                                            difficulty.completion.weekly = false;
                                            difficulty.completion.weeklyDate = null;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return { ...state };


        // case 'RESET_BOSS_COMPLETION_STATUSES':
        //     // Get the current date and convert to UTC
        //     const nowBossDaily = new Date(Date.now());
        //     nowBossDaily.setMinutes(nowBossDaily.getMinutes() - nowBossDaily.getTimezoneOffset());

        //     // Reset daily completion status for all bosses where the completion date is not today
        //     for (const character of Object.values(state.Characters)) {
        //         for (const world of Object.values(character.bosses)) {
        //             for (const boss of Object.values(world)) {

        //                 if (boss.isActive) {
        //                     console.log(boss)
        //                     for (const difficulty of boss.difficulty) {
        //                         if (difficulty.type === 'daily') {
        //                             if (difficulty.completion.daily) {
        //                                 const completionDate = new Date(difficulty.completion.dailyDate);
        //                                 if (completionDate.getUTCDate() !== nowBossDaily.getDate() || completionDate.getUTCMonth() !== nowBossDaily.getMonth() || completionDate.getUTCFullYear() !== nowBossDaily.getFullYear()) {
        //                                     difficulty.completion.daily = false;
        //                                     // redefine difficulty.completion.dailyDate as null instead of a date
        //                                     difficulty.completion.dailyDate = null;

        //                                     // console.log("RESET")
        //                                     // console.log(boss.name)

        //                                 }

        //                             }

        //                             if (difficulty.type === 'weekly') {
        //                                 if (difficulty.completion.weekly) {
        //                                     const completionDate = new Date(difficulty.completion.weeklyDate);
        //                                     if (completionDate.getUTCDate() !== nowBossDaily.getDate() || completionDate.getUTCMonth() !== nowBossDaily.getMonth() || completionDate.getUTCFullYear() !== nowBossDaily.getFullYear()) {
        //                                         difficulty.completion.weekly = false;
        //                                         difficulty.completion.weeklyDate = false;
        //                                         // console.log("RESET")
        //                                         // console.log(boss.name)
        //                                     }
        //                                 }



        //                             }
        //                         }
        //                     }
        //                 }

        //             }
        //         }
        //         return { ...state };
        //     }



        case 'RESET_WEEKLY_BOSS_COMPLETION_STATUSES':
            // Get the current date and convert to UTC
            const nowBossWeekly = new Date(Date.now());
            nowBossWeekly.setMinutes(nowBossWeekly.getMinutes() - nowBossWeekly.getTimezoneOffset());


            // const completionDate = new Date(region.completion.dailyDate);
            // if (completionDate.getUTCDate() !== nowUTC.getDate() || completionDate.getUTCMonth() !== nowUTC.getMonth() || completionDate.getUTCFullYear() !== nowUTC.getFullYear()) {
            //     region.completion.daily = false;
            // }



            // Reset weekly completion status for all bosses where the completion date is not this week
            for (const character of Object.values(state.Characters)) {
                for (const world of Object.values(character.bosses)) {
                    for (const boss of Object.values(world)) {
                        for (const difficulty of boss.difficulty) {
                            if (difficulty.type === 'weekly') {
                                const completionDate = new Date(difficulty.completion.weeklyDate);
                                // Check if completionDate is before the start of this week
                                if (completionDate < new Date(nowBossWeekly.setDate(nowBossWeekly.getDate() - nowBossWeekly.getDay()))) {
                                    difficulty.completion.weekly = false;
                                }
                            }
                        }
                    }
                }
            }

            return { ...state };


        // case 'TOGGLE_COMPLETION':
        //     const { characterId, regionNameC, completionType } = action.payload;
        //     const characterC = state.Characters[characterId];
        //     let regionC;
        //     let placeC;

        //     // Check if region exists in arcaneRiver
        //     if (characterC.progression.symbols.arcaneRiver.regions[regionNameC]) {
        //         placeC = characterC.progression.symbols.arcaneRiver;
        //         regionC = characterC.progression.symbols.arcaneRiver.regions[regionNameC];
        //     }
        //     // If not found, check if region exists in grandis
        //     else if (characterC.progression.symbols.grandis.regions[regionNameC]) {
        //         placeC = characterC.progression.symbols.grandis;
        //         regionC = characterC.progression.symbols.grandis.regions[regionNameC];
        //     }

        //     // If region is found, toggle its completion property
        //     if (regionC) {
        //         regionC.completion[completionType] = !regionC.completion[completionType];
        //         // If the completion status is being set to true, also set the date
        //         if (regionC.completion[completionType]) {
        //             if (completionType === 'daily') {
        //                 regionC.completion.dailyDate = new Date().toISOString();
        //             } else if (completionType === 'weekly') {
        //                 regionC.completion.weeklyDate = new Date().toISOString();
        //             }
        //         }

        //         // Check if at least one region is active
        //         placeC.isActive = Object.values(placeC.regions).some(region => region.isActive);
        //     } else {
        //         console.error(`Region ${regionNameC} not found for character ${characterId}`);
        //     }
        //     // If the completion status is being set to true, also set the date
        //     if (action.payload.completionStatus) {
        //         if (action.payload.completionType === 'daily') {
        //             state.Legion.Characters[action.payload.characterId].progression.symbols[action.payload.symbolType].regions[action.payload.regionKey].completion.dailyDate = new Date().toISOString();
        //         } else if (action.payload.completionType === 'weekly') {
        //             state.Legion.Characters[action.payload.characterId].progression.symbols[action.payload.symbolType].regions[action.payload.regionKey].completion.weeklyDate = new Date().toISOString();
        //         }
        //     }

        //     return { ...state };



        // HANDLE RESETS HERE @@@@!!

        // RESET OF SYMBOLS!!! ---------------------------------------
        case RESET_DAILY_COMPLETION_STATUSES:
            // Get the current date and convert to UTC
            const now = new Date();
            const nowUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
        
            // Clone the state
            const newState = JSON.parse(JSON.stringify(state));
        
            // Reset daily.isCompleted for all regions where the completion date is not today
            for (const character of Object.values(newState.Characters)) {
                for (const region of Object.values(character.progression.symbols.arcaneRiver.regions)) {
        
                    if (region.completion.daily) {
                        const completionDate = new Date(region.completion.dailyDate);
                        console.log(completionDate)
                        console.log(completionDate.toUTCString())
                        if (completionDate.getUTCDate() !== nowUTC.getUTCDate() || completionDate.getUTCMonth() !== nowUTC.getUTCMonth() || completionDate.getUTCFullYear() !== nowUTC.getUTCFullYear()) {
                            region.completion.daily = false;
                            region.completion.dailyDate = null;
                        }
                    }
        
                }
                for (const region of Object.values(character.progression.symbols.grandis.regions)) {
        
                    if (region.completion.daily) {
                        const completionDateConvert = new Date(region.completion.dailyDate);
                        const completionDate = new Date(Date.UTC(completionDateConvert.getUTCFullYear(), completionDateConvert.getUTCMonth(), completionDateConvert.getUTCDate()));
                        console.log(completionDate)
                        console.log(completionDate.toUTCString())
                        if (completionDate.getUTCDate() !== nowUTC.getUTCDate() || completionDate.getUTCMonth() !== nowUTC.getUTCMonth() || completionDate.getUTCFullYear() !== nowUTC.getUTCFullYear()) {
                            region.completion.daily = false;
                            region.completion.dailyDate = null;
                        }
                    }
                }
            }
        
            return newState;

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
                        region.completion.weeklyDate = null;
                    }
                }
                for (const region of Object.values(character.progression.symbols.grandis.regions)) {
                    const completionDate = new Date(region.completion.weeklyDate);
                    if (completionDate < lastSunday) {
                        region.completion.weekly = false;
                        region.completion.weeklyDate = null;
                    }
                }
            }

            return { ...state };

        // reset of quests!!! ---------------------------------------
        case RESET_DAILY_QUESTS_COMPLETION_STATUS:
            // Get the current date and convert to UTC
            const nowDaily = new Date();
            const nowUTCDaily = new Date(Date.UTC(nowDaily.getUTCFullYear(), nowDaily.getUTCMonth(), nowDaily.getUTCDate()));
        
            // Clone the state
            const newStateDaily = JSON.parse(JSON.stringify(state));
        
            // Reset daily.isCompleted for all quests where the completion date is not today
            for (const character of Object.values(newStateDaily.Characters)) {
                for (const quest of Object.values(character.progression.dailies.quests)) {
                    const completionDate = new Date(quest.completion.dailyDate);
        
                    if (completionDate.getUTCDate() !== nowUTCDaily.getUTCDate() || completionDate.getUTCMonth() !== nowUTCDaily.getUTCMonth() || completionDate.getUTCFullYear() !== nowUTCDaily.getUTCFullYear()) {
                        console.log("RESET")
                        quest.completion.daily = false;
                        quest.completion.dailyDate = "null";
                    }
                }
            }
        
            return newStateDaily;


    }
};

export default characterReducer;