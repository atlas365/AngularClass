import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() evenOddEvent = new EventEmitter<{val: number}>();

  timer;

  number:number = 0;

  constructor() { }

  ngOnInit() {
  }

  start(){
  	this.timer = setInterval(() => this.sendEvent(), 1000);
  }

  stop(){
  	clearInterval(this.timer);
  }

 sendEvent(){
  	console.log(this.number)
  	this.evenOddEvent.emit({val: this.number});
  	this.number = this.number + 1;
  }

}
