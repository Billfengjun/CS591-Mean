import {Component} from '@angular/core';
import { FormGroup, } from '@angular/forms';
import {WeatherService} from './weather.service';
import {WeatherItem} from './weather-item';

@Component({
  selector: 'app-search',
  template : `
    <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
      <input
        type="text"
        required
        minlength="3"
        name="cityname"
        [(ngModel)]="username"
        #userName="ngModel">
      <div >
      <label for="city">city</label>

      <button type="submit">Submit</button>
      </div>
    </form>
  `,
})
export class SearchComponent {
  username = '';
  constructor(private weatherService: WeatherService) {}
  onSubmit(value) {
    console.dir(value);
    this.weatherService.searchweather(value.cityname)._subscribe(
      data =>{
        const weatherItem = new WeatherItem(data.name, data.main.temp);
        this.weatherService.addWeatherInfo(weatherItem);
      }
    )
  }


}
