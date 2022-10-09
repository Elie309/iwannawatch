
/**
 * JSON format containing page width dimensions
 */
const PageDimensions = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
}

/**
 * Enum for page width dimensions
 */
export enum EPageDimensions {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    "2xl" = "2xl",
}

/**
 * Return true if the page width is less than the given dimensions, false otherwise
 * if one value is true, it will return true
 * @param dimensions[]
 * @returns boolean
 */
export function CheckPageWidthDimensions(...dimensions: EPageDimensions[]): boolean {

    for(let i = 0; i < dimensions.length; i++){
        if(getWebPageWidth() < PageDimensions[dimensions[i]]){
            return true;
        }
    }

    return false;
}

/**
 * Get the width of the web page
 * @returns number
 */
export function getWebPageWidth(): number {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

/**
 * Get the height of the web page
 * @returns number
 */
export function getWebPageHeight(): number {
    return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
}
