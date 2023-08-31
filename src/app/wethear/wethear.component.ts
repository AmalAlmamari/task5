import { Component, OnInit } from '@angular/core';
import { WethearService } from '../wethear.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-wethear',
  templateUrl: './wethear.component.html',
  styleUrls: ['./wethear.component.css']
})
export class WethearComponent implements OnInit {
  myWeather: any;
  city: string = 'Oman';
  units: string = 'imperial'
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
iconURL:string='';
cityName: string = '';

  constructor(private wethearService: WethearService) { }

  ngOnInit(): void {
    this.wethearService.getweather(this.city).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather=res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        
        this.iconURL='https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
        
      },
      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
   
  }

   
}
