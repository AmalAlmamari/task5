import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WethearService {

  constructor(private http: HttpClient) {} 

  getweather(city:string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ef3ad99765afe01acd2dc990df203049');
  }
}
