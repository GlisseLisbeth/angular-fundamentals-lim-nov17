import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter: number;
  title = 'Hola Mundo';
  form: FormGroup;

  arr = [1, 2, 3];

  private static CustomValidator(control: AbstractControl) {
    return control.value ? null : {angularFundamentals: false};
  }

  constructor(private fb: FormBuilder) {
    this.counter = 1;
  }

  ngOnInit() {
    this.form = this.fb.group({
      k1: ['', [
        Validators.minLength(7), // home
        Validators.maxLength(9),  // mobile
        AppComponent.CustomValidator
      ]]
    });
  }

  increment() {
    this.counter++;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('valid', this.form.valid);
      console.log('k1', this.form.get('k1').value);
    }
  }
}
