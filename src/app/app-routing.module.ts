import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {VolunteerListComponent} from './volunteer/volunteer-list/volunteer-list.component';
import {RegistrationListComponent} from './registration/registration-list/registration-list.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {StatisticsComponent} from './statistics/statistics.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'frivillige', component: VolunteerListComponent },
  { path: 'registrering-godkendelse', component: RegistrationListComponent },
  { path: 'statistik', component: StatisticsComponent },
  { path: 'ikke-fundet-404', component: ErrorPageComponent, data: {message: 'Beklager. Siden findes ikke!'} },
  { path: '**', redirectTo: '/ikke-fundet-404' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
