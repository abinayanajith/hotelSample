import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 5000);
   }
  

}
