import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import {StopBookingComponent } from './stop-booking/stop-booking.component'
@Component({
  selector: 'app-start-booking',
  templateUrl: './start-booking.component.html',
  styleUrls: ['./start-booking.component.css']
})
export class StartBookingComponent implements OnInit {
  @Output() bookingExit = new  EventEmitter(); 
  progress = 0;
  timer: any;
   constructor(private dialog: MatDialog) { }
 
   ngOnInit() {
     this.StartOrResumeTimer();
   }
   StartOrResumeTimer()
   {
     this.timer = setInterval(() =>{
       this.progress =this.progress + 1;
       if (this.progress >= 100){
         clearInterval(this.timer);
       }  
       },100)
   }
 
   onStop(){
     clearInterval(this.timer);
     const dialogRef = this.dialog.open(StopBookingComponent,{data:{progress: this.progress}});
     dialogRef.afterClosed().subscribe(result =>{
       if(result){
         console.log(result)
         this.bookingExit.emit();
       }
       else{
        console.log(result)
         this.StartOrResumeTimer();
       }
     });
   }
   
 }