import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import EditCharacter from './Character/EditCharacter';
import RegionCompletion from '../components/Legion/Progression/RegionCompletion';
import GrandisCompletion from '../components/Legion/Progression/GrandisCompletion';
import QuestCompletion from '../components/Legion/Progression/QuestCompletion';
import { resetDailyCompletionStatuses, resetWeeklyCompletionStatuses, resetDailyQuestsCompletionStatuses } from '../redux/actions/characters';

export default function Character() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];
    const characters = useSelector(state => state.Characters);

    const [selectedTab, setSelectedTab] = useState('progression');
    // const character = location.state.character;
    useEffect(() => {
        // Dispatch the actions immediately on component mount
        dispatch(resetDailyCompletionStatuses());
        dispatch(resetWeeklyCompletionStatuses());
        dispatch(resetDailyQuestsCompletionStatuses());
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
            <Link to={`/legion/${id}/edit`}>EDIT</Link>
            <div>{character.characterInfo.characterName}</div>
            <div>{character.characterInfo.characterClass}</div>

            {/* Tab buttons */}
            <button className={`tabNav ${selectedTab === 'progression' ? 'active' : ''}`} onClick={() => setSelectedTab('progression')}>Progression</button>
            <button className={`tabNav ${selectedTab === 'bosses' ? 'active' : ''}`} onClick={() => setSelectedTab('bosses')}>Bosses</button>

            {/* Tab content */}
            {selectedTab === 'progression' ? (
                // Progression content...
                <>
                    {/* ARCANE RIVER---------------------------- */}
                    {character.progression.symbols.arcaneRiver.isActive && (
                        <div>
                            <h3>Arcane River</h3>
                            <div className='arcaneRiver itemContainer'>
                                {Object.values(character.progression.symbols.arcaneRiver.regions).map((region, index) => (
                                    region && region.isActive && <RegionCompletion key={index} region={region} characterId={id} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* GRANDIS-------------------------------- */}
                    {character.progression.symbols.grandis.isActive && (
                        <div>
                            <h3>Grandis</h3>
                            <div className='arcaneRiver itemContainer'>
                                {Object.values(character.progression.symbols.grandis.regions).map((region, index) => (
                                    region && region.isActive && <GrandisCompletion key={index} region={region} characterId={id} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* DAILIES-------------------------------- */}
                    <div>
                        <h3>Dailies</h3>
                        <div className='dailies itemContainer'>
                            {Object.values(character.progression.dailies.quests).map((daily, index) => (
                                daily && daily.isActive && <QuestCompletion key={index} quest={daily} characterId={id} questType={'daily'} />
                            ))}
                        </div>
                    </div>

                    {/* WEEKLIES -------------------------------- */}
                    <div>
                        <h3>Weeklies</h3>
                        <div className='weeklies itemContainer'>
                            {Object.values(character.progression.weeklies.quests).map((weekly, index) => (
                                weekly && weekly.isActive && <QuestCompletion key={index} quest={weekly} characterId={id} questType={'weekly'} />
                            ))}
                        </div>
                    </div>


                </>
            ) : (
                // Bosses content...
                <div>
                    BOSSES
                </div>
            )}
        </div>
    )
}
;
