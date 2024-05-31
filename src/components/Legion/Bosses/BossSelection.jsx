import React from 'react';
import { useDispatch } from 'react-redux';

function BossSelection({ boss, characterId }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = (difficultyName) => {
        dispatch({ type: 'TOGGLE_BOSS_DIFFICULTY_ACTIVE', payload: { bossId: characterId, bossKey: boss.key, difficultyName } });
    };

    return (
        <div>
            <h3>{boss.name}</h3>
            {boss.difficulty.map((difficulty, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            checked={difficulty.isActive}
                            onChange={() => handleCheckboxChange(difficulty.name)}
                        />
                        {difficulty.name}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default BossSelection;