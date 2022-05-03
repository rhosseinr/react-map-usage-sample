import React, { useEffect, useState } from 'react';
import { InputBox, SuggestList } from 'Components';
import { mapboxSugesstionList } from 'Data/inline-typed';
import { getPlaceSuggestions } from 'Services/api';

function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [suggestList, setSuggestList] = useState<mapboxSugesstionList | null>(null);

  useEffect(() => {
    if (searchText.length === 0) {
      setSuggestList(null);
      return;
    };
    getPlaceSuggestions(searchText).then((data) => {
      setSuggestList(data);
    });
  }, [searchText])

  return (
    <div className="search-container">
      <div className='col'>
        <InputBox
          type='search'
          palceHolder='Enter City Name'
          onChange={(e) => setSearchText(e.target.value)} />
        <SuggestList data={suggestList} />
      </div>
    </div>
  );
}

export default SearchPage;
