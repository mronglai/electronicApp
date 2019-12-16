import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submitted: boolean = false;
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      username : new FormControl(null, [Validators.required, this.blankSpaces]),
      useremail : new FormControl(null, [Validators.required, Validators.email]),
      usermessage : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      usernumber : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    this.submitted = true;
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset({
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
