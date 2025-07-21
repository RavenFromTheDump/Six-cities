import { User } from './user.type.js';

type SixCities = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
type HousingType = 'apartment' | 'house' | 'room' | 'hotel';
type Amenity = | "Breakfast" | "Air conditioning" | "Laptop friendly workspace" | "Baby seat" | "Washer" | "Towels" | "Fridge";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface rentOffer {
  name: string;
  description: string;
  publishDate: Date;
  city: SixCities;
  imgPreview: string;
  imgOffer: [string];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HousingType;
  rooms: number;
  guests: number;
  price: number;
  amenity: Amenity[];
  landlord: User;
  comments: number;
  mapCoordinations: Coordinates;
}
