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
    


    return (
        <div className="miniIndicator">
            <div className="miniIndicatorLabel">
            Symbols
            </div>
            <div className="miniIndicatorNb">
            {(completedArcaneSymbols + completedGrandisSymbols)} / {(activeArcaneSymbols.length + activeGrandisSymbols.length)}
            </div>
        </div>
    );
}

export default ShowSymbolProg;