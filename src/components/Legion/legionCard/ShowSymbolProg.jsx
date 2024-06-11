import { IconCheck } from '@tabler/icons-react';

function ShowSymbolProg ({ character }) {
    const arcaneSymbols = Object.values(character.progression.symbols.arcaneRiver.regions);
    const grandisSymbols = Object.values(character.progression.symbols.grandis.regions);
    
    const activeArcaneSymbols = arcaneSymbols.filter(symbol => symbol.isActive);
    const activeGrandisSymbols = grandisSymbols.filter(symbol => symbol.isActive);
    
    const completedArcaneSymbols = activeArcaneSymbols.reduce((count, symbol) => {
        return symbol.completion.daily || symbol.completion.weekly ? count + 1 : count;
    }, 0);
    
    const completedGrandisSymbols = activeGrandisSymbols.reduce((count, symbol) => {
        return symbol.completion.daily || symbol.completion.weekly ? count + 1 : count;
    }, 0);

    const totalActiveSymbols = activeArcaneSymbols.length + activeGrandisSymbols.length;
    const totalCompletedSymbols = completedArcaneSymbols + completedGrandisSymbols;

    return (
        <div className="miniIndicator">
            <div className="miniIndicatorLabel">
            Symbols
            </div>
            <div className="miniIndicatorNb">
            {totalCompletedSymbols} / {totalActiveSymbols}
            </div>
            {totalCompletedSymbols === totalActiveSymbols && (
                <div className="indicatorOverlay">
                    <IconCheck />
                </div>
            )}
        </div>
    );
}

export default ShowSymbolProg;