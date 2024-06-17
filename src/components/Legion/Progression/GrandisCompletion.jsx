import React from 'react';
import { useDispatch } from 'react-redux';
// import progression css
import './progression.css';

import CerniumSymbol from '../../../assets/symbols/Eqp_Sacred_Symbol_Cernium.webp';
import ArcusSymbol from '../../../assets/symbols/Eqp_Sacred_Symbol_Arcus.webp';
import OdiumSymbol from '../../../assets/symbols/Eqp_Sacred_Symbol_Odium.webp';
import ShangriLaSymbol from '../../../assets/symbols/Eqp_Sacred_Symbol_ShangriLa.webp';
import ArteriaSymbol from '../../../assets/symbols/Eqp_Sacred_Symbol_Arteria.webp';
import CarcionSymbol from '../../../assets/symbols/Eqp_Sacred_Symbol_Carcion.webp';


const symbolMap = {
    'Cernium': CerniumSymbol,
    'Arcus': ArcusSymbol,
    'Odium': OdiumSymbol,
    'Shangri La': ShangriLaSymbol,
    'Arteria': ArteriaSymbol,
    'Carcion': CarcionSymbol
    // Add other region names and corresponding symbols here
};

function GradisCompletion({ region, characterId }) {
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
                 
                </div>
            </div>
    );
}

export default GradisCompletion;