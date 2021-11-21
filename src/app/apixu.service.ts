import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
      const path = `http://api.weatherstack.com/current
      ? access_key = fa2bb5cac9a4eff4e13ee93bc80a6cd2
      & query = ${location}`;
      return this.http.get(path);
  } 
}
