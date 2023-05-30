import APIError from '../utils/APIError';
import httpStatus from '../utils/http-status';


/**
 * Global Error Handler Sends Stack Trace only during Development Environment
 *
 * @public
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {next} next
 */
export const Handler = (err, req, res, next) => {
    const response = {
      statusCode: err.status || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
      errors: err.errors,
      stack: err.stack,
    };
    if (process.env.NODE_ENV === 'production') delete response.stack;
    res.status(response.statusCode).json(response);
    res.end();
  };

