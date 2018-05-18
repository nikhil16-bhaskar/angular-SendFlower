import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SentflowerService } from '../sent-flower.service';
import { Order } from '../order.model';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bookings',
  templateUrl: './new-bookings.component.html',
  styleUrls: ['./new-bookings.component.css']
})
export class NewBookingsComponent implements OnInit {
  // @Output() newBooking = new EventEmitter<void>();
  orders: Order[] = [];
  today: any = new Date();
  dd: any = this.today.getDate();
  mm: any = this.today.getMonth() + 1; //January is 0!
  yyyy: any = this.today.getFullYear();


  constructor(private sentflowerService: SentflowerService, private autser: AuthService,
    private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.orders = this.sentflowerService.getAvailableBookings();
  }

  onBooking(form: NgForm) {
    this.today = this.mm + '/' + this.dd + '/' + this.yyyy;
    console.log(form.value.address + " " + form.value.quantity + " " + form.value.booking + " " + this.today);
    let id = this.autser.getId();
    console.log(id);
    let data = {
      'name': form.value.booking,
      'address': form.value.address,
      'quantity': form.value.quantity,
      'date': this.today,
      'id': id
    };
    this.sentflowerService.startBooking(data);
  }

}
