import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  responseType?: 'json';
}

export interface StarPeople {
  count: number;
  next: string;
  previous: string;
  results: PeopleData[];
}

export interface PeopleData {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PaginationParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  page: number;
  // perPage: number;
}

export interface DetailPeopleData {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface DetailFilmData {
  title: string;
  name: string;
  // characters: string[];
  // created: string;
  // director: string;
  // edited: string;
  // episode_id: number;
  // opening_crawl: string;
  // planets: string[];
  // producer: string;
  // release_date: string;
  // species: string[];
  // starships: string[];
  // title: string;
  // url: string;
  // vehicles: string[];
}
