import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './features/HomePage'
import GamePage from './features/GamePage'

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/game/:gameId" element={<GamePage/>} />
    </Routes>
    </Router>
  );
}

export default App
