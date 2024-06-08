function ShowMiniProg ({ character }) {
    const quests = Object.values(character.progression.dailies.quests);
    const completedDailies = quests.reduce((count, quest) => {
        return quest.isActive && quest.completion.daily ? count + 1 : count;
    }, 0);

    return (
        <div>
            dailies: {completedDailies} / {quests.length}
        </div>
    );
}

export default ShowMiniProg;