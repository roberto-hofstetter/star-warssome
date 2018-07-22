import { Person } from '../interfaces/person'

export interface Film {
    id: number;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: Person[];
    /*planets: string;
    starships: string;
    vehicles: string;
    species: string;*/
    created: string;
    edited: string;
    url: string;
}
