import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {RegistrationListComponent} from './registration/registration-list/registration-list.component';
import {RegistrationItemComponent} from './registration/registration-list/registration-item/registration-item.component';
import {RegistrationFormComponent} from './registration/registration-form/registration-form.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {VolunteerListComponent} from './volunteer/volunteer-list/volunteer-list.component';
import {VolunteerItemComponent} from './volunteer/volunteer-list/volunteer-item/volunteer-item.component';
import {SearchComponent} from './shared/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HelperService} from './shared/helper.service';
import {DatepickerModule} from './shared/angular2-material-datepicker/src/datepicker.module';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {AppRoutingModule} from './app-routing.module';
import {VolunteerService} from './volunteer/volunteer.service';
import {VolunteerFilterByNamePipe} from './volunteer/volunteer-filter.pipe';
import {RegistrationFilterByVolunteerNamePipe} from './registration/registration-filter.pipe';
import {RegistrationService} from './shared/registration.service';
import {StatisticsComponent} from './statistics/statistics.component';
import {StatisticsService} from './statistics/statistics.service';
import { VolunteerComponent } from './volunteer/volunteer.component';


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
    ErrorPageComponent,
    VolunteerFilterByNamePipe,
    RegistrationFilterByVolunteerNamePipe,
    StatisticsComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DatepickerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [
    HelperService,
    RegistrationService,
    VolunteerService,
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
