import React from 'react';
import { useDispatch } from 'react-redux';

function QuestCompletion({key, daily, characterId}) {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch({ type: 'TOGGLE_DAILY_COMPLETION', payload: { dailyId: characterId, questName: daily.questName, completionType: 'daily' } });
    };

    return (
        <div>
            <h4>{daily.questName}</h4>
            <div className="completionBoxes">
                <div className="questCheckBox">
                    <label>Completed </label>
                    <input
                        type="checkbox"
                        checked={daily.completion.isActive}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default QuestCompletion;