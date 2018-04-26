import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{

	@Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
  	console.log('constructor log');
  }

  //Life cycle hooks. Look up for full list
  ngOnInit() {
  	console.log('ngOnInit log');
  }

  ngOnChanges(changes: SimpleChanges) {
  	//Good if you want the aold value of a changed element and the new value 
  	console.log(changes);
  }
}
