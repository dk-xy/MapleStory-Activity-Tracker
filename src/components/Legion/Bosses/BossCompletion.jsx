import React from 'react';
import { useDispatch } from 'react-redux';

// import boss css
import './bosses.css';

import zakumPic from '../../../assets/resizedBosses/Mob_Zakum.webp';
import akechiPic from '../../../assets/resizedBosses/Mob_Akechi_Mitsuhide.webp';
import hillaPic from '../../../assets/resizedBosses/Mob_Hilla.webp';
import papulatusPic from '../../../assets/bosses/Mob_Papulatus_Clock.webp';
import cygnusPic from '../../../assets/bosses/Mob_Cygnus.webp';
import lotusPic from '../../../assets/resizedBosses/Mob_Lotus_(2).webp';

const bossToImage = {
    "zakum": zakumPic,
    "akechi": akechiPic,
    "hilla": hillaPic,
    "papulatus": papulatusPic,
    "cygnus": cygnusPic,
    "lotus": lotusPic,

    // ... other quests ...
};


function BossCompletion({ boss, characterId }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = (difficultyName, completionType) => {
        dispatch({ type: 'TOGGLE_BOSS_DIFFICULTY_COMPLETION', payload: { bossId: characterId, bossKey: boss.key, difficultyName, completionType } });
    };

    return (
        <div className='bossCompletionContainer'>
            <div className='imageContainer'><img src={bossToImage[boss.key]} /></div>
            <div className='bossInfo'>
                <div className='bossName'>
                    <h3>{boss.name}</h3>
                </div>

                <div className='difficultyConatiner'>
                    {boss.difficulty.map((difficulty, index) => (
                        difficulty.isActive && (
                            <div className={difficulty.name} key={index}>
                                <label>
                                    {difficulty.name}
                                </label>
                                <input
                                    type="checkbox"
                                    checked={difficulty.completion[difficulty.type]}
                                    onChange={() => handleCheckboxChange(difficulty.name, difficulty.type)}
                                // add difficultyName as class

                                />

                            </div>
                        )
                    ))}
                </div>
            </div>

        </div>
    );
}

export default BossCompletion;