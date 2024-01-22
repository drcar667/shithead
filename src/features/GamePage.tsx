import {useParams} from 'react-router-dom'
import React, {useState} from 'react'
import PlayerCountForm from './playerCountForm'
import PlayerInitialsForm from './playerInitialsForm'
import RoundScoresForm from './roundScoresForm'
import RoundScoresTable from './roundScoresTable'

function GamePage() {
    const {gameId} = useParams<{gameId: string}>()
    const [playerCount, setPlayerCount] = useState< number | undefined>(undefined);
    const [playerInitials, setPlayerInitials] = useState<string[]>([]);
    const [rounds, setRounds] = useState<number[][]>([]);
    const [currentRound, setCurrentRound] = useState<number>(1);
    
    const calculateDeckCount = () => {
        if (playerCount !== undefined) {
            return Math.ceil((playerCount * 19) / 52);
        }
        return undefined;
    };
    const handlePlayerCountSubmit = (playerCount: number) => {
        setPlayerCount(playerCount);
    };
    const handlePlayerInitialsSubmit = (playerInitials: string[]) => {
        setPlayerInitials(playerInitials);
    };

    const handleRoundScoresSubmit = (scores: number[]) => {
        setRounds([...rounds, scores]);
        setCurrentRound(currentRound + 1);
    };

    return(
        <div>
        <h1>Game {gameId}</h1>
        <PlayerCountForm setPlayerCount={handlePlayerCountSubmit} />

        {playerCount !== undefined && (
            <div>
                <p>Number of Decks Needed: {calculateDeckCount()}</p>
                <PlayerInitialsForm playerCount={playerCount} onPlayerInitialsSubmit={handlePlayerInitialsSubmit} />
                <RoundScoresForm
                playerCount = {playerCount}
                roundNumber = {currentRound}
                onRoundScoresSubmit = {handleRoundScoresSubmit}
                playerInitials={playerInitials}
                />
                <RoundScoresTable playerInitials = {playerInitials} rounds = {rounds} />
            </div>
        )}
        </div>
    );
}

export default GamePage