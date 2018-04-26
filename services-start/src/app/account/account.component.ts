import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
 //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

   constructor(private log:LoggingService, private accountsService:AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.update(this.id, status);
    //this.log.logStatus(status);
  }
}
