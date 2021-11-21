import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
      const path = `http://api.weatherstack.com/current?
      access_key=23f8c7688b8b65c86bf439e521169c24
      &query=New%20York`;
      return this.http.get(path);
  } 
}
