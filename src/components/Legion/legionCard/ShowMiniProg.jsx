function ShowMiniProg ({ character }) {
    const quests = Object.values(character.progression.dailies.quests);
    const activeQuests = quests.filter(quest => quest.isActive);
    const completedDailies = quests.reduce((count, quest) => {
        return quest.isActive && quest.completion.daily ? count + 1 : count;
    }, 0);

    return (
        <div className="miniIndicator">
            <div className="miniIndicatorLabel">
            Dailies
            </div>
            <div className="miniIndicatorNb">
            {completedDailies} / {activeQuests.length}
            </div>
        </div>
    );
}

export default ShowMiniProg;