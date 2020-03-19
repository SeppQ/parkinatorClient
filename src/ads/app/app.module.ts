import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationGuard } from './authentication.guard';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoveryComponent } from './recovery/recovery.component';
import {ConfirmEqualValidatorDirective} from '../shared/confirm-validator.directive';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NewCarComponent } from './new-car/new-car.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { LotComponent } from './lot/lot.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    RecoveryComponent,
    ConfirmEqualValidatorDirective,
    CarComponent,
    CarDetailsComponent,
    CarPageComponent,
    NewCarComponent,
    AdminUsersComponent,
    LotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'header',
        component: HeaderComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'recovery',
        component: RecoveryComponent    
      }   , 
      {
        path: 'car',
        component: CarPageComponent,
        canActivate: [AuthenticationGuard]
      }    ,
      {
        path: 'admin-users',
        component: AdminUsersComponent,
        canActivate: [AuthenticationGuard]
      }    ,
      {
        path: 'lots',
        component: LotComponent,
       // canActivate: [AuthenticationGuard]
      }  
    ]),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor() { }

}


