import { User } from './index.js';

export interface Comment {
	text: string;
	publishDate: Date;
	rating: number;
	author: User;
}
