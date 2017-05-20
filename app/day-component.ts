import {Component, OnInit} from "angular2/core";

@Component({
   selector: 'holidays-list',
   template: `<h2>Holiday Details</h2>
               <p>{{name}}</p>
               <p>{{date}}</p>
               <p>{{observed}}</p>
               <p>{{public}}</p>`
})

export class DayComponent implements OnInit{

	loaddetails(){
		alert("here");
	}

	ngOnInit() {
      this.loaddetails();
   }
}