import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  submitted: boolean = false;
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
  this.loginForm = new FormGroup({
    username : new FormControl(null, [Validators.required, this.blankSpaces]),
    userpwd : new FormControl(null, [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}")]),
    useremail : new FormControl(null, [Validators.required, Validators.email]),
    usermessage : new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
}
onSubmit() {
  console.log(this.loginForm);
  this.submitted = true;
}

onReset() {
  this.submitted = false;
  this.loginForm.reset({
    username: 'Darrel Yeo'
  });
  }

blankSpaces(control: FormControl): {[s:string]: boolean} {
  if (control.value != null &&
      control.value.length != 0 &&
      control.value.trim().length == 0) {
        return {blankSpaces: true};
    }
  return null;
}

}
