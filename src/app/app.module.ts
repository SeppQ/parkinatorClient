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
import { AuthenticationService } from './services/authentication/authentication.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoveryComponent } from './recovery/recovery.component';
import {ConfirmEqualValidatorDirective} from '../shared/confirm-validator.directive';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NewCarComponent } from './new-car/new-car.component';
import { AdminUserPageComponent } from './admin/user/admin-user-page/admin-user-page.component';
import { AdminUserListComponent } from './admin/user/admin-user-list/admin-user-list.component';
import { AdminUserDetailsComponent } from './admin/user/admin-user-details/admin-user-details.component';
import { LotComponent } from './lot/lot.component';
import { AdminCarPageComponent } from './admin/car/admin-car-page/admin-car-page.component';
import { AdminCarListComponent } from './admin/car/admin-car-list/admin-car-list.component';
import { AdminCarDetailsComponent } from './admin/car/admin-car-details/admin-car-details.component';
import { AdminCcPageComponent } from './admin/cc/admin-cc-page/admin-cc-page.component';
import { AdminCcDetailsComponent } from './admin/cc/admin-cc-details/admin-cc-details.component';
import { AdminCcListComponent } from './admin/cc/admin-cc-list/admin-cc-list.component';
import { AdminParkedcarsPageComponent } from './admin/parkedcars/admin-parkedcars-page/admin-parkedcars-page.component';
import { AdminParkedcarsListComponent } from './admin/parkedcars/admin-parkedcars-list/admin-parkedcars-list.component';
import { AdminParkedcarsDetailsComponent } from './admin/parkedcars/admin-parkedcars-details/admin-parkedcars-details.component';
import { AdminParkinglotsPageComponent } from './admin/parkinglots/admin-parkinglots-page/admin-parkinglots-page.component';
import { AdminParkinglotsDetailsComponent } from './admin/parkinglots/admin-parkinglots-details/admin-parkinglots-details.component';
import { AdminParkinglotsListComponent } from './admin/parkinglots/admin-parkinglots-list/admin-parkinglots-list.component';
import { AdminParkingzonesListComponent } from './admin/parkingzones/admin-parkingzones-list/admin-parkingzones-list.component';
import { AdminParkingzonesPageComponent } from './admin/parkingzones/admin-parkingzones-page/admin-parkingzones-page.component';
import { AdminParkingzonesDetailsComponent } from './admin/parkingzones/admin-parkingzones-details/admin-parkingzones-details.component';
import { AdminNewUserComponent } from './admin/user/admin-new-user/admin-new-user.component';
import { AdminNewCcComponent } from './admin/cc/admin-new-cc/admin-new-cc.component';
import { AdminNewCarComponent } from './admin/car/admin-new-car/admin-new-car.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import {  ZoneFilterPipe } from 'src/shared/zone-filter.pipe';
import { LotFilterPipe } from 'src/shared/lot-filter.pipe';
import { CcHomeComponent } from './cc-home/cc-home.component';
import { CarRegFilterPipe } from 'src/shared/carReg-filter.pipe';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SupportComponent } from './support/support.component';
import { UserFilterPipe } from 'src/shared/user-filter.pipe';
import { CcFilterPipe } from 'src/shared/cc-filter.pipe';
import { RegularLotPageComponent } from './regular-lot-page/regular-lot-page.component';
import { RegularLotLotlistComponent } from './regular-lot-lotlist/regular-lot-lotlist.component';
import { RegularLotLotdetailsComponent } from './regular-lot-lotdetails/regular-lot-lotdetails.component';
import { RegularLotZonelistComponent } from './regular-lot-zonelist/regular-lot-zonelist.component';
import { RegularLotZonedetailsComponent } from './regular-lot-zonedetails/regular-lot-zonedetails.component';

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
    FooterComponent,
    ZoneFilterPipe,
    LotFilterPipe,
    CcHomeComponent,
    CarRegFilterPipe,
    UserFilterPipe,
    CcFilterPipe,
    AdminHomeComponent,
    SupportComponent,
    RegularLotPageComponent,
    RegularLotLotlistComponent,
    RegularLotLotdetailsComponent,
    RegularLotZonelistComponent,
    RegularLotZonedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDMIEsc1oXoONrD6IpwqAHzESB_LSM0Nw'
    }),
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
      } ,
      {
        path: 'userlots',
        component: RegularLotPageComponent,
        canActivate: [AuthenticationGuard]
      } ,
      {
        path: 'ccHome',
        component: CcHomeComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'support',
        component: SupportComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'admin-dashboard',
        component: AdminHomeComponent,
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


