import { ElementsTypes, PersonalStateElement, GeneralStateElement } from "./Enums";
import IDate from "./IDate";

export default interface IElement extends IDate{

    id: number | string;
    title: string;
    type: ElementsTypes;
    state?: PersonalStateElement;
    rating: Rating;
    gernaralState?: GeneralStateElement;
    image?: string;
    description?: string;
    tags?: string[];

}

export enum Rating {
    ZERO_STAR = 0,
    ONE_STAR = 1,
    TWO_STARS = 2,
    THREE_STARS = 3,
    FOUR_STARS = 4,
    FIVE_STARS = 5

}
