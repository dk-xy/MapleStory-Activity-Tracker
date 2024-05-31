import React from 'react';
import { useDispatch } from 'react-redux';

function BossCompletion({ boss, characterId }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = (difficultyName, completionType) => {
        dispatch({ type: 'TOGGLE_BOSS_DIFFICULTY_COMPLETION', payload: { bossId: characterId, bossKey: boss.key, difficultyName, completionType } });
    };

    return (
        <div>
            <h3>{boss.name}</h3>
            {boss.difficulty.map((difficulty, index) => (
                difficulty.isActive && (
                    <div key={index}>
                        <label>
                            {difficulty.name}
                            <input
                                type="checkbox"
                                checked={difficulty.completion[difficulty.type]}
                                onChange={() => handleCheckboxChange(difficulty.name, difficulty.type)}
                            />
                        </label>
                    </div>
                )
            ))}
        </div>
    );
}

export default BossCompletion;