import { ReleaseTypes } from "./Enums";

export default interface IDate{
    startedAt?: Date;
    finishedAt?: Date;
    releaseTypes?: ReleaseTypes;
}
