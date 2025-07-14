import React from 'react';
import CatGrid from './components/CatGrid';
import { catProfiles } from './data/cats';

function App() {
  return (
    <main>
      <h1>Cat Profiles</h1>
      <div className="grid-container">
        <CatGrid cats={catProfiles} />
      </div>
    </main>
  );
}

export default App;
