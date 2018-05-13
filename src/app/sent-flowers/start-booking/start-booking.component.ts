import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import {StopBookingComponent } from './stop-booking/stop-booking.component'
import { SentflowerService } from '../sent-flower.service';
@Component({
  selector: 'app-start-booking',
  templateUrl: './start-booking.component.html',
  styleUrls: ['./start-booking.component.css']
})
export class StartBookingComponent implements OnInit {
  // @Output() bookingExit = new  EventEmitter(); 
  progress = 0;
  timer: any;
   constructor(private dialog: MatDialog, private sentflowerService: SentflowerService) { }
 
   ngOnInit() {
     this.StartOrResumeTimer();
   }
   StartOrResumeTimer()
   {
     const step = this.sentflowerService.getCurrentBooking().quantity / 100 * 1000;
     this.timer = setInterval(() =>{
       this.progress =this.progress + 1;
       if (this.progress >= 100){
         this.sentflowerService.completeBooking();
         clearInterval(this.timer);
       }  
       },step);
   }
 
   onStop(){
     clearInterval(this.timer);
     const dialogRef = this.dialog.open(StopBookingComponent,{data:{progress: this.progress}});
     dialogRef.afterClosed().subscribe(result =>{
       if(result){
         console.log(result)
         this.sentflowerService.cancelBooking(this.progress);
       }
       else{
        console.log(result)
         this.StartOrResumeTimer();
       }
     });
   }
   
 }