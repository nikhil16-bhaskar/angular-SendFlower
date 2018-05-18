import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';

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
    constructor(private http: HttpClient) { }

    getAvailableBookings() {
        return this.availableBookings.slice();
    }

    startBooking(data: any) {
        // this.currentBooking = this.availableBookings.find(book => book.id === selectedId);
        // this.bookingChanged.next({ ...this.currentBooking });
        console.log(data);
        this.http.post('http://localhost:3000/api/insertData', data, { observe: 'response' })
            .subscribe(response => {
                console.log(response.body);
                this.userRecord = response.body;
                alert("Added Succesfully");

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
            state: 'completed'
        });
        this.currentBooking = null;
        this.bookingChanged.next(null);
    };

    cancelBooking(progress: number) {
        this.bookings.push({
            ...this.currentBooking,
            quantity: Math.round(this.currentBooking.quantity * (progress / 100)),
            date: new Date(),
            state: 'cancelled'
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