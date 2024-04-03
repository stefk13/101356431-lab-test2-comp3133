import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class SpacexApiService {

  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }

  getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?launch_year=${year}`);
  }

  getLaunchDetails(flight_number: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${flight_number}`);
  }

  getLaunchesByFlightNumber(flight_number: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?flight_number=${flight_number}`);
  }
}
