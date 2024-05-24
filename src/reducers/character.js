const characterReducer = (state = { Characters: {}, maxId: 0 }, action) => {
  const newState = { ...state };
  switch (action.type) {
      case "CHARACTER_ADD":
          // Increment maxId and use it as the new character's ID
          newState.maxId += 1;
          newState.Characters[newState.maxId] = {
              // complete: false,
              characterInfo: action.payload,
              progression:{
                symbols: {
                    arcaneRiver: {
                        isActive: false,
                        regions: {
                            oblivion: {
                                name:"Oblivion",
                                class:"oblivion",
                                isActive: false,
                                completion: {
                                    daily: false,
                                    weekly: false
                                }
                            },
                            chuChu: {
                                name:"Chu Chu",
                                class:"chuchu",
                                isActive: false,
                                completion: {
                                    daily: false,
                                    weekly: false
                                }
                            },
                        }
                    },
                }
              }
          };
          break;
      default:
          break;
  }
  return newState;
};

export default characterReducer;