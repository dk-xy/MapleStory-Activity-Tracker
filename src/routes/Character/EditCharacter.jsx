import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import QuestCheckbox from '../../components/Legion/Progression/QuestCheckbox';


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
     
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => handleCheckboxChangeDailies(questName)}
                />
                {questName}
            </label>
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

    const handleCheckboxChange = (regionName) => {
        dispatch({ type: 'TOGGLE_REGION', payload: { id, regionName } });
    };
    const handleCheckboxChangeDailies = (questName) => {
        dispatch({ type: 'TOGGLE_DAILY', payload: { id, questName } });
    };




    return (
        <div>
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
            </div>
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