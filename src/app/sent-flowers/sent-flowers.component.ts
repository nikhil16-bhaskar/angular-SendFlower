import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SentflowerService } from './sent-flower.service';

@Component({
  selector: 'app-sent-flowers',
  templateUrl: './sent-flowers.component.html',
  styleUrls: ['./sent-flowers.component.css']
})
export class SentFlowersComponent implements OnInit {
  onBooking = false;
  bookingSubscription: Subscription;
  constructor(private sentflowerService: SentflowerService) { }

  ngOnInit() {
    this.bookingSubscription = this.sentflowerService.bookingChanged.subscribe(
      booking => {
        if (booking){
        this.onBooking = true;
        }
        else{
          this.onBooking = false;
        }
      }
    );
  }

}
