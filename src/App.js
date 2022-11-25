import Box from './components/Box';
import Meals from './components/Meals';
import Card from './components/Card';
import "./components/stylez.css"
import { useState } from "react";
import './App.css';

function App() {
  const [index, setIndex] = useState(1);
  function moveCard(i) {
    setIndex(i);
  }
  

  return (
        <div>
            <div className="App">
              <Meals/>
            </div>
          <div className="app">
                <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
                <Box card={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
          </div>
          <div className='List'>
           <Box card={index === 3} moveCard={moveCard.bind(null, 3)}></Box>
           <Box card={index === 4} moveCard={moveCard.bind(null, 4)}></Box>
          </div>
        </div>
        );
      }

export default App;
