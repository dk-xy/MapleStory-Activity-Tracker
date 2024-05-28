import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import EditCharacter from './Character/EditCharacter';
import RegionCompletion from '../components/Legion/Progression/RegionCompletion';
import GrandisCompletion from '../components/Legion/Progression/GrandisCompletion';
import { resetDailyCompletionStatuses, resetWeeklyCompletionStatuses } from '../redux/actions/characters';

export default function Character() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];
    const characters = useSelector(state => state.Characters);
    // const character = location.state.character;
    useEffect(() => {
        // Dispatch the actions immediately on component mount
        dispatch(resetDailyCompletionStatuses());
        dispatch(resetWeeklyCompletionStatuses());
    
        // Set up a timer to dispatch the actions every minute
        const timer = setInterval(() => {
          dispatch(resetDailyCompletionStatuses());
          dispatch(resetWeeklyCompletionStatuses());
        }, 60000); // 60000 milliseconds = 1 minute
    
        // Clean up function
        return () => clearInterval(timer);
      }, [dispatch, characters]);


    return (
        <div className="character-page">
            <div>character</div>
            {/* link to edit character */}
            {<Link to={`/legion/${id}/edit`}>EDIT</Link>}
            {<div>{character.characterInfo.characterName}</div>}
            {<div>{character.characterInfo.characterClass}</div>}
            {/* ARCANE RIVER---------------------------- */}
            {character.progression.symbols.arcaneRiver.isActive && (
                <div>
                    <h3>Arcane River</h3>
                </div>
            )}
            {/* <Link to={linkName} state={{character: character, progression: progression } }>EDIT</Link> */}
            {character.progression.symbols.arcaneRiver.isActive && (
                <div className='arcaneRiver itemContainer'>
                    {Object.values(character.progression.symbols.arcaneRiver.regions).map((region, index) => (
                        region && region.isActive && <RegionCompletion key={index} region={region} characterId={id} />
                    ))}
                </div>
            )}

            {/* GRANDIS-------------------------------- */}
            {character.progression.symbols.arcaneRiver.isActive && (
                <div>
                    <h3>Grandis</h3>
                </div>
            )}

            {character.progression.symbols.grandis.isActive && (
                <div className='arcaneRiver itemContainer'>
                    {Object.values(character.progression.symbols.grandis.regions).map((region, index) => (
                        region && region.isActive && <GrandisCompletion key={index} region={region} characterId={id} />
                    ))}
                </div>
            )}
        </div>


    )
}
;
