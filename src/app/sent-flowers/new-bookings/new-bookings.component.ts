import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SentflowerService } from '../sent-flower.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-new-bookings',
  templateUrl: './new-bookings.component.html',
  styleUrls: ['./new-bookings.component.css']
})
export class NewBookingsComponent implements OnInit {
  // @Output() newBooking = new EventEmitter<void>();
  orders: Order[] = [];
  
  constructor(private sentflowerService: SentflowerService) { }

  ngOnInit() {
    this.orders = this.sentflowerService.getAvailableBookings();
  }
  onBooking(form: NgForm){
    this.sentflowerService.startBooking(form.value.booking);
  }

}
