/**
 * Get the token from the session
 * @returns Token as String
 */
export function  getAccessToken(): string{
    return sessionStorage.getItem('accessToken') || '';
}

/**
 * Set the access token in the session storage
 * @param token Token to set in the session
 */
export function setAccessToken(token: string): void{
    sessionStorage.setItem('accessToken', token);
}

/**
 * Get the token from the session
 * @returns Token as String
 */
 export function  getRefreshToken(): string{
    return sessionStorage.getItem('refreshToken') || '';
}

/**
 * Set the access token in the session storage
 * @param token Token to set in the session
 */
export function setRefreshToken(token: string): void{
    sessionStorage.setItem('refreshToken', token);
}




