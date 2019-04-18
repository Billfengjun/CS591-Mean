import {Component, OnInit} from '@angular/core';
import {WeatherItemComponent} from './weather-item.component';
import {WeatherItem} from './weather-item';
import {WEATHER_ITEMS} from './weather.data';
import {WeatherService} from './weather.service';
@Component({
  selector: 'app-weather-list',
  template: `
    <section class="app-weather-list">
      <app-weather-item *ngFor="let weatherItem of weatherItem" [weatherItem]="weatherItem"></app-weather-item>
    </section> `,

})

export class WeatherListComponent implements OnInit  {
  weatherItem: WeatherItem[];

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): any {
    this.weatherItem = WEATHER_ITEMS;
  }

}
