import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	evens: number[] = [];

	odds: number[] = [];

	addEvent(evenOdd: {val: number}){
		console.log(evenOdd.val);
		if(evenOdd.val%2 === 0){
			this.evens.push(evenOdd.val);
		} else {
			this.odds.push(evenOdd.val);
		}
	}

}
