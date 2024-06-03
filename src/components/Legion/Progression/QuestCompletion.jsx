import React from 'react';
import { useDispatch } from 'react-redux';
// import ursus picture from assets
import ursus from '../../../assets/quests/MapIcon_Urus.webp';
import monsterPark from '../../../assets/quests/MapIcon_Carnival.webp';
import yuGarden from '../../../assets/quests/Etc_Yu_Garden_Coin.webp';
import Haven from '../../../assets/quests/MapIcon_Haven.webp';
import fallenWorldTree from '../../../assets/quests/MapIcon_fallenWorldTree.webp';
import dojo from '../../../assets/quests/MapIcon_MuruengRaid.webp';
import mapleTour from '../../../assets/quests/MapIcon_MTour.webp';
import commerci from '../../../assets/quests/MapIcon_CommerzBT.webp';
import gollux from '../../../assets/quests/MapIcon_GiantVellud.webp';

import shadowknight from '../../../assets/quests/Etc_Shadowknight_Coin.webp';


const questToImage = {
    "ursus": ursus,
    "monsterPark": monsterPark,
    "monsterParkExtreme": monsterPark,
    "haven": Haven,
    "darkWorldTree": fallenWorldTree,
    "muLungDojo": dojo,
    "mapleTour": mapleTour,
    "commerci": commerci,
    "gollux": gollux,
    "yuGarden": yuGarden,
    "phantomForest": shadowknight,

   
    // ... other quests ...
};


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
                <div className="questCheckBox">
                     <img src={questToImage[quest.key]} 
                    //  alt={`${quest.questName} icon`}
                     />
                    <label>{quest.questName} </label>
                    <input
                        type="checkbox"
                        checked={quest.completion.isActive}
                        onChange={handleCheckboxChange}
                    />
                </div>
    );
}

export default QuestCompletion;