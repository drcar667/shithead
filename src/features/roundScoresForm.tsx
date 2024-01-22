// roundScoresForm.tsx

import React , { useState } from "react";

interface RountScoresFormProps{
    playerCount: number;
    roundNumber: number;
    onRoundScoresSubmit: (Scores: number[]) => void;
    playerInitials: string[];
}

function RoundScoresForm({playerCount, roundNumber, onRoundScoresSubmit, playerInitials}: RountScoresFormProps) {
    const [Scores, setScores] = useState<number[]>(Array(playerCount).fill(0));

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedScores = [...Scores];
        updatedScores[index] = parseInt(event.target.value, 10);
        setScores(updatedScores);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onRoundScoresSubmit(Scores);
        setScores(Array(playerCount).fill(0));
    };

    return(
        <form onSubmit = {handleSubmit}>
            <h2> Enter Scores for Round {roundNumber}</h2>
            {Array.from({ length: playerCount }, (_, index) => (
                <div key={index}>
                  <label>
                    {playerInitials[index]} Score:
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={Scores[index]}
                      onChange={(event) => handleInputChange(event, index)}
                    />
                  </label>
                </div>
              ))}
              <button type="submit">Add Round Scores</button>
        </form> 
    );

}

export default RoundScoresForm;

