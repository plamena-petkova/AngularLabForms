import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validator } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {


  buildings: string[] = [
    "Designer", 
    "Builder", 
    "Programmer"
  ]

  codes: string[] = [
    '+359',
    '+38',
    '+39'
  ]

  @ViewChild('registerForm') form?: NgForm

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   console.log(this.form?.value);
  }

  onSubmit() : void {
    console.log(this.form!.value);
    this.form?.reset();
  }

}
