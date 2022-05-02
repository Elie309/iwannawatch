import { ElementsTypes, PersonalStateElement, GeneralStateElement } from "./Enums";

export default interface IElement{

    id: number;
    title: string;
    type: ElementsTypes;
    state: PersonalStateElement;
    gernaralState: GeneralStateElement;
    image: string;
    description: string;
    rating?: number;
    tags?: string[];
    StartedDate: Date;
    FinishedDate: Date;
    // source?: string;
    // source_id?: string;
    // source_url?: string;
    // source_rating?: number;

}
