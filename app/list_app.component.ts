import { Component } from 'angular2/core';
import {HolidaysComponent} from './holidays-component';

@Component({
  selector: 'list',   
  template:`<holidays-list></holidays-list>`,
  directives:[HolidaysComponent]
})

export class AppComponent { }