export const addCharacter = payload => {
    return {
      type: "CHARACTER_ADD",
      payload
    };
  };
  

  export const loadCharacters = () => {
    const characters = JSON.parse(localStorage.getItem('Data')) || {};
    return {
        type: 'LOAD_CHARACTERS',
        payload: characters,
    };
};