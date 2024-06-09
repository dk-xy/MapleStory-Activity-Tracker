function ShowMiniProgWeeklies ({ character }) {
    const quests = Object.values(character.progression.weeklies.quests);
    const activeQuests = quests.filter(quest => quest.isActive);
    const completedWeeklies = quests.reduce((count, quest) => {
        return quest.isActive && quest.completion.weekly ? count + 1 : count;
    }, 0);

    return (
        <div>
            weeklies: {completedWeeklies} / {activeQuests.length}
        </div>
    );
}

export default ShowMiniProgWeeklies;