/* eslint-disable no-restricted-syntax */
import  INTERNAL_SERVER_ERROR from './http-status';

class APIError extends Error {
  errors: string;
  status: { ACCEPTED: number; BAD_GATEWAY: number; BAD_REQUEST: number; CONFLICT: number; CREATED: number; FORBIDDEN: number; GATEWAY_TIMEOUT: number; INTERNAL_SERVER_ERROR: number; NOT_FOUND: number; NOT_IMPLEMENTED: number; OK: number; PAYMENT_REQUIRED: number; PRECONDITION_FAILED: number; PROXY_AUTHENTICATION_REQUIRED: number; REQUEST_TOO_LONG: number; REQUEST_URI_TOO_LONG: number; SERVICE_UNAVAILABLE: number; TOO_MANY_REQUESTS: number; UNAUTHORIZED: number; UNPROCESSABLE_ENTITY: number; };
  /**
   *
   * @param {param} param0
   */
  constructor({
    message = 'Internal server error occured',
    stack,
    errors,
    status = INTERNAL_SERVER_ERROR,
  }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.stack = stack;
  }
}

export default APIError;
