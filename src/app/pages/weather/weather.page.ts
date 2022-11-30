import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { WeatherService } from '../../services/weather.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  pageTitle = 'Weather';
  isNotHome = false;

  weather;



  constructor(
    private weatherService: WeatherService, 
    public alertController:AlertController,
    public actionSheetController:ActionSheetController,
    ){ 
  
  }


  ngOnInit() {

  }


  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      res => {
        console.log(res);
        this.weather = res},
      err => console.log(err)
    )
  }

  submitLocation(cityName: HTMLInputElement, countryCode:HTMLInputElement){
    if (cityName.value && countryCode.value){
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = "";
      countryCode.value = "";
    }else {
      alert('Please. Inserte some value')
    }
    cityName.focus();
    return false;
  }

}

