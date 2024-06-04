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


export function resetCompletionStatuses() {
  return { type: 'RESET_COMPLETION_STATUSES' };
}

export const RESET_DAILY_COMPLETION_STATUSES = 'RESET_DAILY_COMPLETION_STATUSES';
export const RESET_WEEKLY_COMPLETION_STATUSES = 'RESET_WEEKLY_COMPLETION_STATUSES';
export const RESET_DAILY_QUESTS_COMPLETION_STATUS = 'RESET_DAILY_QUESTS_COMPLETION_STATUS';

export function resetDailyCompletionStatuses() {
    return { type: RESET_DAILY_COMPLETION_STATUSES };
}

export function resetWeeklyCompletionStatuses() {
    return { type: RESET_WEEKLY_COMPLETION_STATUSES };
}

export function resetDailyQuestsCompletionStatuses() {
  return { type: RESET_DAILY_QUESTS_COMPLETION_STATUS };
}


export const resetDailyBossCompletionStatuses = () => ({
  type: 'RESET_DAILY_BOSS_COMPLETION_STATUSES'
});

export const resetWeeklyBossCompletionStatuses = () => ({
  type: 'RESET_WEEKLY_BOSS_COMPLETION_STATUSES'
});