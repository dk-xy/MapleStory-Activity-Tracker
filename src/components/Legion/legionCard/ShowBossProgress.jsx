import { IconCheck } from '@tabler/icons-react';

function ShowBossProgress({ character }) {
    let activeBosses = 0;
    let completedBosses = 0;

    Object.values(character.bosses).forEach(bossRegion => {
        Object.values(bossRegion).forEach(boss => {
            if (boss.isActive) {
                boss.difficulty.forEach(difficulty => {
                    if (difficulty.isActive) {
                        activeBosses++;
                        if (difficulty.completion.daily || difficulty.completion.weekly) {
                            completedBosses++;
                        }
                    }
                });
            }
        });
    });

    return (
        <div className="miniIndicator">
            <div className="miniIndicatorLabel">
                Bosses
            </div>
            <div className="miniIndicatorNb">
                {completedBosses} / {activeBosses}
            </div>
            {completedBosses === activeBosses && (
                <div className="indicatorOverlay">
                    <IconCheck />
                </div>
            )}
        </div>
    );
}

export default ShowBossProgress;