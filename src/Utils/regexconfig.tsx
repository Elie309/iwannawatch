/**
 * Regular Expression for email validation
 */
export const regEmail = new RegExp("^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");


/**
 * Regular Expression for Password
 * - Minimum eight characters
 * - At least one uppercase letter
 * - One lowercase letter
 * - One number
 * - One special character:
 */
export const regPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");