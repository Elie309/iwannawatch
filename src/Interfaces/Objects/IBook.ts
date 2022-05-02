import { ElementsTypes } from "../Enums";
import IElement from '../IElement'

export default interface IBook extends IElement{

    type: ElementsTypes.Book;
    chapters: number;
    volumes: number;
    authors?: string[];
    translators?: string[];
    illustrators?: string[];
    publishers?: string[];
    date_published?: Date;
    date_finished?: Date;
    language?: string;
    isbn?: string;
    
    //Related Series, Books...
    //series?: Series;

}