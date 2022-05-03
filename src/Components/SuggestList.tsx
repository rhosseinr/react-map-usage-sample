import React, { useContext } from 'react';
import { mapboxSugesstionList } from 'Data/inline-typed';
import { PlaceContext } from 'Contexts/PlaceContext';

export type SuggestListProps = {
  data: mapboxSugesstionList | null;
}

function SuggestList(props: SuggestListProps) {
  const { setPlace, setShowResult } = useContext(PlaceContext);
  return (
    <>
      {props.data?.features && props.data?.features.length > 0 &&
        <ul className='suggest-list'>
          {props.data.features.map((item, index) =>
            <li key={index}
              className="suggest-item"
              onClick={() => { setPlace && setPlace(item); setShowResult && setShowResult(true) }}>
              {item.place_name}
            </li>
          )}
        </ul>}
    </>
  );
}

export default SuggestList;
