import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	@ViewChild('f') signupForm:NgForm;

	defaultQuestion = 'pet';
	answer = "";
	genders = ['male', 'female'];
    
	user = {
		username: '',
		mail: '',
		secret: '',
		gender: ''
	} 

	submit = false;

    suggestUserName() {
        const suggestedName = 'Superuser';
      //  this.signupForm.setValue({userData:{username:name, email:''}, secret:'pet', QA:'', gender:'male'})
      this.signupForm.form.patchValue({userData:{username:"trsmith"}});
    }

 // onSubmit(form:NgForm){
 // 	console.log(form);
 // }
    onSubmit(){
    	console.log(this.signupForm);
    	this.submit = true;
    	this.user.username = this.signupForm.value.userData.username;
    	this.user.mail = this.signupForm.value.userData.email;
    	this.user.secret = this.signupForm.value.QA;
    	this.user.gender = this.signupForm.value.gender;

    	this.signupForm.reset();
    }

}
