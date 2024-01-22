import React from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

function HomePage() {
    const navigate = useNavigate();

    const startNewGame = () => {
        const gameId = uuidv4();
       navigate(`/game/${gameId}`);
    };
    
    return(
        <div>
        <h1> Welcome to ShiThead</h1>
        <button onClick={startNewGame}>Start New Game</button>
        </div>
    );
}

export default HomePage