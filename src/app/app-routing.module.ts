import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GebruikersComponent} from './gebruikers/gebruikers.component';
import {ShowGebruikerComponent} from './show-gebruiker/show-gebruiker.component';



const routes: Routes = [
  { path: '', redirectTo: '/gebruikers', pathMatch: 'full' },
  { path: 'gebruiker/:username', component: ShowGebruikerComponent },
  { path: 'gebruikers', component: GebruikersComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
