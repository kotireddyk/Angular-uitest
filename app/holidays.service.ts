import {Injectable} from 'angular2/core';
import {HOLIDAYS} from "./holidays.list";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HolidaysService {
    public Holidays = [];
    loadlist() : Observable<Holidays[]>{
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
                  		this.Holidays.push(cdata2.name);
                  		console.log(this.Holidays);
               		}
            	}
         	}
	    }).catch((ex) => {
	       console.error('Error fetching users', ex);
	    });    
     }
}