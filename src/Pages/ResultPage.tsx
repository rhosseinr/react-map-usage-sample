import React, { useContext } from 'react';
import { PlaceContext } from 'Contexts/PlaceContext';
import { MapPreview } from 'Components';
import ImageList from 'Components/ImageList';

function ResultPage() {
  const { place, setShowResult } = useContext(PlaceContext);
  return (
    <div className="result-container">
      <div className="description-section">
        <div className='title'>
          <h2>{place?.place_name}</h2>
          <h6>
            <a href={"https://www.wikidata.org/wiki/" + place?.properties.wikidata} rel="noreferrer" target="_blank">More Info</a>
          </h6>
        </div>
        <ImageList />
        <div>
          <button className='btn' onClick={() => setShowResult && setShowResult(false)}>
            Search Again
          </button>
        </div>
      </div>
      <div className="map-section">
        <MapPreview />
      </div>
    </div>
  );
}

export default ResultPage;
