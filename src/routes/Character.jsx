import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import EditCharacter from './Character/EditCharacter';
import RegionCompletion from '../components/Legion/Progression/RegionCompletion';
import GrandisCompletion from '../components/Legion/Progression/GrandisCompletion';
import QuestCompletion from '../components/Legion/Progression/QuestCompletion';
import { resetDailyCompletionStatuses, resetWeeklyCompletionStatuses, resetDailyQuestsCompletionStatuses, resetBossCompletionStatuses, } from '../redux/actions/characters';
import BossCompletion from '../components/Legion/Bosses/BossCompletion';
import Countdown from '../components/Legion/Countdown';
import CountdownDaily from '../components/Legion/CountdownDaily';
import ResetCountdown from '../components/Legion/ResetCountdown';

import CharacterInfo from '../components/Legion/CharacterInfo';
import EditButton from '../components/Legion/EditButton';


export default function Character() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];
    const characters = useSelector(state => state.Characters);

    const [selectedTab, setSelectedTab] = useState('progression');
    // const character = location.state.character;
    // useEffect(() => {
    //     // Dispatch the actions immediately on component mount
    //     dispatch(resetDailyCompletionStatuses());
    //     dispatch(resetWeeklyCompletionStatuses());
    //     dispatch(resetDailyQuestsCompletionStatuses());
    //     dispatch(resetBossCompletionStatuses());


    //     // Set up a timer to dispatch the actions every minute
    //     const timer = setInterval(() => {
    //         dispatch(resetDailyCompletionStatuses());
    //         dispatch(resetWeeklyCompletionStatuses());
    //         dispatch(resetDailyQuestsCompletionStatuses());
    //         dispatch(resetBossCompletionStatuses());
    //     }, 6000); // 60000 milliseconds = 1 minute

    //     // Clean up function
    //     return () => clearInterval(timer);
    // }, [dispatch, characters]);


    return (
        <div className="character-page">
            <CharacterInfo character={character} />

            <div>
                <EditButton id={character.characterInfo.id} />
            </div>

            {/* <div>{character.characterInfo.characterName}</div>
             <div>{character.characterInfo.characterClass}</div> */}
            {/* link to edit character */}
            {/* <Link to={`/legion/${id}/edit`} className='editButton'>EDIT</Link> */}


            {/* Tab buttons */}
            <button className={`tabNav ${selectedTab === 'progression' ? 'active' : ''}`} onClick={() => setSelectedTab('progression')}>Progression</button>
            <button className={`tabNav ${selectedTab === 'bosses' ? 'active' : ''}`} onClick={() => setSelectedTab('bosses')}>Bosses</button>

            {/* Tab content */}
            {selectedTab === 'progression' ? (

                // Progression content...
                <>
                    <ResetCountdown weeklyResetDay={7} />
                    {/* Message if all progressions and quests are inactive */}
                    {!(character.progression.symbols.arcaneRiver.isActive || character.progression.symbols.grandis.isActive || character.progression.dailies.isActive || character.progression.weeklies.isActive) && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            No progression or quest active, please activate a progression or quest
                        </div>
                    )}

                    {/* symbole conbtainer if either arcaneRiver or grandis isActive*/}
                    {(character.progression.symbols.arcaneRiver.isActive || character.progression.symbols.grandis.isActive) && (
                        <div className='symbolsContainer'>


                            {/* ARCANE RIVER---------------------------- */}
                            {character.progression.symbols.arcaneRiver.isActive && (
                                <div className='symbolsBox'>
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
                                <div className='symbolsBox'>
                                    <h3>Grandis</h3>
                                    <div className='arcaneRiver itemContainer'>
                                        {Object.values(character.progression.symbols.grandis.regions).map((region, index) => (
                                            region && region.isActive && <GrandisCompletion key={index} region={region} characterId={id} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {(
                        Object.values(character.progression.dailies.quests).some(daily => daily && daily.isActive) ||
                        Object.values(character.progression.weeklies.quests).some(weekly => weekly && weekly.isActive)
                    ) && (
                            <div className='activityContainer'>
                                {/* DAILIES-------------------------------- */}
                                {Object.values(character.progression.dailies.quests).some(daily => daily && daily.isActive) && (
                                    <div className='activityBox'>
                                        <h3>Dailies</h3>
                                        <div className='dailies itemContainer'>
                                            {Object.values(character.progression.dailies.quests).map((daily, index) => (
                                                daily && daily.isActive && <QuestCompletion key={index} quest={daily} characterId={id} questType={'daily'} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* WEEKLIES -------------------------------- */}
                                {Object.values(character.progression.weeklies.quests).some(weekly => weekly && weekly.isActive) && (
                                    <div className='activityBox'>
                                        <h3>Weeklies</h3>
                                        <div className='weeklies itemContainer'>
                                            {Object.values(character.progression.weeklies.quests).map((weekly, index) => (
                                                weekly && weekly.isActive && <QuestCompletion key={index} quest={weekly} characterId={id} questType={'weekly'} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}



                </>
            ) : (
                // Bosses content--------------------------------
                <div>
                    <h3>BOSSES</h3>
                    <ResetCountdown weeklyResetDay={4} />
                    {!(Object.values(character.bosses.mapleWorld).some(boss => boss.difficulty.some(difficulty => difficulty.isActive)) ||
                        Object.values(character.bosses.arcaneRiver).some(boss => boss.difficulty.some(difficulty => difficulty.isActive)) ||
                        Object.values(character.bosses.grandis).some(boss => boss.difficulty.some(difficulty => difficulty.isActive))) && (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                No bosses selected, please select bosses to track
                            </div>
                        )}
                    <div className='allBossesContainer'>
                    {
                            Object.values(character.bosses.mapleWorld)
                                .filter(boss => boss.difficulty.some(difficulty => difficulty.isActive)).length > 0 && (
                                <h2>Maple World</h2>
                            )
                        }
                        {Object.values(character.bosses.mapleWorld)
                            .filter(boss => boss.difficulty.some(difficulty => difficulty.isActive))
                            .map((boss, index) => (
                                <BossCompletion key={index} boss={boss} characterId={id} />
                            ))
                        }
                    </div>
                    <div className='allBossesContainer'>
                    {
                            Object.values(character.bosses.arcaneRiver)
                                .filter(boss => boss.difficulty.some(difficulty => difficulty.isActive)).length > 0 && (
                                <h2>Arcane River</h2>
                            )
                        }
                        {Object.values(character.bosses.arcaneRiver)
                            .filter(boss => boss.difficulty.some(difficulty => difficulty.isActive))
                            .map((boss, index) => (
                                <BossCompletion key={index} boss={boss} characterId={id} />
                            ))
                        }
                    </div>
                    <div className='allBossesContainer'>
                        {
                            Object.values(character.bosses.grandis)
                                .filter(boss => boss.difficulty.some(difficulty => difficulty.isActive)).length > 0 && (
                                <h2>Grandis</h2>
                            )
                        }
                        {Object.values(character.bosses.grandis)
                            .filter(boss => boss.difficulty.some(difficulty => difficulty.isActive))
                            .map((boss, index) => (

                                <BossCompletion key={index} boss={boss} characterId={id} />
                            ))
                        }
                    </div>

                </div>


            )}
        </div>
    )
}
;
