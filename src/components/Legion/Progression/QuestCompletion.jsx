import React from 'react';
import { useDispatch } from 'react-redux';

function QuestCompletion({key, daily, characterId}) {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch({ type: 'TOGGLE_DAILY_COMPLETION', payload: { dailyId: characterId, questName: daily.questName, key: daily.key } });
    };

    return (
        <div>
           
            <div className="completionBoxes">
                <div className="questCheckBox">
                    <label>{daily.questName} </label>
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