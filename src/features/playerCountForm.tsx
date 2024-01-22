import React, { useState } from 'react'

interface playerCountFormProps {
    setPlayerCount: (Count: number) => void;
}

function PlayerCountForm({setPlayerCount}: playerCountFormProps) {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const parsedValue = parseInt(inputValue, 10);
        if (!isNaN(parsedValue)) {
            setPlayerCount(parsedValue);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
        <label>
        Number of Players:
        <input 
        type="number"
        min = "2"
        step = "1"
        value = {inputValue}
        onChange={handleInputChange} 
        />
        </label>
        <button type = "submit">Save</button> 
        </form>
    );
};
export default PlayerCountForm