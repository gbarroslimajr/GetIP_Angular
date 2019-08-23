import { Component, NgZone } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'meuip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeuIP';
  ipAddress:any;
  
  constructor(private http: HttpClient){
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log('th data', data);
      this.ipAddress = data
    })
  }




}
