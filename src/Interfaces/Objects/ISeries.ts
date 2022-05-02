import DateAnnotation from "../IDate";
import  IElement from "../IElement";
import { ElementsTypes, PersonalStateElement, GeneralStateElement, SeriesType } from "../Enums";

export interface ISeries extends IElement{

    type: ElementsTypes.Series;
    seasons: ISeason[];
    series_type: SeriesType[];

    series_start?: Date;
    series_end?: Date;
    series_image?: string;
    series_description?: string;
    series_rating?: number;
    series_tags?: string[];
    series_genres?: string[];
    series_directors?: string[];
    series_actors?: string[];
    series_date_published?: Date;
    series_date_finished?: Date;
    series_language?: string;
    series_isbn?: string;
    series_source?: string;
    series_source_id?: string;
    series_source_url?: string;
    series_source_rating?: number;


}

export interface ISeason extends DateAnnotation{
    id: number;

    episodes_number: number
    episodes: IEpisode[];
    duraction: number;
    season_status?: GeneralStateElement;
    season_start?: Date;
    season_end?: Date;
    season_image?: string;
    season_description?: string;
    season_rating?: number;


    season_directors?: string[];
    season_actors?: string[];
    season_date_published?: Date;
    season_date_finished?: Date;
    season_language?: string;
    season_isbn?: string;

}

export interface IEpisode {
    id: number;
    title?: string;
    season_id: number;
    episode_number: number;
    episodes_status?: PersonalStateElement;
}