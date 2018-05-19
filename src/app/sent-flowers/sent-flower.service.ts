import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
// import * as sweetalert from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// import swal from 'sweetalert';

@Injectable()
export class SentflowerService {

    bookingChanged = new Subject<Order>();
    private availableBookings: Order[] = [
        { id: 'roses', name: 'roses', quantity: 50 },
        { id: 'tulips', name: 'tulips', quantity: 40 },
        { id: 'lilies', name: 'lilies', quantity: 100 },
        { id: 'orchids', name: 'orchids', quantity: 56 }
    ];
    private bookedData;
    private currentBooking: Order;
    private bookings: Order[] = [];
    private userRecord: any;
    constructor(private http: HttpClient,public dialog: MatDialog) { }

    getAvailableBookings() {
        return this.availableBookings.slice();
    }

    startBooking(data: any) {
        if(data.quantity<1){
            swal({
                title: "Invalid Quantity",
                text: "Quantity should be greater than 0",
                icon: "warning", 
                dangerMode: true               
            })
            return false;
        }
        // this.currentBooking = this.availableBookings.find(book => book.id === selectedId);
        // this.bookingChanged.next({ ...this.currentBooking });
        console.log(data);
         swal({
                    title: "Confirmation!",
                    text: "Are you sure you want to book?",
                    icon: "warning",
                      buttons: ['cancel','confirm'],
                     dangerMode: true,
                })
                .then((confirmedYes) => {
                    if (confirmedYes) {
                        this.http.post('http://localhost:3000/api/insertData', data, { observe: 'response' })
                    .subscribe(response => {
                    console.log(response.body);
                    this.userRecord = response.body;
                });
                swal({
                    title: "Booked Successfully",
                    icon: "success",
                })
                }
                 else {
                        swal({
                            title: "Booking cancelled",
                            icon: "success",
                        })
                    }
                });
        
    }

    getBookedData(id) {
        this.http.get('http://localhost:3000/api/searchFlowers/?id=' + id)
            .subscribe(response => {
                this.userRecord = response;
            }, error => {
                alert("some error");
            });
    }

    getUserToRefreshDB(){
        console.log(this.userRecord);
        return this.userRecord;
    }

    completeBooking() {
        this.bookings.push({
            ...this.currentBooking,
            date: new Date(),
            // state: 'completed'
        });
        this.currentBooking = null;
        this.bookingChanged.next(null);
    };

    cancelBooking(progress: number) {
        this.bookings.push({
            ...this.currentBooking,
            quantity: Math.round(this.currentBooking.quantity * (progress / 100)),
            date: new Date(),
            // state: 'cancelled'
        });
        this.currentBooking = null;
        this.bookingChanged.next(null);
    };

    getCurrentBooking() {
        return { ...this.currentBooking };
    }

    getCompletedOrCancelledBookings() {
        return this.bookings.slice();
    }

    setBookedData(data) {
        this.bookedData = data;
    }

}