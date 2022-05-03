import { LngLatLike } from "mapbox-gl";

export type mapboxSugesstionList = {
  type: string;
  query: Array<string>;
  features: Array<mapboxSugesstionFeature>;
  attribution: string;
}

export type mapboxSugesstionFeature = {
  id: string;
  type: string;
  place_type: Array<string>;
  relevance: number;
  properties: { wikidata: string; };
  text: string;
  place_name: string;
  bbox: Array<number>;
  center: LngLatLike;
  geometry: { type: string; coordinates: Array<number>; },
  context: [
    {
      id: string;
      short_code: string;
      wikidata: string;
      text: string;
    },
    {
      id: string;
      wikidata: string;
      short_code: string;
      text: string;
    }
  ]
}

export type unsplashListType={
  total: number;
  total_pages: number;
  results: Array<unsplashResultItem>;
}

export type unsplashResultItem={
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  },
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  },
  categories: Array<any>;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: Array<any>;
  sponsorship: string;
  topic_submissions: {
    wallpapers: {
      status: string;
      approved_on: string;
    },
    travel: {
      status: string;
      approved_on: string;
    }
  },
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    },
    profile_image: {
      small: string;
      medium: string;
      large: string;
    },
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string;
    }
  },
  tags: Array<unsplashTag>;
}

export type unsplashTag={
  type: string;
  title: string;
}