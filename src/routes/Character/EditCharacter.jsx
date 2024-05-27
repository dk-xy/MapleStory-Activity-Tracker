import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function EditCharacter() {
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];
    const dispatch = useDispatch();

    const handleCheckboxChange = (regionName) => {
        dispatch({ type: 'TOGGLE_REGION', payload: { id, regionName } });
    };

    return (
        <div className="edit-character-page">
            EDIT
            <div>{character.characterInfo.characterName}</div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={character.progression.symbols.arcaneRiver.regions.oblivion.isActive}
                        onChange={() => handleCheckboxChange('oblivion')}
                    />
                    Oblivion
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={character.progression.symbols.arcaneRiver.regions.chuChu.isActive}
                        onChange={() => handleCheckboxChange('chuChu')}
                    />
                    Chu Chu
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={character.progression.symbols.arcaneRiver.regions.lachelein.isActive}
                        onChange={() => handleCheckboxChange('lachelein')}
                    />
                    Lachelein
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={character.progression.symbols.arcaneRiver.regions.arcana.isActive}
                        onChange={() => handleCheckboxChange('arcana')}
                    />
                    Arcana
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={character.progression.symbols.arcaneRiver.regions.morass.isActive}
                        onChange={() => handleCheckboxChange('morass')}
                    />
                    Morass
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={character.progression.symbols.arcaneRiver.regions.esfera.isActive}
                        onChange={() => handleCheckboxChange('esfera')}
                    />
                    Esfera
                </label>
                
            </div>
        </div>
    );
}