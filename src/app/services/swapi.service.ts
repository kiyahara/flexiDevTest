import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private apiService: ApiService) {}

  getStarWarsData = (
    url: string,
    pagination?: PaginationParams
  ): Observable<any> => {
    if (pagination == undefined) {
      return this.apiService.get(url, {
        responseType: 'json',
      });
    } else {
      return this.apiService.get(url, {
        params: pagination,
        responseType: 'json',
      });
    }
  };
}
