import { Rating } from './../Interfaces/IElement';
import IElement from "../Interfaces/IElement";
import { ElementsTypes, PersonalStateElement, GeneralStateElement, ReleaseTypes } from "../Interfaces/Enums";
import { faker } from '@faker-js/faker';

let data: IElement[] = [];

const ElementTypesArray: (string | ElementsTypes)[] = Object.values(ElementsTypes).filter(type => typeof type !== 'number');
const PersonalStateElementArray: (string | PersonalStateElement)[] = Object.values(PersonalStateElement).filter(type => typeof type !== 'number');
const GeneralStateElementArray: (string | GeneralStateElement)[] = Object.values(GeneralStateElement).filter(type => typeof type !== 'number');
const ReleaseTypesArray: (string | ReleaseTypes)[] = Object.values(ReleaseTypes).filter(type => typeof type !== 'number');
const RatingArray: (string | Rating)[] = Object.keys(Rating).filter(type => typeof type !== 'number');

function createElement(): IElement {

   
   
    const element: IElement = {
        id: faker.database.mongodbObjectId(),
        title: faker.lorem.slug(),
        type: faker.helpers.arrayElement(ElementTypesArray) as ElementsTypes,
        description: faker.lorem.paragraph(),
        tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        image: faker.image.imageUrl(),
        state: faker.helpers.arrayElement(PersonalStateElementArray) as PersonalStateElement,
        rating: faker.helpers.arrayElement(RatingArray) as Rating,
        gernaralState: faker.helpers.arrayElement(GeneralStateElementArray) as GeneralStateElement,
        releaseTypes: faker.helpers.arrayElement(ReleaseTypesArray) as ReleaseTypes,
        startedAt: faker.date.past(),
        finishedAt: faker.date.future(),


    }


    return element;

}


export function fillData(amount: number): IElement[] {

    for (let i = 0; i < amount; i++) {
        data.push(createElement());
    }

    return data;

}