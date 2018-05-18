import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Order } from '../order.model';
import { SentflowerService } from '../sent-flower.service';
import { HttpClient } from '@angular/common/http';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-old-bookings',
  templateUrl: './old-bookings.component.html',
  styleUrls: ['./old-bookings.component.css']
})
export class OldBookingsComponent implements OnInit, OnChanges {
  displayedColumns = ['date', 'name', 'quantity', 'address'];
  dataSource = new MatTableDataSource<any>();
  t: any;
  //  @ViewChild(MatSort) sort: MatSort;
  //  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sentflowerService: SentflowerService, private http: HttpClient, private autser: AuthService) { }

  id = this.autser.getId();
  
  ngOnInit() {

    this.http.get('http://localhost:3000/api/searchFlowers/?id=' + this.id)
      .subscribe(response => {
        this.t = response;
        this.dataSource.data = this.t;
        console.log(response);
      }, error => {
        alert("some error");
      });
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  showData() {
     console.log("showdata");
    // this.dataSource.data = null;
    // this.sentflowerService.getBookedData(this.id);
    // //console.log("asdsasd "+this.sentflowerService.getBookedData(this.id));
    // this.dataSource.data = this.sentflowerService.getUserToRefreshDB();
    //console.log(a);

    this.http.get('http://localhost:3000/api/searchFlowers/?id=' + this.id)
    .subscribe(response => {
      this.t = response;
      this.dataSource.data = this.t;
      console.log(response);
    }, error => {
      alert("some error");
    });
  }
  // ngAfterViewInit() {
  // doFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
