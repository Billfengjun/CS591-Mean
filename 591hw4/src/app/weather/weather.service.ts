import { Injectable } from '@angular/core';
import {WEATHER_ITEMS} from './weather.data';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {WeatherItem} from './weather-item';



@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherInfo() {
    return WEATHER_ITEMS;
  }
  addWeatherInfo(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchweather(cityname: string): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=66a82f3570fd68f9dcf69a24811b7644').
    pipe(map(res => res.json()));
  }

}
