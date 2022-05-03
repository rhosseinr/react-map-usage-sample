import { mapboxSugesstionList, unsplashListType } from "Data/inline-typed";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN+'';
const UNSPLASH_ACCESS_TOKEN = process.env.REACT_APP_UNSPLASH_ACCESS_KEY+'';
const SUGGEST_LIMIT = 4;
const TYPE = 'place';
const PICTURE_LIMIT = 2;

const get = async <T>(url: string): Promise<T> => {
  try {
    let newUrl=decodeURIComponent(url);
    const res = await fetch(newUrl);
    const data = await res.json();

    return data as T;
  } catch (error) {
    console.log(`An error occurred when fetching data from ${url}`);
    console.log(error);
    throw error;
  }
};
export const getPlaceSuggestions = (placeName: string): Promise<mapboxSugesstionList> =>
  get<mapboxSugesstionList>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${placeName}.json?limit=${SUGGEST_LIMIT}&types=${TYPE}&access_token=${MAPBOX_ACCESS_TOKEN}`);

  export const getPlacePictures = (placeName: string): Promise<unsplashListType> =>
  get<unsplashListType>(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ACCESS_TOKEN}&query=${placeName}&per_page=${PICTURE_LIMIT}&content_filter=high&order_by=latest&orientation=landscape`);