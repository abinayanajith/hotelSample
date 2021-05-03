import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators,FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  //items: string[] = ['Apple', 'Orange', 'Banana'];
  items:any[] = [{roomDetailId:1,room:[{id:234,price:1000,max:4},{id:235,price:2000,max:5}]},{},{roomDetailId:2,room:[{id:543,price:1000,max:4},{id:34,price:500,max:5}]},{roomDetailId:4,room:[{id:123,price:700,max:7}]}];        
  searchForm: FormGroup;
  submitted = false;
  picker;
  matDatepicker;
  isresultsArrived = true;
  isSubmitted = false;
  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef,private spinner: NgxSpinnerService) { }
  


  ngOnInit(): void {
    
    this.searchForm = this.fb.group({
      customer:[,Validators.required],
      checkinDate: [,Validators.required],
      nights:[,Validators.required],
      roomDetails: this.fb.array([this.fb.group({rooms:[,Validators.required],persons:[,Validators.required]})])
    })
    
  }

  callingFunction() {
    if (this.searchForm.valid) {
      console.log("Form Submitted!");
     // this.searchForm.reset();
     // this.isSubmitted = true;
     // this.cd.detectChanges();
    }
    this.isSubmitted = true;
    //this.searchForm.reset();
      //this.cd.detectChanges();

  }
  get searchFormControl() {
    return this.searchForm.controls;
  }
  get roomdetails() {
    return this.searchForm.get('roomDetails') as FormArray;
  }

  deleteSellingPoint(index){
    
    this.roomdetails.removeAt(index);
  }

  addSellingPoint() {
    this.roomdetails.push(this.fb.group({rooms:[,Validators.required],persons:[,Validators.required]}));
   
  }

}
