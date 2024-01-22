//playerInitialsForm.tsx

import React , { useState } from "react";

interface playerInitialsFormProps {
    playerCount: number;
    onPlayerInitialsSubmit: (initials: string[]) => void;
}

function PlayerInitialsForm({playerCount, onPlayerInitialsSubmit}: playerInitialsFormProps) {
    const [playerInitials, setPlayerInitials] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedInitials = [...playerInitials];
        updatedInitials[index] = event.target.value.toUpperCase();
        setPlayerInitials(updatedInitials);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event?.preventDefault();
        // check if initials are provided for all players
        if (playerInitials.length === playerCount && playerInitials.every(initial => initial.trim() !== '')) {
            onPlayerInitialsSubmit(playerInitials);
        } else{
            alert('Please provide initials for all players');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2> Enter Player Initials</h2>
            {Array.from({length: playerCount}, (_, index) => (
                <div key={index}>
                    <label>
                        Player {index + 1} Initials:
                        <input
                        type = "text"
                        maxLength = {3}
                        value = {playerInitials[index] || ''}
                        onChange = {(event) => handleInputChange(event, index)}
                        />
                    </label>
                </div>
            ))}
            <button type = "submit">Submit</button>
        </form>
    );
 }

 export default PlayerInitialsForm;




 