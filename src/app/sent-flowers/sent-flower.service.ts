import { Order } from "./order.model";

export class SentflowerService {
 private availableBookings: Order[] = [
      { id: 'roses', name: 'roses', quantity: 50 },
      { id: 'tulips', name: 'tulips', quantity: 40 },
      { id: 'lilies', name: 'lilies', quantity: 100 },
      { id: 'orchids', name: 'orchids', quantity: 56 }
  ];
   private currentBooking: Order;
  
   getAvailableBookings() {
      return this.availableBookings.slice();
  }

   startBooking(selectedId: string) {
     this.currentBooking = this.availableBookings.find(book => book.id === selectedId);
     
    }

}