import * as bcrypt from 'bcrypt-nodejs';
import { IUser } from '../interfaces/models/user';
import mongoose from '../providers/Database';

// Create the model schema & register your custom methods here
export interface IUserModel extends IUser, mongoose.Document {
	comparePassword(password: string, cb: any): string;
	validPassword(password: string, cb: any): string;
}

// Define the User Schema
export const UserSchema = new mongoose.Schema<IUserModel>({
	email: { type: String, unique: true },
	password: { type: String }
}, {
	timestamps: true
});

// hide private properties before return for client.
UserSchema.methods.toJSON = function() {
	let user = this;
	let userObject = user.toObject();
	delete userObject.password;
	return userObject;
};

// Password hash middleware
UserSchema.pre<IUserModel>('save', function (_next) {
	const user = this;
	if (!user.isModified('password')) {
		return _next();
	}

	bcrypt.genSalt(10, (_err, _salt) => {
		if (_err) {
			return _next(_err);
		}

		bcrypt.hash(user.password, _salt, null, (_err, _hash) => {
			if (_err) {
				return _next(_err);
			}

			user.password = _hash;
			return _next();
		});
	});
});

// Custom Methods

// Compares the user's password with the request password
UserSchema.methods.comparePassword = function (_requestPassword, _cb): any {
	bcrypt.compare(_requestPassword, this.password, (_err, _isMatch) => {
		return _cb(_err, _isMatch);
	});
};

const User = mongoose.model<IUserModel>('User', UserSchema);

export default User;
