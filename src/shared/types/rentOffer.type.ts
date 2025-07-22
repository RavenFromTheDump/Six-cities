import { User } from './index.js';

export type SixCities = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
export type HousingType = 'apartment' | 'house' | 'room' | 'hotel';
export type Amenity = | "Breakfast" | "Air conditioning" | "Laptop friendly workspace" | "Baby seat" | "Washer" | "Towels" | "Fridge";

export interface Coordinates {
	latitude: number;
	longitude: number;
}

export interface RentOffer {
	name: string;
	description: string;
	publishDate: Date;
	city: SixCities;
	previewImage: string;
	images: string[];
	isPremium: boolean;
	isFavorite: boolean;
	rating: number;
	type: HousingType;
	rooms: number;
	guests: number;
	price: number;
	amenity: Amenity[];
	landlord: User;
	comments: string[];
	mapCoordinates: Coordinates;
}
