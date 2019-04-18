import {Component, Input} from '@angular/core';
import {WeatherItem} from './weather-item';

@Component({
  selector: 'app-weather-item',
  template: `
  <article class="weather-element">
    <div class="col-1">
      <h3>{{weatherItem.cityname}}</h3>
      <p></p>
    </div>
    <div class="col-2">
      <span class="temp">{{weatherItem.temperature}}F</span>
    </div>
  </article>`,
  inputs:['weatherItem']



})

export class WeatherItemComponent {
  weatherItem: WeatherItem;



}
