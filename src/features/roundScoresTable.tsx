//roundScoresTable.tsx
import React from 'react'

interface roundScoresTableProps {
    playerInitials: string[];
    rounds: number[][];
}

function RoundScoresTable ({playerInitials, rounds}: roundScoresTableProps) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Round</th>
                    {playerInitials.map((initial, index) => (
                        <th key={index}>{initial}</th>
                    ))}
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {rounds.map((round, roundIndex) => (
                    <tr key={roundIndex}>
                        <td>Round {roundIndex +1}</td>
                        {round.map((score, playerIndex) => (
                            <td key={playerIndex}>{score}</td>
                        ))}
                        <td>{round.reduce((sum, score) => sum + score, 0 )}</td>
                    </tr>
                ))}
                    <tr>
                        <td> Total </td>
                        {playerInitials.map((_, playerIndex) => (
                            <td key={playerIndex}>
                                {rounds.reduce((sum, round) => sum + round[playerIndex], 0)} </td>
                        ))}
                        <td>{rounds.reduce((sum, round) => sum + round.reduce((sum, score) => sum + score, 0), 0)}</td>
                    </tr>
            </tbody>
        </table>
    );
}

export default RoundScoresTable;