import IElement from "../Interfaces/IElement";
import { ElementsTypes, PersonalStateElement, GeneralStateElement } from "../Interfaces/Enums";

export const data: IElement[] = [
    {
    "id": 1,
    "title": "string",
    "type": ElementsTypes['Other'],
    "state": PersonalStateElement['PlanToWatch'],
    "gernaralState": GeneralStateElement['OnGoing'],
    "image": "string",
    "description": "string",
    "tags": ['string', 'string'],
    }
]
