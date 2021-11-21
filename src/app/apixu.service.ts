import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
      const path = `http://api.weatherapi.com/v1/current.json?key=370a7158e28244f384e175732212111&q=${location}`;
      return this.http.get(path);
  } 
}
