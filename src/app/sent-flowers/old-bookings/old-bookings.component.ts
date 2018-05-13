import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Order } from '../order.model';
import { SentflowerService } from '../sent-flower.service';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-old-bookings',
  templateUrl: './old-bookings.component.html',
  styleUrls: ['./old-bookings.component.css']
})
export class OldBookingsComponent implements OnInit, AfterViewInit {
 displayedColumns = ['date','name','quantity','state'];
 dataSource = new MatTableDataSource<Order>();

 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sentflowerService: SentflowerService) { }

  ngOnInit() {
    this.dataSource.data = this.sentflowerService.getCompletedOrCancelledBookings();
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
