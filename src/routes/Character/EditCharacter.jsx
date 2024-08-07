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
import highMountainPic from '../../assets/quests/MapIcon_HighMountain.png';
import shadowknight from '../../assets/quests/Etc_Shadowknight_Coin.webp';
import frag from "../../assets/quests/Etc_Sol_Erda_Fragment.png";

// import caret down full icon
import { IconCaretDownFilled, IconCaretUpFilled, IconPencil, IconChevronsLeft } from '@tabler/icons-react';


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
    "highMountain": highMountainPic,
   "erdasRequest": frag,
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


const QuestCheckbox = ({ quest, questName, isActive, handleCheckboxChangeDailies }) => (
     
        <div className='questActivation'>
        <div className='activationInfo'>
        <img src={questToImage[quest]} alt={`${quest} icon`} />
            <label>{questName} </label>
        </div>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => handleCheckboxChangeDailies(quest)}
                />
        </div>
    );


    const WeeklyQuestCheckbox = ({ quest, questName, isActive, handleCheckboxChangeWeeklies }) => (
        <div className='questActivation'>
            <img src={questToImage[quest]} alt={`${quest} icon`} />
            <label>{questName}</label>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => handleCheckboxChangeWeeklies(quest)}
                />
       
        </div>
    );
    







const EditCharacter = () => {

    const [isSymbolOpen, setIsSymbolOpen] = useState(false);
    const [isDailyOpen, setIsDailyOpen] = useState(false);
    const [isWeeklyOpen, setIsWeeklyOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const dispatch = useDispatch();
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];

    const { arcaneRiver, grandis } = character.progression.symbols;
    const dailies  = character.progression.dailies.quests
    const weeklies = character.progression.weeklies.quests
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


// COllapsable
var coll = document.getElementsByClassName("collapsible");
var i;


    return (
        
    <div> 
      <div className='editCharHeader'>
      <button className='backButton' onClick={() => window.history.back()}><IconChevronsLeft />    Back</button>
      <div className='editCharInfo'>
      <IconPencil />
        <div className='editCharInfoHeader'>
        <div className='editCharTitle'>Editing</div> 
        <div className='editCharName'>{character.characterInfo.characterName}</div> 
        </div>
        
        <div>

        </div>
      </div>

      </div>
       
            

        <div className='tabNavContainer'>
            <div
                className={`tabNav ${selectedTab === 'quests' ? 'active' : ''}`}
                onClick={() => setSelectedTab('quests')}
            >
                Progression
        </div>
            <div
                className={`tabNav ${selectedTab === 'bosses' ? 'active' : ''}`}
                onClick={() => setSelectedTab('bosses')}
            >
                Bosses
            </div>
        </div>

        {selectedTab === 'quests' && (
            <div className='questContainer'>
                {/* Arcane river-------------------------------- */}
            
            <div className='wholeDropDownContainer'>
            <div className='dropDownContainer'  onClick={() => setIsSymbolOpen(!isSymbolOpen)}><h4> Symbols</h4>  {isSymbolOpen ? <IconCaretUpFilled /> : <IconCaretDownFilled />}</div>
            {isSymbolOpen && (
                <div className='symbolContainer'>
                {/* <div className='symbolContainerTitle'> Symbols</div> */}
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
        )}
            </div>
           
           

            
{/* DAILIES ---------------------------------- */}
            <div className='dailiesContainer'>
            <div className='wholeDropDownContainer'>
            <div className='dropDownContainer'  onClick={() => setIsDailyOpen(!isDailyOpen)}><h4> Dailies</h4>  {isDailyOpen ? <IconCaretUpFilled /> : <IconCaretDownFilled />}</div>
            {isDailyOpen && (    
            <div className={`dailyContainer`}>
            {Object.keys(dailies).map(quest => (
                console.log(quest),
                <QuestCheckbox
                    quest={quest}
                    questName={dailies[quest].questName}
                    isActive={dailies[quest].isActive}
                    handleCheckboxChangeDailies={handleCheckboxChangeDailies}
                />
            ))}
        </div>
        )}
            </div>

{/* WEEKLIES ---------------------------------- */}
{/* Weeklies -------------------------------- */}
<div className='wholeDropDownContainer'>
<div className='dropDownContainer'  onClick={() => setIsWeeklyOpen(!isWeeklyOpen)}><h4> Weeklies</h4>  {isWeeklyOpen ? <IconCaretUpFilled /> : <IconCaretDownFilled />}</div>
{isWeeklyOpen && (                <div className='weeklyQuestsContainer'>
            
            {Object.keys(character.progression.weeklies.quests).map(quest => (
                console.log(quest),
                // console.log(character.progression.weeklies.quests[questName]),

                <WeeklyQuestCheckbox
                    // key={questName}
                    quest={quest}
                    questName={weeklies[quest].questName}
                    isActive={weeklies[quest].isActive}
                    handleCheckboxChangeWeeklies={handleCheckboxChangeWeeklies}
                />
            ))}
        </div>)}
</div>


            </div>
            </div>
        )}

{selectedTab === 'bosses' && (
    <div className='bossesContainer'>
        {console.log(character.bosses.mapleWorld)}

        <div className='dropDownContainer'  onClick={() => setIsOpen(!isOpen)}><h4>Maple World</h4>  {isOpen ? <IconCaretUpFilled /> : <IconCaretDownFilled />}</div>
        {isOpen && (
            <div className='bossList mapleWorld'>
                {Object.values(character.bosses.mapleWorld).map((boss, index) => (
                    <BossSelection key={index} boss={boss} characterId={id} />
                ))}
            </div>
        )}

    <div className='dropDownContainer'  onClick={() => setIsOpen2(!isOpen2)}><h4>Arcane River</h4>  {isOpen2 ? <IconCaretUpFilled /> : <IconCaretDownFilled />}</div>
        {isOpen2 && (    
            <div className='bossList arcaneRiver'>   
                {Object.values(character.bosses.arcaneRiver).map((boss, index) => (
                    <BossSelection key={index} boss={boss} characterId={id} />
                ))}
            </div>
        )}
   
    
   <div className='dropDownContainer'  onClick={() => setIsOpen3(!isOpen3)}><h4>Grandis</h4>  {isOpen3 ? <IconCaretUpFilled /> : <IconCaretDownFilled />}</div>
        {isOpen3 && (    
            <div className='bossList Grandis'>   
                {Object.values(character.bosses.grandis).map((boss, index) => (
                    <BossSelection key={index} boss={boss} characterId={id} />
                ))}
            </div>
        )}
           

       
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