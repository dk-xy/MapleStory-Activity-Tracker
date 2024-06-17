import React from 'react';
import { useDispatch } from 'react-redux';
// import progression css
import './progression.css';
import OblivionSymbol from '../../../assets/symbols/Eqp_Arcane_Symbol_Vanishing_Journey.webp';
import ChuChuSymbol from '../../../assets/symbols/Eqp_Arcane_Symbol_Chuchu.webp';
import LacheleinSymbol from '../../../assets/symbols/Eqp_Arcane_Symbol_Lachelein.webp';
import ArcanaSymbol from '../../../assets/symbols/Eqp_Arcane_Symbol_Arcana.webp';
import MorassSymbol from '../../../assets/symbols/Eqp_Arcane_Symbol_Morass.webp';
import EsferaSymbol from '../../../assets/symbols/Eqp_Arcane_Symbol_Esfera.webp';



const symbolMap = {
    'Oblivion': OblivionSymbol,
    'Chu Chu': ChuChuSymbol,
    'Lachelein': LacheleinSymbol,
    'Arcana': ArcanaSymbol,
    'Morass': MorassSymbol,
    'Esfera': EsferaSymbol
    // Add other region names and corresponding symbols here
};


function RegionCompletion({ region, characterId }) {
    const dispatch = useDispatch();


    // const { characterId, regionNameC, completionType } = action.payload;
    const handleCheckboxChange = (type) => {
        dispatch({ type: 'TOGGLE_COMPLETION', payload: { characterId, regionNameC: region.key, completionType: type } });
    };
    const symbol = symbolMap[region.name];
    return (
        <div className={`regionProgression ${region.class}`}>
            <h5>{region.name}</h5>
            {symbol && <img src={symbol} alt="Arcane Symbol" style={{position: 'absolute', top: 0, right: 0}}/>}
            <div className="completionBoxes">
                <div className="regionCheckBox">
                    <label>Daily </label>
                        <input
                            type="checkbox"
                            checked={region.completion.daily}
                            onChange={() => handleCheckboxChange('daily')}
                        />
                   
                </div>
                <div className="regionCheckBox">
                    <label>Weekly</label>
                        <input
                            type="checkbox"
                            checked={region.completion.weekly}
                            onChange={() => handleCheckboxChange('weekly')}
                        />
                 
                </div>
            </div>
        </div>
    );
}

export default RegionCompletion;