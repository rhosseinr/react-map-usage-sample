import React, { useContext, useEffect, useState } from 'react';
import { PlaceContext } from 'Contexts/PlaceContext';
import { unsplashListType } from 'Data/inline-typed';
import { getPlacePictures } from 'Services/api';


function ImageList() {
  const { place } = useContext(PlaceContext);
  const [pictureList, setPictureList] = useState<unsplashListType | null>(null);

  useEffect(() => {
    if (!place) return;
    let tags=place.place_name.trim().split(',');
    getPlacePictures(tags[0]).then((data) => {
      setPictureList(data);
    });
  }, [place])

  return (
    <div className='image-list'>
      {pictureList && pictureList.results.map((item, index) =>
        <img className='image-preview' key={index} src={item.urls.small_s3} alt={place?.place_name} />
      )}
    </div>
  );
};

export default ImageList;
