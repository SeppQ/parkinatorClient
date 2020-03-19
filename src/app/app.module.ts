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
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NewCarComponent } from './new-car/new-car.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';
import { LotComponent } from './lot/lot.component';
import { AdminCarPageComponent } from './admin-car-page/admin-car-page.component';
import { AdminCarListComponent } from './admin-car-list/admin-car-list.component';
import { AdminCarDetailsComponent } from './admin-car-details/admin-car-details.component';
import { AdminCcPageComponent } from './admin-cc-page/admin-cc-page.component';
import { AdminCcDetailsComponent } from './admin-cc-details/admin-cc-details.component';
import { AdminCcListComponent } from './admin-cc-list/admin-cc-list.component';
import { AdminParkedcarsPageComponent } from './admin-parkedcars-page/admin-parkedcars-page.component';
import { AdminParkedcarsListComponent } from './admin-parkedcars-list/admin-parkedcars-list.component';
import { AdminParkedcarsDetailsComponent } from './admin-parkedcars-details/admin-parkedcars-details.component';
import { AdminParkinglotsPageComponent } from './admin-parkinglots-page/admin-parkinglots-page.component';
import { AdminParkinglotsDetailsComponent } from './admin-parkinglots-details/admin-parkinglots-details.component';
import { AdminParkinglotsListComponent } from './admin-parkinglots-list/admin-parkinglots-list.component';
import { AdminParkingzonesListComponent } from './admin-parkingzones-list/admin-parkingzones-list.component';
import { AdminParkingzonesPageComponent } from './admin-parkingzones-page/admin-parkingzones-page.component';
import { AdminParkingzonesDetailsComponent } from './admin-parkingzones-details/admin-parkingzones-details.component';
import { AdminNewUserComponent } from './admin-new-user/admin-new-user.component';
import { AdminNewCcComponent } from './admin-new-cc/admin-new-cc.component';
import { AdminNewCarComponent } from './admin-new-car/admin-new-car.component';
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
    CarListComponent,
    CarDetailsComponent,
    CarPageComponent,
    NewCarComponent,
    AdminUsersComponent,
    AdminUserPageComponent,
    AdminUserListComponent,
    AdminUserDetailsComponent,
    LotComponent,
    AdminCarPageComponent,
    AdminCarListComponent,
    AdminCarDetailsComponent,
    AdminCcPageComponent,
    AdminCcDetailsComponent,
    AdminCcListComponent,
    AdminParkedcarsPageComponent,
    AdminParkedcarsListComponent,
    AdminParkedcarsDetailsComponent,
    AdminParkinglotsPageComponent,
    AdminParkinglotsDetailsComponent,
    AdminParkinglotsListComponent,
    AdminParkingzonesListComponent,
    AdminParkingzonesPageComponent,
    AdminParkingzonesDetailsComponent,
    AdminNewUserComponent,
    AdminNewCcComponent,
    AdminNewCarComponent,
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
        path: 'admin-user-page',
        component: AdminUserPageComponent,
        canActivate: [AuthenticationGuard]
      }    ,
      {
        path: 'admin-car-page',
        component: AdminCarPageComponent,
        canActivate: [AuthenticationGuard]
      }    ,
      {
        path: 'admin-cc-page',
        component: AdminCcPageComponent,
        canActivate: [AuthenticationGuard]
      }    ,
      {
        path: 'lots',
        component: LotComponent,
        canActivate: [AuthenticationGuard]
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


