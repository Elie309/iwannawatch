/**
 * Regular Expression for email validation
 * - Characters before and after the @
 * - At least one dot after the @
 * - A-Z characters allowed
 * - a-z characters allowed
 * - 0-9 numbers allowed
 * - Additionally email may contain only dot(.), dash(-), underscore(_) and other special characters
 * -
 */
export const regEmail = new RegExp("^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");


/**
 * Regular Expression for Password - Complex
 * - Minimum eight characters
 * - At least one uppercase letter
 * - One lowercase letter
 * - One number
 * - One special character:
 */
export const regPasswordForRegistration = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");


/**
 * Regular Expression for Password - Simple
 * - Minimum eight characters
 */
export const regPasswordForLogin = new RegExp("^(?=.*\d).{8,}$");