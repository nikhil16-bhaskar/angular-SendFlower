import { Subject } from  'rxjs/Subject';
import { Order } from "./order.model";

export class SentflowerService {
    bookingChanged = new Subject<Order>();
 private availableBookings: Order[] = [
      { id: 'roses', name: 'roses', quantity: 50 },
      { id: 'tulips', name: 'tulips', quantity: 40 },
      { id: 'lilies', name: 'lilies', quantity: 100 },
      { id: 'orchids', name: 'orchids', quantity: 56 }
  ];
   private currentBooking: Order;
   private bookings: Order[] = [];
   getAvailableBookings() {
      return this.availableBookings.slice();
  }

   startBooking(selectedId: string) {
     this.currentBooking = this.availableBookings.find(book => book.id === selectedId);
     this.bookingChanged.next({...this.currentBooking});
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
            quantity: Math.round(this.currentBooking.quantity * (progress/100)),
             date: new Date(),
              state: 'cancelled'
          });
       this.currentBooking = null;
       this.bookingChanged.next(null);
     };

    getCurrentBooking() {
       return {...this.currentBooking };
    }

    getCompletedOrCancelledBookings() {
        return this.bookings.slice();
    }
}