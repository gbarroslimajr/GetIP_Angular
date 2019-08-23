import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'meuip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() HeaderText:string;

  constructor() { }

  ngOnInit() {
    this.HeaderText = "Angular 8";
  }

}
