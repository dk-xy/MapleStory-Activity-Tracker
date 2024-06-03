import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BossSelection from '../../components/Legion/Bosses/BossSelection';

// import QuestCheckbox from '../../components/Legion/Progression/QuestCheckbox';

import ursus from '../../assets/quests/MapIcon_Urus.webp';
import monsterPark from '../../assets/quests/MapIcon_Carnival.webp';
import yuGarden from '../../assets/quests/Etc_Yu_Garden_Coin.webp';
import Haven from '../../assets/quests/MapIcon_Haven.webp';
import fallenWorldTree from '../../assets/quests/MapIcon_fallenWorldTree.webp';
import dojo from '../../assets/quests/MapIcon_MuruengRaid.webp';
import mapleTour from '../../assets/quests/MapIcon_MTour.webp';
import commerci from '../../assets/quests/MapIcon_CommerzBT.webp';
import gollux from '../../assets/quests/MapIcon_GiantVellud.webp';

import shadowknight from '../../assets/quests/Etc_Shadowknight_Coin.webp';


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




const RegionCheckbox = ({ regionName, isActive, handleCheckboxChange }) => (
    <div className={`regionSelector ${regionName}`}>
    <label>  {regionName.charAt(0).toUpperCase() + regionName.slice(1)}  </label>
        <input
            type="checkbox"
            checked={isActive}
            onChange={() => handleCheckboxChange(regionName)}
        /> 

    </div> 
);


const QuestCheckbox = ({ questName, isActive, handleCheckboxChangeDailies }) => (
     
        <div className='questActivation'>
            <img src={questToImage[questName]} alt={`${questName} icon`} />
            <label>{questName} </label>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => handleCheckboxChangeDailies(questName)}
                />
        </div>
    );


    const WeeklyQuestCheckbox = ({ questName, isActive, handleCheckboxChangeWeeklies }) => (
        <div className='questActivation'>
            <img src={questToImage[questName]} alt={`${questName} icon`} />
            <label>{questName}</label>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => handleCheckboxChangeWeeklies(questName)}
                />
       
        </div>
    );
    







const EditCharacter = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];

    const { arcaneRiver, grandis } = character.progression.symbols;
    const dailies  = character.progression.dailies.quests
    console.log(dailies);

    const [selectedTab, setSelectedTab] = useState('quests');

    // CHECKBOX HANDLERS------------------------------

    const handleCheckboxChange = (regionName) => {
        dispatch({ type: 'TOGGLE_REGION', payload: { id, regionName } });
    };
    const handleCheckboxChangeDailies = (questName) => {
        dispatch({ type: 'TOGGLE_DAILY', payload: { id, questName } });
    };

    const handleCheckboxChangeWeeklies = (questName) => {
        dispatch({ type: 'TOGGLE_WEEKLY_QUEST', payload: { id, questNameW: questName } });
    };

// --------------------------------------------------

    return (
    <div>
        <div className='tabContainer'>
            <div
                className={`tab ${selectedTab === 'quests' ? 'active' : ''}`}
                onClick={() => setSelectedTab('quests')}
            >
                Quests
        </div>
            <div
                className={`tab ${selectedTab === 'bosses' ? 'active' : ''}`}
                onClick={() => setSelectedTab('bosses')}
            >
                Bosses
            </div>
        </div>

        {selectedTab === 'quests' && (
            <div className='questContainer'>
                {/* Arcane river-------------------------------- */}
            <div className='symbolContainer'>
            <div className={`regionContainer arcaneRiver`}>
                {Object.keys(arcaneRiver.regions).map(regionName => (
                    <RegionCheckbox
                        key={regionName}
                        regionName={regionName}
                        isActive={arcaneRiver.regions[regionName].isActive}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
            
{/* Grandis-------------------------------- */}
            <div className={`regionContainer grandis`}>
                {Object.keys(grandis.regions).map(regionName => (
                    <RegionCheckbox
                        key={regionName}
                        regionName={regionName}
                        isActive={grandis.regions[regionName].isActive}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
            </div>
            <div className='dailiesContainer'>

{/* DAILIES ---------------------------------- */}
<h4>DailiesS</h4>
            <div className={`dailyContainer`}>
                {Object.keys(dailies).map(questName => (
                    <QuestCheckbox
                        // key={questName.key}
                        questName={questName}
                        isActive={dailies[questName].isActive}
                        handleCheckboxChangeDailies={handleCheckboxChangeDailies}
                    />
                ))}
            </div>

{/* WEEKLIES ---------------------------------- */}
{/* Weeklies -------------------------------- */}
<div className='weeklyQuestsContainer'>
    <h4>Weeklies</h4>
    {Object.keys(character.progression.weeklies.quests).map(questName => (
        console.log(questName),
        // console.log(character.progression.weeklies.quests[questName]),

        <WeeklyQuestCheckbox
            key={questName}
            questName={questName}
            isActive={character.progression.weeklies.quests[questName].isActive}
            handleCheckboxChangeWeeklies={handleCheckboxChangeWeeklies}
        />
    ))}
</div>
            </div>
            </div>
        )}

{selectedTab === 'bosses' && (
    <div className='bossesContainer'>
        {console.log(character.bosses.mapleWorld)}
        <div className='bossList mapleWorld'>
        {Object.values(character.bosses.mapleWorld).map((boss, index) => (
            <BossSelection key={index} boss={boss} characterId={id} />
        ))}

        </div>
       
    </div>
)}

            

    </div>
    );
};

export default EditCharacter

// export default function EditCharacter() {
//     const { id } = useParams();
//     const legionData = useSelector(state => state.Legion);
//     const character = legionData.Characters[id];
//     const dispatch = useDispatch();

//     const handleCheckboxChange = (regionName) => {
//         dispatch({ type: 'TOGGLE_REGION', payload: { id, regionName } });
//     };

//     const handleCheckboxChangeGrandis = (regionName) => {
//         dispatch({ type: 'TOGGLE_REGION_GRANDIS', payload: { id, regionName } });
//     };

//     return (
//         <div className="edit-character-page">
//             EDIT
//             <div>{character.characterInfo.characterName}</div>
//             <div>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.arcaneRiver.regions.oblivion.isActive}
//                         onChange={() => handleCheckboxChange('oblivion')}
//                     />
//                     Oblivion
//                 </label>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.arcaneRiver.regions.chuChu.isActive}
//                         onChange={() => handleCheckboxChange('chuChu')}
//                     />
//                     Chu Chu
//                 </label>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.arcaneRiver.regions.lachelein.isActive}
//                         onChange={() => handleCheckboxChange('lachelein')}
//                     />
//                     Lachelein
//                 </label>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.arcaneRiver.regions.arcana.isActive}
//                         onChange={() => handleCheckboxChange('arcana')}
//                     />
//                     Arcana
//                 </label>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.arcaneRiver.regions.morass.isActive}
//                         onChange={() => handleCheckboxChange('morass')}
//                     />
//                     Morass
//                 </label>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.arcaneRiver.regions.esfera.isActive}
//                         onChange={() => handleCheckboxChange('esfera')}
//                     />
//                     Esfera
//                 </label>
                
//             </div>

//             <div>
//             <label>
//                     <input
//                         type="checkbox"
//                         checked={character.progression.symbols.grandis.regions.cernium.isActive}
//                         onChange={() => handleCheckboxChange('cernium')}
//                     />
//                     Cernium
//                 </label>
//             </div>
//         </div>
//     );
// }