import {Component, OnInit} from "angular2/core";
import { MaterializeModule } from "angular2-materialize";
import {DayComponent} from "./day-component";

@Component({
   selector: 'holidays-list',
   template: `
               <md-card id="page-padding">
                  <h2>List of all 2015 USA Holidays</h2>
                  <md-list class="app-list">
                     <md-list-item *ngFor="#day of holidays">
                        <p md-line class="demo-secondary-text"><a href="/list/{{day}}">{{day}}</a></p>
                     </md-list-item>
                  </md-list>
               </md-card>
            `,
   directives:[DayComponent];
})

export class HolidaysComponent implements OnInit {
   public holidays=[];
   loadUsers() {
     fetch('https://holidayapi.com/v1/holidays?country=US&year=2015&key=cbe17756-ccb2-4cf9-8154-54012ec79f73')
      .then((response) => {
       return response.json();
     }).then((data) => {       
         for(var i1 in data)
         {
            var cdata = data[i1];
            for(var i2 in cdata)
            {
               var cdata1 = cdata[i2];
               for(var i3 in cdata1)
               {
                  var cdata2 = cdata1[i3];
                  this.holidays.push(cdata2.name);
              }
            }
         }
     }).catch((ex) => {
       console.error('Error fetching users', ex);
     });
   }

   ngOnInit() {
      this.loadUsers();
   }
   
}