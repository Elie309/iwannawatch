import { ElementsTypes, PersonalStateElement, GeneralStateElement } from "./Enums";
import IDate from "./IDate";

export default interface IElement extends IDate, Rating{

    id: number;
    title: string;
    type: ElementsTypes;
    state?: PersonalStateElement;
    gernaralState?: GeneralStateElement;
    image?: string;
    description?: string;
    tags?: string[];

}

export interface Rating {
    rating?: 0 | 1 | 2 | 3 | 4 | 5 ;
}
