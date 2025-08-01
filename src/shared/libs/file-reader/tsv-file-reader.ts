import { FileReader } from './index.js';
import { readFileSync } from 'node:fs';
import { HousingType, RentOffer, SixCities, User, UserType, Amenity, Coordinates, Comment } from '../../types/index.js';

export class TSVFileReader implements FileReader {
	private rawData = '';

	constructor(
		private readonly filename: string
	) { }

	public read(): void {
		this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
	}

	public toArray(): RentOffer[] {
		this.validateRawData();
		return this.parseRawDataToOffers();
	}

	private validateRawData(): void {
		if (!this.rawData) {
			throw new Error('File was not read');
		}
	}

	private parseRawDataToOffers(): RentOffer[] {
		return this.rawData
			.split('\n')
			.filter((row) => row.trim().length > 0)
			.map((line) => this.parseLineToOffer(line));
	}

	private parseLineToOffer(line: string): RentOffer {
		const [
			name,
			description,
			publishDate,
			city,
			previewImage,
			images,
			isPremium,
			isFavorite,
			rating,
			type,
			rooms,
			guests,
			price,
			amenity,
			landlord,
			comments,
			mapCoordinates
		] = line.split('\t');

		const [userName, userMail, userPassword, userType] = landlord.split(';');
		const [latitude, longitude] = mapCoordinates.split(';');
		const [commentText, commentPublishDate, commentRating, commentUserName, commentUserMail, commentUserPassword, commentUserType] = comments.split(';');

		const landlordObj: User = { name: userName, mail: userMail, password: userPassword, type: userType as UserType }

		const coordinatesObj: Coordinates = {
			latitude: parseFloat(latitude),
			longitude: parseFloat(longitude)
		}

		const commentObj: Comment = {
			text: commentText,
			publishDate: new Date(commentPublishDate),
			rating: parseInt(commentRating, 10),
			author: {
				name: commentUserName,
				mail: commentUserMail,
				password: commentUserPassword,
				type: commentUserType as UserType
			}
		}

		return {
			name,
			description,
			publishDate: new Date(publishDate),
			city: city as SixCities,
			previewImage,
			images: images.split(';'),
			isPremium: isPremium === 'true',
			isFavorite: isFavorite === 'true',
			rating: Number.parseFloat(rating),
			type: type as HousingType,
			rooms: Number.parseInt(rooms, 10),
			guests: Number.parseInt(guests, 10),
			price: Number.parseInt(price, 10),
			amenity: amenity.split(';') as Amenity[],
			landlord: landlordObj,
			comments: commentObj,
			mapCoordinates: coordinatesObj
		};
	}
}
