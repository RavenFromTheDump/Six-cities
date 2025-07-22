export type UserType = 'standard' | 'pro';

export interface User {
	name: string;
	mail: string;
	password: string;
	type: UserType;
	avatar?: string | './img/user/default.png';
}
