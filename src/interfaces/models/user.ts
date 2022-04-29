
export interface Tokens {
	kind: string;
	accessToken: string;
	tokenSecret?: string;
}

export interface IUser {
	email: string;
	password: string;
	createdAt: string;
	updateAt: string;
}

export default IUser;
