// this is to show previous bookings
export interface Order {
    id: string;
    name: string;
    quantity: number;
    // calories: number;
    date?: Date; // ? is for optional
    // state?: 'completed' | 'cancelled' | null;
}