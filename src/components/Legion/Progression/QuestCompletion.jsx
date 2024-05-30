import React from 'react';
import { useDispatch } from 'react-redux';

function QuestCompletion({key, quest, characterId, questType}) {
    const dispatch = useDispatch();

    // const handleCheckboxChange = () => {
    //     dispatch({ type: 'TOGGLE_DAILY_COMPLETION', payload: { dailyId: characterId, questName: quest.questName, key: quest.key, questType } });
    // };

    const handleCheckboxChange = () => {
        if (questType === 'daily') {
            dispatch({ type: 'TOGGLE_DAILY_COMPLETION', payload: { dailyId: characterId, questName: quest.questName, key: quest.key } });
        } else if (questType === 'weekly') {
            dispatch({ type: 'TOGGLE_WEEKLY_COMPLETION', payload: { weeklyId: characterId, questName: quest.questName, key: quest.key } });
        }
    };

    return (
        <div>
           
            <div className="completionBoxes">
                <div className="questCheckBox">
                    <label>{quest.questName} </label>
                    <input
                        type="checkbox"
                        checked={quest.completion.isActive}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default QuestCompletion;