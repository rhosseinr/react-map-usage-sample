import React, { useState } from 'react';
import { PlaceContext } from 'Contexts/PlaceContext';
import { ResultPage, SearchPage } from 'Pages';
import { mapboxSugesstionFeature } from 'Data/inline-typed';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [place, setPlace] = useState<mapboxSugesstionFeature>();
  return (
    <div className="app">
      <PlaceContext.Provider value={{ showResult, setShowResult, place, setPlace }}>
        <>
          {showResult ? <ResultPage /> : <SearchPage />}
        </>
      </PlaceContext.Provider>
    </div>
  );
}

export default App;
