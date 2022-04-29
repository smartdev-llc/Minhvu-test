import * as Jwt from 'jsonwebtoken';
import UserModel from '../models/User';

import Log from './Log';
import Locals from '../providers/Locals';

class CsrfToken {

	public static async verifyToken(req, res, next) {
		try {
			let token =  req.header('Authorization').replace('Bearer ', '');
			if (!token) {
				return res.json({message: 'Token is invalid, please login'}).status(401);
			}
			let decode = Jwt.verify(token, Locals.config().appSecret);
			if (decode.email) {
				const user = await UserModel.findOne({email: decode.email});
				if (!user) {
					return res.json({message: 'Token is invalid'}).status(401);
				}
				return next();
			}
			return res.json({message: 'Token is invalid'}).status(401);
		} catch (err) {
			console.log(err);
		}
	}
}

export default CsrfToken;
