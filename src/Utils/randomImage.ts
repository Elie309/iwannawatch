import RandomElementInArray from "./RandomElementInArray";

/**
 * 
 * @param pathPattern The path pattern to use in images folder
 * @param min The minimum number of images 
 * @param max the maximum number of images
 * @param filesExtension The extension of the images - They should be all the same extension
 * @returns returns a random require(imagePath);
 */
export default function randomImage(pathPattern: string, min: number, max: number, filesExtension: string): any {
    let rond = RandomElementInArray(min, max);
    return require('../assets/images/'+ pathPattern + rond +"."+ filesExtension);
  }