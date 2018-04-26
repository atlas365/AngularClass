import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	projectForm: FormGroup;

	invalidName='Test';

	ngOnInit () {
		this.projectForm = new FormGroup({
			'projectName': new FormControl(null, [Validators.required], this.forbiddenNameAsync),
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'status': new FormControl(null)
		});

	console.log(this.projectForm.value);
	}

	onSubmit() {
  		console.log(this.projectForm.value);

  }

  	//forbiddenName(control:FormControl):{[s: string]: boolean} {
  	//	if(this.invalidName === control.value){
  	//		return {'nameIsForbidden': true}
  	//	}
  	//	return null;
  	//}

  	forbiddenNameAsync(control:FormControl):Promise<any> | Observable<any> {
  		const promise = new Promise<any>((resolve, reject) => {
  			setTimeout(() => { 
  				if('Test' === control.value){
  					resolve({'nameIsForbidden': true});
  				} else {
  					resolve(null);
  				}
  			}, 1000);
  		});
  		
		return promise;
  	}
}
