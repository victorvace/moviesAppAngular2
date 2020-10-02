import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieDbService {

  constructor(private http: HttpClient) { 
    let params = new HttpParams();
  }
  
  params = params.append('api_key', '81aca90227197885e3861bf1d2e1acd1');
  params = params.append('language', 'es-ES');
  
  public getFilms(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular', {params});
  }

  public getFilm(id: number): Observable<any> {
        return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id, {params});
  }

  public getSeries(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular', {params});
  }

  public getSerie(id: number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/' + id, {params});
  }

}
