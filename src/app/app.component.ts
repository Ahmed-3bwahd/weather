import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'weather';
  api_keys= 'f3d9fffe14643eac7dce1e1ef593a9ae';
  url_base= 'https:/api.openweathermap.org/data/2.5/';
  query= '';
  weather:any;
  temp;
  name = '';
  country = '';
  state = '';
  cityValid;

  ngOnInit(){}

  getinfo(e) {
    if(e.key == "Enter"){
      fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_keys}`)
      .then(res => { return res.json();})
      .then(data => this.setresaults(data));
      // if (typeof this.weather.main === 'undefined'){ this.cityValid = false}else{this.cityValid = true}
    }
  };

  setresaults (resault) {
    this.weather = resault;
    this.temp = Math.round(this.weather.main.temp);
    this.name = this.weather.name;
    this.country = this.weather.sys.country;
    this.state = this.weather.weather[0].main;
    this.cityValid = this.weather.main
  };

  getdates() {
    let d = new Date();
    return   d.toDateString() ;
  }
}
