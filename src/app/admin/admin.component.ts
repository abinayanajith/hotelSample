import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  hotelForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      hotelName: [,Validators.required],
      city:[,Validators.required],
      country:[,Validators.required],
      contractStart:[,Validators.required],
      contractEnd:[,Validators.required],
      roomDetails: this.fb.array([this.fb.group({roomType:[,Validators.required],price:[,Validators.required],numbers:[,Validators.required],maxAdults:[,Validators.required]})])
    })
  }

  callingFunction() {
    if (this.hotelForm.valid) {
      console.log("Form Submitted!");
      this.hotelForm.reset();
     // this.isSubmitted = true;
     // this.cd.detectChanges();
    }
    //this.isSubmitted = true;
      //this.cd.detectChanges();

  }

  get searchFormControl() {
    return this.hotelForm.controls;
  }

  get roomdetails() {
    return this.hotelForm.get('roomDetails') as FormArray;
  }

  deleteSellingPoint(index){
    
    this.roomdetails.removeAt(index);
  }

  addSellingPoint() {
    this.roomdetails.push(this.fb.group({roomType:[,Validators.required],price:[,Validators.required],numbers:[,Validators.required],maxAdults:[,Validators.required]}));
   
  }

}
