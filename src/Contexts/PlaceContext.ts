import { mapboxSugesstionFeature } from "Data/inline-typed";
import { createContext } from "react";

interface IPlaceContext {
  showResult: boolean;
  place: mapboxSugesstionFeature | null;
  setShowResult: (value: boolean) => void;
  setPlace: (value: mapboxSugesstionFeature) => void;
}

const defaultState = {
  showResult: false,
  place: null
};

export const PlaceContext = createContext<Partial<IPlaceContext>>(defaultState);