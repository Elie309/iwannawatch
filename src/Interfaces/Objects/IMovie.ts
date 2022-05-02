import { ElementsTypes } from "../Enums";
import IElement from '../IElement'

export interface IMovie extends IElement{

    type: ElementsTypes.Movie;
    year?: number;
    country?: string;
    genres?: string[];
    directors?: string[];
    actors?: string[];
    duration: number;

}
