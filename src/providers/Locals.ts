
import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
	/**
	 * Makes env configs available for your app
	 * throughout the app's runtime
	 */
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../.env') });

		const environment = process.env.NODE_ENV || 'development';
		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const port = process.env.PORT || 4040;
		const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
		const mongooseUrl = process.env.MONGOOSE_URL;
		const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';
		const description = process.env.APP_DESCRIPTION || 'Here goes the app description';

		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
		const apiPrefix = process.env.API_PREFIX || 'api';

		const logDays = process.env.LOG_DAYS || 10;

		return {
			environment,
			appSecret,
			apiPrefix,
			description,
			isCORSEnabled,
			jwtExpiresIn,
			logDays,
			maxParameterLimit,
			mongooseUrl,
			port,
			url
		};
	}

	/**
	 * Injects your config to the app's locals
	 */
	public static init (_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;
