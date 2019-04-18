import { Component } from '@angular/core';
import {WeatherListComponent} from './weather/weather-list.component';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>CS591HW4 Weather Searcher</h1>
    </header>
    <app-search></app-search>
    <app-weather-list></app-weather-list>
  `,
})
export class AppComponent {
  title = 'CS591hw4';
}
