import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output('sCreated') serverCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverName') serverNameInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  addServer(contentInput: HTMLInputElement) {
   	this.serverCreated.emit({serverName: this.serverNameInput.nativeElement.value, serverContent: contentInput.value});
   	this.serverNameInput.nativeElement.value = '';
 	contentInput.value = '';
  }

  addBlueprint(contentInput: HTMLInputElement) {
   this.blueprintCreated.emit({serverName: this.serverNameInput.nativeElement.value, serverContent: contentInput.value});
   this.serverNameInput.nativeElement.value = ''; //Shouldn't do this to manipulat DOM
   contentInput.value = ''; //Use string interpolation and other angular tools
  }
}
