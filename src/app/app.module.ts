import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {RegistrationListComponent} from './registration/registration-list/registration-list.component';
import {RegistrationItemComponent} from './Registration/Registration-List/registration-item/registration-item.component';
import {RegistrationFormComponent} from './Registration/registration-form/registration-form.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {VolunteerListComponent} from './volunteer/volunteer-list/volunteer-list.component';
import {VolunteerItemComponent} from './volunteer/volunteer-list/volunteer-item/volunteer-item.component';
import {SearchComponent} from './shared/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HelperService} from './shared/helper.service';
import {RegistrationService} from './registration/registration.service';
import {DatepickerModule} from './shared/angular2-material-datepicker/src/datepicker.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationListComponent,
    RegistrationItemComponent,
    RegistrationFormComponent,
    HeaderComponent,
    HomeComponent,
    VolunteerListComponent,
    VolunteerItemComponent,
    SearchComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DatepickerModule,
    AppRoutingModule
  ],
  providers: [
    HelperService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
