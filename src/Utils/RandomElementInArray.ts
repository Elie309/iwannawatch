/**
 * Return a random element between a min and max value which are also included
 * @param min The minimum value
 * @param max The maximum value
 * @returns A random value between min and max
 */
export default function RandomElementInArray(min: number, max: number): number{

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
