
import Log from '../middlewares/Log';
import Locals from '../providers/Locals';

class Handler {
	/**
	 * Handles all the not found routes
	 */
	public static notFoundHandler(_express): any {
		const apiPrefix = Locals.config().apiPrefix;

		_express.use('*', (req, res) => {
			const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
			Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
			return res.status(400).json({
				error: 'API not found'
			});
		});

		return _express;
	}

	public static handlerError(err, req, res): any {
		if (Locals.config().environment === 'production') {
			Log.error(err.stack);
		}
		if (Locals.config().environment === 'development') {
			console.error(err);
		}
		return res.status(500).json({message: 'Something went wrong, please try again later' });
	}
}

export default Handler;
