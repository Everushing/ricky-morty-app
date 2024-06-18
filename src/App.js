import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, selectCharacters } from './store';
import './App.css'; // Import CSS file

function App() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <div>
              <h2>{character.name}</h2>
              <p>{character.species} - {character.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
