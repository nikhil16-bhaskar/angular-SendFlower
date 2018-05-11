import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-stop-booking',
  templateUrl: './stop-booking.component.html',
  styleUrls: ['./stop-booking.component.css']
})
export class StopBookingComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }

  ngOnInit() {
  }

}
