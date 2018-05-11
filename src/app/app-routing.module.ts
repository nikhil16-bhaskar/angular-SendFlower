import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SentFlowersComponent } from './sent-flowers/sent-flowers.component';
import { AuthGuard } from './auth.guard';
//import { TrainingComponent } from './training/training.component';

const routes: Routes= [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'sent-flowers', component: SentFlowersComponent, canActivate: [AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}