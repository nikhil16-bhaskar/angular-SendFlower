import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SentFlowersComponent } from './sent-flowers/sent-flowers.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NewBookingsComponent } from './sent-flowers/new-bookings/new-bookings.component';
import { OldBookingsComponent } from './sent-flowers/old-bookings/old-bookings.component';
import { StartBookingComponent } from './sent-flowers/start-booking/start-booking.component';
import { StopBookingComponent } from './sent-flowers/start-booking/stop-booking/stop-booking.component';
import { AuthService } from './auth.service';
import { SentflowerService } from './sent-flowers/sent-flower.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    SentFlowersComponent,
    HeaderComponent,
    SidenavListComponent,
    NewBookingsComponent,
    OldBookingsComponent,
    StartBookingComponent,
    StopBookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [ AuthService, SentflowerService ],
  bootstrap: [AppComponent],
  entryComponents: [StopBookingComponent] 
})
export class AppModule { }
