import React from 'react';
import { useDispatch } from 'react-redux';
// import progression css
import './progression.css';

function GradisCompletion({ region, characterId }) {
    const dispatch = useDispatch();


    // const { characterId, regionNameC, completionType } = action.payload;
    const handleCheckboxChange = (type) => {
        dispatch({ type: 'TOGGLE_COMPLETION', payload: { characterId, regionNameC: region.key, completionType: type } });
    };

    return (
        <div className={`regionProgression ${region.class}`}>
            <h5>{region.name}</h5>
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